import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemName, setItemName] = useState("")
  
  function handleItemCategoryChange (event) {
    setItemCategory(event.target.value);
  }

  function handleItemNameChange (event) {
    setItemName(event.target.value);
  }

  

  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit( {"category" :itemCategory, "id": uuid(), "name":itemName})}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleItemCategoryChange}>
          <option defaultValue="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
