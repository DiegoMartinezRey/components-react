const FahrenheitToCelsius = props => {
	return <h2>Grados celsius: {(props.fahrenheit - 32) / 1.8}</h2>;
};

export default FahrenheitToCelsius;
