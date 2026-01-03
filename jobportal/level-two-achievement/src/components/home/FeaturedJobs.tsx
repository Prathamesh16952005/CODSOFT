import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";
import { MapPin, Clock, DollarSign, ArrowRight, Star } from "lucide-react";

const FeaturedJobs = () => {
  const featuredJobs = jobs.filter((job) => job.featured).slice(0, 3);

  const getJobTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "Remote":
        return "remote";
      case "Full-time":
        return "fulltime";
      case "Part-time":
        return "parttime";
      case "Contract":
        return "contract";
      default:
        return "secondary";
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return `${Math.floor(diffDays / 7)} weeks ago`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">Featured Opportunities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Top Job Picks for You
            </h2>
            <p className="text-muted-foreground mt-2">
              Hand-picked opportunities from leading companies
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/jobs">
              View All Jobs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-2xl font-bold text-primary">
                  {job.company.charAt(0)}
                </div>
                <Badge variant="featured">Featured</Badge>
              </div>

              {/* Job Info */}
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {job.title}
              </h3>
              <p className="text-muted-foreground mb-4">{job.company}</p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{getTimeAgo(job.postedDate)}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant={getJobTypeBadgeVariant(job.type)}>
                  {job.type}
                </Badge>
                <Badge variant="category">{job.category}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
