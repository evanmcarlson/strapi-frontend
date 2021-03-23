import './App.css';
import React from 'react';
import HomeScreen from './components/HomeScreen';

const home = [
  {
    title: 'title one',
    description: 'description one',
  },
  {
    title: 'title two',
    description: 'description two',
  },
];

const tools = [
  {
    title: 'tool 1',
    description: 'description one',
  },
  {
    title: 'tool two',
    description: 'description two',
  },
]

function App() {
  return (
    <div className='App'>
      <HomeScreen content={home}/>
    </div>
  );
}

export default App;
