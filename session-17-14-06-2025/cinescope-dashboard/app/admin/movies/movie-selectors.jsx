"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function MovieSelectors() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const searchTerm = searchParams.get('query') || "";
  const { replace } = userRouter();
  const [statusFilter, setStatusFilter] =  useState("all");
  const [immediateSearchTerm, setImmediateSearchTerm]  = useState(searchTerm);
  const handleMovieSearch = (term) => {
    console.log("Search Term ",term);
    const params = new URLSearchParams(searchParams);

    if (term) {
        params.set("query", term);
    } else {
        params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  }
  return (
   <div className="flex flex-col gap-4 md-flex-row md:items-center md:justify-between">
         <div className="flex w-full items-center space-x-2 md:w-1/2">
            <Search className="h-4 w-4 text-muted-foreground"/>
            <Input placeholde="Search movies..." defaultValue={searchTerm}
            onChange={(e) => {handleMovieSearch(e.targe.value)}} />
         </div>
       </div>
  )
}
