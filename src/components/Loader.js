// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="bicycle-loader">
        <div className="wheel rear"></div>
        <div className="wheel front"></div>
        <div className="frame"></div>
      </div>
    </div>
  );
};

export default Loader;