import "./ItemDate.css";
function ItemDate(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;

  return (
    <div className="mfg-date">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
  //     const day = 20;
  //     const month = "June"
  //     const year = 1998;

  //   return (
  //     <div className="mfg-date">
  //       <span>{day}</span>
  //       <span>{month}</span>
  //       <span>{year}</span>
  //     </div>
  //   );
}
export default ItemDate;
