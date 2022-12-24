import Productdescription from "./Productdescription";

function Product({ name, price, description }) {
    
    
    
    return (
      <div>
        <Productdescription>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{description}</p>
        </Productdescription>
      </div>
    );
}

export default Product;