import React from 'react'
import { MdDashboard, MdOutlineAddTask, MdOutlinePendingActions, MdSettings, MdTaskAlt } from 'react-icons/md'
import { FaTasks, FaTrashAlt, FaUsers } from 'react-icons/fa'
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation,Link} from 'react-router-dom'
import { setOpenSidebar } from '../redux/slices/authSlice'
import clsx from 'clsx'
// Explanation:
// React → Used to build this component.
// react-icons → Provides all the icons you’re displaying beside the menu labels.
// useSelector, useDispatch → React Redux hooks:
// useSelector → reads data from Redux store (like current user info).
// useDispatch → sends actions to Redux (like closing the sidebar).
// useLocation, Link → React Router hooks:
// useLocation() → tells you the current URL path.
// Link → navigates between pages without reloading.
// setOpenSidebar → Redux action that toggles the sidebar’s visibility.
// clsx → A helper library to conditionally add CSS classes (useful for highlighting the active link).
const linkData = [
    {
        label: "Dashboard",
        link: "dashboard",
        icon: <MdDashboard />,
    },
    {
        label: "Tasks",
        link: "task",
        icon: <FaTasks />,
    },
    {
        label: "Completed",
        link: "completed/completed",
        icon: <MdTaskAlt />,
    },
    {
        label: "In Progress",
        link: "in-progress/in progress",
        icon: <MdOutlinePendingActions />,
    },
    {
        label: "To Do",
        link: "todo/todo",
        icon: <MdOutlinePendingActions />
    },
    {
        label: "Team",
        link: "team",
        icon: <FaUsers />
    },
    {
        label: "Status",
        link: "status",
        icon: <IoCheckmarkDoneOutline />,
    },
    {
        label: "Trash",
        link: "trashed",
        icon: <FaTrashAlt />
    },

]
// Explanation:
// This is an array of objects that define your menu items:
// label → what text to display.
// link → the route path for navigation.
// icon → the icon component to show beside the label.
// So your sidebar items (Dashboard, Tasks, etc.) are created dynamically from this list.
const Sidebar = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname.split("/")[1]
//     Explanation:
// user → gets the current user from Redux (so we can check if they’re admin).
// dispatch → lets you send Redux actions.
// location.pathname → gives you the full URL path (like /dashboard).
// .split("/")[1] → extracts the first part of the route to know which page is active.
    const sidebarlinks = user?.isAdmin ? linkData : linkData.slice(0, 5)
//     Explanation:
// If the user is an admin, they get all sidebar links.
// If not, they only see the first 5 (non-admin options).
    const closeSidebar = () => {
        dispatch(setOpenSidebar(false))
    }
//     Explanation:
// When a sidebar link is clicked, this function dispatches an action to hide/close the sidebar — typically used on mobile.
    const NavLink = ({ el }) => {
        return (
            <Link to={el.link} onClick={closeSidebar} className={clsx("w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]", path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : "")}>
                {el.icon}
                <span className='hover:text-[#2564ed]'>{el.label}</span>
            </Link>
        )
    }
//     Explanation:
// Each sidebar item is a Link (for routing).
// onClick={closeSidebar} closes the sidebar on click (useful for mobile).
// clsx() → adds dynamic classes:
// Always adds base styling classes.
// Adds blue background + white text if the current path matches that link (shows active link).
// {el.icon} and {el.label} display icon + name.
    return (
        <div className="w-full h-full flex flex-col gap-6 p-5">
            <h1 className="flex gap-1 items-center">
                <p className='bg-blue-600 p-2 rounded-full'>
                    <MdOutlineAddTask className='text-white text-2xl font-black' />
                </p>
                <span className='text-2xl font-bold text-black'>TaskMe</span>
            </h1>
            <div className="flex-1 flex flex-col gap-5 py-8">
                {
                    sidebarlinks.map((link) => (
                        <NavLink el={link} key={link.label} />
                    ))
                }
            </div>
            <div className="">
                <button className='w-full flex gap-2 p-2 items-center text-lg text-gray-800 dark:text-white'>
                    <MdSettings/>
                    <span>Settings</span>
                </button>
            </div>
        </div>
//         Explanation:
// Header (TaskMe logo)
// Shows a blue icon with text “TaskMe”.
// Middle section
// Loops through sidebarlinks and renders a NavLink for each.
// Bottom section
// “Settings” button (not linked yet, but reserved for future use).
    )
}

export default Sidebar