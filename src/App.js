
import './App.css';
import Form from './Components/formComponent';
import Navbar from './Components/NavBarComponent';

function App() {
  return (
    <div className="App">
      
      
        <Navbar/>
     <div className="Content">
      
      <h3 style={{fontSize:"60px",fontWeight:"bold", color:"#cd5b45", backgroundColor:"#9ad14b" , borderRadius:"10px", marginBottom:"20px"}}>Subscribe for our mailing list!</h3>
     <div className="form-container">
       <Form/>
       </div>
     </div>
         
     
    
    </div>
  );
}

export default App;
