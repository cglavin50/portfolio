import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="content">
      </div>
    </div>
  );
}

export default App;