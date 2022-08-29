import { useState } from 'react';
import './App.css';
import Search  from './Component/Search';
import Table from './Component/table';
import data from './data'


function App() {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <div className='App'> 
      <Search 
        search = {search}
        setSearch={setSearch}
      />
      <Table
         search = {search}
         setSearch={setSearch}
      />
    </div>
  );
}

export default App;
