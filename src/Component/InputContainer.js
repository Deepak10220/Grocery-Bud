import React,{useState} from "react";
import ItemList from "./ItemList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputContainer = () => {
const [itemsToBuy,setItemsToBuy]=useState([]);

const [textInputValue,setTextInputValue]=useState("");

const onClickHandeler=()=>{
    setItemsToBuy((prevData)=>{
        return [...prevData, {name:textInputValue,
        purchases:false}]
    });
    setTextInputValue("");
    toast.success('Item added successfully.');

}


  return (
    <div style={{display:"flex",
    justifyContent:"center",
    // alignItems:"center",
    height:'100vh',
    width:'100%',
    border:'1px solid black',
    padding:'20px'}}>
    <div style={{backgroundColor:"#B1D4E0", height:'50vh',
    width:'80%', padding:"20px"}}>
    <ToastContainer position="top-center"/>
      <h2>Grocery Bud</h2>
      <div>
        <input type="text" style={{ padding:'8px 10px', borderRadius:'10px'}} value={textInputValue} onChange={(e)=>{
            setTextInputValue(e.target.value)
        }} />
        <button onClick={onClickHandeler} style={{backgroundColor:'blue', color:'white', padding:'8px 10px', borderRadius:'10px', border:'none', margin:'10px'}}>Add Item</button>
      </div>
         <div>
            {itemsToBuy.map((elem,index)=> <ItemList itemsToBuy={itemsToBuy} setItemsToBuy={setItemsToBuy} index={index} itemName={elem.name} isPurchased={elem.purchases} key={index}/>)}
         </div>
       
        </div>
    </div>
  );
};

export default InputContainer;
