import { useState } from "react";

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>クリック</button>
      <p>{count}回クリックされました</p>
    </div>
  );
}
