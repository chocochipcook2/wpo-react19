function CustomButton({ onClickHandler, buttonName, ...props }) {
  const { className } = props;
  return (
    <button className={className} onClick={() => onClickHandler()}>
      <p>{buttonName ?? "button"}</p>
    </button>
  );
}

export default CustomButton;
