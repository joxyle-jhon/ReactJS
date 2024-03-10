function ListGroup() {
  const items = ["Tokyo", "London", "Manila", "Italy", "Paris"];

  return (
    <>
      <h1>My list</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
