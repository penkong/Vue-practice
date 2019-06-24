// helper for modules
import qs from 'qs';
import axios from 'axios';
import { clientID } from '../config/keys';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id : clientID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  //access token we must provide
  fetchImages(token) {
    const url = `${ROOT_URL}/3/account/me/images`;
    //law of imgur we must send headers
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}