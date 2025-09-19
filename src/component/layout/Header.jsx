export const Header = (props) => {
  const { text, sub_text } = props;
  return (
    <>
      <div className="wel-msg">
        <div className="msg">
          <h2>{text === "" ? "Welcome to PopX" : text}</h2>
        </div>
        <div className="sub-msg">
          {sub_text === ""
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            : sub_text}
        </div>
      </div>
    </>
  );
};
