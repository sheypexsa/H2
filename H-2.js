 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
 და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში
 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
 და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
 მანქანის დეტალების შემაჯამებელ სტრიქონს
 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
 შექმენით კლასის პოსტი თვისებების ID,
 სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე
 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
 გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
გამოიყენეთ filter მეთოდი!
 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
 შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed.
 შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში
2
class Car {
  constructor(year, model, company, country) {
    this.year = year;
    this.model = model;
    this.company = company;
    this.country = country;
  }

  getCarDetails() {
    return `Year: ${this.year}, Model: ${this.model}, Company: ${this.company}, Country: ${this.country}`;
  }
}
const Car13 = new Car(1990, "supra", "toyota", "japan");
console.log(Car13.getCarDetails())
4
const Georgians = [
  { name: "zura2", age: 76 },
  { name: "nika", age: 24 },
  { name: "gio", age: 32 },
  { name: "zura", age: 12 },
];

const overEighteen = Georgians.filter((Georgians) => Georgians.age > 18);

console.log(overEighteen);