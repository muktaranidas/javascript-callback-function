"use client"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div  className="bg-slate-500 w-fit p-4 mx-5 mt-2">count: {count} </div>
      <button  className="bg-pink-500 w-fit p-4 m-5"  onClick={() => { setCount(count=> count+1)}}>Increase</button>
    </div>
  
  );
}



// const array = ["mukta", "sakib", "mehedi"]
// const fun = (argument)=>{
//     for(let i=0; i<array.length; i++){
//          argument(array[i])
//     }
// }
// fun((VAL)=>{
//     console.log(VAL)
// })

