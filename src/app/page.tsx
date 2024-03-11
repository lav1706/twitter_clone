import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { FiHash } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import FeedCard from "@/component/FeedCard/page";
import { CiCircleMore } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHome />,
  },
  {
    title: "Explore",
    icon: <FiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Message",
    icon: <FiMail />,
  },
  {
    title: "Bookmark",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "User",
    icon: <AiOutlineUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-4 ml-10">
        <div className="text-2xl hover:bg-gray-800 rounded-full transition-all cursor-pointer p-2 w-fit h-fit">
          <BsTwitter />
        </div>
        <div className="mt-2 text-sm font-semibold pr-4">
          <ul>
            {SideBarMenuItems.map((item) => (
              <li
                className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer "
                key={item.title}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#1d9bf0] px-8 py-2 text-sm rounded-full w-full mt-4">
            Tweet
          </button>
        </div>
      </div>
      <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] h-screen overflow-scroll border-gray-600 ">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
