import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle,
  Building,
  Calendar,
} from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Job not found
            </h1>
            <Button asChild>
              <Link to="/jobs">Browse All Jobs</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-hero-gradient py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Company Logo */}
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center text-3xl font-bold text-primary shadow-lg shrink-0">
                {job.company.charAt(0)}
              </div>

              {/* Job Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {job.title}
                  </h1>
                  {job.featured && <Badge variant="featured">Featured</Badge>}
                </div>
                <p className="text-lg text-primary-foreground/80 mb-4">
                  {job.company}
                </p>

                <div className="flex flex-wrap gap-4 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {job.postedDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant={getJobTypeBadgeVariant(job.type)}>
                    {job.type}
                  </Badge>
                  <Badge variant="category">{job.category}</Badge>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 lg:flex-col">
                <Button variant="hero" size="lg" className="flex-1 lg:flex-none">
                  Apply Now
                </Button>
                <div className="flex gap-2">
                  <Button variant="hero-outline" size="icon">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                  <Button variant="hero-outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  About This Role
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </section>

              {/* Responsibilities */}
              <section className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Card */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-xl font-bold text-primary">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Building className="w-4 h-4 mr-2" />
                  View Company
                </Button>
              </div>

              {/* Job Summary */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Job Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Job Type</span>
                    <span className="font-medium text-foreground">{job.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium text-foreground">{job.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-medium text-foreground">{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">
                  Interested in this job?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Apply now and take the first step towards your dream career.
                </p>
                <Button variant="job" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
