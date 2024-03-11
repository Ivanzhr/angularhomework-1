import axios from "axios";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

axios.get<User[]>('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    response.data.forEach((user: User) => {
      console.log(user);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
