import Card from "./Card";

function BoxCenter(props: any) {
  return (
    <div className="col align-self-Center box-center ">
      <h1>{props.name}</h1>
      <Card/>
    </div>
  );
}

export default BoxCenter;