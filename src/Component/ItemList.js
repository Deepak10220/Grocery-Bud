import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({itemName,index,setItemsToBuy,isPurchased}) => {

    const [isChecked,setIsChecked]=useState(isPurchased);

    const deleteHandler = () => {
        setItemsToBuy((prevState) => {
        const data=[...prevState];
        data.splice(index,1);
        setItemsToBuy(data);
        toast.error("Item Deleted successfully!");
        return data;

        });
      };
  return (
    <div style={{display:"flex",
    alignItems:"center",
    gap:"20px",
    justifyContent:"space-between"}}>
        <div>

        <input type="checkbox" name="" id="" onChange={(e)=>{
            setIsChecked((prevValue)=>!prevValue);
            setItemsToBuy((prevState)=>{
                const data=[...prevState];
                data[index].purchases=isChecked;
                return data;
            })
        }} />
        </div>
        <div>
            <p style={{textDecoration: isChecked ? 'line-through':'none'}}>{itemName}</p>
        </div>
        <div>
            <button onClick={deleteHandler} style={{backgroundColor:'red', color:'white', padding:'8px 10px', borderRadius:'10px', border:'none', margin:'10px'}}>Delete</button>
        </div>
    </div>
  )
}

export default ItemList