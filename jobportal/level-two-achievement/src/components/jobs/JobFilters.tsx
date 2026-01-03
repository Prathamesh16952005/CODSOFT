import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { categories } from "@/data/jobs";
import { Search, MapPin, X } from "lucide-react";

interface JobFiltersProps {
  onFilterChange: (filters: JobFiltersState) => void;
}

export interface JobFiltersState {
  search: string;
  location: string;
  types: string[];
  categories: string[];
}

const JobFilters = ({ onFilterChange }: JobFiltersProps) => {
  const [filters, setFilters] = useState<JobFiltersState>({
    search: "",
    location: "",
    types: [],
    categories: [],
  });

  const jobTypes = ["Full-time", "Part-time", "Contract", "Remote"];

  const handleFilterChange = (newFilters: Partial<JobFiltersState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  const toggleType = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    handleFilterChange({ types: newTypes });
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    handleFilterChange({ categories: newCategories });
  };

  const clearFilters = () => {
    const cleared = { search: "", location: "", types: [], categories: [] };
    setFilters(cleared);
    onFilterChange(cleared);
  };

  const hasActiveFilters =
    filters.search ||
    filters.location ||
    filters.types.length > 0 ||
    filters.categories.length > 0;

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground mb-2 block">
          Search
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Job title or keyword"
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground mb-2 block">
          Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="City or remote"
            value={filters.location}
            onChange={(e) => handleFilterChange({ location: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-foreground mb-3 block">
          Job Type
        </Label>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center">
              <Checkbox
                id={type}
                checked={filters.types.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <label
                htmlFor={type}
                className="ml-2 text-sm text-foreground cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <Label className="text-sm font-medium text-foreground mb-3 block">
          Category
        </Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.name)}
                onCheckedChange={() => toggleCategory(category.name)}
              />
              <label
                htmlFor={category.id}
                className="ml-2 text-sm text-foreground cursor-pointer flex items-center gap-2"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-muted-foreground">({category.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
