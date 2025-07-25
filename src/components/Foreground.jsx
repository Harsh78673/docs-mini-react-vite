import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
  
  const ref = useRef(null) ;

  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".8mb",
      close: false,
      tag: { isOpen: true, tagTitle:"Download Now", tagColor: "green" },
    },
    {
      desc: "Here fileSize is changed and tag color is also changed to blue & fileTitle is also changed to upload.",
      fileSize: ".6mb",
      close: false,
      tag: { isOpen: true, tagTitle:"Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".10mb",
      close: false,
      tag: { isOpen: true, tagTitle:"Download Now", tagColor: "sky" },
    },
    {
      desc: "Here tag is false closed so there is no border. and close is true so the icone is changed to download icon.",
      fileSize: ".4mb",
      close: true,
      tag: { isOpen: false, tagTitle:"Upload", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flexwrap-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
