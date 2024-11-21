import "./index.css";

export function ProductCard({product}) {

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};




// return <div>[props.data.name]</div>;

    // const {image, category, name, price} = props.data
    // это для краткости, чтобы не писать каждый раз props

    // return (
    //     <div className="product-card">
    //         <img width="200px" src={props.data.image} alt=""/>
    //         <div>{props.data.category}</div>
    //         <h4>{props.data.name}</h4>
    //         <div>{props.data.price}</div>
    //     </div>
    // )