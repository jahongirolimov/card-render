import "./style.scss";

const index = ({ data }) => {
  console.log(data);
  return (
    <div className="card border-[solid] w-[400px] h-[700px] flex flex-col border-[2px] p-5">
      <h1 className="m-3">{data.title}</h1>
      <p className="m-3">{data.price}</p>
      <p className="m-3 w-[190px] overflow-y-hidden">{data.description}</p>
      <span className="m-3">{data.category}</span>
      <img className="m-3 block w-[100px]" src={data.image} alt="" />
    </div>
  );
};

export default index;
