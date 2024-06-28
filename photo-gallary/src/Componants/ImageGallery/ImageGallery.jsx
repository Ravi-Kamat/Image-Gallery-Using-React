import axios from "axios";
import { useEffect, useState } from "react";
import "../ImageGallery/ImageGallery.css";
import HyperLink from "../hyperLink/HyperLink";

function ImageGallery() {
  const [urlData, setUrlData] = useState([]);

  async function downloadImage() {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=20"
      ); // 20 API data from API
      const imageResult = response.data.photos; // extract all data details

      const getData = imageResult.map((dataPic) => ({
        id: dataPic.id,
        desc: dataPic.description,
        title: dataPic.title,
        image: dataPic.url,
      }));

      setUrlData(getData);
    } catch (error) {
      console.error("Error downloading images", error);
    }
  }

  useEffect(() => {
    downloadImage();
  }, []);

  return (
    <div className="gallery-wrapper">
      {urlData.map((data) => (
        <div className="gallery-card" key={data.id}>
          <HyperLink image={data.image} name={data.title} id={data.id} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
