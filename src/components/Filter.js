import Button from "react-bootstrap/Button";
import { useState } from 'react';

const Filter = ({ handleFilter }) => {
    const [searchInput, setSearchInput] = useState("");

    function handleSearch() {
        handleFilter(searchInput);
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            handleSearch();
            setSearchInput("");
        }
    }

    function handleChange(e) {
        setSearchInput(e.target.value);
        handleSearch();
    }


    return (
        <div
            className="d-flex justify-content-center"
            style={{ marginTop: "50px" }}
        >
            <input
                className="w-50"
                type="text"
                placeholder="Search for a movie"
                style={{ height: "50px", fontSize: "20px", padding: "10px 20px" }}
                onChange={handleChange}
                value={searchInput}
                onKeyDown={handleKeyPress}
            />
            <Button variant="primary" onClick={handleSearch}>
                Search
            </Button>{" "}
        </div>
    )
};

export default Filter;
