import { Figtree } from "next/font/google";
import Header from "@/src/components/Header";

const font = Figtree({subsets: ['latin']})

export default function Home() {
  return (
    <div className="
      bg-neutral-900
      rouunded-lg
      h-full
      w-full
      overflow-x-hidden
      overflow-y-auto
      ">
       <Header>
        Headerrrr
       </Header>
    </div>
  )
}
