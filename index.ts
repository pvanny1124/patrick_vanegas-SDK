import axios from 'axios';

export class LOTRClient {
  API_URL: string = 'https://the-one-api.dev/v2';

  constructor(private apiKey: string) {
    this.apiKey = apiKey;
  }

  getBooks(): Promise<object> {
    return axios
      .get(`${this.API_URL}/book`, { headers: { "Accept-Encoding": "*"}})
      .then((resp) => {
        return resp.data
      })
      .catch(err => {
        return err
      });
  }

  getBookById(id: string): Promise<object> {
    return axios
      .get(`${this.API_URL}/book/${id}`, { headers: { "Accept-Encoding": "*"}})
      .then((resp) => {
        return resp.data
      })
      .catch(err => {
        return err
      });
  }

  getMovies(): Promise<object> {
    return axios
      .get(`${this.API_URL}/movie`, { 
        headers: { 
          "Accept-Encoding": "*", 
          "Authorization": `Bearer ${this.apiKey}`
        }})
      .then((resp) => {
        return resp.data
      })
      .catch(err => {
        return err
      });
  }

  getCharacters(): Promise<object> {
    return axios
      .get(`${this.API_URL}/character`, { 
        headers: { 
          "Accept-Encoding": "*", 
          "Authorization": `Bearer ${this.apiKey}`
        }})
      .then((resp) => {
        return resp.data
      })
      .catch(err => {
        return err
      });
  }
}
