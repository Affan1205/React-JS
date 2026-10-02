import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Movie from "./components/Movie";

function App() {
  //let's say ki mera api ka response ese aaya assume karo
  // const response = [
  //   {
  //     itemName: "Nirma",
  //     itemDate: "20",
  //     itemMonth: "June",
  //     itemYear: 1998,
  //   },
  //   {
  //     itemName: "Airel",
  //     itemDate: "2",
  //     itemMonth: "July",
  //     itemYear: 1999,
  //   },
  //   {
  //     itemName: "Surfexcel",
  //     itemDate: "08",
  //     itemMonth: "September",
  //     itemYear: 2002,
  //   },
  // ];
  // return (
  // <div>
  //   <Item name="Nirma"></Item>
  //   <ItemDate day="20" month="June" year="1998"></ItemDate>

  //   <Item name="Surfexcel"></Item>
  //   <ItemDate day="29" month="July" year="1999"></ItemDate>

  //   <Item name="Airel"></Item>
  //   <ItemDate day="14" month="August" year="2000"></ItemDate>
  //   <h1>Hello Welcome to React!</h1>
  // </div>

  // <div>
  //   <Item name={response[0].itemName}>
  //     {/* yeh jo component ke andar ka kuch data show karana ha UI mein toh mujhe
  //     props.children ka use krna padega by default component ke andar ka data
  //     UI mein show nahi hota */}
  //     Hello I am your first Item
  //   </Item>
  //   <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

  //   <Item name={response[1].itemName}></Item>
  //   <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

  //   <Item name={response[2].itemName}></Item>
  //   <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

  //   <h1>Hello Welcome to React!</h1>
  // </div>
  // );

  const initialMovies = [
    {
      id: 1,
      title: "Black Comedy: Digger",
      director: "Alejandro González Iñárritu",
      releaseYear: 2026,
      runtime: "133 min",
      synopsis: "Billionaire oil tycoon Digger Rockwell triggers an ecological disaster in Greenland and tries to convince the world he is its only savior.",
      imageUrl: "https://i.redd.it/gvt1v0ymnzz71.jpg",
    },
    {
      id: 2,
      title: "I Play Rocky",
      director: "Peter Farrelly",
      releaseYear: 2026,
      runtime: "127 min",
      synopsis: "Struggling actor Sylvester Stallone navigates the mechanics of 1970s Hollywood to bring his underdog vision of Rocky to life.",
      imageUrl: "https://cdn.kinocheck.com/i/w=1200/z53bdvxfrx.jpg",
    },
    {
      id: 3,
      title: "Bucking Fastard",
      director: "Werner Herzog",
      releaseYear: 2026,
      runtime: "109 min",
      synopsis: "Inseparable sisters Jean and Joan live in total enmeshment, embarking on a surreal odyssey to find an imaginary land of true love.",
      imageUrl: "https://variety.com/wp-content/uploads/2026/08/Bucking-Fastard.jpg?w=1000&h=667&crop=1",
    },
    {
      id: 4,
      title: "The Debut",
      director: "Jesse Eisenberg",
      releaseYear: 2026,
      runtime: "105 min",
      synopsis: "A timid housewife auditions for a community theater musical and transforms into a zealous method actor, losing her sense of reality.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BM2Q5ZTdmN2UtYzJjZi00ZjZjLWJmMWMtMjFjMmM5M2VmOWY4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 5,
      title: "The Runner",
      director: "Kevin Macdonald",
      releaseYear: 2026,
      runtime: "84 min",
      synopsis: "A high-powered London lawyer is forced into a high-stakes race through the city after a mysterious caller kidnaps her son.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1XFHNJ10CGUxcAGLcTtkuJVFFepMR6p5e1bwZ0LChg&s=10",
    },
  ];

  return (
    <div className="movie-container">
      <Movie
        movieTitle={initialMovies[0].title}
        movieDirector={initialMovies[0].director}
        movieRelease={initialMovies[0].releaseYear}
        movieRuntime={initialMovies[0].runtime}
        movieSynopsis={initialMovies[0].synopsis}
        movieImage={initialMovies[0].imageUrl}
      ></Movie>
      <Movie
        movieTitle={initialMovies[1].title}
        movieDirector={initialMovies[1].director}
        movieRelease={initialMovies[1].releaseYear}
        movieRuntime={initialMovies[1].runtime}
        movieSynopsis={initialMovies[1].synopsis}
        movieImage={initialMovies[1].imageUrl}
      ></Movie>
      <Movie
        movieTitle={initialMovies[2].title}
        movieDirector={initialMovies[2].director}
        movieRelease={initialMovies[2].releaseYear}
        movieRuntime={initialMovies[2].runtime}
        movieSynopsis={initialMovies[2].synopsis}
        movieImage={initialMovies[2].imageUrl}
      ></Movie>
      <Movie
        movieTitle={initialMovies[3].title}
        movieDirector={initialMovies[3].director}
        movieRelease={initialMovies[3].releaseYear}
        movieRuntime={initialMovies[3].runtime}
        movieSynopsis={initialMovies[3].synopsis}
        movieImage={initialMovies[3].imageUrl}
      ></Movie>
      <Movie
        movieTitle={initialMovies[4].title}
        movieDirector={initialMovies[4].director}
        movieRelease={initialMovies[4].releaseYear}
        movieRuntime={initialMovies[4].runtime}
        movieSynopsis={initialMovies[4].synopsis}
        movieImage={initialMovies[4].imageUrl}
      ></Movie>
    </div>
  );
}

export default App;
