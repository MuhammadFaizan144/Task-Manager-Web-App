import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import {Route,Routes,Navigate,Outlet,useLocation} from "react-router-dom"

function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Navigate to={'/dashboard'}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
