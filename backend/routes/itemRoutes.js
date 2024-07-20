const express = require('express');
const router = express.Router()
const Items = require('../models/Item');
// 1st route=> to show all the quotes
router.get('/allitems', async(req,res)=>{
    try{
        let allItems = await Items.find({});
        res.status(200).json(allItems);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})
// successfull status code => 200
// error status code => 400
// 2nd route=> to add a new quote 
router.post('/additems',async(req,res)=>{
    try{
        let {name,image,desc,type,userItem} = req.body;
    await Items.create({name,image,desc,type,userItem});
    res.status(201).json({msg:"new item created successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
    
})

// 3rd route=> to show a paricular quote
router.get('/items/:id',async(req,res)=>{
    try{
        let {id} =req.params;
        const item = await Items.findById(id);
        // console.log(quote);
        res.status(200).json(item);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})

// 4th route=> show the form to edit the quote(particular quote)


router.patch('/items/:id',async(req,res)=>{
    try{
        let {id}=req.params;
        let {name,image,desc,type}=req.body;
        await Items.findByIdAndUpdate(id,{name,image,desc,type,userItem});
        res.status(201).json({msg:"item updated successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})  


router.delete('/items/:id',async(req,res)=>{
    try{
        let {id} =req.params;
        await Items.findByIdAndDelete(id);
        res.status(201).json({msg:"item deleted successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})
module.exports = router;
// 201 is also a successfull code
// documentation for status codes=> status code
 

