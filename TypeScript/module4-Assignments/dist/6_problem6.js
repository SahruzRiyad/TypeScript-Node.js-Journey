{
    var isRecentBook = function (book) {
        var today = new Date();
        var year = today.getFullYear();
        return (year - book.publishedYear <= 5);
    };
    var book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };
    var book2 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2019
    };
    console.log(isRecentBook(book1));
    console.log(isRecentBook(book2));
}
