export interface Work {
    id: number
    title: string
    description: string
    imageUrl: string
    link: string
    tags: string
    githubRepo: string
}


export const workList: Work[] = [


    {
        id: 1,
        title: 'WhatsTheWeather',
        description: 'A simple weather app with some keyframes animations. A project I did on my sparetime.',
        imageUrl: 'https://github.com/msmalinosterberg/new-portfolio/blob/master/weatherapp.png?raw=true',
        link: 'https://hi-whatstheweather.netlify.app/',
        tags: ' [react][JavaScript][VS code][api] ',
        githubRepo: 'https://github.com/msmalinosterberg/whatstheweather',
    },
    {
        id: 2,
        title: 'VegoDays',
        description: 'Master thesis 30yhp. Me and Amanda Samuelsson did an app for our master thesis in school.',
        imageUrl: 'https://github.com/msmalinosterberg/new-portfolio/blob/master/VegoDays.png?raw=true',
        link: '',
        tags: '[React Native] [JavaScript][Expo] [Agil methods]',
        githubRepo: 'https://github.com/msmalinosterberg/vegodays',
    }, {
        id: 3,
        title: 'FashionStore',
        description: 'Group assignment in Advanced JavaScript 45yhp. March 2021. The task was to create an e-commerce that retrieves data from a mockup api. To get a higher credit you were to create an admin page where it was possible to edit and add products. We created a site that sells clothes.',
        imageUrl: 'https://user-images.githubusercontent.com/73331860/113003168-c0178c00-9172-11eb-9146-c271148872b4.png?raw=true',
        link: 'https://fashionstore-webshop.netlify.app/',
        tags: ' [react][TypeScript][Ant Design][HTML] [CSS] [OOP] [git & GitHub] [VS code] ',
        githubRepo: 'https://github.com/msmalinosterberg/miniprojekt',
    },
    {
        id: 4,
        title: 'MovieApp',
        description: 'Group assignment in Advanced JavaScript 45yhp. March 2021. The task was to create an optional web app and retrieve data from a web API. We created a movie app that retrieves data from Imdb.',
        imageUrl: 'https://user-images.githubusercontent.com/73331860/112618713-b9adab00-8e26-11eb-8a83-f35f513f643b.png?raw=true',
        link: 'https://search-for-movies.netlify.app/',
        tags: ' [react][TypeScript][Ant Design][HTML] [CSS] [OOP] [git & GitHub] [VS code] ',
        githubRepo: 'https://github.com/msmalinosterberg/movie-search-app',
    },
    {
        id: 5,
        title: 'NumberQuiz',
        description: 'Group assignment in Project management with agile methods 15yhp. February 2021. The task was to create a guess the number game. You play against bots and the winner takes it all. We worked agile and according to the scrum method.',
        imageUrl: 'https://user-images.githubusercontent.com/73331860/112620652-1c07ab00-8e29-11eb-9099-2e11353369c9.png?raw=true',
        link: 'https://crackthenumber.netlify.app/',
        tags: ' [HTML] [CSS] [TypeScript] [OOP] [Scrum] [Agila metoder] [git & GitHub][VS code]',
        githubRepo: 'https://github.com/msmalinosterberg/Number-quiz',
    },
    {
        id: 6,
        title: 'FallingStars',
        description: 'Group assignment in basic JavaScript 60yhp. January 2021. The task was to created a game with p5.js. You can find the game description on gitHub.',
        imageUrl: 'https://user-images.githubusercontent.com/73331860/112620873-5a04cf00-8e29-11eb-85d4-7a66af6ed71d.png?raw=true',
        link: 'https://fallingstars.netlify.app/',
        tags: '[HTML] [CSS] [TypeScript] [OOP] [p5.js][git & Github] [VS code] [pseudokod] [flowchart]',
        githubRepo: 'https://github.com/msmalinosterberg/falling-stars-the-game',
    },
    {
        id: 7,
        title: 'Spotify',
        description: 'Assignment in HTML & CSS 20yhp. October 2020. The first task in school was to recreate a optional websites design and use HTML and CSS to style it.',
        imageUrl: 'https://user-images.githubusercontent.com/73331860/112619850-1493d200-8e28-11eb-852f-87cdcfa0b325.png?raw=true',
        link: 'https://msmalinosterberg.github.io/responsive-website/',
        tags: '[HTML] [CSS][VS code]',
        githubRepo: 'https://github.com/msmalinosterberg/responsive-website',
    },

];

