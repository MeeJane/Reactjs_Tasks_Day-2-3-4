import { useEffect, useState } from "react";

const useMediaQuery74 = (query) => {
    const getMatches = () => {
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handler = (event) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener("change", handler);

        return () => {
            mediaQuery.removeEventListener("change", handler);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery74;
