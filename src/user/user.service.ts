import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw new Error(error)
    }
  }

  async findAll():Promise<User[]> {
    try {
      return await this.userRepository.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepository.createQueryBuilder("user").where({id}).getOne();
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(id,updateUserDto)
      if(user.affected===0){
        return undefined;
      }
      return user;
    } catch (error) {
      throw new Error(error)
    }
  }

  async remove(id: number): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id)
      if(user.affected===0){
        return undefined;
      }
      return user;
    } catch (error) {
      throw new Error(error)
    }
  }
}
