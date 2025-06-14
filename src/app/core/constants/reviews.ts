import { ReviewBook } from "../interfaces/reviews-book";

export const reviews: ReviewBook[] = [
  {
    id: '0',
    name: 'Inspirador',
    description: 'Una buena manera de iniciar tu dia.',
    review: 3,
    img: 'assets/img/aguila.png',
    username: 'Luciana75016',
    date: '20/02/2024',
    bookId: "fb36c9e8-5207-4d71-8ec3-4dd009f3ef9f"
  },
  {
    id: '1',
    name: 'Pudo ser mejor',
    description: 'Tenía altas expectativas para este libro, estuvo bien, pero la trama prometía más de lo que al final ofreció.',
    review: 2,
    img: 'assets/img/snake.png',
    username: '7502ericka',
    date: '15/05/2024',
    bookId: "fb36c9e8-5207-4d71-8ec3-4dd009f3ef9f"
  },
  {
    id: '2',
    name: 'Mediocre',
    description: 'Entretenido y ya, no encontraras mas que eso en este libro',
    review: 0,
    img: 'assets/img/mujer.png',
    username: 'alvaro74018',
    date: '28/03/2024',
    bookId: "fb36c9e8-5207-4d71-8ec3-4dd009f3ef9f"
  },
]