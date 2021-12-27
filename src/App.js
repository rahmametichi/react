
import './App.css';
import './style.css';
import myWonderfulImage from "./development.jpg"
function App() {
  return (
    <div className="App">
       <h1 class="title" style={{color:"red" }}><b><i>Development</i></b></h1>
       <br></br>
       <header className="App-header">
      <img src="/images.jpeg" alt="myimage"/>
      <br></br>
      <img src={myWonderfulImage} alt ='myImage' width={1000} height={900} />
    
      <br></br>
      
  
      </header>
   
     
    </div>
  );
}

export default App;
