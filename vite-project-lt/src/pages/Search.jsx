import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import './Search.css'
const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (value) => {
        setSearchValue(value); // Cập nhật giá trị tìm kiếm
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="search-content">
                <div className="search-content-left">
                    <Filters></Filters>
                    {/* <h2>Search Results for: {searchValue}</h2> Hiển thị giá trị tìm kiếm */}
                </div>
                <div className="search-content-right">
                    <Pagination></Pagination>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Search