function DateItem(props) {
  return (
    <div className="flex flex-col items-center bg-black text-white w-[100px] rounded-2xl ">
      <span className="text-[14px]">{props.date.toLocaleString("en-US", { month: "long" })}</span>
      <span className="text-[14px]">{props.date.getFullYear()}</span>
      <span className="text-[20px] font-bold">{props.date.getDate() < 10 ? `0${props.date.getDate()}` : props.date.getDate()}</span>
    </div>
  );
}
export default DateItem;
