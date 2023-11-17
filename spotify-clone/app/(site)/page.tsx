import { Figtree } from "next/font/google";
import Header from "@/src/components/Header";
import ListItem from "@/src/components/ListItem";
import getSongs from "@/src/actions/getSongs";

import PageContent from "./components/PageContent";

const font = Figtree({ subsets: ["latin"] });

export default async function Home() {
	const songs = await getSongs();

	return (
		<div
			className='
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-x-hidden
      overflow-y-auto
      '>
			<Header>
				<div className='mb-2'>
					<h1 className='text-white text-3xl font-semobold'>Welcome back</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
						<ListItem
							image='/images/liked.png'
							name='Liked Songs'
							href='liked'
						/>
					</div>
				</div>
			</Header>
			<div className='mt-2 mb-7 px-6'>
				<div className='flex justify-between item-center'>
					<h1 className='font-semibold text-2xl text-white'>Newest Songs</h1>
				</div>
				<PageContent />
			</div>
		</div>
	);
}
