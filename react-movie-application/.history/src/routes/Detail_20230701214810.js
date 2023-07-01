import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Movie Detail</h1>
      {loading ? (
        "Loading"
      ) : (
        <Movie
          id={movie.id}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
