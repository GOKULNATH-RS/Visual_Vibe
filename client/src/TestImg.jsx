import { useEffect, useState } from "react";
import parse from "html-react-parser";

const TestImg = () => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/get-sample")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.src);
        console.log(data.src);
      });
  }, []);

  return (
    <div>
      <h1>Test Image</h1>

      {parse(`${img}`)}
    </div>
  );
};

export default TestImg;
