import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

export default function App() { // default export
  return (
    <>
      <Header />
      <Header />
      <Counter />
      <UserProfile name="Mahendra" age="25" place="Delhi" />
      <UserProfile name="Deepak" age="No idea" place="BLR" />
      <UserProfile name="Vinay" age="30" place="Tamil Nadu" />
      <UserProfile name="Shambhu" age="Don't know" place="LA" />
      <Footer />
      <Footer />
    </>
  );
}


// export function AnotherApp() { // named export
//   return(
//     <h1>I am another function or piece of code</h1>
//   )
// }


