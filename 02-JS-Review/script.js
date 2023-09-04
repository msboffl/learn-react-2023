const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
}

const books = getBooks();
// books

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

// Object Destructuring
const { title, author, pages, genres, publicationDate, reviews } = book;
title;
author;
pages;
genres;
publicationDate;
reviews;

console.log(reviews.goodreads.reviewsCount);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre, secondaryGenre);

// Array Destructuring & Spread Operator(...)
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

primaryGenre;
secondaryGenre;
otherGenres;

const newGenre = ["epic fantasy", ...genres];
newGenre;

const updatedBook = { ...book, movieDate: "1998-13-12", pages: 1215 };
updatedBook;

// Templet String - ${}

// Conditional Operator - (?:)

// Arrow Functions - (() => {})

// Short-Circuiting And Logical Operators: &&, ||, ??

console.log(true && "Some Thing");
console.log(false && "Some Thing");

// Falsy : 0, '', null, undefined
console.log("sai" && "Something");
console.log(0 && "something");
console.log("" && "Something");

// OR - it is opposite to AND
console.log(true || "Some Thing");
console.log(false || "Some thing");

const spanishTranslations =
  book.translations.spanish || "Not Available to Spanish";
spanishTranslations;

// Optional Chainig (?.)
function getTotalReviews(book) {
  const goodReads = book?.reviews?.goodreads?.reviewsCount;
  goodReads;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodReads + librarything;
}
console.log(getTotalReviews(book));

// Array Methods - Map, Filter, Reduce
const getAllBooks = getBooks();
getAllBooks;

// Map
const arr = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(arr);

const titles = getAllBooks.map((book) => book.title);
console.log(titles);

const essentialData = getAllBooks.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

console.log(essentialData);

// without "return"
const essentialD = getAllBooks.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialD);

// Filter
const longBooks = getAllBooks.filter((book) => book.pages > 500);
console.log(longBooks);

// Reduce
const pagesAllBooks = getAllBooks.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// Sort

// 1) Add book object to Array
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "Mareedu Saibabu",
};

const afterNewBookAdd = [...getAllBooks, newBook];
console.log(afterNewBookAdd);

// 2) Delete a book object to array
const booksAfterDelete = afterNewBookAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// Update a book object in the Array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 120 } : book
);
console.log(booksAfterUpdate);

// Promises
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

console.log("Mareedu");

// Async / Await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getData();
console.log(todos);
