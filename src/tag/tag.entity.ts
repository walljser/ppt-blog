import { ArticleEntity } from './../article/article.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('tag')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagName: string;

  @ManyToOne(type => ArticleEntity, article => article.tags)
  article: ArticleEntity;
}
