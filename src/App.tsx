import React, {FC, createContext} from 'react';
import './App.css';
import { HairColor } from './components/Person';
import Person from './components/Person'

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Tony Stark",
    age: 52,
    country: "USA"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person 
          name="Nicklas" 
          age={26} 
          email="nick@gmail.com"
          hairColor={HairColor.Brown}
        />
      </div>
    </AppContext.Provider>
  );
}

/* const name: string = "Nicklas"
const age: number = 26
const isMarried: boolean = false

const getName = (name: string): number => {
  if (name === "Nicklas") {
    return 26
  } else {
    return 0
  }
};

  return (
    <div className="App">
      {name}
      <br />
      {age}
      <br />
      {isMarried}
    </div>
  );
} */

export default App;