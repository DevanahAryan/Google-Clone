import React from "react";
import "./SearchPage.css";
import { useStatevalue } from "../components/StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MapIcon from "@mui/icons-material/Map";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState,useEffect } from 'react'

function SearchPage() {

  const [{ term }, dispatch] = useStatevalue();
  // Live APi CALL
  // const {data}= useGoogleSearch(term);

  const data = response;

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons searchTerm={term} />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage_option">
                <MapIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
           About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} for {" "}
            {data?.queries.request[0].searchTerms}
            
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
                  <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}
                  />
                )}
                
                {item.displayLink}</a>
              <a className="seachPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="seacrhPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
