export default function StateCounter({ step, onUpdate, setCount }) {
    // 親のコンポーネントで定義されたステートを更新する関数に
    // propsで渡されたstepを引数として設定する
    // const handleClick = () => onUpdate(step);

    const handleClick = () => {
        setCount((c) => c + step);
    };

    return <button onClick={handleClick}>カウント{step}</button>;
}
