class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  toString() {
    return `${this.name} <${this.email}>`;
  }
}

let myBook = new Contact("Nicole", "nbush89@gmail.com", "810.986.9923", "me");
console.log(myBook);
console.log(myBook.toString());

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (name === this.contacts[i].name) {
        this.contacts.splice(i, 1);
      }
    }
  }
  getAt(index) {
    return this.contacts[index];
  }
  findContactByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (name === this.contacts[i].name) {
        return this.contacts[i];
      }
    }
  }
  findContactByRelation(relation) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (relation === this.contacts[i].relation) {
        return this.contacts[i];
      }
    }
  }
  searchContacts(text) {
    return this.contacts.filter(contact => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
}

function print(book) {
  book.contacts.forEach(contact => console.log(contact));
}

let addressBook = new AddressBook();
addressBook.add("Julia", "juliabush@gmail.com", "734.330.8852", "sister");
addressBook.add("Ron", "rbush@gmail.com", "240.449.4596", "dad");
addressBook.add("Kathy", "kathybush@gmail.com", "240.731.9549", "mom");
addressBook.add("Regan", "reganLee@gmail.com", "313.898.3746", "niece");

addressBook.deleteAt(2);
addressBook.deleteByName("Julia");
print(addressBook);
addressBook.getAt(2);
console.log(addressBook.findContactByName("Julia"));
console.log(addressBook.findContactByRelation("sister"));
console.log(addressBook.searchContacts("athy"));
