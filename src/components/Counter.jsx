import { useState } from 'react';
// hook -> gancho

export function Counter() {
    // const = Constante.
    const [counter, setCounter] = useState(0);

    // let it change = Deixe isso mudar ou Deixe isso ter seu valor alterado.
    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}