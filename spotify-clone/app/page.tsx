import { Figtree } from "next/font/google";

const font = Figtree({subsets: ['latin']})

export default function Home() {
  return (
    <div className="text-green-500">
       Hello Spotify
    </div>
  )
}
