import { UserRO } from './user.interface';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async findAll(): Promise<UserRO[]> {
    return await this.userService.findAll();
  }
}
