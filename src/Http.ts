import { MyStorage } from "./Storage";

export interface HttpClient {
  fetch(url: string, options: RequestInit): Promise<any>;
}

export class HttpClientImpl implements HttpClient {
  baseURL: string;
  storage: MyStorage;

  constructor(baseURL: string, storage: MyStorage) {
    this.baseURL = baseURL;
    this.storage = storage;
  }

  fetch(url: string, options: RequestInit): Promise<any> {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: this.storage.get(),
        ...options.headers,
      },
    });
  }
}

export default HttpClientImpl;
