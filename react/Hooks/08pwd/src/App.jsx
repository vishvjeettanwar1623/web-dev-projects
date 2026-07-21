import { useCallback } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

function App() {

  const [length, setLength] = useState(10)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef
  const passwordReference = useRef(null)
  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(isNumberAllowed) str += "0123456789"
      if(isCharAllowed) str += "!@#$%^&*()_+[]{}''"

      for (let i = 1; i < length; i++) {
        let charIndex = Math.floor(Math.random() * str.length)
        pass += str.charAt(charIndex)        
      }

      setPassword(pass)
      //pwd
  }, [length, isNumberAllowed, isCharAllowed]) 

 const copypasswordtoOurClipboard = useCallback(() => {
  passwordReference.current?.select()
  // passwordReference.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
 }, [password])


  useEffect(()=>{
    passwordGenerator()
  },[length, isNumberAllowed, isCharAllowed, passwordGenerator])

  // passwordGenerator() not used to call a function if using hooks
  return (
    <>
      <div className="bg-gray-400 h-screen"> 
        <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8  bg-gray-600 text-center px-4 py-3">
        <h1 className="text-xl text-center text-white my-3">Password Generator</h1>
        <div className="flex rounded-xl shadow-md overflow-hidden mb-4 text-center">
        <input 
        type="text"
        value={password} 
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        style={{backgroundColor: "white"}}
        ref={passwordReference}
        />
        <button
        onClick={copypasswordtoOurClipboard}
        className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
        >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1 text-white">
              <input type="range" min={10} max={80} value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              id=""
              defaultChecked={isNumberAllowed}
              // onChange={()=>{setIsNumberAllowed(true)}}
              onChange={()=>{setIsNumberAllowed((prev) => !prev)}}
              />
              <label htmlFor="numInput" className="text-white">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              id=""
              defaultChecked={isCharAllowed}
              // onChange={()=>{setIsNumberAllowed(true)}}
              onChange={()=>{setIsCharAllowed((prev) => !prev)}}
              />
              <label htmlFor="charInput" className="text-white">Characters</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
