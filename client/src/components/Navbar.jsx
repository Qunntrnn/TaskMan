import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/authSlice";
import { MdOutlineSearch } from "react-icons/md";
import NotificationPanel from "./NotificationPanel";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0'>
      <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
        <MdOutlineSearch className='text-gray-500 text-xl' />

        <input
          type='text'
          placeholder='Search....'
          className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div className='flex gap-2 items-center'>
        <NotificationPanel />

        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
