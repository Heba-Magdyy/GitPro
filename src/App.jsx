import { useState } from 'react'
import AddPage from './Pages/AddPost';
import UpdatePage from './Pages/UpdatePage';
import HomePage from './Pages/HomePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import PostPage from './Pages/PostPage';
import NotFound from "./Pages/NotFound"


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/:id/update' element={<UpdatePage />} />
          <Route path='/:id' element={<PostPage />}/>
          <Route path='*' element={<NotFound />}/>

        </Route>
      </Routes>

    </HashRouter>
  )
}

export default App






