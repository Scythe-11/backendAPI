// src/games/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  content: string

  @Column('json',{nullable: false})
  content: string
  
}