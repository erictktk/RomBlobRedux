export function ViewsNav(props) {
  const actualNum = props.actualNum;
  return (
    <a
      style={{
        borderRadius: "4px 4px 0 0",
        backgroundColor: "purple",
        color: "white",
        cursor: "pointer"
      }}
      onClick={() => {
        props.clickCallback(actualNum);
      }}
    >
      {props.name}
    </a>
  );
}
