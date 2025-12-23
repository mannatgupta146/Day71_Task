import React from "react";
import Card from "./components/Card";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";

const App = () => {
  const cartoons = [
    {
      id: 1,
      name: "Tom and Jerry",
      img: img1,
      description:
        "A classic rivalry between a clever mouse and a determined cat, full of slapstick comedy.",
      genre: "Comedy / Slapstick",
      era: "90s",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Pokémon",
      img: img2,
      description:
        "Ash and Pikachu travel the world, battling trainers and collecting Pokémon.",
      genre: "Adventure / Fantasy",
      era: "90s",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Shinchan",
      img: img3,
      description:
        "A mischievous kid creates chaos with his funny behavior and innocent questions.",
      genre: "Comedy / Slice of Life",
      era: "2000s",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Doraemon",
      img: img4,
      description:
        "A robotic cat from the future helps a lazy boy using amazing gadgets.",
      genre: "Sci-Fi / Comedy",
      era: "90s",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Kiteretsu",
      img: img5,
      description:
        "A genius kid uses inventions inspired by an ancient encyclopedia.",
      genre: "Comedy / Science",
      era: "90s",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Powerpuff Girls",
      img: img6,
      description:
        "Three super-powered girls protect their city from villains.",
      genre: "Action / Superhero",
      era: "90s",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Courage the Cowardly Dog",
      img: img7,
      description:
        "A timid dog faces terrifying creatures to save his owners.",
      genre: "Horror / Comedy",
      era: "90s",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Scooby-Doo",
      img: img8,
      description:
        "A group of friends and their dog solve spooky mysteries.",
      genre: "Mystery / Comedy",
      era: "90s",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-2 flex justify-center flex-wrap gap-6">
        {cartoons.map((cartoon) => (
          <Card key={cartoon.id} elem={cartoon} />
        ))}
      </div>
    </div>
  );
};

export default App;
