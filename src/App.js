import './App.css';
import { useState,useEffect } from "react";
import Footer from './components/Footer';
import Form from './components/Form';
import HeaderPart from './components/HeaderPart';
import PackingList from './components/PackingList';

function App() {
  

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("packingListItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

   // Save the updated items list to localStorage whenever 'items' state changes

  useEffect(() => {
    localStorage.setItem("packingListItems", JSON.stringify(items));
  }, [items]);

    //it adds a new item to the list
    function addItem(item){
      setItems([...items,item]);
    }

   // function that updates the quantity of an item
    function deleteItem(id){
      setItems(items.filter((item)=>item.id !== id));
    }

   // it is a function that toggles the packed status of an item
    function togglePacked(id){
      setItems(items.map((item)=>
        item.id === id ? {...item,packed:!item.packed} : item
    )
    );
    }

   // it is a function that clears the list of items
    function handleClearList() {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );
  
      if (confirmed) setItems([]);
    }
  

  return (
    <div className="App">
     <HeaderPart  />
     <Form addItem={addItem}/>
     <PackingList
      items={items}
      deleteItem={deleteItem}
      togglePacked={togglePacked}
      handleClearList={handleClearList}
      
     /> 
     <Footer items={items}/>
     
    </div>
  );
}

export default App;
