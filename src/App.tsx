import React from 'react';
import './App.css';
import Header from './components/Body/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
