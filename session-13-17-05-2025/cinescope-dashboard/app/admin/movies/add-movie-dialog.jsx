"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Plus
} from "lucide-react";
import { useState } from "react";
import AddMovieForm from "./add-movie-form";

export default function AddMovieDialog() {
    const [showAddMovie, setShowAddMovie] = useState(false);
    return (
        <Dialog open={showAddMovie} onOpenChange={setShowAddMovie}>
             <DialogTrigger asChild>
                <Button>
                Add Movie
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                <DialogTitle>Add New Movie</DialogTitle>
                <DialogDescription>
                    Fill in the details to add a new movie to your catalog
                </DialogDescription>
                </DialogHeader>
                {/* Add Form */}
                <AddMovieForm/>
            </DialogContent>
        </Dialog>
    )
}
