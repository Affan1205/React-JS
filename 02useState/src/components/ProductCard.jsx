import ProductItem from "./ProductItem";

function ProductCard(props) {
  return (
    <div className="bg-blue-800 w-[450px] p-5 flex flex-col gap-5  rounded-2xl">
      <ProductItem specificItem={props.items[0]}></ProductItem>
      <ProductItem specificItem={props.items[1]}></ProductItem>
      <ProductItem specificItem={props.items[2]}></ProductItem>
      <ProductItem specificItem={props.items[3]}></ProductItem>
    </div>
  );
}
export default ProductCard;
