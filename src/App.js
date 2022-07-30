import {useState} from 'react';

const misbotones = [
	{id: "seven", value: 7},
	{id: "eight", value: 8},
	{id: "nine", value: 9},
	{id: "four", value: 4},
	{id: "five", value: 5},
	{id: "six", value: 6},
	{id: "one", value: 1},
	{id: "two", value: 2},
	{id: "three", value: 3},
]; 
function App() {
	const operators = ['/', '*', '-', '+','.'];	
	const [miInput, setMiinput] = useState("");
	const [miOutput, setMiOutput] = useState("");

	const updateValueCalc = value => {
		if ((operators.includes(value) && miInput === '') || 
			(operators.includes(value) && operators.includes(miInput.slice(-1))) ||
			( miInput === '0' && value === '0'  )) 
		{
			return;	
		}
		
		setMiinput(miInput + value);

		if (!operators.includes(value)) {
			setMiOutput(value);
		}
		
	}

	const totalCalc = () => {
		// console.log("miInput.slice(2): ", miInput.slice(2));
		// console.log("miInput.slice(0,1): ", miInput.slice(0,1));
		// console.log("miInput.slice(1,2): ", miInput.slice(1,2));
		// console.log("miInput : ", miInput);
		// console.log("miInput lenght : ", miInput.length);
		// console.log("miInput.length-1:", miInput.length-1) 

		const xx = miInput.toString();
		console.log(xx)
		console.log("xxxx slice :", xx.slice(1,xx.length))

		if (miInput.slice(0,1) ==="0" && miInput.slice(1,2) !=='.') {
			setMiOutput(eval(xx.slice(1,xx.length)));
			setMiinput(xx.slice(1,xx.length));
		}
		else {

			eval(miInput) % 1 != 0 ? setMiOutput(eval(miInput).toFixed(4)) : setMiOutput(eval(miInput));
		}
	}

	const clearCalc = () => {
		setMiinput("");
		setMiOutput("");
	}

	// const crearNumeros = () => {
	// 	const digitos = [];
	
	// 	for (let i = 1; i <10; i++) {
	// 			digitos.push(
	// 				<button key={i}>{i}</button>
	// 			)
	// 	}
	// 	digitos.push(
	// 		<button className='dobletamaño' key={0}>{0}</button>
	// 	)
	// 	digitos.push(
	// 		<button key={"."}>{"."}</button>
	// 	)
	// 	return digitos;
	// }

	return (
		<div className="App">
			<div className="caja">
				<div id="display" className="display">{miInput || ""}  </div>
				<div id="output" className="display">{miOutput || 0 }</div>
				<div className="operators1">
						<button 
							id="clear" 
							className="dobletamaño"
							onClick={clearCalc}>A/C
						</button>
						<button 
							id="divide"
							onClick={()=> updateValueCalc('/')}> /
						</button>
						<button 
							id="multiply"
							onClick={()=> updateValueCalc('*')}> X
						</button>
				</div>
				<div className="subcaja">
					<div className="digits">
						{/* {crearNumeros()} */}
						{misbotones.map((boton) => 
							<button 
								id={boton.id} 
								key={boton.id}
								onClick={()=> updateValueCalc(boton.value.toString())}>{boton.value}
							</button>)}
						<button 
							className='dobletamaño' 
							id="zero" 
							key={0}
							onClick={()=> updateValueCalc('0')}>{0}
						</button>
						<button 
							id="decimal" 
							key={"."}
							onClick={()=> updateValueCalc('.')}>{"."}
						</button>
					</div>
					<div className="operators2">
						<button 
							id="subtract"
							onClick={()=> updateValueCalc('-')}>-
						</button>
						<button 
							id="add"
							onClick={()=> updateValueCalc('+')}>+
						</button>
						<button 
							id="equals" 
							className="dobletamaño"
							onClick={totalCalc}>=
						</button>
					</div>
				</div>
			</div>

		</div>
	);
}

// const Boton = ({misbotones, midisplay, setMidisplay, mioutput, setMioutput}) => {
// 	const clearAC = () => {
// 			setMidisplay("");
// 			setMioutput("");
// 	}
// 	const evalua = (valor) => {
// 		setMidisplay(midisplay + valor);
// 		console.log('Valor: ', valor);
// 		console.log('midisplay: ', midisplay);
// 		console.log('Length: ', midisplay.length+1);
// 		const posicion_operator =  midisplay.indexOf(valor);
// 		console.log('index: ', posicion_operator)
// 	}

// 	const handlemiClick =(valor) => {
// 		// const xvar = valor.toString()
// 		// console.log(e.target);
// 		// console.log(valor)
// 		valor ==="AC" && clearAC();
		
// 		evalua(valor);
// 		// if (valor ) {
// 		//   evalua(valor);
// 		//   setMidisplay(midisplay + valor);
// 		// }
			
// 	}
// 	return (misbotones.map((boton) =>  
// 		<button 
// 				className="boton" 
// 				key={boton.id} 
// 				id={boton.id}
// 				onClick={() => handlemiClick(boton.value)}     >{boton.value}
// 			</button>
		
// 		//   <div id={boton.id} key={boton.id}>
// 		//   {/* <button key={boton.id}>{boton.id}</button> */}
// 		//   {boton.value}
// 		// </div>
// 		)
// 	)
// } 
export default App;
