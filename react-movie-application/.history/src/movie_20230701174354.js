function Movie() {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt="" />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
