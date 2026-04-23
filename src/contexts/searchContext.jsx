import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const searchContext = createContext("");

export default function SearchProvider({ children }) {
	const [searchParams] = useSearchParams();
	const intialSearchValue = searchParams.has("search") ? searchParams.get("search") : "";
	const [keyword, setKeyword] = useState(intialSearchValue);

	useEffect(function () {
		setKeyword(() => searchParams.get("search") || "");
	}, [searchParams]);

	return (
		<searchContext.Provider value={{ keyword, setKeyword }}>
			{children}
		</searchContext.Provider>
	);
}