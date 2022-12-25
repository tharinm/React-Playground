
import './App.css';
import Simplecard from './Components/Simplecard';
import Navbar from './Components/Navbar';
import Product from './Components/Prouduct';
import Todolist from './Components/Todolist';


function App() {
  const name = "Tharindu";
  
  // const myJsx = (
    // <div>
    {/* <h2 style={{color:'purple'}}>Hey</h2> */}
     {/* </div> */}
  // )
  // function myalert() {
  //   alert("Hello Tharindu");
  // }
  
  // const person = {
    // name:"Tharindu",
    // valu:"28",
  // }

  return (
    <div className="MyProducts">
      {/* <h1 style={{ color: 'red', backgroundColor: 'white' }}>Hello {name} your */}
      {/* age is {8 * 3}</h1> */}
      {/* {myalert()} */}
      {/* { myJsx} */}

      {/* <h1 style={{ color: 'white' }}>Hey try again {person.name} { person.valu}</h1> */}

      <Todolist />
    </div>
  );
}

export default App;
