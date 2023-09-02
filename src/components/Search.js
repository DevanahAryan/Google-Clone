import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false, searchTerm }) {
  const [{},dispatch]=useStatevalue();
  const [input, setInput] = useState(searchTerm || "");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // console.log("button clicked >>", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate("/search");
  };
  
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons?(<div className="search_button">
        <Button type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>):(<div className="search_button">
        <Button className="search_buttonHidden" type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button className="search_buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
      </div>)
    } 
    </form>
  );
}

export default Search;
