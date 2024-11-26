import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateBookDto } from './dto/CreateBook.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(
      createBookDto.title,
      createBookDto.author,
      createBookDto.publishedYear,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  async getAllBooks() {
    return this.booksService.findAllBooks();
  }
}
