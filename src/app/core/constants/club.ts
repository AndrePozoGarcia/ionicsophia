import { CalendarClub } from "../interfaces/calendar-club";

export const clubs : CalendarClub [] = [
    {
        id: 0,
        name: 'Bookily',
        descriptionClub: 'Bookily es un club de lectura donde cada semana exploramos y debatimos diferentes libros, compartiendo ideas y perspectivas. Únete a nuestra comunidad y disfruta de la pasión por la lectura en un espacio acogedor y enriquecedor.',
        contactClub: 60100001,
        imgClub: 'assets/img/book-club.png',
        ClubDate: 'Viernes y Sabado',
        eventInitTime: '18:00',
        price: 10,
        location: 'Miraflores',
        shareClub: true,
    },
    {
        id: 1,
        name: 'Bookista',
        descriptionClub: 'Bookista es un club de lectura en el cual compartimos nuestros pesamamientos y análisis sobre diferentes libros semanalmente. Incríbete y compartamos la pasión por la lectura en un ambiente seguro',
        contactClub: 75000001,
        imgClub: 'assets/img/bookista.png',
        ClubDate: 'Martes y Jueves',
        eventInitTime: '20:00',
        price: 0,
        location: 'Sopocachi',
        shareClub: true,
    },
]