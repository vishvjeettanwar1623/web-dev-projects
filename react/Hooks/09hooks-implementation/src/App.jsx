import { useState } from "react"

function App() {
 
 let [color,setColor] = useState("black");
  return (

      <div className="w-full h-screen duration-1500" style={{backgroundColor: color}}> 
      {/* <div className="fixed flex flex-wrap justify-center bottom-12 left-[40%] px-2 py-2 gap-3 shadow-md rounded-2xl bg-white"> */}
      <div className="fixed left-1/2 transform -translate-x-1/2 inline-flex flex-wrap justify-center bottom-12 px-3 py-2 gap-3 shadow-md rounded-2xl bg-white">

        <button 
        onClick={()=>setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
          Green</button>

        <button 
        onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
          Red</button>

        <button 
        onClick={()=>setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
          Blue</button>

        <button 
        onClick={()=>setColor("Purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
          Purple</button>

        <button 
        onClick={()=>setColor("Orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}}>
          Orange</button>
        
        <button 
        onClick={()=>setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
          Black</button>
        
        <button 
        onClick={()=>setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>
          White</button>
        
        <button 
        onClick={()=>setColor("gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>
          Gray</button>
        
        <button 
        onClick={()=>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>
          Yellow</button>
        
        <button 
        onClick={()=>setColor("violet")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}>
          Violet</button>
        
        <button 
        onClick={()=>setColor("Pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>
          Pink</button>
        
        {/* <button 
        onClick={()=>setColor("brown")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>
          Brown</button> */}
        
          
      </div>
      </div>
    
  )
}

export default App
