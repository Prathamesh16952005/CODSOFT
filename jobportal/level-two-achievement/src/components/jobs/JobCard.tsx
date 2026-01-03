import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/job";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
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
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Company Logo */}
        <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-2xl font-bold text-primary shrink-0">
          {job.company.charAt(0)}
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors truncate"
                >
                  {job.title}
                </Link>
                {job.featured && <Badge variant="featured">Featured</Badge>}
              </div>
              <p className="text-muted-foreground">{job.company}</p>
            </div>
            <button className="p-2 text-muted-foreground hover:text-accent transition-colors shrink-0">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{getTimeAgo(job.postedDate)}</span>
            </div>
          </div>

          {/* Tags and Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant={getJobTypeBadgeVariant(job.type)}>
                {job.type}
              </Badge>
              <Badge variant="category">{job.category}</Badge>
            </div>
            <Button variant="job" size="sm" asChild>
              <Link to={`/jobs/${job.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
