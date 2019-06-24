import qs from 'qs';
import { clientID } from '../config/keys';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id : clientID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
}