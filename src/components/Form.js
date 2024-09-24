import React from 'react';
import { useState } from "react";

export default function Form({addItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
       
        e.preventDefault();

        if(!description) return ;

        const newItem = {
            description,
            quantity,
            packed: false, //default value
            id: Date.now()
        }
        addItem(newItem);
        setDescription("");
        setQuantity(1);
        
    }

  return (
    <form 
    className="py-8 px-4 lg:py-11 flex flex-col lg:flex-row justify-center items-center gap-4 bg-custtomColor2 w-full  mx-auto"
    onSubmit={handleSubmit}
    >

      <h3 className="text-xl lg:text-2xl font-bold text-center lg:text-left lg:mr-11 text-amber-950">
        What do you need for your 😍 trip?
      </h3>

      <select className="text-lg lg:text-xl bg-yellow-100 text-amber-950 px-6 lg:px-10 py-2 lg:py-3 mx-2 rounded-md font-sans"
        value={quantity}
        onChange={(e)=>setQuantity(Number(e.target.value))}
      >
      
        {
          Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))
        }
        
      </select>

      <input
        className="text-lg lg:text-xl bg-yellow-100 text-amber-950 px-6 lg:px-10 py-2 lg:py-3 mx-2 rounded-md font-sans"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button className="bg-green-300 text-lg lg:text-xl px-6 lg:px-10 py-2 lg:py-3 mx-2 rounded-md font-sans text-amber-900">
        ADD
      </button>
    </form>
  );
}
