const TotalPrice = props => {
	return <h2>Precio total: {props.price + props.price * 0.21}</h2>;
};

export default TotalPrice;
