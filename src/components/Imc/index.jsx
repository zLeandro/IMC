import React, { useState } from 'react';
import './imc.css'


const Calculadora = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

if (!isNaN(pesoFloat) && !isNaN(alturaFloat) && alturaFloat > 0) {
    const imc = pesoFloat / (alturaFloat * alturaFloat);
    setResultado(imc.toFixed(2));
} else {
    setResultado(null);
}

    
};


return (
    <div className="App">
    <h1>Calculadora de IMC</h1>
    <div>
        <label>Peso (kg):</label>
        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
    </div>
    <div>
        <label>Altura (0.00):</label>
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
    </div>
    <button onClick={calcularIMC}>Calcular</button>
    {resultado !== null && (
        <div>
        <h2>Resultado</h2>
        <p>Seu IMC é: {resultado}</p>
        </div>
    )}
    <div className="TabelaFixa">
        <h2>Tabela de Classificação</h2>
        <table>
        <thead>
            <tr>
            <th>IMC</th>
            <th>Classificação</th>
            
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Menos que 18.5</td>
            <td>Magreza</td>
            </tr>
            <tr>
            <td>18.5 a 24.9</td>
            <td>Normal</td>
            </tr>
            <tr>
            <td>25.0 a 29.9</td>
            <td>Sobrepeso</td>
            </tr>
            <tr>
            <td>30.0 a 39.9</td>
            <td>Obesidade</td>
            </tr>
            <tr>
            <td>Mais que 40.0</td>
            <td>Obesidade Grave</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
);
};




export default Calculadora;