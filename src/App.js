import './App.css';
import './static/Discover.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
        <Footer />
      </div>  
    </Router>  
  );
}

export default App;
