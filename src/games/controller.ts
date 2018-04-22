// src/pages/controller.ts
import { JsonController, Get, Put, Post, Param, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity'
import {IsIn, IsNumber, IsString } from 'class-validator'


const colors= ["red", "green", "blue", "magenta", "yellow"] 
function setColor() {
    return colors[Math.floor(Math.random() * colors.length)]}

/*
const game = new Game(); 
game.color = defaultColor; 
game.board = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
];*/

function HasValue(update, value) {
    if ((update.color === value) && (update.color IsIn(colors)) return update.game.color
}


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

    if (HasValue(update, "color") === true)
    if (IsIn(game.color, colors) !== true) throw new NotFoundError('The color is not correct')

    return Game.merge(game, update).save()
    }

    @Post('/games')
   
    @HttpCode(201)
    createGame(
    @Body() game: Game   
    ) {
       game.color = setColor()    
       return game.save()
    
    }
}