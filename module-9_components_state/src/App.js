
import Greetings from './Components/Greetings';
import WelcomeMessage from './Components/WelcomeMessage';
import Counter from './State&Props/Counter';
import UseCard from './State&Props/UseCard';

function App() {
  return (
    <div className="App">
     
     Function Component
     <Greetings name="sefin" />
     
     <br />
     <br />

     Class Component
     <WelcomeMessage />
    
     <br />
     <br />

     MakingCard with the help of Props in Function Component
     <UseCard name="Sefin" age="22" location="Ahmedabad"  />

     <br />
     <br />

     Displaying Current Count on the screen with help of state 
     <Counter />

    </div>
  );
}

export default App;
