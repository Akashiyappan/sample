export default function List() {
  const names = ['akash', 'kamal', 'vimal'];

  return (
    <>
      <h1>List Item</h1>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
}
