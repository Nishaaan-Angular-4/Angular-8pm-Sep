(function () {
    //1. get the list of books from the book api.
    //2. create a method that will create a row for each book.
    //3. get the reference of the html table 
    //4. append the row we created for a the book to the table.

    var createRow = function (book) {
        console.log(book);
        var row = document.createElement("tr");
        createColumn(book.bookId, row);
        createColumn(book.author, row);
        createColumn(book.price, row);
        console.log(row);
        return row;
    };
    var createColumn = function (data, tr) {
        var column = document.createElement("td");
        column.textContent = data;
        tr.appendChild(column);
    };

    var init = function () {
        var books = bookApi.get();
        var table = document.getElementById("tblBooks");
        for (var i = 0; i < books.length; i++) {
            var tr = createRow(books[i]);
            table.appendChild(tr);
        }
    };

    init();
})();
