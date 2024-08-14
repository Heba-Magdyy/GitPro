import { useState } from 'react'
import AddPage from './Pages/AddPost';
import UpdatePage from './Pages/UpdatePage';
import HomePage from './Pages/HomePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import PostPage from './Pages/PostPage'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/:id/update' element={<UpdatePage />} />
          <Route path='/:id/postPage' element={<PostPage />}/>

        </Route>
      </Routes>

    </HashRouter>
  )
}

export default App






