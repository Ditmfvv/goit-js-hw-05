const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

console.log(
  getUserNames([
    { name: "Alice", email: "alice@example.com", balance: 1500 },
    { name: "Bob", email: "bob@example.com", balance: 2200 },
    { name: "Charlie", email: "charlie@example.com", balance: 3100 },
  ])
); // ["Alice", "Bob", "Charlie"]

console.log(
  getUserNames([
    { name: "Anna", email: "anna@example.com", balance: 1800 },
    { name: "John", email: "john@example.com", balance: 2700 },
  ])
); // ["Anna", "John"]