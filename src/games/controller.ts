// src/pages/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
import gamesById, { Game } from './data'

@JsonController()
export default class GameController {

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ): Game {
        return gamesById[id]
    } 
    
    @Get('/games')
    allGames(): GameList {
        return {games: Object.values(gamesById)}
    }
}