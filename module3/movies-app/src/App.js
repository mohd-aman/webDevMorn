import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchList from './Components/WatchList';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { MovieContext } from './Components/MovieContext';

function App() {
  const [watchList,setWatchList] = useState([]);
  const [pageNo,setPageNo] = useState(1);

  const handleNext = function(){
    setPageNo(pageNo+1);
  }

  const handlePrev = function(){
    if(pageNo>1)
      setPageNo(pageNo-1);
  }
  
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

  useEffect(()=>{
    let watchListFromLocalStorage = JSON.parse(localStorage.getItem('watchList'));
    if(watchListFromLocalStorage === null){
      return;
    }
    setWatchList(watchListFromLocalStorage);
  },[]) // it will work only on mounting phase

  return (
    <BrowserRouter>
      <MovieContext.Provider value={{watchList,setWatchList,handleAddToWatchList,
                                      handleRemoveFromWatchList,pageNo,handleNext,
                                      handlePrev}}>
        <NavBar/>
        <Routes>
          <Route path='/' 
              element={<Home />}></Route>
          <Route path='/watchlist' 
              element={<WatchList />}></Route>
          </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;

