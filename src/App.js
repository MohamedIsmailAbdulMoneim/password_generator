import React, { useState } from 'react';
import './index.css'
import Header from './components/Header/Header';
import DataAccess from './components/DataAccess/DataAccess';
import Options from './components/Options/Options';


const App = () => {

  return (
    <div className='container'>
      <Header />
      <DataAccess />
      <Options  />
    </div>
  );
}

export default App;
