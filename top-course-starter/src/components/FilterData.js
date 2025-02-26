import { filterData } from "../data.js";
function Filter() {
  return (
    <>
      {filterData.map((items) => (
        <li key={items.id}>{items.title}</li>
      ))}
    </>
  );
}
export default Filter;
