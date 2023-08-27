import React from 'react';
import './index.css'
import Header from './components/Header/Header';
import DataAccess from './components/DataAccess/DataAccess';
import Options from './components/Options/Options';
import { ComponentProvider } from './contexts/component.context';


const App = () => {

  return (
    <div className='container'>
      <ComponentProvider>
        <Header />
        <DataAccess />
        <Options />
      </ComponentProvider>
    </div>
  );
}

export default App;
