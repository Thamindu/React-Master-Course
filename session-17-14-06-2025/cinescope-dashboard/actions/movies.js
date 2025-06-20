"use server";

import { db } from "@/lib/db";
import { ObjectId } from "mongodb";

// get all movies action
export const getMovies = async () => {
  try {
    // using fetch API to get movies from the server
    const response = await fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (response.status === 200) {
      return await response.json();
    } else {
      console.log("No movies found!");
      return undefined;
    }
  } catch (error) {
    console.log("Error fetching movies:", error);
    return undefined;
  }
};

// Create Movie action

export const createMovie = async (movie) => {
  try {
    const result = await db.collection("movies_n").insertOne(movie);

    if (result.acknowledged) {
      console.log(`A movie was inserted with the _id: ${result.insertedId}`);
      return {
        success: true,
        message: "Movie created successfully!",
      };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb insert failed!");
  }
};


// Update Movie action

export const updateMovie = async (movieId, movieData) => {
  try {
    const result = await db.collection("movies_n").updateOne({_id : ObjectId.createFromHexString(movieId)}, {$set : movieData}, {upsert : true});
    console.log(result);
    
    if (result.acknowledged) {
      console.log(`A movie was update with the _id: ${result.insertedId}`);
      return {
        success: true,
        message: "Movie updated successfully!",
      };
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("MongoDB update failed:", error);
    return {
      success: false,
      message: "MongoDB update failed",
      error: error.message,
    };
  }
};

// Delete Movie action

export const deleteMovie = async (movieId) => {
  try {
    const result = await db.collection("movies_n").deleteOne({_id : ObjectId.createFromHexString(movieId)});
    console.log(result);
    
    if (result.acknowledged) {
      console.log(`A movie was delete with the _id: ${result.insertedId}`);
      return {
        success: true,
        message: "Movie delete successfully!",
      };
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("MongoDB delete failed:", error);
    return {
      success: false,
      message: "MongoDB delete failed",
      error: error.message,
    };
  }
};


export const getMovieById = async (id) => {
  try {
    const result = await db.collection("movies").findOne({_id : ObjectId.createFromHexString(id)});
    
    if (result && Object.keys(result).length) {
      // console.log(`A movie found with the _id: ${result._id}`);
      return {
        success: true,
        message: "Movie fetched successfully!",
        data : result
      };
    } else {
      console.log("786");
      
      return undefined;
    }
  } catch (error) {
    // console.error("MongoDB fetched failed:", error);
    return {
      success: false,
      message: "MongoDB fetched failed",
      error: error.message,
    };
  }
};