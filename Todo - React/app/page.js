"use client"
// import React from 'react'
import React,{useState} from "react"
const page = () => {
  const submitHandler =(e)=>{
    e.preventDefault();
   setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask);

      
  }


  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }



  let rendertask= <h2>No task Available</h2>




  const[title,settitle] = useState("")
  const[desc,setdesc] = useState("")
  const[mainTask,setmainTask] = useState([])





  if(mainTask.length>0){
    rendertask =mainTask.map((t,i)=>{
      return(
       <li className="flex items-center justify-between mb-8">
         <div className="flex items-center justify-between mb-5 w-2/3">
          <h4 className="text-2xl font-semibold">{t.title}</h4>
          <h5 className="text-lg font-semibold">{t.desc}</h5>
        </div>



        <button 
         onClick= {()=>{
          deleteHandler(i)

        }}

        className="bg-red-400 text-white px-7 py-4 rounded font-bold mb-4">Delete</button>
       </li>
      )
    })
  }




  return (
   
   <>
   <h1 className='bg-green-500 text-white p-5 text-2xl font-bold text-center'>Nazim's Todo List</h1>

   <form onSubmit={submitHandler}>
    <input type="text" 
    className='text-2xl border-zinc-800 border-4 m-8 px-4 py-4'
    placeholder='"Enter title Hwere' 
    value ={title}
    onChange={(e)=>{
      settitle(e.target.value);
    }}/>
    


    <input type="text" 
    className='text-2xl border-zinc-800 border-4 m-8 px-4 py-4'
    placeholder='"Enter Description '
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value);
    }}/>


    <button className='bg-black text-white px-4 py-3 font-bold'>
      Add Tsk</button>
   </form>

<hr />

   <div className="p-8 bg-slate-200">
    <ul>
       {rendertask}
    </ul>
   </div>
   </>
  )
}

export default page
