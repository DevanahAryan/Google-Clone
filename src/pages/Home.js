import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="home">
      {/* <h1>This is Home page</h1> */}
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon/>
          <Avatar/>
        </div>
      </div>
      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
        <div className="home_inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  );
};

export default Home;
