import { Figtree } from "next/font/google";
import Header from "@/src/components/Header";
import ListItem from "@/src/components/ListItem";

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
        <div className="mb-2">
          <h1
            className="text-white text-3xl font-semobold"
          >
            Welcome back
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-4-cols mt-4">
            <ListItem 
              image="/images/liked.png"
            />
          </div>
        </div>
       </Header>
    </div>
  )
}
