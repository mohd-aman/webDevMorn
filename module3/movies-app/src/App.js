import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchList from './Components/WatchList';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

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
      <NavBar/>
      <Routes>
        <Route path='/' 
              element={<Home 
                          watchList={watchList}
                          setWatchList={setWatchList}
                          handleAddToWatchList={handleAddToWatchList}
                          handleRemoveFromWatchList={handleRemoveFromWatchList}
                          pageNo={pageNo}
                          handleNext={handleNext}
                          handlePrev={handlePrev}
                      />}></Route>
        <Route path='/watchlist' 
              element={<WatchList
                          watchList={watchList}
                          setWatchList={setWatchList}
                          handleRemoveFromWatchList={handleRemoveFromWatchList}
                      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

