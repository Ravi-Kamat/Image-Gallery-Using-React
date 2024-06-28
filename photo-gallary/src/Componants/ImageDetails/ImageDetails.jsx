import { useEffect, useState } from "react";
import "./ImageDetails.css";
import { useParams } from "react-router-dom";

const ImageDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const getData = async () => {
    const resp = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const { photo } = await resp.json();
    setData(photo);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="image-detail-wrapper">
      <img src={data?.url} alt="" />
      <div className="content-wrap">
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default ImageDetails;
