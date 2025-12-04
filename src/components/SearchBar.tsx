import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

// const sortOptions = [
//   { value: 'best_match', label: 'Best Match' },
//   { value: 'rating', label: 'Highest Rated' },
//   { value: 'review_count', label: 'Most Reviewed' },
// ]

export default function SearchBar() {
  return (
    <div className="flex flex-col p-4 h-[60vh] justify-center bg-[url('https://picsum.photos/id/42/3456/2304')] bg-cover bg-center">
      <div className="flex justify-center gap-4 mb-4">
        <Button variant="link" className="text-black bg-white">Best Match</Button>
        <Button variant="link" className="text-black bg-white">Highest Rated</Button>
        <Button variant="link" className="text-black bg-white">Most Reviewed</Button>
      </div>
      {/* divider */}
      <div className="border-t border-white mb-4 w-[500px] mx-auto" />
      {/* divider */}
      <div className="flex flex-col mt-4 justify-center">
       <div className="flex gap-8 justify-center">
        <Input
            type="text"
            placeholder="Search Businesses"
            className=" max-w-md p-2 border border-white rounded self-center bg-white/80"
          />
          <Input
            type="text"
            placeholder="Where?"
            className=" max-w-md p-2 border border-white rounded self-center bg-white/80"
          />
        </div>
        <Button
          type="submit"
          className="max-w-md mx-auto mt-4"
        >
          Let&apos;s Go
        </Button>
      </div>
    </div>
  )
}