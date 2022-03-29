import React from 'react';
import { GameItem } from '../../components/game-item'
import './home-page.css';


const GAMES = [
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin Creed Valhalla',
        genres: ['Паркур','РПГ','Открытый мир'],
        price: 2893,
        video: 'https://www.youtube.com/watch?v=-GvDTvLRe3k',
        id: 1,
        description: "Assassin Creed Valhalla - мультиплатформенная компьютерная игра"
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'The Battlefield',
        genres: ['Тактика','Шутер'],
        price: 3400,
        video: 'https://www.youtube.com/watch?v=ASzOzrB-a9E',
        id: 2,
        description: "The Battlefield - увлекательная игра"
    },
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza 5',
        genres: ['Экшон'],
        price: 1950,
        video: 'https://www.youtube.com/watch?v=FYH9n37B7Yw',
        id: 3,
        description: "Forza 5 - лучшие гоночные трассы "
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'GTA 5',
        genres: ['Симулятор','Стратерия'],
        price: 3409,
        video: 'https://www.youtube.com/watch?v=QkkoHAzjnUs',
        id: 4,
        description: "GTA 5 как в детстве!"
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'life_is_strange',
        genres: ['Стратегия'],
        price: 2500,
        video: 'https://www.youtube.com/watch?v=AURVxvIZrmU',
        id: 5,
        description: "life_is_strange - построй свою реальность"
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Rainbow Six Siege',
        genres: ['Военные','Аркады'],
        price: 6265,
        video: 'https://www.youtube.com/watch?v=6wlvYh0h63k',
        id: 6,
        description: "https://www.youtube.com/watch?v=6wlvYh0h63k - осуществи мечту стать военным"
    }
]
export const HomePage = () => {
    return (
        <div className="home-page">
           { GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>  
    )
}