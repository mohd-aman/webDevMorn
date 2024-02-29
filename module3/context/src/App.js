import './App.css';
import Family1 from './prop_drill/Family'; //prop drilling
import Family2 from './contextComponent/Family'; // context 
import { FamilyContext } from './contextComponent/FamilyContext';

function App() {

  const familyInfo = {
    familyName : "The Griffins",
    onlyForParents:()=>{
      return "Info for parents"
    },
    onlyForChild:()=>{
      return "Info for Child"
    },
    onlyeForGrandChildren:()=>{
      return "Info for GrandChild"
    }
  }

  return (
    // <Family1 info={familyInfo}/>
      <FamilyContext.Provider value={familyInfo}>
        <Family2/>
      </FamilyContext.Provider>
    );
}

export default App;
