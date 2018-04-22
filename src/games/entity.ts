// src/games/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsIn } from 'class-validator'

//const colors= ["red", "green", "blue", "magenta", "yellow"] 

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {})
  name: string

 // @IsIn(colors)
  @Column('text', {})
  color: string

  @Column('text', {})
  board: JSON

}