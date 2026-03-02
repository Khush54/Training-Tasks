let books = ['Math', 'Science', 'English'];
document.getElementById('original_books').innerHTML = "Books Present in Book Store = " + books.join(', ');

books.push('Hindi');
books.unshift('Social Science');
document.getElementById('added_books').innerHTML = "Books Present in Book Store after adding 2 new books = " + books.join(', ');


books.pop();
books.shift();
document.getElementById('remove_books').innerHTML = "Books Present in Book Store after removing books = " + books.join(', ');

books.splice(1, 1);
document.getElementById('spliced_books').innerHTML = "Books Present in Book Store after splicing Science book = " + books.join(', ');

let new_books = ['Biology', 'Chemistry']
let newBook_Stock = books.concat(new_books);
document.getElementById('new_bookstock').innerHTML = "Books Present in Book Store after concatinating new books = " + newBook_Stock.join(', ');

newBook_Stock.copyWithin(1, 3)
document.getElementById('copying_books').innerHTML = "Books Present in Book Store after copying some books = " + newBook_Stock.join(', ');

let book_categories = [['Fiction', 'Non-Fiction'], ['Comedy', 'Horror']];
let flat_bookCategories = book_categories.flat(1)
document.getElementById('categories').innerHTML = "Books Present in Book Store of different category = " + flat_bookCategories.join(', ');

let display_books = newBook_Stock.slice(0, 2);
document.getElementById('display_books').innerHTML = "Books Present in Book Store which will be displayed = " + display_books.join(', ');

let total_books = newBook_Stock.length;
document.getElementById('total_books').innerHTML = "Total Number of Books Present in Book Store = " + total_books;

newBook_Stock[1] = 'Hindi';
document.getElementById('replace_books').innerHTML = "Updating Books Present in Book Store = " + newBook_Stock.join(', ');

let all_book = ""
newBook_Stock.forEach(function (book, index) {
    all_book += (index + 1) + '. ' + book + "<br>";
});

document.getElementById('show_books').innerHTML = "Books Present in Book Store = " + all_book;

