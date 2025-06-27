import { getMovieById } from "@/actions/movies";
import MovieLoading from "./movie-loading";
import { resolve } from "styled-jsx/css";

export async function generateMetadata(props) {
  const { id } = await props.params;
  const movie = await getMovieById(id);
  console.log(movie);
  
  return {
    title: movie?.data?.title
      ? `CineScope | ${movie.data.title}`
      : "CineScope | Movie Details",
    description:
      movie?.data?.plot ??
      "Find your favorite movie ratings and recommendations",
  };
}

// Server Component
export default async function MovieDetailsPage(props) {
  const { id } = await props.params;
  // simulate delay fo display movie information 
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // const searchParams = await props.searchParams;
  const movie = await getMovieById(id);
  if (!movie || !movie.data) {
    throw new Error("movie not found");
  }
  return (
    <main className="flex flex-col justify-center py-16 px-4 mx-auto">
      <h1 className="font-bold text-center text-xl text-amber-600">
        Movie Details
      </h1>

      <h2 className="text-center py-5">Movie: ID: {id}</h2>
      <h2 className="text-center py-5">Movie Title: {movie?.data?.title}</h2>
      <p className="text-center py-5">Movie Plot: {movie?.data?.plot}</p>

      <MovieLoading />
    </main>
  );
}

// /movie/:id - React Router Route Parameter
// /movie/[id] - Next.js App Router Route Parameter
// /movie/[...id]