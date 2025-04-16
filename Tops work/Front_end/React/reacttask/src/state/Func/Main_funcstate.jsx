/*

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, 
class components are generally no longer needed.

Although Hooks generally replace class components, there are no plans to remove classes from React.


React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.


React useState Hook

The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
Import useState
To use the useState Hook, we first need to import it into our component.


*/





import React, { useState } from 'react'
import Func_img from './Func_img';

function Main_funcstate() {

  const [data, setData] = useState({
    name: "Sefin Geevarghese",
    number: 1,
    isImage: true
  });

  const [email,setEmail]=useState("sefin@gmail.com");


  const plus = () => {
    setData({ ...data, number: data.number + 1 });
  }
  const minus = () => {
    setData({ ...data, number: data.number - 1 });
  }
  return (
    <div>
      <button onClick={() => setData({ ...data, name: "Akash " })}>Change</button>
      <h1>Hi my name is : {data.name}</h1>

      <button onClick={() => plus()}>+</button>
      <h1>{data.number}</h1>
      <button onClick={() => minus()}>-</button>

      <br />
      <hr />
      <br />

      <button onClick={() => setData({...data, isImage: false })}>Hide</button>
      <button onClick={() => setData({...data, isImage: true })}>Show</button>
      <button onClick={() =>setData({...data, isImage: !data.isImage })}>Hide/Show</button>

      {
        data.isImage ? <Func_img /> : null
      }

      <br />
      <hr />
      <br />

      <button onClick={()=>setEmail("sefin@yahoo.com")}>Change</button>
      <h1>My email is :{email}</h1>


      <br />
      <hr />
      <br />

    </div>
  )
}

export default Main_funcstate