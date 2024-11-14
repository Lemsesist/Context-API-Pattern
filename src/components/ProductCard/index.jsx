import "./index.css";

export function ProductCard(props) {
    // return <div>[props.data.name]</div>;

    // const {image, category, name, price} = props.data
    // это для краткости, чтобы не писать каждый раз props

    return (
        <div className="product-card">
            <img width="200px" src={props.data.image} alt=""/>
            <div>{props.data.category}</div>
            <h4>{props.data.name}</h4>
            <div>{props.data.price}</div>
        </div>
    )
}