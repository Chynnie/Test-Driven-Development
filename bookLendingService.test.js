const bookLendingService = require('./bookLendingService');
const { bookList, bookCount, totalPrice, borrowedBooks } = require('./bookLendingService');

test('Has equal length', () => {
  expect(bookLendingService.bookCount).toEqual(5);
});

const desiredBookList = {
  bookList: [{name: 'To Kill a Mockingbird',
    price: 5.25}, {
      name: 'Half of a Yellow Sun',
      price: 7.75}, {name: 'Shakesparean Stories',
      price: 10.75}]
};
function desiredBorrowedBook() {
  console.log('To Kill a Mockingbird' + '\t\t\$' + 5.25);
}

const expectedTotalPrice = 46.75;

test('Match BookList Object', () => {
  expect(bookList).toMatchObject(desiredBookList);
})

test('Match Desired Books', () => {
  expect(borrowedBooks).toMatchObject(desiredBorrowedBook);
})

test('Has Equal price', () => {
  expect(totalPrice).toEqual(expectedTotalPrice);
});

test(' Has Equal Number', () => {
  expect(bookLendingService.totalPrice).toEqual(46.75);
});
