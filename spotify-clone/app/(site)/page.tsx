import { Figtree } from "next/font/google";
import Header from "@/src/components/Header";
import ListItem from "@/src/components/ListItem";


const font = Figtree({subsets: ['latin']})

export default function Home() {
  return (
    <div className="
      bg-neutral-900
      rounded-lg
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem />
          </div>
        </div>
       </Header>
    </div>
  )
}
