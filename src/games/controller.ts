// src/pages/controller.ts
import { JsonController, Get, Put, Post, Param, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity'
import {IsIn, IsNumber, IsString } from 'class-validator'


const colors= ["red", "green", "blue", "magenta", "yellow"] 

function setColor() {
    return colors[Math.floor(Math.random() * colors.length)]}
    

const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]
const gameBoard = () => {let gameBoard = JSON.stringify(defaultBoard); return JSON.parse(gameBoard)}

@JsonController()
export default class GameController {

    @Get('/games/:id')
    getGame(
      @Param('id') id: number
    ) {
      return Game.findOne(id)
    }
    
   @Get('/games')
    async allGames() {
    const games = await Game.find()
    return { games }
    }


   @Put('/games/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)

    if (!game) throw new NotFoundError('Cannot find Game')

        if (colors.indexOf(update.color) < -1) throw new NotFoundError('The color is not correct')
        // the above function works in reverse? Not sure how to reverse it back....
        //ie if red is typed - it rejects it, however if another color is typed it accepts
    return Game.merge(game, update).save()
    }

    @Post('/games')
   
    @HttpCode(201)
    createGame(
    @Body() game: Game   
    ) {
        game.color = setColor() 
        game.board = gameBoard()   
       return game.save()
    
    }
}