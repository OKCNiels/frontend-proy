
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AboutMe from '../Pages/AboutMe'
import Profile from '../Pages/Profile'
import Error404 from '../Pages/Error/Error404'
import NavigateApp from './NavigateApp'

const RouterApp = () => {
  return (
    <>
      
        <NavigateApp></NavigateApp>
        <Routes>
            <Route element={<ProtectedRoute  />}>
                <Route path='/about-me' element = {<AboutMe></AboutMe>}></Route>
                <Route path='/profile/:name' element = {<Profile></Profile>}></Route>
                <Route path='/*' element = {<Error404></Error404>}></Route>
            </Route>

        </Routes>
    </>
  )
}

export default RouterApp