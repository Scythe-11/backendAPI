// src/games/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Contains } from 'class-validator'



@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @Contains('red', 'green', 'blue', 'magenta', 'yellow')
  @Column('text', {nullable:false})
  color: string

  @Column('text',{nullable: false})
  board: string

}