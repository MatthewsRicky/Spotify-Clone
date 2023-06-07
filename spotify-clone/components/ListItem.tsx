"use client"

import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const onClick = () => {
    //add authentication before push
    router.push(href);
  }

  return (
    <div>
      List Item
    </div>
  )
}

export default ListItem;