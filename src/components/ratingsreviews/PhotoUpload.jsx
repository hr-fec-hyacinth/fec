import React from 'react';
import { useState, useEffect } from 'react';

const PhotoUpload = ({callback}) => {
  //States:
    //selected files
    //picked files
  const [selectedFile, setSelectedFile] = useState('');

  // button styling
  const buttonCSS = 'block w-full text-sm text-slate-500 bg-emerald-50 rounded-2xl p-3' +
                    'hover:bg-emerald-700 hover:text-slate-100';

  //callback to update Parent Component (with properties, if provided);
   //functionality defined in parent component
   // should return the response of the upload

  //onChangeHandler ->
    // saves file

  //handlesubmission
    // once we have submitted, we post API request,

  return (
    <div>
      Photo Upload
      <label class="block">
        <span class="sr-only">Upload your Photos</span>
        <input type="file" class="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-emerald-100
        "/>
      </label>
    </div>
  )
}

export default PhotoUpload;