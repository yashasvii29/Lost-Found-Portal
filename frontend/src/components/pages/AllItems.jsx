import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  async function getItems() {
    try {
      let res = await axios.get('http://localhost:8080/allitems');
      // console.log(res);
      setItems(res.data);
      // console.log("Showing items");
      console.log("Whole Data : ", res.data); // Corrected to log res.data
      let array = res.data;
      console.log("Array : ", array);
      filterItems(array);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  function filterItems(items) {
    let lostItemsArr = items.filter((item) => item.type === "lost")
    console.log("LostItems : ", lostItemsArr);
    setLostItems(lostItemsArr)
    let foundItemsArr = items.filter((item) => item.type === "found")
    console.log("FoundItems : ", foundItemsArr);
    setFoundItems(foundItemsArr)

  }

  useEffect(() => {
    getItems();
  }, []);

//   const navigate = useNavigate();
// //   const showItem = (id) => {
// //     navigate(/items/${id});
//   }

  return (
    <div>
      <div>
        <h1 className='text-5xl font-bold text-center pb-4 pt-4'>Lost Items</h1>
        <ul>
          {lostItems.map((item) => (
            <div key={item._id}>
              <li className='mt-4 max-w-4xl m-auto p-4 bg-teal-300 flex border-solid border-2 border-black'>
                <span>
                  <h3 className='text-lg'>{item.name}</h3>
                  <img className='w-48 h-48' src={item.image} alt={item.name} />
                  <p className='font-mono font-bold text-lg uppercase'>{item.desc}</p>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <h1 className='text-5xl font-bold text-center pb-4 pt-4'>Found Items</h1>
        <ul>
          {foundItems.map((item) => (
            <div key={item._id}>
              <li className='mt-4 max-w-4xl m-auto p-4 bg-teal-300 flex border-solid border-2 border-black'>
                <span>
                  <h3 className='text-lg'>{item.name}</h3>
                  <img className='w-48 h-48' src={item.image} alt={item.name} />
                  <p className='font-mono font-bold text-lg uppercase'>{item.desc}</p>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default AllItems;