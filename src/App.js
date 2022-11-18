import logo from './logo.svg';
import './App.css';

function App() {
  let cardDetail=[{plan:"free",cost:0,userMem:"Single",limit:5, styling:"info",},{plan:"plus",cost:9,userMem:"5",limit:50,styling:"info2"},{plan:"pro",cost:49,userMem:"Unlimited",limit:150,styling:""}]
 
  return (

    <div className=" row main">
      {cardDetail.map((val)=> <Cardbtn offer={val.plan} price={val.cost} userlimit={val.userMem} value={val.limit} clr={val.styling} />)}
     
    </div>
    
  );


function Cardbtn({ offer, price,userlimit, value ,clr}){
  return(
    <div className="  col-sm-offset-3 col-sm-6 col-md-6 col-lg-4 bt-card">
    <div className="bt-head">
      <p>{offer}</p>
      <h1 className="head">₹{price} <span className="text-size !important">/month</span></h1>

    </div>
    <hr/>
    <div className="cont">
    <p>{userlimit} User</p >
    <p>{value}GB Storage</p>
    <p>Unlimited Public Projects</p>
    <p>Unlimited Public Projects</p>
    <div class={clr}>
    <p>Unlimited Private Projects</p>
    <p>Dedicated Phone Support</p>
    <p>Free Subdomain</p>
    <p>Monthly Status Reports</p>
    </div>
    </div>
    <div className="btn">
      <button>BUTTON</button>
    </div>
  </div>
  )
}
}

export default App;
