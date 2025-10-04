import React from 'react'
import {MdDashboard,MdOutlineAddTask,MdOutlinePendingActions,MdSettings,MdTaskAlt} from 'react-icons/md'
import {FaTasks,FaTrashAlt,FaUsers} from 'react-icons/fa'
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation } from 'react-router-dom'
import { setOpenSidebar } from '../redux/slices/authSlice'
const linkData=[
    {
        label:"Dashboard",
        link:"dashboard",
        icon:<MdDashboard/>,
    },
    {
        label:"Tasks",
        link:"task",
        icon:<FaTasks/>,
    },
    {
        label:"Completed",
        link:"completed/completed",
        icon:<MdTaskAlt/>,
    },
    {
        label:"In Progress",
        link:"in-progress/in progress",
        icon:<MdOutlinePendingActions/>,
    },
    {
        label:"To Do",
        link:"todo/todo",
        icon:<MdOutlinePendingActions/>
    },
    {
        label:"Team",
        link:"team",
        icon:<FaUsers/>
    },
    {
        label: "Status",
        link: "status",
        icon: <IoCheckmarkDoneOutline />,
    },
    {
        label:"Trash",
        link:"trashed",
        icon:<FaTrashAlt/>
    },

]
const Sidebar = () => {
    const{user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    const location=useLocation()
    const path=location.pathname.split("/")[1]
    const sidebarlinks=user?.isAdmin?linkData:linkData.slice(0,5)
    const closeSidebar=()=>{
        dispatch(setOpenSidebar(false))
    }
    const NavLink=({el})=>{
        return(
            <Link>
                
            </Link>
        )
    }
  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
        <h1 className="flex gap-1 items-center">
            <p className='bg-blue-600 p-2 rounded-full'>
                <MdOutlineAddTask className='text-white text-2xl font-black'/>
            </p>
            <span className='text-2xl font-bold text-black'>TaskMe</span>
        </h1>
        <div className="flex-1 flex flex-col gap-5 py-8">
            {
                sidebarlinks.map((link)=>{
                    <NavLink el={link} key={link.label}/>
                })
            }
        </div>
    </div>
  )
}

export default Sidebar