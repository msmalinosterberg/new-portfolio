export interface Work {
    id: number
    title: string
    description: string
    imageUrl: string
    link: string
    tags: string
    githubRepo: string
}


export const workList: Work[] = [{

    id: 1,
    title: 'FashionStore',
    description: 'Grupparbete i JavaScript fördjupning 45yhp. Mars 2021. Uppgiften gick ut på att skapa en e-handel som hämtar data från ett mockup api. VG kravet var att skapa en admin sida där det gick att redigera och addera produkter. Vi valde att skapa en sida som säljer kläder.',
    imageUrl: 'https://user-images.githubusercontent.com/73331860/113003168-c0178c00-9172-11eb-9146-c271148872b4.png?raw=true',
    link: 'https://fashionstore-webshop.netlify.app/',
    tags: ' [react][TypeScript][Ant Design][HTML] [CSS] [OOP] [git & GitHub] [VS code] ',
    githubRepo: 'https://github.com/msmalinosterberg/miniprojekt',
},
{
    id: 2,
    title: 'MovieApp',
    description: 'Grupparbete i JavaScript fördjupning 45yhp. Mars 2021. Uppgiften gick ut på att skapa en valfri webb-app och hämta data från ett webb-API. Vi valde att skapa en film app som hämtar data från Imdb',
    imageUrl: 'https://user-images.githubusercontent.com/73331860/112618713-b9adab00-8e26-11eb-8a83-f35f513f643b.png?raw=true',
    link: 'https://search-for-movies.netlify.app/',
    tags: ' [react][TypeScript][Ant Design][HTML] [CSS] [OOP] [git & GitHub] [VS code] ',
    githubRepo: 'https://github.com/msmalinosterberg/movie-search-app',
},
{
    id: 3,
    title: 'NumberQuiz',
    description: 'Grupparbete i kursen Agila metoder 15yhp. Februari 2021. Uppgiften gick ut på att skapa ett Gissa numret -spel mot olika botar. Vi arbetade agilt enligt scrum-metoden.',
    imageUrl: 'https://user-images.githubusercontent.com/73331860/112620652-1c07ab00-8e29-11eb-9099-2e11353369c9.png?raw=true',
    link: 'https://crackthenumber.netlify.app/',
    tags: ' [HTML] [CSS] [TypeScript] [OOP] [Scrum] [Agila metoder] [git & GitHub][VS code]',
    githubRepo: 'https://github.com/msmalinosterberg/Number-quiz',
},
{
    id: 4,
    title: 'FallingStars',
    description: 'Grupparbete i JavaScript grundkurs 60yhp. Januari 2021. Uppgiften gick ut på att skapa ett spel. Spelbeskrivning finns på gitHub repot.',
    imageUrl: 'https://user-images.githubusercontent.com/73331860/112620873-5a04cf00-8e29-11eb-85d4-7a66af6ed71d.png?raw=true',
    link: 'https://fallingstars.netlify.app/',
    tags: '[HTML] [CSS] [TypeScript] [OOP] [p5.js][git & Github] [VS code] [pseudokod] [flowchart]',
    githubRepo: 'https://github.com/msmalinosterberg/falling-stars-the-game',
},
{
    id: 5,
    title: 'Spotify',
    description: 'Inlämningsuppgift i HTML & CSS 20yhp. Oktober 2020. Av: Malin Österberg & Felicia Segerholm. Uppgiften gick ut på att återskapa en hemsidas struktur, design och responsivitet. Vi valde Spotify och skapade deras förstasida.',
    imageUrl: 'https://user-images.githubusercontent.com/73331860/112619850-1493d200-8e28-11eb-852f-87cdcfa0b325.png?raw=true',
    link: 'https://msmalinosterberg.github.io/responsive-website/',
    tags: '[HTML] [CSS][VS code]',
    githubRepo: 'https://github.com/msmalinosterberg/responsive-website',
},

];

