"use client"

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
    <div>
      List Item
    </div>
  )
}

export default ListItem;