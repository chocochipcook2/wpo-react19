function ListItem({ buttonClickHandler, buttonName, itemTitle, ...props }) {
  const { className } = props;
  return (
    <div className={className}>
      <p>{itemTitle ?? "item"}</p>
      <button
        className="w-20 h-10 border-2 border-white text-white rounded-md"
        onClick={() => buttonClickHandler()}
      >
        <p>{buttonName ?? "button"}</p>
      </button>
    </div>
  );
}

export default ListItem;
