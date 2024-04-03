import { useState, useEffect, createElement } from "react";
import Card from "./components/UI/card/index";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => createElement("<h1>ERROR{error}</h1>"));
  }, []);
  // if(error){
  //   return <h1>ERROR{error.massage}</h1>;
  // }
  return (
    <div className="flex flex-row gap-[200px] col-auto row-span-4 max-w-[1280px]">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
};

export default App;
