import { useState } from "react";
import { Data } from "./Data.jsx";
import Img from "../google.png";
import Imag from '../img1.png';
import Imagee from '../new.png'
import { useHistory} from 'react-router-dom';

const Practise = () => {

    const history = useHistory();

  const [data, setData] = useState(Data);
  const [displayResult, setDisplayResult] = useState([]);
  const [inputVal, setInput] = useState();
  const [value, setValue] = useState(" ");
  const [valid,setValid]= useState();
  const [bool,setBool] = useState();
  const searchHandler = (event) => {    

    setInput(event.target.value)

    if(event.target.value.match(/^([a-zA-Z\s\d]+)$/)){
    setDisplayResult(
      data.filter((item) => {
        if (event.target.value === "" || event.target.value === " ") {
            setValue(event.target.value)
          return "" ;
          
        } else if (
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
            setValid(true)
            setBool(true);
          setValue(event.target.value);
          return item;
        }
      })
    );
    }else{
        setValid(false);
        alert('No Special Charcter is allowed');
    }
  };

  const setVal = (title) => {
    setInput(title);
     setBool(false)
  };


  const submitHandler =(event)=>{
    event.preventDefault();
    if(valid)
    {
    console.log('yes working');
      history.push(`/desc/${inputVal}`);
    }else{
       // alert('No special charcter is alwwoed or enter atleast 1 charcter');
    }



  }

  return (
    <div className="container">
         <form onSubmit={submitHandler}>
      <div className='text-end'><a className="text-decoration-none text-black">Gmail  </a>
       <a className="text-decoration-none  m-lg-2 text-black">   Images</a>  
       <a className="text-decoration-none  m-lg-2">   <img className='rounded-3' style={{height:'50px' ,width:'100px'}} src={Imag} ></img></a>
       </div>

     

      <div className="row mt-5 text-center text-capitalize">
        <div className="col-lg-12  mt-5">{ }</div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-md-12"><img src={Img}/></div>
      </div>    
      <div className="row mt-5 align-content-center">
        <div className="col-lg-4 offset-4">
           
          <div className="row" style={{borderRadius:'100px'}}>
            <input
              placeholder="Enter text "
              value={inputVal}
              onChange={searchHandler}
              className=" form-control-lg  mt-5 rounded rounded-3"
              
            />
            
            <div
              className=" col-md-12 overflow-auto bg-light"
              style={{ height: "200px" }}
            >
              {bool?displayResult.map((item, i) => {
                return (
                  <p onClick={() => setVal(item.title)} key={i}>
                    {item.title}
                  </p>
                );
              }):<p>{''}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center mt-3'>
          <div className='col-md-12'>
                   <button className='btn btn-outline-secondary' type='submit'> Google Search </button>
                  { <a className='text-decoration-none' href='https://www.google.com/doodles'> <button className='btn btn-outline-secondary m-lg-2'>I'm Feeling Lucky</button></a> }

                  
          </div>
      </div>
      <div className='row'>
          <div className='col-md-12 text-center'>
              <img src={Imagee} ></img>
          </div>
      </div>
      </form>
    </div>
  );
};

export default Practise;
