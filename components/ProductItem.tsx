
type ProductItemProps = {
    id: string,
    image: string,
    title: string,
    price: string,
    currency: {
      sym: string,
      x: number
    }
}

const ProductItem = ({id, image, title, price, currency} :ProductItemProps) => {
  const rPrice = parseInt(price) * currency.x;
  const fixedPrice = rPrice.toFixed(2)
  return (
    <div className={"card core-product py-2 my-3"}>
      <a href={"/product/"+id}>
        <div className={"card-img-top _img d-flex justify-content-center align-items-center"}>
         <div><img src={image} alt="Card image cap" width="125px"/></div>
        </div>
        <div className={"card-body _content"}>
          <h5 className={"card-title"}>{title.substr(0, 37)}</h5>
          <p className={"card-text"}>{fixedPrice} {currency.sym}</p>
          <a href={"/product/"+id} className={"btn btn-primary px-4"}>
            View product
          </a>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;