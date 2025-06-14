"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateMovie } from "@/actions/movies";
import { getAllYears } from "@/lib/utils";

export function UpdateMovieForm({ onClose, movie }) {
  const router = useRouter();
  const years = getAllYears();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Controlled states
  const [title, setTitle] =  useState(movie.title);

  // TODO : replace with multi select
  const [directors, setDirectors] =  useState(movie.directors[0] || '');
  // TODO : replace with multi select
  const [selectedYear, setSelectedYear] = useState(movie.year);
  const [selectedGenres, setSelectedGenres] = useState(movie.genres[0] || '');
  const [rating, setRating] =  useState(movie.imdb.rating);

  const [runtime, setRuntime] =  useState(movie.runtime || 0);

  const [overview, setOverview] =  useState(movie.plot || "");

  const [poster, setPoster] =  useState(movie.poster);
  const [backdrop, setBackdrop] =  useState(movie.backdrop ||'');
  const [status, setStatus] =  useState(movie.status);



  const handleClose = () => {
    // Reset controlled fields
   // setSelectedYear(null);
    setSelectedGenres(null);
    // Close the dialog
    onClose(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsSubmitting(true);

    const response = await updateMovie(movie.id,{
      title,
      year: selectedYear,
      directors: [directors],
      genres: [selectedGenres],
      imdb: { rating: Number(rating) },
      runtime,
      plot: overview,
      poster,
      backdrop,
      status,
      lastupdated: new Date().toISOString(),
    });

    setIsSubmitting(false);

    if (response?.success) {
      console.log(response);
      handleClose();
        router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Movie title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="space-y-2"> 
          <Label htmlFor="year">Year</Label>

          <Select
            id="year"
            name="year"
            onValueChange={setSelectedYear}
            value={selectedYear}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input id="director" name="director" placeholder="Director name" value={directors} onChange={(e) => setDirectors(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select
            id="genre"
            name="genre"
            required
            onValueChange={setSelectedGenres}
            value={selectedGenres}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Action">Action</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
              <SelectItem value="Romance">Romance</SelectItem>
              <SelectItem value="Comedy">Comedy</SelectItem>
              <SelectItem value="Horror">Horror</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Rating (0.0 - 10.0)"
            required
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">Runtime (minutes)</Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            min="1"
            placeholder="Runtime in minutes"
            required
            onChange={(e) => setRuntime(e.target.value)}
            value={runtime}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="h-[100px]"
          onChange={(e) => setOverview(e.target.value)}
          value={overview}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">Poster URL</Label>
          <Input
            id="poster"
            name="poster"
            placeholder="URL to poster image"
            required
            onChange={(e) => setPoster(e.target.value)}
            value={poster}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">Backdrop URL</Label>
          <Input
            id="backdrop"
            name="backdrop"
            placeholder="URL to backdrop image"
           onChange={(e) => setBackdrop(e.target.value)}
            value={backdrop}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select id="status" name="status" required onValueChange={setStatus} value={status}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter>
        <Button
          type="reset"
          variant="outline"
          className="min-w-[102px]"
          disabled={isSubmitting}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button type="submit" className="min-w-[102px]" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Movie"}
        </Button>
      </DialogFooter>
    </form>
  );
}
