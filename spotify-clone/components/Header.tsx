"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "./Button";
import useeAuthModal from "../hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "../hooks/useUser";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const authModal = useeAuthModal();
	const router = useRouter();
	const supabaseClient = useSupabaseClient();
	const { user } = useUser();

	const handleLogout = () => {
		const { error } = supabaseClient.auth.signOut();
	};

	return (
		<div
			className={twMerge(
				`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
      `,
				className
			)}>
			<div className='w-full mb-4 flex items-center justify-between'>
				<div className='hidden md:flex gap-x-2 items-center'>
					<button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
						<RxCaretLeft
							size={35}
							className='text-white'
						/>
					</button>
					<button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
						<RxCaretRight
							size={35}
							className='text-white'
						/>
					</button>
				</div>
				<div className='flex md:hidden gap-x-2 items-center'>
					<button className='rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'>
						<HiHome
							className='text-black'
							size={20}
						/>
					</button>
					<button className='rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'>
						<BiSearch
							className='text-black'
							size={20}
						/>
					</button>
				</div>
				<div className='flex justify0-between items-center gap-x-4'>
					<>
						<div>
							<Button
								onClick={authModal.onOpen}
								className='bg-transparent text-neutral-300 font medium'>
								Sign up
							</Button>
						</div>
						<div>
							<Button
								onClick={authModal.onOpen}
								className='bg-white px-6 py-2'>
								Log In
							</Button>
						</div>
					</>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Header;
