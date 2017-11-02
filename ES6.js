class Book {
constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getTitle(){
    console.log(this.title);
  }
  getAuthor(){
    console.log(this.author);
  }
  amISpecial(){
    var firstLetter = this.title.charAt(0).toLowerCase();
    if (firstLetter === "w"){
      console.log("I'm Wynning");
    }else {
      console.log("never judge a book by its cover ;)");
    }
  }
}

var book = new Book("Harry Potter", "J.K. Rowling");
book.getTitle();
book.getAuthor();
book.amISpecial();

class Poem extends Book {
  constructor (title, author) {
    super(title, author);
  }
  recite(){
    console.log("hello world");
  }

}

var favPoem = new Poem("Hello world", "Aliya");
favPoem.getTitle();
favPoem.getAuthor();
favPoem.amISpecial();
favPoem.recite();
