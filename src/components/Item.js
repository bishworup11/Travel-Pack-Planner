
import React from 'react'

export default function Item({item,deleteItem,togglePacked}) {
//    console.log(item);

  return (
    <li className="flex flex-wrap items-center gap-5">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      <span>{item.quantity} {item.description} </span>
      <button className="cursor-pointer text-3xl p-3 translate-y-1 "
       onClick={() => deleteItem(item.id)}
       >
        ❌
       </button>
    </li>
  )
}
