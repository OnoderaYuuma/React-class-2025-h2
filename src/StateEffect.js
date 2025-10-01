import { useState } from 'react';

export default function StateEffect({ init }) {
    // ここで定義しているcountはあくまでも「現在」のstateの値を参照するもの
    // 「現在」というのは更新される前の値である
    const [count, setCount] = useState(init);

    const handleClick = () => {
        // setCountの中で関数に引数として渡される値(c)は「最新」のstateの値
        // 「最新」というのは現在進行形で更新され続けている値である
        setCount(function (c) {
            return c + 1;
        });
        // 上記の関数をアロー関数で書くと以下のようになる
        // さらに引数が1つだけの場合は()を省略できる
        // さらに関数の中身がreturnだけの場合は{}とreturnも省略できる
        // よって以下のように書くこともできる
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    };

    return (
        <div>
            <p>現在のcountの値は{count}です</p>
            <button onClick={handleClick}>クリック</button>
        </div>
    );
}
