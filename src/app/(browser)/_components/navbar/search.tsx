"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";



const Search = () => {
	const router = useRouter();

	const [value, setValue] = useState("");
	const onClear = () => {
		setValue("")
	}
	const onSubmit = () => {
		const url = queryString.stringifyUrl({
			url: "/search",
			query : {test : value}
		})
		router.push(url);
	}

	return (
		<form onSubmit={onSubmit} className=" flex flex-row  items-center justify-center  w-full lg:max-w-100">
			<Input value={value} onChange={(e) => setValue(e.target.value)} className="relative rounded-r-none focus-visible:ring-0 w-full border-none bg-[#121212]" placeholder="Search..." />
			{value && (
				<X onClick={onClear} className="size-5 right-14 top-7.5 absolute cursor-pointer hover:opacity-75 text-[#757575]" />
			)}
			<Button type="submit" className="bg-[#272727] rounded-l-none">
				<SearchIcon className="size-5 text-[#757575] " />
			</Button>
		</form>
	)
}

export default Search
