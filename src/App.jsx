import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello>Diego</SayHello>
			<CalculateSquareArea side={10} />
			<CalculateTriangleArea base={5} height={5} />
			<CalculateCircleArea radio={5} />
			<CelsiusToFahrenheit celsius={20} />
			<FahrenheitToCelsius fahrenheit={68} />
			<TotalPrice price={100} />
			<WriteMessage
				name={'Diego'}
				material={'cafe'}
				size={'grande'}
				note={'Verificado'}
			/>
		</>
	);
};

export default App;
