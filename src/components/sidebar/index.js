import React from 'react'
import "./index.css"
import SidebarButton from './sidebarButton'
import { MdFavorite, MdHome } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'

export default function Sidebar() {
    const image = "https://api.dicebear.com/7.x/thumbs/svg?seed=Bandit"

    return (
        <div className='sidebar-container'>
            <img src={image}
                className='profile-img'
                alt='profile'
            />
            <div>
                <SidebarButton title="Home" to="/" icon={<MdHome />} />
                <SidebarButton title="None" to="/none1" icon={<MdSpaceDashboard />} />
                <SidebarButton title="None" to="/none2" icon={<FaGripfire />} />
                <SidebarButton title="None" to="/none3" icon={<FaPlay />} />
                <SidebarButton title="None" to="/none4" icon={<MdFavorite />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}
