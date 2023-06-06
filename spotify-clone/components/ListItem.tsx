"use client";

import Image from "next/image";
import Liked from "../public/images/liked.png"

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href
}) => {
  return (
    <button>
      <div className="reelativ group flex iteems-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover/:bg-neutral-100/20 transition pr-4">
        <div className="relative min-h-[64] min-w-[64]">
          <Image 
            src={Liked}
            alt="liked"
          />
        </div>
      </div>
    </button>
  )
}

export default ListItem