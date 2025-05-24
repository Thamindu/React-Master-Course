"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; 
import { useState } from "react";
import { createMovie } from "@/actions/movies";

export default function AddMovieForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit =async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("title");
        const year = formData.get("year");
        const director = formData.get("director");
        const genre = formData.get("genre");
        const rating = formData.get("rating");
        const overview = formData.get("overview");
        const poster = formData.get("poster");
        const backdrop = formData.get("backdrop");
        const movieStatus = formData.get("status");
        
        console.log();
        setIsSubmitting(true);
        const response = await createMovie({
            title, year, directors : [director], genres : [genre], imdb : {rating : Number(rating)}, plot : overview, poster, backdrop, status : movieStatus, lastupdated : new Date().toISOString()
        })
        setIsSubmitting(false);

        if (response?.success) {
            console.log(response)
        }
    }
  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Movie Title" required/>
            </div>
             <div className="space-y-4">
                <Label htmlFor="year">Year</Label>
                <Select id="year" name="year" required>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-4">
                <Label htmlFor="director">Director</Label>
                <Input id="director" name="director" placeholder="Director name"/>
            </div>
             <div className="space-y-4">
                <Label htmlFor="genre">Genre</Label>
                <Select id="genre" name="genre" required>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Action">Action</SelectItem>
                        <SelectItem value="Adventure">Adventure</SelectItem>
                        <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-4">
                <Label htmlFor="rating">Rating</Label>
                <Input id="rating" name="rating" placeholder="Rating (0.0 - 10.0)" type="number" min="0" max="10" step="0.1" required/>
            </div>
             <div className="space-y-4">
                <Label htmlFor="runtime">Runtime in (minute)</Label>
                <Input id="runtime" name="runtime" placeholder="Runtime in minutes" type="number" min="1" step="1" required/>
            </div>

        </div>
        <div className="space-y-2">
            <Label htmlFor="overview">Overview</Label>
            <Textarea id="overview" name="overview" placeholder="Movie description" className="max-h-[100px]"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
                <Label htmlFor="poster">Poster URL</Label>
                <Input id="poster" name="poster" placeholder="Poster URL" required/>  
            </div>
            <div className="space-y-4">
                <Label htmlFor="backdrop">Backdrop URL</Label>
                <Input id="backdrop" name="backdrop" placeholder="Backdrop URL"/>  
            </div>
            <div className="space-y-4">
                <Label htmlFor="status">Status</Label>
                <Select id="status" name="status" required>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Status" />
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
            <Button type="button" variant="outline" className="min-w-[100px]">Cancel</Button>
            <Button type="submit" className="min-w-[100px]" disabled={isSubmitting}>{ isSubmitting ? 'Adding...' : 'Add Movie'}</Button>
        </DialogFooter>
    </form>
  )
}
