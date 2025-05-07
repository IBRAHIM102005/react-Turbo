import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout/Layot.jsx';
import CardWrapper from './components/CardWrapper/index.jsx';
import { MainForm } from './components/NewForm/MainForm/index.jsx';
import { Autos } from './pages/Autos/index.jsx';
import { HomeProvider } from './pages/Home/HomeProvider.jsx';
import Home from './pages/Home/index.jsx';

const MainFavorit = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/Favorit'));
    }, 2000);
  });
});

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

            <Route
              path='/fav'
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        position: 'absolute',
                        top: '250px',
                        backgroundColor: 'red',
                      }}
                    >
                      ...Loading main favourite
                    </div>
                  }
                >
                  <MainFavorit />
                </Suspense>
              }
            />
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
