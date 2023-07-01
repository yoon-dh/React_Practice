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
    console.log(json);
    setMovie(json.data.movie);
  };
  console.log(movie.title);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Movie Detail</h1>
      {loading ? "Loading" : <Movie />}
    </div>
  );
}

export default Detail;
