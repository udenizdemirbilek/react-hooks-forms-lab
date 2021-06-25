import React from "react";

function Filter({ onCategoryChange, onSearchChange, search, select }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange} value={select}>
        <option defaultValue="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
