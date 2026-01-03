import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/jobs/JobCard";
import JobFilters, { JobFiltersState } from "@/components/jobs/JobFilters";
import { jobs } from "@/data/jobs";
import { Briefcase, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<JobFiltersState>({
    search: searchParams.get("q") || "",
    location: searchParams.get("location") || "",
    types: [],
    categories: searchParams.get("category") ? [searchParams.get("category")!] : [],
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Location filter
      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        if (!job.location.toLowerCase().includes(locationLower)) return false;
      }

      // Type filter
      if (filters.types.length > 0) {
        if (!filters.types.includes(job.type)) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(job.category)) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Browse Jobs</h1>
                <p className="text-muted-foreground">
                  {filteredJobs.length} jobs available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <JobFilters onFilterChange={setFilters} />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <JobFilters onFilterChange={setFilters} />
                  </SheetContent>
                </Sheet>
              </div>

              {/* Job List */}
              {filteredJobs.length > 0 ? (
                <div className="space-y-4">
                  {filteredJobs.map((job, index) => (
                    <div
                      key={job.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <JobCard job={job} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No jobs found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
