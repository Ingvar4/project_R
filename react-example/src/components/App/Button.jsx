export function Button() {
  const handleClick = () => {
    alert('Меня нажали');
  };
  return (
    <button onClick={handleClick}>Кнопка</button>
  );
}