interface UserApiResponse {
    results: User[];
    info: Info;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

interface User {
    name: Name;
    gender: string;
    location: Location;
    email: string;
    phone: string;
  }

  interface Name {
      title: string;
      first: string;
      last: string;
  }
  interface Location {
      street: string;
      city: string;
      state: string;
      postCode: string;
  }
