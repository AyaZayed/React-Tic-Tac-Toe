export default function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick({ value: "X" })}>
      {props.value}
    </button>
  );
}
