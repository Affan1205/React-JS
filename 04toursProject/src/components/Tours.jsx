import Card from "./Card";
function Tours(props) {
  let { tours, removeTour } = props;
  return (
    <div>
      <div>
        <h2>Plan With Navraj</h2>
      </div>

      <div>
        {/* map-> array ke har ek element ke upar ek function chalata ha jitna data/array ke element honge utni baar function chalega */}
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;
