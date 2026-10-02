import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: "p1",
      title: "Doctor",
      amount: 550,
      date: new Date(2021, 5, 5),
    },
    {
      id: "p2",
      title: "Swe",
      amount: 328,
      date: new Date(2017, 4, 8),
    },
    {
      id: "p3",
      title: "Teacher",
      amount: 5250,
      date: new Date(1990, 2, 1),
    },
    {
      id: "p4",
      title: "Govt. Officer",
      amount: 2550,
      date: new Date(2007, 9, 23),
    },
  ];
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <ProductCard items = {products}></ProductCard>
    </div>
  );
}

export default App;
