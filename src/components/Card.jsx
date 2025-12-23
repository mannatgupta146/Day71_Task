import React from "react";

const Card = ({ elem }) => {
  return (
    <div className="w-72 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 p-3 flex flex-col gap-2 cursor-pointer">

      <div className="h-40 w-full rounded-lg overflow-hidden bg-slate-100">
        <img
          src={elem.img}
          alt={elem.name}
          className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-base font-semibold text-slate-800">
        {elem.name}
      </h1>

      <p className="text-xs text-sky-600 font-medium">
        {elem.genre}
      </p>

      <p className="text-sm text-slate-600 line-clamp-2">
        {elem.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
          {elem.era}
        </span>

        <span className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
          ⭐ {elem.rating}
        </span>
      </div>

    </div>
  );
};

export default Card;
