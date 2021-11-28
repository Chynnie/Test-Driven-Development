//  A Book Lending Service Platform Using JavaScript Module Pattern

const bookLendingService = (function() {

  //private variables
  let total = 0;
  let books = [];
  
  const store = ['To Kill a Mockingbird', 'Half of a Yellow Sun', 'Learning JavaScript Design Patterns', 'Shakesparean Stories', 'Purple Hibiscus', 'Harry Potter', 'Things Fall Apart', 'Twilight', 'Eloquent JavaScript'];
  
  //private methods
  console.log(('Available Books:\n').toUpperCase());

  store.forEach(function(element){
    console.log(element);
  });

  function bookChoice() {
    console.log(('\n\nYou Borrowed ' + (bookLendingService.bookCount() + ' Books: \n')).toUpperCase());
    console.log('Books \t\t\t\tPrice\n');

      books.forEach(function(item) {
          console.log(item.name + '\t\t\$' + item.price);
      })
  };

  //public methods
  return {

      //public to access private function
      borrowedBooks: bookChoice,

      bookList: function(bookValues) {
          books.push(bookValues);
          return this;
      },

      bookCount: function() {
          return books.length;
      },

      totalPrice: function() {
          books.forEach(function(bookPrice) {
            total += bookPrice.price;
          })
          return total;
      }

  }

}());


bookLendingService.bookList({
  name: 'To Kill a Mockingbird',
  price: 5.25
}).bookList({
  name: 'Half of a Yellow Sun',
  price: 7.75
}).bookList({
  name: 'Shakesparean Stories',
  price: 10.75
}).bookList({
  name: 'Purple Hibiscus\t',
  price: 7.75
}).bookList({
  name: 'Eloquent JavaScript',
  price: 15.25
});

bookLendingService.borrowedBooks();

console.log('\nTOTAL PRICE: \t\t\t\$' + (bookLendingService.totalPrice()).toFixed(2)); 

module.exports = (
  bookLendingService.borrowedBooks(),
  bookLendingService.bookList(),
  bookLendingService.bookCount(),
  bookLendingService.totalPrice()
  );