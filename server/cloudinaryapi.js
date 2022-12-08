import axios from 'axios';
import {PHOTOAUTHKEY} from './config.js';
import {cloudinaryCloudName} from '.config.js';


/**
 *https://cloudinary.com/documentation/image_upload_api_reference
 */
// url to post to
const URL = 'https://api.cloudinary.com/v1_1/demo/image/upload';
const uploadPath = '/:photo/upload';
const cloudName = 'dq6rqplja' //need to convert to move this into config=

const cloudinaryApi = {};

cloudinaryApi.upload = () => {

}

