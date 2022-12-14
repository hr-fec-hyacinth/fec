import React from 'react'
import api from '../../../server/api.js';

const PhotoUpload = ({ photosSrcList, setPhotosSrcList }) => {

  const handleFiles = e => {
    let files = Array.from(event.target.files)

    const promises = files.map(f => {
      var formData = new FormData();
      formData.append("file", f);
      formData.append("upload_preset", 'wjuxohsi');
      return api.postPhotos(formData)
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => response.data.url)
        setPhotosSrcList(photosSrcList.concat(data))
      }).catch(err => console.warn('Error uploading picture', err));
  }

  var uploadButton;
  if(photosSrcList.length >= 5) {
    uploadButton = <div className='my-3.5'></div>
  } else {
    uploadButton = <input type='file' name='image' onChange={handleFiles} multiple/>
  }

  return (uploadButton);
}

export default PhotoUpload;