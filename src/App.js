import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Engine from './Autofiil/Engine';
import Practise from './Autofiil/Practise';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Descripiton from './Autofiil/Description';

function App() {
  return (
    <div className="text-danger">
     
     <div className='row'>

       <div className='col-lg-4'>

    <Link to='/' className='btn btn-primary m-lg-3 '>Practise</Link>

       </div>
     </div>
    {/* <Practise/> */}

    <Switch>
      <Route exact path='/' component={Practise}/>
      <Route path='/desc/:title' component={Descripiton}></Route>
    </Switch>
    </div>
  );
}

export default App;
