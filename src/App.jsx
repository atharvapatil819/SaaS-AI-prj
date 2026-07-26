import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from'./pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import WriteArticle from './pages/WriteArticle';
import BlogTitles from './pages/BlogTitles';
import GenrateImages from './pages/GenrateImages';
import RemoveBackground from './pages/RemoveBackground';
import ReviewResume from './pages/ReviewResume';
import RemoveObjects from './pages/RemoveObjects';
import Community from './pages/Community';
const App = () => {
  return (
    <div>
            <Routes>
                <Route  path='/' element={<Home />}/>
                <Route path='/ai' element={<Layout />}>
                   <Route index element={<Dashboard />} />
                   <Route path='WriteArticles' element={<WriteArticle />} />
                   <Route path='BlogTitles' element ={<BlogTitles />} />
                   <Route path='genrateimages' element ={<GenrateImages />} />
                   <Route path='removebackground' element ={<RemoveBackground />} />
                   <Route path='removeobjects' element ={<RemoveObjects />} />
                   <Route path='reviewresume' element ={<ReviewResume />} /> 
                   <Route path='community' element ={<Community />} /> 
                </Route>
            </Routes>
        </div>
  )
};

export default App;