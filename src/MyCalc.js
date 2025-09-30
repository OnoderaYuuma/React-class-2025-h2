export default function MyCalc(props) {
    let num1 = props.num1;
    let num2 = props.num2;
    let result = num1 + num2;
    return (
        <div>
            <p>{props.num1}と{props.num2}の計算結果は:「{result}」</p>
        </div>
    );
}
