import React from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

function App() {
    return (
        <Router>
            <Header />
            <Footer/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/dashboard/:id' element={<Dashboard />} />
                <Route path='/error500' element={<Error500/>}/>
                <Route path='*' element={<Error404/>} />
            </Routes>
        </Router>
    )
}
export default App

