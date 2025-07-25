import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion" // framer motion is a animation library like gsap but for react. just add motion. at the start of a tag to make it drag and drop motion wala
function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} deagElastic={0.2} dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-5 ">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />} {/* here "?" this means if close value is true then show close if it is false then show download icon*/}
          </span>
        </div>
        {
            data.tag.isOpen && (  // you can also use "&&" it means if the value is true then div down there will be shown
                <div className={`tag w-full h-14 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                </div>
             )} 
              {/* here it "?" means agar or if it is open then show this othervise not . here after)you need to add : null}*/}
        
        
      </div>
    </motion.div>
  );
}

export default Card;
