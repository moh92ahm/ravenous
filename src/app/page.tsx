import React from "react";
import BusinessList from "../components/BusinessList";
import SearchBar from "../components/SearchBar";

export default function Page() {
  return (
    <div>
      <div>Welcome to the Home Page</div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}