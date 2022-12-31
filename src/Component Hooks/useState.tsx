import { useState } from "react";

function UseStateComponent() {
    const [arr, setArr] = useState<number[]>([]);

    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
                {JSON.stringify(arr)}
            </div>
        </div>
    )

}

export default UseStateComponent;