import React from "react";
import { Route, Routes } from "react-router-dom";
import Image from "../Componants/Image/Image";
import ImageDetails from "../Componants/ImageDetails/ImageDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Image />} />
      <Route path="/photos/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
