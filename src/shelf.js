//shelfBook
function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    var shifted = shelf.unshift(book);
    return shelf
 }
};

//unShelfBook
function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
      return shelf
    }
  }
}

//listTitles

//var fantasyShelf = array
//var titles = list titles of fantasyShelf
// titles should equal "strings"

function listTitles(fantShelf) {
  var lists = ""
  for (var i = 0; i < fantShelf.length; i++) {
    lists = lists + fantShelf[i].title + ", "
  }  return lists.substring(0, lists.length -2)
}

// searchShelf
// should tell us if a title is on the shelf (true or fale)
// we want to scan the book titles (for loop)
// "Hyperion" = true
// "The Fifth season" = false
// var sciFiShelf = array
// shelf / title as parameters
// access title property with dot notation

function searchShelf(shelf, bookTitle) {
var output = null;
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      output = true
    } else {
// why should you not reassign output to false?
        return false
  }
// return output (boolean)
}


// console.log(bookTitle) returning Hyperion
// console.log(shelf); logging array of objects

}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
