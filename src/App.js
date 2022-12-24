
import './App.css';
import Simplecard from './Components/Simplecard';
import Navbar from './Components/Navbar';
import Product from './Components/Prouduct';

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
      <h1>My My Products</h1>
      <Product
        name="Apple"
        price={150}
        stats={{
          views: 20,
          purchase: 10,
        }}
        description="ddfsdf"
      />
      <Product name="Banana" price={100} description="ddfsdf" />
      <Product name="Avacado" price={200} description="ddfsdf" />
      <Product name="Gauava" price={300} description="ddfsdf" />
      <Product name="PineApple" price={740} description="ddfsdf" />
    </div>
  );
}

export default App;
