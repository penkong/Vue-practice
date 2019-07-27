// helper for modules
import qs from 'qs';
import axios from 'axios';
import { clientID } from '../config/keys';

const ROOT_URL = 'https://api.imgur.com';
// net work related code its helper
export default {
  login() {
    const querystring = {
      client_id : clientID,
      response_type: 'token',
      // state == tag on user when he back to app
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
  },
  //images == fileList
  uploadImages(images, token) {
    //formData obj is vanilla js == allow us take ref to file and attach real file to post req
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      //key file this work attach our file
      formData.append('image', image);
      const url = `${ROOT_URL}/3/image`;
      return axios.post(url, formData , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    //that's make all images upload and bring us probe error
    //array of promises
    return Promise.all(promises);
  }
}