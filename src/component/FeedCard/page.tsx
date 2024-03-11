import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border-t border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/134134211?v=4"
            alt="user-image"
            height={45}
            width={45}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5 className="font-bold">Lavnish Raghav</h5>
          <p className=" text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
