import qs from 'qs';
import { clientID } from '../config/keys';

const ROOTURL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id : clientID,
      response_type: 'token'
    };
    window.location = `${ROOTURL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
}