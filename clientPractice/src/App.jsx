import React from 'react'
import { Routes,Route,Navigate,Outlet,useLocation,replace } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import TaskDetails from './pages/TaskDetails'
import Tasks from './pages/Task'
import Users from "./pages/Users"
import Trash from './pages/Trash'
import User from './pages/Users'
function Layout(){
  const user=""
  const location=useLocation()
  return user ?(

  ):(

  )
}
const App = () => { 
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Navigate to="/dashboard"/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/task' element={<Tasks/>}/>
        <Route path='/completed/:status' element={<Tasks />} />
        <Route path='/in-progress/:status' element={<Tasks />} />
        <Route path='/todo/:status' element={<Tasks />} />
        <Route path='/team' element={<User/>}/>
        <Route path='/trash' element={<Trash/>}/>
        <Route path='/task/:id' element={<TaskDetails/>}/>
      </Route>
      <Route path='/log-in' element={<Login/>}/>
    </Routes>
    </main>

  )
}

export default App