// 1

class Book {
  constructor(author, nameBook, year, countPage, numberPol, idUserUse) {
    this.author = author;
    this.nameBook = nameBook;
    this.yearOfWritting = year;
    this.countPage = countPage;
    this.numberPol = numberPol;
    this.idUserUse = idUserUse;
  }

  isVacant() {
    return this.numberPol !== null;
  }

  getRent(idUserUse) {
    if (this.numberPol !== null) {
      this.numberPol = null;
      this.idUserUse = idUserUse;
      console.log(`${this.nameBook} borrow user ${idUserUse}`);
    } else {
      console.log(`${this.nameBook} already borrow user ${this.idUserUse}`);
    }
  }
}

const book1 = new Book(
    "Taras Shevchenko", 
    "Kobzar", 
    1840, 
    115, 
    null, 
    1
);

console.log("book1 isVacant :>> ", book1.isVacant());

const book2 = new Book(
  "Mykhailo Kotsyubynskyi",
  "Shadows of forgotten ancestors",
  1911,
  100,
  5,
  null
);

console.log("book2 isVacant :>> ", book2.isVacant());

class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

const user1 = new User(
    1, 
    "Fred", 
    "Flintstone", 
    "Kyiv"
);

const user2 = new User(
    2, 
    "Mavka", 
    "Lisova", 
    "Forest"
);

book1.getRent(2);
book2.getRent(2);

console.log("book2 isVacant :>> ", book2.isVacant());

// 2

class Animal {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }

  hunting() {
    console.log("зараз дожену здобич");
  }

  growl() {
    console.log("грррррр");
  }
}


class Tiger extends Animal {
  constructor(name, color, size) {
    super(name, color, size);

    this.name = name;
    this.color = color;
    this.size = size;
  }

  hunting() {
    console.log('тигр з’їсть тебе')
  }
}

class Wolf extends Animal {
  constructor(name, color, size) {
    super(name, color, size);

    this.name = name;
    this.color = color;
    this.size = size;
  }

  hunting() {
    console.log('вовк з’їсть тебе')
  }
}


const wolf1 = new Wolf(
    "Bochok", 
    "grey", 
    "medium",
);

const wolf2 = new Wolf (
    'Volchok',
    'black',
    'small'
);

const tiger1 = new Tiger(
    "Polosyn", 
    "orange-black",
    'large'
);


const tiger2 = new Tiger(
    "Tigrylia", 
    "white",
    'medium'
);

tiger1.hunting(); // тигр з’їсть тебе
tiger1.growl(); // грррррр
wolf1.hunting(); // вовк з’їсть тебе
tiger2.hunting(); // тигр з’їсть тебе

// викликається класу-дитини



