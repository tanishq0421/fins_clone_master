import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Home';
import Discover from './Discover';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/discover' element={<Discover />} />
              {/* <Home></Home>/ */}
          </Routes>    
        </div>
      </div>  
    </Router>  
  );
}

export default App;
