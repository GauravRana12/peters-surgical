import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { Flex } from '@chakra-ui/react';
import Home from './components/Home';
import { useState } from 'react';


function App() {
  const[cat,setCat]=useState('Category-1')
  return (
    <div className="App">
    <Flex>
    <Sidebar />
    <Home cat={cat}/>
    </Flex>
      
      
    </div>
  );
}

export default App;