
import './App.css';
import Header from "./components/Header"
import Battle from './components/battle/Battle';
import Pagination from './components/pagination/Pagination';


function App() {
  return (
    <div className="App">
      <Header/>
     
      {/* <Battle/> */}
      
     <Pagination/>

    </div>
  );
}

export default App;
