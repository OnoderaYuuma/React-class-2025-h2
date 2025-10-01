import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
    const [count, setCount] = useState(0);

    // コンポーネント側で渡されたstepの値（引数）を使ってstateを更新する
    const update = (step) => {
        setCount(count + step);
    };

    return (
        <div>
            <p>現在の総カウントは{count}です</p>
            <StateCounter step={1} onUpdate={update} setCount={setCount} />
            <StateCounter step={10} onUpdate={update} setCount={setCount} />
            <StateCounter step={-1} onUpdate={update} setCount={setCount} />
            <StateCounter step={-10} onUpdate={update} setCount={setCount} />
        </div>
    );
}
