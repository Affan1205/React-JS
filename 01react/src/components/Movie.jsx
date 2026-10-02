import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.movieImage} loading="lazy" className="movie-img" />
      <p className="movie-title">{props.movieTitle}</p>
      <p className="movie-director">{props.movieDirector}</p>
      <p className="movie-release-year">{props.movieRelease}</p>
      <p className="movie-runtime">{props.movieRuntime}</p>
      <p className="movie-synopsis">{props.movieSynopsis}</p>
    </div>
  );
}
export default Movie;
