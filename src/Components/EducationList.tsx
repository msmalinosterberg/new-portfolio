export interface Education {
    id: number
    title: string
    date: string
    description: string
    // imageUrl: string
    // link: string
    // tags: string
    // githubRepo: string
}


export const educationList: Education[] = [{
    id: 1,
    title: 'Front end developer - Medieinstitutet Göteborg',
    date: '2020-2022',
    description: 'HTML & CSS 20-yhp. Grundkurs JavaScript 60yhp. Projektarbete med agila metoder 15yhp. JavaScript fördjupningskurs 40yhp. Dynamisk webbutveckling 45yhp. Grafiska verktyg för gränssnittsdesign 15yhp. UX & Usability 15yhp. LIA 1 - 50yhp. Arbetsmetodik för utvecklare 20yhp. Kompentensportfölj och entreprenörsskap 10yhp. Examensarbete 30yhp. LIA 2 80yhp.',
},
{
    id: 2,
    title: 'Distanskurs i copywriting - Forsbergs Stockholm ',
    date: '2019',
    description: 'Identifiera tydliga målgrupper och anpassa budskapet och innehållet till dem. Öva på att tänka strategiskt, kreativt och konceptuellt och skapa budskap utifrån mina insikter. Jag skrev för sociala medier, print och i brevform.',
},
{
    id: 3,
    title: 'Webbkommunikatör - Nordic Business Institute Göteborg',
    date: '2014-2016',
    description: ' Utbildningen behandlade allt från skrivande till strategisk kommunikation och har gett mig kompetens inom kommunikation, marknadsföring, sociala medier, digital produktion, SEO och journalistiskt skrivande. Vi arbetade i olika CMS (Wordpress, Drupal) program (t ex Adobe Premiere, Photoshop, Google Analytics m.m.) samt med dem största vedertagna sociala kanalerna.',
},
{
    id: 4,
    title: 'Fil.kand examen i Socialantropologi - Göteborgs Universitetet',
    date: '2008-2013',
    description: 'Socialantroplogi 90hp, Humanekologi 60hp, Globala utvecklingsstudier 30hp',
},
{
    id: 5,
    title: 'Intensivkurs i projektledning - Upp!Göteborg / Club Global ',
    date: '2011',
    description: 'Intensivkurs i projektledning med fokus på starta eget och ledarskap. Kursen gav mig kunskaper inom projektledning, ekonomi och budget samt ledarskap.',
},
];

