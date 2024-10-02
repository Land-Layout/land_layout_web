'use client'

import Image from "next/image";
import { NavBar } from "./components/NavBar";
import HomePageCarousel from "./components/Carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const searchBy = (letter: string) => {
    console.log(`Searching by ${letter}`);
    // Add your search logic here
  };
  return (
    <div className="bg-white text-black min-h-screen">
      {" "}
      {/* Ensure full height and white background */}
      <HomePageCarousel />
      <div className="m-4 p-6 bg-primary text-primary-foreground rounded-lg h-auto flex flex-col md:flex-row justify-center items-center">
        <h2 className="text-xl font-semibold text-center whitespace-nowrap">
          Layout Plan Search
        </h2>{" "}
        {/* Added 'whitespace-nowrap' */}
        <div className="mt-4 w-full md:ml-4 md:mt-0 md:w-auto">
          <Select>
            <SelectTrigger className="w-full md:w-36 h-12 bg-white text-black ">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">Select Village</SelectItem>
              <SelectItem value="vellanur">Vellanur Village</SelectItem>
              <SelectItem value="morai">Morai Village</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          className="bg-white text-black w-full md:w-2/5 h-12 border-0 m-4"
          placeholder="Search by Layout Name or Survey no"
        />
        <Button className="bg-blue-950 h-12 w-full md:w-24">Search</Button>
      </div>
      <div className="flex justify-center my-4"> {/* Center the pagination */}
      <ul className="flex flex-wrap gap-2"> {/* Responsive and spacing */}
        {alphabet.map((letter) => (
          <li key={letter} id={`alp_${letter}`}>
            <Button
              variant="outline" // Use shadcn's outline variant
              className="w-10 h-10 p-0 rounded-md text-base hover:bg-gray-200"
              onClick={() => searchBy(letter)}
              title={letter.toUpperCase()}
            >
              {letter.toUpperCase()}
            </Button>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
}
