import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}

  async createUser(name: string, email: string, age: number): Promise<Observable<any>> {
    return this.usersClient.send('users.create', { name, email, age });
  }

  async findAllUsers(): Promise<Observable<any>> {
    return this.usersClient.send('users.findAll', {});
  }
}
