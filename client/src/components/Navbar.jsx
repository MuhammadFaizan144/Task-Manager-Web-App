import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenSidebar } from '../redux/slices/authSlice'
// What’s happening here:
// React → allows you to build the Navbar component.
// MdOutlineSearch → a search icon from the react-icons library.
// useDispatch and useSelector → React-Redux hooks for interacting with the Redux store.
// useSelector → used to read data from Redux.
// useDispatch → used to send (dispatch) actions to Redux.
// setOpenSidebar → an action creator from your authSlice. It probably controls whether the sidebar is open or closed.
const Navbar = () => {
    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
//     👉 Explanation:
// const { user } = useSelector((state) => state.auth)
// → gets the user data from Redux state (like the logged-in user info).
// const dispatch = useDispatch()
// → gives you the function to send actions to Redux (like dispatch(setOpenSidebar(true))).
  return (
    <div className='flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0'>
        <div className="flex gap-4">
            <button onClick={()=>dispatch(setOpenSidebar(true))} className='text-2xl text-gray-500 block md:hidden'>
                ☰
            </button>
            <div className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
                <MdOutlineSearch className='text-gray-500 text-xl'/>
                <input type="text" placeholder='search' className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'/>
            </div>
        </div>
        {/* Hamburger button (☰)
            Visible only on mobile (md:hidden hides it on medium+ screens).
            When clicked → calls dispatch(setOpenSidebar(true))
            → updates Redux to open sidebar.
            Search bar
            MdOutlineSearch icon shown inside.
            input field for searching (currently not functional, just UI).
            Styled using Tailwind for rounded background and spacing. */}
        <div className="flex gap-2 items-center">
            {/* <NotificationPanel/> */}
            <UserAvatar/>
        </div>
    </div>
  )
}

export default Navbar