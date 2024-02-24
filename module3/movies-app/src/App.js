import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchList from './Components/WatchList';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  const [watchList,setWatchList] = useState([]);
  
  const handleAddToWatchList = (movieObj)=>{
    // const newWatchList = [...watchList];
    // newWatchList.push(id); 
    const newWatchList = [...watchList,movieObj];
    localStorage.setItem('watchList',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }
  const handleRemoveFromWatchList = (movieObj)=>{
    const newWatchList = watchList.filter((movie)=>{
      return movie.id!==movieObj.id;
    })
    localStorage.setItem('watchList',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' 
              element={<Home 
                          watchList={watchList}
                          setWatchList={setWatchList}
                          handleAddToWatchList={handleAddToWatchList}
                          handleRemoveFromWatchList={handleRemoveFromWatchList}
                      />}></Route>
        <Route path='/watchlist' 
              element={<WatchList
                          watchList={watchList}
                          handleRemoveFromWatchList={handleRemoveFromWatchList}
                      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

