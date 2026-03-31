export function Button({label}) {
  const handleClick = () => {
    alert('Меня нажали');
  };
  return (
    <button onClick={handleClick}>{label}</button>
  );
}