import React, { useState } from "react";

export default function SearchBar() {
  const items = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h3>Search Filter</h3>
      <input type="text" placeholder="Search items" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
      <ul>{filteredItems.length > 0 ? filteredItems.map((item, index) => <li key={index}>{item}</li>) : <li>No results found</li>}</ul>
    </div>
  );
}
