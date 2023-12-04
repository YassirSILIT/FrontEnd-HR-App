import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddEmployee from './employees/AddEmployee';
import EditEmployee from './employees/EditEmployee';
import ViewEmployee from './employees/ViewEmployee';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editemployee/:id' element={<EditEmployee />} />
          <Route path='/viewemployee/:id' element={<ViewEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
