import { useRef, useState } from "react";

const useHover73 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return {
        ref,
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    };
};

export default useHover73;
