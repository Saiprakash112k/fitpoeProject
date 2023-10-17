import React from 'react';
import './App.css';
import Sidebar from './SideBar/Sidebar';
import SearchAppBar from './Search/SearchBar';
import SecA from './SectionA/SecA';
import SecB from './SectionB/SecB';
import SecC from './SectionC/Sec';
function App() {

  return (
    <div className="App">

      <div className='d-flex'>
          <Sidebar />
        <div className='container'>
          <SearchAppBar />
          <SecA />
          <SecB />
          <SecC />
        </div>
      </div>
    </div>
  );
}

export default App;
