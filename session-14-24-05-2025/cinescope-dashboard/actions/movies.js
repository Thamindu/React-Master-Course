"use server";

import { db } from "@/lib/db";

//get All movies action
export const getMovies = async () => {
  try {
    const response = await fetch("http:localhost:3000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network error");
    }

    if (response.status === 200) {
      return await response.json();
    } else {
      console.log("No movies found");
      return undefined;
    }
  } catch (error) {
    console.log("Error fetching movies : ", error);
    return undefined;
  }
};

// create movie action
export const createMovie =async  (movie) => {
  try {
      const result = await db.collection("movies_new").insertOne(movie);

      if (result.acknowledged) {
        console.log('movie added successfully. ');
        return {
          success : true,
          message : 'Movie added successfully.'
        }
      } else {
        return undefined;
      }
  } catch (error) {
    console.log("insert failed.");
    
  }
}