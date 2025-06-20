"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UpdateMovieForm } from "./update-movie-form";

export default function UpdateMovieDialog({open, onOpenChange, movie}) {
  console.log("MOVIE" , movie);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit New Movie</DialogTitle>
          <DialogDescription>
            Edit in the details to update movie of your catalog.
          </DialogDescription>
        </DialogHeader>
        {/* Add Movie Form */}
        <UpdateMovieForm onClose={onOpenChange} movie={movie} />
      </DialogContent>
    </Dialog>
  );
}
