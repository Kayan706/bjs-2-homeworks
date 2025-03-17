class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount =pagesCount;
        this.state = state;
        this.type = type;
    }

    
    fix(){
        return this.state = this.state * 1.5;
    }

    set state (fixState){
        if (fixState <= 0){
            this._state = 0
        } else if (fixState >= 100){
            this._state = 100
        } else {
            this._state = fixState
        }
        
        
    }
    
    get state () {
        return this._state
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
    
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}



class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }

}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic"
    }
}
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective"
    }
}

class Library {
    constructor(name){
        this.name = name; 
        this.books = []
    }
    addBook(book){
        if (book.state >= 30){
            this.books.push(book)
        }
    }
    findBookBy(type, value){
        let search = this.books.find(book => book[type] === value);
        if(search === undefined){
            return null
        }
        return search
        
    }

    giveBookByName(bookName){
        let searchBookName = this.books.find(book => book.name === bookName);
        if (typeof searchBookName === 'object'){
            let x = this.books.indexOf(searchBookName)
            this.books.splice(x, 1)
            return searchBookName
        } else {
            return null
        }
        
    }
}









const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3