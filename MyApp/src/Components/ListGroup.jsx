function ListGroup() {
  const items = ["Tokyo", "London", "Manila", "Italy", "Paris"];

  return (
    <>
      <h1>My list</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
