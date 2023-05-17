import { useEffect, useState } from "react";

//---------------
//Ex3 - You are not allowed to create another state,
//movies' state has to store the original data (before expensiveLogic's logic)
//---------------
type Movie = {
  name: string;
};

const expensiveLogic = (movie: Movie) => {
  for (let i = 0; i < 100000000; i++) {}
  return movie;
};

const Ex3 = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [movies, setMovies] = useState([] as Movie[]);

  useEffect(() => {
    setMovies([
      { name: "The Prestige" },
      { name: "Inception" },
      { name: "Deadpool" },
      { name: "The Dark Knight Rises" },
      { name: "Jump Street 21" },
      { name: "Avengers: Infinity war" },
      { name: "Avengers: Endgame" },
      { name: "Guardians Of The Galaxy 3" },
    ]);
  }, []);

  return (
    <div>
      {movies.map((movie) => {
        const { name } = expensiveLogic(movie);
        return (
          <div
            key={name}
            style={{
              backgroundColor: name === selectedMovie ? "green" : "gray",
            }}
            onClick={() => {
              setSelectedMovie(name);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Ex3;
