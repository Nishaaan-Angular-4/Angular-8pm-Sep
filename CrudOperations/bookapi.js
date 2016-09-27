(function (bookApi) {
    var bookList = [{
            bookId: 1,
            author: "Kiran",
            price: 20000
            },
        {
            bookId: 2,
            author: "Lokesh",
            price: 30000
            }, {
            bookId: 2,
            author: "Haritha",
            price: 40000
                }];
    var getBooks = function () {
        return bookList;
    };
    var addBook = function (book) {
        bookList.push(book);
    };
    var deleteBook = function (id) {
        //program to delethe book frm the list;
    };

    bookApi.get = getBooks;
    bookApi.add = addBook;
    bookApi.delete = deleteBook;

})(window.bookApi = {});
