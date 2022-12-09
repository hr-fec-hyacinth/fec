import React from 'react';
import { useState, useEffect, Component } from 'react';
import { PHOTOAUTHKEY } from '../../../server/config.js';
import { cloudinaryCloudName } from '../../../server/config.js';

const PhotoUpload = ({callback}) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [photosSrcList, setPhotosSrcList] = useState([
    'http://res.cloudinary.com/dq6rqplja/image/upload/v1670526146/Home/FECImages/x2lz4uzsypp3djwtuzdg.png',
    'http://res.cloudinary.com/dq6rqplja/image/upload/v1670526137/Home/FECImages/nkmtelenrimckuwey8mr.png']
  );

  const uploadPreset = 'wjuxohsi';

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudinaryCloudName,
      uploadPreset: uploadPreset, // Must set or it will not work (create in)
      sources: [ "local", "url"], // restrict the upload sources to URL and local files
      folder: "Home/FECImages", //upload files to the specified folder
      context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // multiple: false,  //restrict upload to a single file
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log("Done! Here is the image info: ", result.info);
        setPhotosSrcList([...photosSrcList, result.info.url])
        document
          .getElementById("uploadedimage")
          .setAttribute("src", result.info.secure_url);
        if(callback) {
          callback(result.info.url);
        }
      }
    }
  );

  const handleUploadOnClick = (e) => {
    e.preventDefault();
    if (myWidget) {
      myWidget.open();
    }
  }

  return (
    <div className="flex flex-col">
      {myWidget && <>
        <button id='upload_widget' className="block w-full text-sm text-slate-500
          bg-emerald-50 hover:file:bg-100 cloudinary-button"
                onClick={handleUploadOnClick}>Upload Photo
        </button>
      </>}

      { photosSrcList.length > 0 && <div className='flex flex-row'>
        {Array.from({ length : 5},(v, i) =>
          <div className='w-2/12 max-h-12 my-2 overflow-auto mx-2' key={'img' + i}>
            <img className="object-cover" src={photosSrcList[i]}></img>
          </div>
        )}
      </div>}

    </div>
  )
}

export default PhotoUpload;