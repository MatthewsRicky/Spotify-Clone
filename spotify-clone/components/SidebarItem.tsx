import Link from "next/link";
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  href
}) => {
  return (
    <Link 
    href={href}
    className={twMerge(`
    `)}>
      Sidebar Item
    </Link>
  )
}

export default SidebarItem;