import React from 'react'
import SearchIcon from "@material-ui/icons/Search"

export default function Search({handleSubmit, handleChange}){
    return(
        <div className="search">
            <div className="searchInputs">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} placeholder='Search for Pokemon'/>
                </form>
                <div className="searchIcon">
                    <a><SearchIcon/></a>
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}