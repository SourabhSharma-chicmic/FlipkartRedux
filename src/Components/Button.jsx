const Button = (props) => {
  return (
    <button
      type={props.type || "button"} style={props.style}
      className={props.className || 'btn btn-primary'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
