"use client";

import { Song } from "@/src/types";

interface PageContentProps {
	songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
	if (songs.length === 0) {
		return <div className='mt-4 text-neutral-400'>No songs Available!</div>;
	}
	return <div>Page Content!</div>;
};

export default PageContent;
