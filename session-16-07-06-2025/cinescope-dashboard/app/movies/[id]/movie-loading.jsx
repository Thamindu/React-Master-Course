"use client";

import { useState, useEffect } from "react";


export default function MovieLoading() {
    const [isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        // simulate Loading behavior
        const timer = setTimeout(()=> setIsLoading(false), 1500);

        return () => clearTimeout(timer);
    }, []);
  return <div className="text-center text-amber-300">{isLoading ? 'Movie loading...' : 'Movie loading complete'}</div>
  
}
