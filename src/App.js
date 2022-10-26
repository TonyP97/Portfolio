import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  let location = useLocation();
  return (
    <div className="App">
    <Routes>
      {/* <Route exact path= '/' element={<LandingPage/>}/> */}
      <Route exact path= '/' element={<Home/>}/>
      <Route element={<PageNotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
