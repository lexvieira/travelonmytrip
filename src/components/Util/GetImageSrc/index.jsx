import React from "react";

const GetImageSrc = (props) => {
  const src = props.src;
  const className = props.className;
  let img_src = src;
  const isLocalImage = (img) => img.includes('asset');

  if (isLocalImage(src)) {
    // console.log(src);
    // console.log(process.env.REACT_APP_PUBLIC_URL);

    img_src = src
  }
  
  return (
    <img src={img_src} className={className} alt="" />
  )

};

export default GetImageSrc;