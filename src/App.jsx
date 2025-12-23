import React from "react";
import Card from "./components/Card";

const App = () => {
  const cartoons = [
    {
      id: 1,
      name: "Tom and Jerry",
      img: "./src/assets/1.png",
      description:
        "A classic rivalry between a clever mouse and a determined cat, full of slapstick comedy.",
      genre: "Comedy / Slapstick",
      era: "90s",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Pokémon",
      img: "./src/assets/2.png",
      description:
        "Ash and Pikachu travel the world, battling trainers and collecting Pokémon.",
      genre: "Adventure / Fantasy",
      era: "90s",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Shinchan",
      img: "./src/assets/3.png",
      description:
        "A mischievous kid creates chaos with his funny behavior and innocent questions.",
      genre: "Comedy / Slice of Life",
      era: "2000s",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Doraemon",
      img: "./src/assets/4.png",
      description:
        "A robotic cat from the future helps a lazy boy using amazing gadgets.",
      genre: "Sci-Fi / Comedy",
      era: "90s",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Kiteretsu",
      img: "./src/assets/5.png",
      description:
        "A genius kid uses inventions inspired by an ancient encyclopedia.",
      genre: "Comedy / Science",
      era: "90s",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Powerpuff Girls",
      img: "./src/assets/6.png",
      description:
        "Three super-powered girls protect their city from villains.",
      genre: "Action / Superhero",
      era: "90s",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Courage the Cowardly Dog",
      img: "./src/assets/7.png",
      description:
        "A timid dog faces terrifying creatures to save his owners.",
      genre: "Horror / Comedy",
      era: "90s",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Scooby-Doo",
      img: "./src/assets/8.png",
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
