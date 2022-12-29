
import './App.css';
import Simplecard from './Components/Simplecard';
import Navbar from './Components/Navbar';
import Product from './Components/Prouduct';
import Todolist from './Components/Todolist';
import MyButton from './Components/MyButton';
import Test from './Components/Test';
import {useState} from 'react'


function App() {

  let [count ,setCount]= useState(0);

  const handleincrement = () => {
    //count++;
    setCount(count+1)
    
  };
  // const myJsx = (
    // <div>
    {/* <h2 style={{color:'purple'}}>Hey</h2> */}
     {/* </div> */}
  // )
  // function myalert() {
  //   alert("Hello Tharindu");
  // }
  console.log(count)
  console.log('Renderind');
  // const person = {
    // name:"Tharindu",
    // valu:"28",
  // }

  return (
    <div className="" >
      {count}<br></br>
      <button onClick={handleincrement}>Increment</button>
      
    </div>
  );
}

export default App;
