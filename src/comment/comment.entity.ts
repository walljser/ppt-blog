import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ArticleEntity } from './../article/article.entity';

@Entity('comment')
export class CommentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne(type => ArticleEntity, article => article.comments)
  @JoinColumn({ name: 'id' })
  article: ArticleEntity;
}
