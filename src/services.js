import axios from 'axios';

const baseURL = "https://study.icerik.com/v1/q/"
const API_KEY = "NcCaHwHfus5pXDcJlZT73bq53MKC9AGw4DUjCwdW51hXlSIDxNDB38B4QZuOnoCA"



class Services {
    constructor(baseURL, API_KEY) {
      this.instance = axios.create({
        baseURL: baseURL,
        headers: {
          'Api-Key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
    }
    getContentDetails() {
      return this.instance.get('contentdetail')
    }
    approveContent(body) {
      return this.instance.post('approvecontent', body)
    }
    reviseContent(body) {
      return this.instance.post('revisioncontent', body)
    }
}

export default new Services(baseURL, API_KEY);





