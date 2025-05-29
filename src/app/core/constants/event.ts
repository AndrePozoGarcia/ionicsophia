import { CalendarEvent } from "../interfaces/calendar-event";

export const events: CalendarEvent[] = [
    {
        id: 0,
        name: 'Feria del libro',
        typeEvent: 'Feria',
        descriptionEvent: 'La Feria Internacional del Libro de La Paz llega con stands de editoriales, autores independientes y eventos como charlas y talleres de escritura. Un espacio ideal para descubrir nuevas historias y conectar con la literatura.',
        imgEvent: 'assets/img/feriaLibro.png',
        eventInitDate: '2025-05-15',
        eventEndDate: '2023-05-20',
        eventInitTime: '10:00',
        eventEndTime: '20:00',
        price: 20,
        location: 'Campo Ferial',
        shareEvent: true,
    },
    {
        id: 1,
        name: 'Analisis de "La Odisea"',
        typeEvent: 'Analisis',
        descriptionEvent: 'El analista literario Adrián Valverde presentará un análisis de La Odisea, explorando su simbolismo, estructura y relevancia en la literatura actual. Una oportunidad única para descubrir nuevas perspectivas sobre esta obra clásica y su impacto en las narrativas modernas.',
        imgEvent: 'assets/img/laOdisea.png',
        eventInitDate: '2025-03-27',
        eventInitTime: '19:00',
        price: 0,
        location: 'Biblioteca Municipal',
        shareEvent: true,
    }
];