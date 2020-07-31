import { ArticleEntity } from './../article/article.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as argon2 from 'argon2'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  hashPassword: string;

  @BeforeInsert()
  @BeforeUpdate()
  async gethashPassword() {
    this.hashPassword = await argon2.hash(this.password);
  }

  @Column()
  nickname: string;

  @Column()
  realname: string;

  @Column()
  description: string;

  @Column()
  nd_code: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  sex: string;

  @Column()
  phone: string;

  @OneToMany(type => ArticleEntity, article => article.author)
  articles: ArticleEntity[];
}
