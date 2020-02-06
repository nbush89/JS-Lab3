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

let addressBook = new AddressBook();
addressBook.add("Julia", "juliabush@gmail.com", "734.330.8852", "sister");
addressBook.add("Ron", "rbush@gmail.com", "240.449.4596", "dad");
addressBook.add("Kathy", "kathybush@gmail.com", "240.731.9549", "mom");

// function print(book) {
//   book.contacts.forEach(contact => console.log(contact));
// }

function display() {
  let container = document.querySelector(".contact-container");
  container.innerHTML = "";
  let counter = 0;
  for (let contact of addressBook.contacts) {
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    card.append(name);
    let email = document.createElement("p");
    email.innerText = `Email: ${contact.email}`;
    card.append(email);
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    card.append(phone);
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    card.append(relation);
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash");
    icon.setAttribute("index-number", `${counter}`);
    card.append(icon);
    counter++;
    container.append(card);
    card.setAttribute("class", "contact-card");
  }
}
display();

let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("phone"),
    formData.get("email"),
    formData.get("relation")
  );
  display();
});

let cardsContainer = document.querySelector(".contact-container");
cardsContainer.addEventListener("click", deleted);

function deleted(e) {
  if (e.target.className === "fas fa-trash") {
    let trashIndex = e.target.getAttribute("index-number");
    addressBook.deleteAt(trashIndex);
    display();
  }
}
