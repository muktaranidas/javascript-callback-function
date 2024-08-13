"use client"
import { useState } from "react";
// import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home() {
  const [dataSource, setDataSource] = useState(Array.from({length:20}))
  // const [count, setCount] = useState(0)
  return (
    <div>
      <InfiniteScroll dataLength={dataSource.length}>
        {
          dataSource.map((item,index )=> {
            return <div className=" my-1 p-6 bg-slate-300"> This is a div #{index+1} inside InfiniteScroll </div>
          })
        }
      </InfiniteScroll>
      {/* <div  className="bg-slate-500 w-fit p-4 mx-5 mt-2">count: {count}</div>
      <button  className="bg-pink-500 w-fit p-4 m-5"  onClick={() => { setCount(count=> count+1)}}>Increase</button> */}
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

