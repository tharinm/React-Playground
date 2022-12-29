
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

  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const handleincrement = () => {
    //count++;
    const arr = numbers.map((num) => {
      return num * 2;
    });
    setNumbers(arr);
    
  };

  // const positions= () => {
    // setPosition({
      // 
      // ...position,
      // x: 4,
      // 
    // })
  // }
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
  console.log(numbers);

  return (
    <div className="" >
      {/* {count}<br></br> */}
      {/* x: {position.x}<br></br> */}
      {/* y:{position.y}<br></br> */}
      <button onClick={handleincrement}>Update Array</button>
      <br></br>
     
    </div>
  );
}

export default App;
