import "./ItemDates.css";

function ItemDates(props) {
  const date = props.date;
  return (
    <>
      <div className="itemDate">{date}</div>
      {props.children}
    </>
  );
}

export default ItemDates;
