import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  }, []);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
