import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';//allow us to have template layout
import { useSelector } from 'react-redux';
import Navbar from 'Components/Navbar';
import Sidebar from 'Components/Sidebar';
import { useGetUserQuery } from 'State/api';


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); //get the current logged in user's id 
  const { data } = useGetUserQuery(userId);
  console.log("data",data);

  return <Box  display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
  <Sidebar
  //Here if the data is undefined then we sending empty option
    user = { data || {}}
    isNonMobile ={isNonMobile}
    drawerWidth="250px"
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
  />
    <Box flexGrow={1}>
      <Navbar
        user = { data || {}}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </Box>
  </Box>
}

export default Layout;
