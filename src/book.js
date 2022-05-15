//createTitle

// return a modified title
// varBookIdea = "The Storm's Awakening"
//bookIdea should = "The Storm's Awakening"

function createTitle(title) {
  return "The " + title
}


// buildMainCharacter

// creates a character object
// parameters name, age, pronouns
// ghoulCharacter = "Vassya, 16, "she/her"
// bakerCharacter = "Hannah", 30, "she/her"

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
};


// saveReview
// add reviews to an array
// var reviews = [ array ]
// "An astounding success" = string review

function saveReview(reviews, revArr) {
  if (revArr.includes(reviews)) {
  return reviews;
} else {
  return revArr.push(reviews);
  }
};

// calculatePageCount
// should add 20 pages per letter in title
// bookTitle = 'The Teenage Ghoul'

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

// writeBook
// retrun a book object
// parameters are title, mainCharacter, genre
// pageCount is NOT a parameter since we found it above

function writeBook(bookTitle, bookCharacter, type) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: type
    };
  return book;
};

// editBook
// decrease the book's page count
// ghoulbook = 340 = 255
// parameter = book
// book.pageCount is referencing the object book from above and we are using dot notation

function editBook(book) {
  var reducesPages = (book.pageCount * .75)
  book.pageCount = reducesPages
return book.pageCount
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
