import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CardWrapper from './components/CardWrapper/index.jsx';
import { Layout } from './Layout/Layout/Layot.jsx';
import { Autos } from './pages/Autos/index.jsx';
import { HomeProvider } from './pages/Home/HomeProvider.jsx';
import Home from './pages/Home/index.jsx';
import { MainForm } from './components/NewForm/MainForm/index.jsx';

function App() {
  return (
    <HomeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/autos/:id' element={<Autos />} />
            <Route path='/autos' element={<CardWrapper />} />
            <Route path='/Form' element={<MainForm />} />
          </Route>
          <Route
            path='/*'
            element={
              <>
                <p>404Not Found</p>
              </>
            }
          />
        </Routes>
      </Router>
    </HomeProvider>
  );
}

export default App;
