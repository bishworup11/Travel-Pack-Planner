import React from "react";
import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  togglePacked,
  handleClearList,
}) {
  const [sortBy, setSortBy] = React.useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="flex flex-col items-center justify-between bg-orange-900 text-yellow-200 p-10 gap-2">
      <div>
        <select
          className="text-lg bg-yellow-100 text-amber-900 px-10 py-3 mx-2 rounded-md uppercase"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button
          className="mt-2 md:mt-0 text-lg bg-yellow-100 text-amber-900 px-10 py-3 mx-2 rounded-md uppercase"
          onClick={handleClearList}
        >
          Clear Lists
        </button>
      </div>

      <ul className="flex flex-col sm:flex-row gap-2 flex-wrap justify-center sm:justify-between items-center">
        {sortedItems.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            togglePacked={togglePacked}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
