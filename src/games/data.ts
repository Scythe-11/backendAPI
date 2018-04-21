// src/games/data.ts

export interface Game {
    id: number,
    name: string,
    color: string,
    board: string,
  }
  
  interface GameDatabase {
    [id: number]: Game
  }


const gamesById = {
    1: {
        id: 1,
        name: 'Warcraft',
        color: `blue`
            + `This is the homepage, and everything starts with a <strong>home</strong>page.`,
        board: `isboard`
    },
    2: {
        id: 2,
        name: 'RedAlert',
        color: `green`
            +`Here's where we will give you <i>links</i> to other pages.`,
        board: `isboard`
    },
    3: {
        id: 3,
        name: 'Crysis',
        color: `yellow`
            +`This is where you'll find links to our social media thing. Find us on Insta!`,
        board: `isboard`
    }
  }
  
  export default gamesById