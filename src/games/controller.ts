// src/pages/controller.ts
import { JsonController, Get, Put, Post, Param } from 'routing-controllers'
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
    /*
    @Put('/games/:id')
    updateGame(
        @Param('id') id: number,
        @Body() body: Partial<Game>
    ): Game {
        console.log(`Incoming PUT body param:`, body)
        return gamesById[id]
    }
    @Post('/games')
    @HttpCode(201)
    createGame(
        @Body() body: Game
    ): Game {
        console.log(`Incoming POST body param:`, body)
        return body
}*/
}