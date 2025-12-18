import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

const sortOptions = [
  { value: 'best_match', label: 'Best Match' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'review_count', label: 'Most Reviewed' },
]

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar(props: SearchBarProps) {

  const handleActiveSortBy = (value: string) => {
    return props.sortBy === value ? 'text-yellow-500' : '';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSearch();
  };

  return (
    <div className="flex flex-col p-4 h-[60vh] justify-center bg-[url('https://picsum.photos/id/42/3456/2304')] bg-cover bg-center">
      <div className="flex justify-center gap-4 mb-4">
        {/* map through sortOptions to create buttons */}
        {sortOptions.map(option => (
          <Button
            key={option.value}
            variant="link"
            className={`text-white whitespace-pre-line ${handleActiveSortBy(option.value)} cursor-pointer hover:text-yellow-500 hover:no-underline`}
            onClick={() => props.setSortBy(option.value)}
          >
            {option.label.replace(' ', '\n')}
          </Button>
        ))}
      </div>

      {/* divider */}
      <div className="border-t border-white mb-4 w-[500px] mx-auto" />
      {/* divider */}

      <form className="flex flex-col mt-4 justify-center">
       <div className="flex gap-8 justify-center">
        <Input
            type="text"
            value={props.searchTerm}
            placeholder="Search Businesses"
            className=" max-w-md p-2 border border-white rounded self-center bg-white/80"
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />
          <Input
            type="text"
            value={props.location}
            placeholder="Where?"
            className=" max-w-md p-2 border border-white rounded self-center bg-white/80"
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="max-w-md mx-auto mt-4 cursor-pointer"
          onClick={handleSearch}
        >
          Let&apos;s Go
        </Button>
      </form>
    </div>
  )
}