/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useCallback, useState } from 'react';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
  width: 800,
  margin: '1rem auto',
};

const imgCardStyle = {
  display: 'flex',
  width: 200,
  position: 'relative',
  backgroundColor: '#eee',
  padding: 15,
  borderRadius: 5,
  color: '#000',
  margin: 15,
};
const imgDeleteStyle = {
  position: 'absolute',
  top: 7,
  right: 7,
  fontSize: 20,
  padding: 0,
  margin: 'auto 0',
  lineHeight: '20px',
  width: 20,
};
const imgStyle = {
  flexShrink: 0,
  width: 60,
  height: 60,
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 5,
  display: 'block',
  marginRight: 10,
  backgroundColor: '#aaa',
};

const imgNameStyle = {
  margin: 'auto 0',
  textAlign: 'left',
};

export default function FileSelector({ multiple }) {
  const [filesArray, setFilesArray] = useState([]);

  const onChange = useCallback((e) => {
    const newFiles = e.target.files;
    console.log('newFiles', newFiles);
    const filesArr = Array.prototype.slice
      .call(newFiles)
      .map((file) => ({ name: file.name, path: file.path }));
    const filesStr = filesArr.map((file) => file.path).join(',');
    setFilesArray(filesArr);
  }, []);

  const removeFile = useCallback(
    (f) => {
      setFilesArray([...filesArray.filter((x) => x !== f)]);
    },
    [filesArray]
  );

  return (
    <div style={styles}>
      <div>
        <label className="custom-file-upload" htmlFor="input-upload">
          <input
            id="input-upload"
            type="file"
            multiple={multiple}
            onChange={onChange}
          />
        </label>
      </div>
      <div style={cardsContainerStyle}>
        {filesArray.map((file, index) => (
          <figure key={index.toString()} style={imgCardStyle}>
            <button
              key={index.toString()}
              type="button"
              onClick={() => removeFile(file)}
              style={imgDeleteStyle}
            >
              &times;
            </button>
            <img src={`file://${file.path}`} alt={file.name} style={imgStyle} />
            <p style={imgNameStyle}>{file.name}</p>
          </figure>
        ))}
      </div>
    </div>
  );
}
