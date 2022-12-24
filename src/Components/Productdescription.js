function Productdescription({ name, price, description }){
   
    return (
        <>
            <h3>
                {name}
            </h3>
            <p>
                {price}
            </p>
        <p>{description}</p>
      </>
    );
}

export default Productdescription;