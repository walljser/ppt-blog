import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, OneToMany, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';
import { CategoryEntity } from '../category/category.entity';
import { UserEntity } from '../user/user.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // 文章主体
  @Column()
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @BeforeUpdate()
  updateTimestaup() {
    this.updateTime = new Date;
  }

  @OneToMany(type => TagEntity, tag => tag.article)
  tags: TagEntity[];

  @ManyToOne(type => CategoryEntity, category => category.articles)
  category: CategoryEntity;

  @ManyToMany(type => UserEntity, user => user.articles)
  @JoinColumn({ name: 'id' })
  author: UserEntity;

  @OneToMany(type => CommentEntity, comment => comment.article)
  comments: CommentEntity;

  @Column({ default: 0 })
  favoriteCount: number;
}
