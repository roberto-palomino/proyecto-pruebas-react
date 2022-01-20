function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <li>{number}</li>);
  return (
    <div className='lista'>
      <ul>{listItems}</ul>
    </div>
  );
}
NumberList();

export default NumberList;
