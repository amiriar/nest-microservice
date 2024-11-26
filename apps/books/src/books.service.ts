import { Injectable } from '@nestjs/common';
import { Book } from './entity/books.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async createBook(
    title: string,
    author: string,
    publishedYear: number,
  ): Promise<Book> {
    const newBook = new this.bookModel({ title, author, publishedYear });
    return newBook.save();
  }

  async findAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
