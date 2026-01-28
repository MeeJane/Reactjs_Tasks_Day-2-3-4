import useHover73 from "../components/useHover73";

const HoverPage73 = () => {
    const {
        ref,
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    } = useHover73();

    return (
        <div>
            <h1>useHover Hook Demo</h1>

            <div
                ref={ref}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: "220px",
                    height: "120px",
                    backgroundColor: isHovered ? "#90ee90" : "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    cursor: "pointer"
                }}
            >
                {isHovered ? "Hovered 👋" : "Hover over me"}
            </div>
        </div>
    );
};

export default HoverPage73;
