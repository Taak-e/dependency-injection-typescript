export interface MyStorage {
  // save token
  save(token: string): void;
  // get token
  get(): string;
  // remove token
  remove(): void;
}

export class MyLocalStorage implements MyStorage {
  TOKEN_KEY = "ACCESS_TOKEN";

  save(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  remove(): void {
    localStorage.clear();
  }
}

export class MySessionStorage implements MyStorage {
  TOKEN_KEY = "ACCESS_TOKEN";

  save(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  remove(): void {
    sessionStorage.clear();
  }
}
