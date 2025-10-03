// export defaultを設定するとこのファイルに不空数関数があった場合でも
// これを設定した関数が代表として出力される

// propsはコンポーネントに属性のような形で渡された値を
// 受け取るため仕組みである
// JSXの中では{props.属性名}で受け取った値を参照できる
// 例えば<Mycomponent myName="yuma" />のようにmyName属性で
// "yuma"を渡した場合、Mycomponent内では{props.myName}で
// "yuma"を参照できる
export default function Mycomponent(props) {
    return <p>こんにちは{props.myName}さん！</p>;
}

// export default Mycomponent;
