import { UserRO } from './user.interface';
import { UserEntity } from './user.entity';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserRO[]> {
    const userList: UserEntity[] = await this.userRepository.find();
    const userPOList = []
    for (let i = 0; i < userList.length; i++) {
      userPOList.push(this.buildUserRO(userList[i]))
    }
    return userPOList;
  }

  async buildUserRO(user: UserEntity) {
    const userRO = {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      realname: user.realname,
      description: user.description,
      nd_code: user.nd_code,
      email: user.email,
      avatar: user.avatar,
      sex: user.sex,
      phone: user.phone
    }
  }
}
