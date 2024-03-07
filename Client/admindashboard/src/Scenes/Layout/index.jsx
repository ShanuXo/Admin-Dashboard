import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';//allow us to have template layout
import { useSelector } from 'react-redux';
import Navbar from 'Components/Navbar';
import Sidebar from 'Components/Sidebar';


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return <Box  display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
  <Sidebar 
    isNonMobile ={isNonMobile}
    drawerWidth="250px"
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
  />
    <Box>
      <Navbar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </Box>
  </Box>
}

export default Layout;