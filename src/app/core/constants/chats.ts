import { ChatGroup } from "../interfaces/chat.interface";

export const chatGroups: ChatGroup[] = [
  {
    id: 'LJaxB8J39FPvfPD0aaikMMV8QYD3.51146cc1-05be-4eaa-b5d1-a322a28b943c.dt5K2WfAIlV1m95Iz8UF1INIVKD3',
    user1Id: 'LJaxB8J39FPvfPD0aaikMMV8QYD3',
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3',
    user2Name: "Maria Galindo",
    user2Img: "assets/img/user2.png",
    bookId: '51146cc1-05be-4eaa-b5d1-a322a28b943c',
    bookName: "A monster wants to...",
    chats: [
      {
        id: '1',
        userId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3',
        message: "Hola Maria, ¿cómo estás?",
        createdAt: new Date("2023-10-01T10:00:00Z").toISOString(),
      },
      {
        id: '2',
        userId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3',
        message: "Hola Juan, estoy bien, ¿y tú?",
        createdAt: new Date("2023-10-01T10:05:00Z").toISOString(),
      },
      {
        id: '3',
        userId: 'LJaxB8J39FPvfPD0aaikMMV8QYD3',
        message: "Todo bien, gracias. ¿Quisieras intercambiar tu libro por el mio?",
        createdAt: new Date("2023-10-01T10:10:00Z").toISOString(),
      },
      {
        id: '4',
        userId: 'dt5K2WfAIlV1m95Iz8UF1INIVKD3',
        message: "Claro, ¿qué libro tienes en mente?",
        createdAt: new Date("2023-10-02T10:05:00Z").toISOString(),
      },
    ],
  },
  {
    id: 1,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 2,
    user2Name: "Luis",
    user2Img: "assets/img/users/david.png",
    bookId: 1,
    bookName: "1984",
    chats: [
      {
        id: 1,
        userId: 3,
        message: "Hola Juan, ¿te interesa cambiar el libro que publicaste?",
        createdAt: new Date("2023-10-02T09:15:00Z"),
      },
      {
        id: 2,
        userId: 1,
        message: "Hola Luis, claro. ¿Cuál propones a cambio?",
        createdAt: new Date("2023-10-02T09:18:00Z"),
      },
    ],
  },
  {
    id: 2,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 3,
    user2Name: "Ana",
    user2Img: "assets/img/users/laura.png",
    bookId: 2,
    bookName: "Filosofix",
    chats: [
      {
        id: 1,
        userId: 4,
        message: "¡Hola! Vi que te gusta ciencia ficción. ¿Tienes algún libro para recomendar?",
        createdAt: new Date("2023-10-03T12:00:00Z"),
      },
      {
        id: 2,
        userId: 1,
        message: "¡Hola Ana! Sí, te recomiendo 'Dune', es excelente.",
        createdAt: new Date("2023-10-03T12:05:00Z"),
      },
    ],
  },
  {
    id: 3,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 4,
    user2Name: "Carlos",
    user2Img: "assets/img/users/carlos.png",
    bookId: 3,
    bookName: "One Piece VOL. I",
    chats: [
      {
        id: 1,
        userId: 1,
        message: "Hola Carlos, vi tu publicación sobre 'One Piece'. ¿Está disponible?",
        createdAt: new Date("2023-10-04T08:30:00Z"),
      },
      {
        id: 2,
        userId: 5,
        message: "Hola Juan, sí, aún está disponible. ¿Quieres intercambiarlo?",
        createdAt: new Date("2023-10-04T08:35:00Z"),
      },
    ],
  },
  {
    id: 4,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 4,
    user2Name: "Carlos",
    user2Img: "assets/img/users/carlos.png",
    bookId: 4,
    bookName: "Los Renegados",
    chats: [
      {
        id: 1,
        userId: 1,
        message: "Hola Carlos, ¿todavía tienes disponible 'Los Renegados'?",
        createdAt: new Date("2023-10-05T09:00:00Z"),
      },
      {
        id: 2,
        userId: 5,
        message: "¡Hola! Sí, está disponible. ¿Qué ofreces a cambio?",
        createdAt: new Date("2023-10-05T09:05:00Z"),
      },
    ],
  },
  {
    id: 5,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 4,
    user2Name: "Carlos",
    user2Img: "assets/img/users/carlos5.png",
    bookId: 5,
    bookName: "Bajo la misma estrella",
    chats: [
      {
        id: 1,
        userId: 5,
        message: "Hola Juan, vi que te gustan los romances. ¿Qué opinas de 'Bajo la misma estrella'?",
        createdAt: new Date("2023-10-06T15:00:00Z"),
      },
      {
        id: 2,
        userId: 1,
        message: "¡Es uno de mis favoritos! ¿Estás dispuesto a intercambiarlo?",
        createdAt: new Date("2023-10-06T15:02:00Z"),
      },
    ],
  },
  {
    id: 6,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 3,
    user2Name: "Ana",
    user2Img: "assets/img/users/laura.png",
    bookId: 6,
    bookName: "The drama with doomsday",
    chats: [
      {
        id: 1,
        userId: 1,
        message: "Hola Ana, vi tu libro 'The drama with doomsday', ¿de qué trata?",
        createdAt: new Date("2023-10-07T11:00:00Z"),
      },
      {
        id: 2,
        userId: 4,
        message: "Hola Juan, es una historia dramática post-apocalíptica. Muy intensa.",
        createdAt: new Date("2023-10-07T11:03:00Z"),
      },
    ],
  },
  {
    id: 7,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 3,
    user2Name: "Ana",
    user2Img: "assets/img/users/laura.png",
    bookId: 7,
    bookName: "Charly y la fabrica de chocolate",
    chats: [
      {
        id: 1,
        userId: 4,
        message: "Hola Juan, ¿quieres intercambiar este libro por alguno de fantasía?",
        createdAt: new Date("2023-10-08T13:00:00Z"),
      },
      {
        id: 2,
        userId: 1,
        message: "Podría ser, déjame revisar los que tengo disponibles.",
        createdAt: new Date("2023-10-08T13:04:00Z"),
      },
    ],
  },
  {
    id: 8,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 1,
    user2Name: "Maria",
    user2Img: "assets/img/user2.png",
    bookId: 8,
    bookName: "Night of terror",
    chats: [
      {
        id: 1,
        userId: 1,
        message: "Hola Maria, ¿'Night of terror' es muy aterrador?",
        createdAt: new Date("2023-10-09T17:30:00Z"),
      },
      {
        id: 2,
        userId: 1,
        message: "Me interesa para una noche temática con amigos.",
        createdAt: new Date("2023-10-09T17:32:00Z"),
      },
      {
        id: 3,
        userId: 2,
        message: "¡Sí! Es perfecto para eso. ¿Lo quieres?",
        createdAt: new Date("2023-10-09T17:35:00Z"),
      },
    ],
  },
  {
    id: 9,
    user1Id: 0,
    user1Name: "Juan Jose",
    user1Img: "assets/img/user1.png",
    user2Id: 1,
    user2Name: "Maria",
    user2Img: "assets/img/user2.png",
    bookId: 7,
    bookName: "Charly y la fabrica...",
    chats: [
      {
        id: 1,
        userId: 0,
        message: "Hola Maria, Quiero intercambiar 'Charly y la fabrica de chocolate'.",
        createdAt: new Date("2023-10-09T17:30:00Z"),
      },
      {
        id: 2,
        userId: 0,
        message: "Estarias dispuesta a cambiarlo por 'Night of terror'?",
        createdAt: new Date("2023-10-09T17:32:00Z"),
      },
      {
        id: 3,
        userId: 1,
        message: "¡Sí! Claro, me interesa.",
        createdAt: new Date("2023-10-09T17:35:00Z"),
      },
      {
        id: 4,
        userId: 0,
        message: "Confirmado entonces?",
        createdAt: new Date("2023-10-09T18:35:00Z"),
      },
      {
        id: 5,
        userId: 1,
        message: "Confirmado",
        createdAt: new Date("2023-10-09T19:35:00Z"),
      },
    ],
  }
];
