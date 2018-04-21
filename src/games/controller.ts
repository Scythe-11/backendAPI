// src/pages/controller.ts
import { JsonController, Get, Put, Post, Param, Body, HttpCode } from 'routing-controllers'
import Game from './entity'




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

    return Game.merge(game, update).save()
    }

    @Post('/games')
    @HttpCode(201)
    createGame(
      @Body() game: Game
  /*    @Param('color') color: colors {
        const colors = ['red', 'green', 'blue', 'magenta', 'yellow']
        colors[Math.floor(Math.random() * colors.length)]
      }*/
    ) {
      return game.save()
    }
}