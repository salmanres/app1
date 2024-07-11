import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './modules/auth/Login';
import Register from './modules/auth/RegisterPage';
import Errorpage from './modules/shared/Errorpage';
import LandingPage from './modules/dashboard/LandingPage';
import MainPage from './modules/dashboard/MainPage';
import HomePage from './modules/dashboard/HomePage';
import HomePage2 from './modules/dashboard/HomePage2';
import Axios from './modules/dashboard/Axios';
import UserDetails from './modules/dashboard/UserDetails';
import NewsApi from './modules/dashboard/NewsApi';
import Charts from './modules/dashboard/Charts';
import RegisterPage from './modules/auth/RegisterPage';
import Validation from './modules/dashboard/Validation';
import NewsDetails from './modules/dashboard/NewsDetails';
import LazyLoading from './modules/dashboard/LazyLoading';
import MovieDetails from './modules/dashboard/MovieDetails';
import ReduxPage from './modules/dashboard/redux/ReduxPage.js';
import { Provider } from 'react-redux';
import { appStore } from './modules/dashboard/redux/store.js';
import FoodCart from './modules/dashboard/FoodCart.js';
import Filter from './modules/dashboard/Filter.js';
import VinayakAssociates from './modules/dashboard/VinayakAssociates.js';
import VehicleDetails from './modules/dashboard/VehicleDetails.js';

const lazyLoadingPage = lazy(() => import("./modules/dashboard/LazyLoading.js"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='MainPage' element={<MainPage />}>
            <Route path='HomePage' element={<HomePage />} />
            <Route path='HomePage/MovieDetails/:id' element={<MovieDetails />} />
            <Route path='HomePage2' element={<HomePage2 />} />
            <Route path='Axios' element={<Axios />} />
            <Route path='Axios/UserDetails/:id' element={<UserDetails />} />
            <Route path='NewsApi' element={<NewsApi />} />
            <Route path='NewsApi/NewsDetails/:id' element={<NewsDetails />} />
            <Route path='Charts' element={<Charts />} />
            <Route path='RegisterPage' element={<Validation />} />
            <Route path='Validation' element={<Validation />} />
            <Route path='LazyLoading' element={<Suspense fallback={<h1 className='Loading'>Loading Data...</h1>}><LazyLoading /></Suspense>} />
            <Route path='ReduxPage' element={<ReduxPage />} />
            <Route path='FoodCart' element={<FoodCart />} />
            <Route path='Filter' element={<Filter />} />
            <Route path='VinayakAssociates' element={<VinayakAssociates />} />
            <Route path='VinayakAssociates/VehicleDetails/:id' element={<VehicleDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
