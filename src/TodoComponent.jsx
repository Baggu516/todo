import React,{useState} from 'react'

const TodoComponent = () => {
    const [arr,setArr]=useState([])
    const [text,setText]=useState("")
    const HandleAdd=()=>{
     setArr((prev)=>([...prev,text]))
     setText("")
     
    }
    const HandleDelete=(index)=>{
        // let lst=[...arr]
        arr.splice(index,1)
        setArr([...arr])

    }

  return (
    <div>
        <h1>To-Do List</h1>
        <input type="text" placeholder='Enter item name' value={text} name="Item" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={HandleAdd}>Add Item</button>
        <div>
        {arr.map((item,i)=>{
            return (
                <div key={i} className='items'>
                 <li> {item}</li>
                <button onClick={()=>HandleDelete(i)}>Delete</button>
                </div> 
            )
        })}
        </div>
      
    </div>
  )
}

export default TodoComponent