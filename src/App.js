
import './App.css';
import Simplecard from './Components/Simplecard';
import Navbar from './Components/Navbar';
import Product from './Components/Prouduct';
import Todolist from './Components/Todolist';
import MyButton from './Components/MyButton';
import Test from './Components/Test';
import {useState} from 'react'


function App() {

  let [count, setCount] = useState(0);
  const [position , setPosition] = useState({
    x: 0,
    y : 5
  })

  const handleincrement = () => {
    //count++;
    setCount(count+1)
    
  };

  const positions= () => {
    setPosition({
      
      ...position,
      x: 4,
      
    })
  }
  // const myJsx = (
    // <div>
    {/* <h2 style={{color:'purple'}}>Hey</h2> */}
     {/* </div> */}
  // )
  // function myalert() {
  //   alert("Hello Tharindu");
  // }
  // console.log(count)
  // console.log('Rendering');
  // const person = {
    // name:"Tharindu",
    // valu:"28",
  // }

  return (
    <div className="" >
      {count}<br></br>
      x: {position.x}<br></br>
      y:{position.y}<br></br>
      <button onClick={handleincrement}>Increment</button>
      <br></br>
      <button onClick={positions}>POSITION</button>
    </div>
  );
}

export default App;
