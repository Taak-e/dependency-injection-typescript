import { AuthServiceImpl } from "./AuthService";
import { HttpClientImpl } from "./Http";
import { MyLocalStorage, MySessionStorage } from "./Storage";

// DI typescript

const myLocalStorage = new MyLocalStorage();
const mySessionStorage = new MySessionStorage();
const httpClient = new HttpClientImpl("localhost:3000", mySessionStorage);
const authService = new AuthServiceImpl(httpClient, mySessionStorage);

authService.logout();
