import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MOVIES } from "@/lib/movies-list";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function MoviesList() {
  return (
    <div className="space-y-6">
      <div className="border-primary/20 bg-card shadow-xs rounded-lg border p-4">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="text-primary/70 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <input
              placeholder="Search movies by title or director"
              className="border-primary/20 pl-9 w-full"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MOVIES.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="">
            <Link href={`/movies/${movie.id}`}>
              <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 transition-colors">
                <div className="aspect-2/3 w-full overflow-hidden">
                  <Image
                    width={300}
                    height={450}
                    src={movie.poster || "./placeholder.svg"}
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
