import { ArticleEntity } from './../article/article.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @OneToMany(type => ArticleEntity, article => article.category)
  articles: ArticleEntity[]
}
