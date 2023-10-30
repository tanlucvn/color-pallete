import React from 'react'
import "./index.css"
import SidebarButton from './sidebarButton'
import { FaSignOutAlt } from 'react-icons/fa'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function Sidebar() {
    const image = "https://api.dicebear.com/7.x/thumbs/svg?seed=Bandit"

    return (
        <div className='sidebar-container'>
            <img src={image}
                className='profile-img'
                alt='profile'
            />
            <div>
                <SidebarButton title="Home" to="/" icon={<GoHome />} loc={<GoHomeFill />} />
                <SidebarButton title="None" to="/none1" icon={<AiOutlineHeart />} loc={<AiFillHeart />} />
                <SidebarButton title="None" to="/none2" icon={<AiOutlineHeart />} loc={<AiFillHeart />} />
                <SidebarButton title="None" to="/none3" icon={<AiOutlineHeart />} loc={<AiFillHeart />} />
                <SidebarButton title="None" to="/none4" icon={<AiOutlineHeart />} loc={<AiFillHeart />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}
