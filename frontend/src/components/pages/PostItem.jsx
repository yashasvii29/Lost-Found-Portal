import React from 'react'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function PostItem() {

  let navigate = useNavigate();
  let itemNameRef = useRef();
  let itemImageRef = useRef();
  let itemTypeRef = useRef();
  let itemDescRef = useRef();


  const addItem = async (e) => {

    e.preventDefault();
    const name = itemNameRef.current.value;
    const image = itemImageRef.current.value;
    const desc = itemDescRef.current.value;
    const type = itemTypeRef.current.value;


    try {
      let res = await axios.post('http://localhost:8080/additems', { name, image, type, desc });
      console.log(res);
      navigate('/');
    }
    catch (e) {
      console.log('cannot add a new item at this moment ');
    }
    console.log(itemNameRef.current.value);
    console.log(itemImageRef.current.value);
    console.log(itemTypeRef.current.value);
    console.log(itemDescRef.current.value);
  }

  return (
    <div>
      <h1 className='text-center text-5xl font-bold pt-8'>Add Item</h1>
      <form onSubmit={addItem} action="" className='p-10 bg-red-300 w-96 shadow-cyan-500/50 rounded-2xl m-auto mt-16 border-solid border-8 border-red-950 '>
        <div className='mt-1'>
          <label className='block m-1' htmlFor="item-name">Item name</label>
          <input type="text" id='item-name' placeholder="Item name" ref={itemNameRef} />
        </div>

        <div className='mt-1'>
          <label className='block m-1' htmlFor="image">Image</label>
          <input type="text" id='image' placeholder="Item name" ref={itemImageRef} />
        </div>

        <div className='mt-1'>
          <label className='block m-1' htmlFor="lost">Lost</label>
          <input type="radio" id='lost' name='itemType' value="lost" ref={itemTypeRef} />

          <label className='block m-1' htmlFor="found">Found</label>
          <input type="radio" id='found' name='itemType' value="found" ref={itemTypeRef} />
        </div>

        <div className='mt-4'>
          <label className='block m-1' htmlFor="description">Description</label>
          <textarea className='border-box focus:outline-none container' name="" id="description" cols="15" rows="4" placeholder="Description" ref={itemDescRef}></textarea>
        </div>

        <button className='border-solid border-4 text-xl border-sky-500 font-bold py-2 px-4 hover:bg-blue-400 hover:border-black bg-slate-800 mt-3 text-white hover:text-black'> Add Item</button>
      </form>
    </div>
  )
}

export default PostItem