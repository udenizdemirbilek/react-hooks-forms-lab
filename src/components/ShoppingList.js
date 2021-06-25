import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function onItemFormSubmit (item) {
      const newItem = {
      ...item
    };
    setItems([...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || selectedCategory === "") return true;
    return item.category === selectedCategory;
  });

  const searchItemsToDisplay = itemsToDisplay.filter(item => {
    return item.name.toUpperCase().match(search.toUpperCase());
  })

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} select={selectedCategory}/>
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
