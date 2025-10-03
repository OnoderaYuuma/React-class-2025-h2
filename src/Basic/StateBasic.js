// stateを使う際には必ずreact本体からuseStateをインポートする
import { useState } from 'react';

export default function StateBasic({ init }) {
    // stateの定義の仕方
    // const [実際のstateの値を保存する変数, stateの値を更新する関数名] = useState(初期値);
    // useStateの()内にはstateの初期値を設定する
    // stateの値を更新する関数を実行するとコンポーネントが再レンダリングされる
    // 再レンダリングされるとコンポーネントの関数が再度実行されるため
    // 最新のstateの値が変数に入る仕組みになっている
    const [count, setCount] = useState(init);

    const handleClick = () => {
        // stateの値を更新する際は直接変数に代入するのではなく
        // stateの値を更新する関数を実行して更新する
        // 例えばcountというstateの値を1増やしたい場合は
        // setCount(count + 1);のようにする
        setCount(count + 1);
        // setCountを2回実行してもstateが更新されるタイミングは
        // handleClick関数が終了した後になるため
        // countの値は1しか増えない
    };

    return (
        <div>
            <button onClick={handleClick}>クリック</button>
            <p>{count}回クリックされました</p>
        </div>
    );
}
