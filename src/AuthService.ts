import { HttpClient } from "./Http";
import { MyStorage } from "./Storage";

interface AuthService {
  signin(email: string, password: string): void;
  logout(): void;
}

export class AuthServiceImpl implements AuthService {
  httpClient: HttpClient;
  storage: MyStorage;

  constructor(httpClient: HttpClient, storage: MyStorage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  signin(email: string, password: string): void {
    this.httpClient
      .fetch("auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => res.json())
      .then(({ access_token }) => this.storage.save(access_token));
  }

  logout() {
    this.storage.remove();
  }
}

// class AuthService {
//   constructor(httpClient, tokenRepository) {
//     this.httpClient = httpClient;
//     this.tokenRepository = tokenRepository;
//   }

//   signin(email, password) {
//     this.httpClient
//       .fetch("auth/signup", {
//         method: "POST",
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       })
//       .then((res) => res.json())
//       .then(({ access_token }) => this.tokenRepository.save(access_token));
//   }

//   logout() {
//     this.tokenRepository.remove();
//   }
// }

export default AuthService;
