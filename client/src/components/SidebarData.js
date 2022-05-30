import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Profile",
        icon: <PersonIcon />,
        link: "/profile"
    },
    {
        title: "History",
        icon: <HistoryIcon />,
        link: "/history"
    },
    {
        title: "Favorite",
        icon: <FavoriteIcon />,
        link: "/favorite"
    }
]