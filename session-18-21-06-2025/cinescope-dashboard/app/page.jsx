import HeaderNav from "@/components/header-nav";
import FeaturedMovies from "@/components/home/featured-movies";
import HeroBanner from "@/components/home/hero-banner";
import Footer from "@/components/footer";

// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner title="Discover Amazing Movies" description="Explore our collection of the best movies from around the world."/>
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}
