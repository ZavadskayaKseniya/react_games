import React from 'react';
import { GameItem } from '../../components/game-item'
import './home-page.css';


const GAMES = [
    {
        image: '/game-covers/metro.jpg',
        title: 'Metro Exodus',
        genres: ['Паркур','РПГ','Открытый мир'],
        price: 2893,
        video: 'https://www.youtube.com/embed/fbbqlvuovQ0',
        id: 1,
        description: "Исследуйте живописные руины мертвой Москвы, купайтесь в ледяной Волге, ощутите жаркое дуновение сухого каспийского ветра, отправьтесь вглубь залитой лунным светом тайги и раскройте мрачные тайны Новосибирска."
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'The Battlefield',
        genres: ['Тактика','Шутер'],
        price: 3400,
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        id: 2,
        description: "The Battlefield - увлекательная игра"
    },
    {
        image: '/game-covers/ghostwire.jpg',
        title: 'Ghostwire: Tokyo',
        genres: ['Экшон'],
        price: 1950,
        video: 'https://www.youtube.com/embed/ZM1i5BRwqtg',
        id: 3,
        description: "Объединитесь с могущественной призрачной сущностью в их стремлении отомстить и овладейте мощным арсеналом способностей, чтобы разгадать темную правду, стоящую за исчезновением, когда вы ВСТРЕЧАЙТЕСЬ С НЕИЗВЕСТНЫМ в Ghostwire: Tokyo."
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'GTA 5',
        genres: ['Симулятор','Стратерия'],
        price: 3409,
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        id: 4,
        description: "GTA 5 как в детстве!"
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'life_is_strange',
        genres: ['Стратегия'],
        price: 2500,
        video: 'https://www.youtube.com/embed/AURVxvIZrmU',
        id: 5,
        description: "life_is_strange - построй свою реальность"
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Rainbow Six Siege',
        genres: ['Военные','Аркады'],
        price: 6265,
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        id: 6,
        description: "Rainbow Six Siege - осуществи мечту стать военным"
    }
]
export const HomePage = () => {
    return (
        <div className="home-page">
           { GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>  
    )
}