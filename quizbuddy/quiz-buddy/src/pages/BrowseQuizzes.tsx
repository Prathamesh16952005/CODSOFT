import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { QuizCard } from "@/components/quiz/QuizCard";
import { Input } from "@/components/ui/input";
import { getQuizzes } from "@/stores/quizStore";
import { Search, BookOpen } from "lucide-react";

const BrowseQuizzes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const quizzes = useMemo(() => getQuizzes(), []);

  const filteredQuizzes = useMemo(() => {
    if (!searchQuery.trim()) return quizzes;
    const query = searchQuery.toLowerCase();
    return quizzes.filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(query) ||
        quiz.description.toLowerCase().includes(query)
    );
  }, [quizzes, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl gradient-hero mb-4 shadow-lg">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Browse Quizzes</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Explore our collection of quizzes and test your knowledge
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base rounded-xl"
            />
          </div>

          {/* Quiz Grid */}
          {filteredQuizzes.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz, index) => (
                <QuizCard key={quiz.id} quiz={quiz} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-muted mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No quizzes found</h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? "Try a different search term"
                  : "Be the first to create a quiz!"}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BrowseQuizzes;
