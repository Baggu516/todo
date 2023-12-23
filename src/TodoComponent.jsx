import React,{useState} from 'react'

const TodoComponent = () => {
    const [arr,setArr]=useState([])
    const [text,setText]=useState("")
    const HandleAdd=()=>{
     setArr((prev)=>([...prev,text]))
     setText("")
     
    }


  return (
    <div>
        <h1>To-Do List</h1>
        <input type="text" placeholder='Enter item name' value={text} name="Item" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={HandleAdd}>Add Item</button>
        <div className='Todo-items'>
        {arr.map((item)=>{
            return (
                <li> {item}</li>
            )
        })}
        </div>
      
    </div>
  )
}

export default TodoComponent