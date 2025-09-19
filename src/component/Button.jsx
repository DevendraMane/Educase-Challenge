export const Button = (props) => {
  const { text, onClick, className, disabled } = props;

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <h3>{text}</h3>
    </button>
  );
};
