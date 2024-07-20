import React, { Fragment } from 'react'
import Navbar from './components/mainNavigation/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PostItem from './components/pages/PostItem'
import AllItems from './components/pages/AllItems'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
// import ShowItem from './components/pages/ShowItem'
// import EditItem from './components/pages/EditItem'


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        {/* <main> */}
        <Routes>
          <Route path='/new' element={<PostItem />} />
          <Route path='/' element={<AllItems />} />
          <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          {/* <Route path='/quotes/:id' element={<ShowItem />} />
        <Route path='/quotes/:id/edit' element={<EditItem />} /> */}
        </Routes>
        {/* </main> */}
      </Fragment>
    </BrowserRouter>
  )
}

export default App