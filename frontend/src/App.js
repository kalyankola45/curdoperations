
import { useState } from 'react';
import './App.css';
import Homepage from './Home/Homepage';
import Search from './Home/Form';
import Productservice from './Home/Productservice';
import Form from './Home/Form';

function App() {
  const [show, setshow] = useState(false)
  const [update, setupdate] = useState(false)
  const [currentproduct, setcurrentproduct] = useState({
    name: "",
    category: "Mobile",
    price: "",
    stock: " ",
    orderstatus: "Available",

  })
  return (
    <>
      <button id='showing' onClick={() => setshow(!show)} className='btn btn-primary' >{show === true ? "close":"Addproduct"} </button>
      {!show && <Homepage setshows={setshow} show={show} setupdate={setupdate} update={update} currentproduct={currentproduct} setcurrentproduct={setcurrentproduct} />}
      {show && <Form setshows={setshow} show={show} setupdate={setupdate} update={update} currentproduct={currentproduct} setcurrentproduct={setcurrentproduct} />}

    </>
  );
}

export default App;
