import { Author } from "@/entities/Author"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string

  @Column()
  description: string

  @ManyToOne((type) => Author, (author) => author.books, { eager: true })
  author: Author

  @Column()
  authorId: number

  @Column()
  price: number

  @Column()
  category: string
}
