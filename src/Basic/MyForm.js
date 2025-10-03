import { useState } from 'react';

export default function MyForm() {
    // フォームの送信結果を出力する部分のstate
    const [result, setResult] = useState(null);
    // formの入力値を管理するstate
    const [form, setForm] = useState({});

    // 最終的なresultの出力➝こんにちは、○○さん。××歳なんですね。

    // フォームが送信されたときのイベントハンドラ
    // イベントハンドラの引数ではイベントの詳細が含まれるオブジェクトが取得できる
    const handleSubmit = (event) => {
        // イベントハンドラの引数からpreventDefault()を実行すると
        // フォームの送信に伴う画面のリロードを防止できる
        event.preventDefault();
        setResult(
            <p>
                こんにちは、{form.name}さん。{form.age}歳なんですね。
                {form.gender && <span>性別は{form.gender}です。</span>}
                {form.hobby && <span>趣味は{form.hobby}です。</span>}
            </p>
        );
        // 名前と年齢のフォームの値を取得する
    };

    // フォームの内容が変化したときのイベントハンドラ
    const handleForm = (event) => {
        // {name: 'tanaka', age: '20'}こんな形のオブジェクトでフォームの内容を保存したい
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    /*
    スプレッド構文について
    javascriptのオブジェクトや配列を展開する構文
    const obj1 = { name: 'tanaka', age: 20};
    const obj2 = { ...obj1, gender: 'male' };

    */

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* フォームに入力された値を常にstateで管理するのでonChangeでハンドラを動作させる */}
                <label>名前：</label>
                <input name="name" type="text" onChange={handleForm} />
                <br />
                <label>年齢：</label>
                <input name="age" type="text" onChange={handleForm} />
                <br />
                <label htmlFor="gender">性別：</label>
                <input name="gender" type="radio" value="male" onClick={handleForm} /> 男性
                <input name="gender" type="radio" value="female" onClick={handleForm} /> 女性
                <br />
                <label htmlFor="hobby">趣味：</label>
                <input name="hobby" type="checkbox" value="sports" onClick={handleForm} />
                スポーツ
                <input name="hobby" type="checkbox" value="music" onClick={handleForm} />
                音楽
                <input name="hobby" type="checkbox" value="reading" onClick={handleForm} />
                読書
                <br />
                <input type="submit" value="送信" />
            </form>
            {result}
        </>
    );
}
