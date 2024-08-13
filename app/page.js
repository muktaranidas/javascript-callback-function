"use client"
import { useState } from "react";
// import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home() {
  const [dataSource, setDataSource] = useState(Array.from({length:20}))
  const [hasMore, SetHasMore] = useState(true)
  // const [count, setCount] = useState(0)
  const fetchMoreData=()=>{
    if(dataSource.length < 200 ){
      setTimeout(() =>{
        setDataSource(dataSource.concat(Array.from({length:20})))
      } ,  500)
    }
    else{
      SetHasMore(false)

    }
  }
  return (
    <div>
      <div className="h-[500px] overflow-auto" id="parentScrollDev">
      <p className="text-center"> Title: <b> InfiniteScroll</b></p>
      <InfiniteScroll  dataLength={dataSource.length} scrollableTarget="parentScrollDev" height={500} endMessage={<p className="text-center text-red-600 text-2xl font-extrabold"> All Set......</p>} next={fetchMoreData} hasMore={hasMore} loader={<p className="text-center text-red-600 text-2xl font-extrabold">Loading...</p>}>
        {
          dataSource.map((item,index )=> {
            return <div className=" my-1 p-6 bg-slate-300 w-1/2 mx-auto"> This is a div #{index+1} inside InfiniteScroll </div>
          })
        }
      </InfiniteScroll>
      </div>
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

