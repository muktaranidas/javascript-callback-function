"use client"

import { useEffect, useState } from "react";

export default function LayoutComponent() {
  const [onSmallScreen, setOnSmallScreen] = useState(false)
  const checkScreenSize = ()=>{
    setOnSmallScreen(window.innerWidth < 768)
  }
  useEffect(()=>{
    checkScreenSize()
  },[])
  return (
    <div>
     <h1>Browsing Small Device</h1>
    </div>
  
  );
}


