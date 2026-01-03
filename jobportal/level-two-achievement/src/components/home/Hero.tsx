import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Users, Building } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?q=${searchQuery}&location=${location}`);
  };

  const stats = [
    { icon: Briefcase, value: "10,000+", label: "Active Jobs" },
    { icon: Building, value: "5,000+", label: "Companies" },
    { icon: Users, value: "2M+", label: "Job Seekers" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90">
              Over 10,000 jobs available worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Find Your{" "}
            <span className="text-accent">Dream Job</span>
            <br />
            Build Your Future
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connect with top employers and discover opportunities that match your skills and aspirations. Your next career move starts here.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-card rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex-1 flex items-center gap-2 px-4 py-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="hidden md:block w-px bg-border" />
            <div className="flex-1 flex items-center gap-2 px-4 py-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="md:w-auto">
              Search Jobs
            </Button>
          </form>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-sm text-primary-foreground/60">Popular:</span>
            {["Developer", "Designer", "Remote", "Marketing", "Data Science"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors px-3 py-1 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-foreground/10 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
