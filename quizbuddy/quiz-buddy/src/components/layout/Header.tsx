import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Plus, List, Home } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero shadow-md group-hover:shadow-lg transition-shadow">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gradient hidden sm:block">QuizForge</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link to="/">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Link to="/browse">
            <Button
              variant={isActive("/browse") ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">Browse</span>
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="hero" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create Quiz</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
