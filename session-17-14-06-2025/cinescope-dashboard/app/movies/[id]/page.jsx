import { getMovieById } from '@/actions/movies';
import React from 'react'
import MovieLoading from './movie-loading';

export default async function MovieDetailsPage(props) {
    const {id} = await props.params;
    const searchParams = await props.searchParams;
    const movie = await getMovieById(id);
   console.log( movie?.data?.poster)
  return (
    <main className='flex flex-col justify-center py-16 px-4 mx-auto'>
        <h1 className='font-bold text-center text-xl text-amber-600'>
            Movie Details
        </h1>
        <h2 className='text-center py-5'>  Movie ID : {id} </h2>
        <h2 className='text-center py-5'>  Movie Title : {movie?.data?.title} </h2>
        <p className='text-center py-5'>  Movie Plot : {movie?.data?.plot} </p>

        <MovieLoading/>
    </main>
  )
}

// /movie/:id - React Router Router parameter
// /movie/[id] - Next.js App router route parameter
// /movie/[...id]