export default function EventBasic() {
  const current = () => {
    const d = new Date();
    console.log(d.toLocaleString());
  }

  return (
    <div>
      <button onClick={current}>現在の時刻を取得</button>
    </div>
  );
}
