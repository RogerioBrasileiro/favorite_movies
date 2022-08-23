import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import UserView from './pages/UserView';


function App() {
  return (
    <>
      <h1>OLÁ MUNDO</h1>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<UserView />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </>


  );
}

export default App;
