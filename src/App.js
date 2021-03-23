import './App.css';
import React from 'react';
import axios from 'axios';
import HomeScreen from './components/HomeScreen';


const fetchedHome = [
  {
    title: 'title one',
    description: 'description one',
  },
  {
    title: 'title two',
    description: 'description two',
  },
];

const fetchedTools = [
  {
    title: 'tool 1',
    description: 'description one',
  },
  {
    title: 'tool two',
    description: 'description two',
  },
];



class App extends React.Component {
  state = {
    fetchedHome,
    fetchedTools
  };

  async componentDidMount() {

    const homeRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/tools'
    });

    const toolsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/tools'
    });

    const fetchedHome = homeRes.data;
    const fetchedTools = toolsRes.data;

    this.setState({fetchedHome, fetchedTools});
  }

  render() {
    const {fetchedHome, fetchedTools} = this.state;

    return (
      <div className='App'>
        <HomeScreen content={fetchedHome}/>
      </div>
    );
  }
}

export default App;
