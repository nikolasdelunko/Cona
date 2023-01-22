import React from "react";

export default function Video({ link }) {
  return (
    <div>
      <iframe
        width="900"
        height="506"
        src={link}
        title="KONA. Презентация партнёрской программы"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
