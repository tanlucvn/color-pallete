import React, { useEffect, useState } from 'react'
import "./index.css"
import SidebarButton from './sidebarButton'
import { MdFavorite, MdHome } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'

export default function Sidebar() {
    const [image, setImage] = useState("https://api.dicebear.com/7.x/thumbs/svg?seed=Bandit");

    return (
        <div className='sidebar-container'>
            <img src={image}
                className='profile-img'
                alt='profile'
            />
            <div>
                <SidebarButton title="Home" to="/" icon={<MdHome />} />
                <SidebarButton title="None" to="/" icon={<MdSpaceDashboard />} />
                <SidebarButton title="None" to="/" icon={<FaGripfire />} />
                <SidebarButton title="None" to="/" icon={<FaPlay />} />
                <SidebarButton title="None" to="/" icon={<MdFavorite />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}
