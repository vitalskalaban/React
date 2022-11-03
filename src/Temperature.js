import './Temperature.css';
import { useState } from 'react';

function SwitchTemperature() {
    const [temperature, setTemperature] = useState(10);

    function increment() {
        if (temperature < 30) {
            setTemperature(temperature + 1);
        }
    }

    function decrement() {
        if (temperature > 0) {
            setTemperature(temperature - 1);
        }
    }



    return (
        <div class="app-container">
            <div class="temperature-display-container">
                <div class={`temperature-display ${temperature > 15 ? 'hot' : 'cold'}`}>{temperature}°C</div>
            </div>
            <div class="button-container">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default SwitchTemperature;