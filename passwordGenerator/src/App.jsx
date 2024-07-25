import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [hasNum, addNum] = useState(false);
  const [hasChar, addChar] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null)
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNum) str += "0123456789";
    if (hasChar) str += "`~!@#$%^&*(),.<>?/|;:";

    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1);
      pass += str[ind];
    }

    setPass(pass);
  }, [length, hasChar, hasNum, pass, setPass]);

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  
useEffect(()=>{passGen()},
[length, hasChar, hasNum])

  return (
    <>
      <div className="text-orange-500 w-full max-w-md mx-auto shadow-md px-4 py-10 rounded-md bg-violet-950">
        Password Generator
        <div className="flex justify-center rounded-sm overflow-hidden mt-2 mb-1 shadow-lg">
          <input
            type="text"
            value={pass}
            placeholder={pass}
            className="bg-white py-2 rounded-l-md w-4/5 px-2"
            readOnly
            ref={passRef}
          />
          <button className="bg-orange-400 text-white px-2 rounded-r-md"
          onClick={copyPass}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked = {hasNum}
              id="numberInput"
              onChange = {()=>
                addNum((prev)=>!prev) 
              }
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked = {hasChar}
              id="characterInput"
              onChange = {()=>{
                addChar((prev)=>!prev) 
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
