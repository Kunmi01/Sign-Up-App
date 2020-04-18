import React from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SignUp />
    </div>
  );
};

export default App;
