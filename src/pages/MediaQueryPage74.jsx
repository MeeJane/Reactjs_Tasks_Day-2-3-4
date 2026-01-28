import useMediaQuery74 from "../components/useMediaQuery74";

const MediaQueryPage74 = () => {
    const isMobile = useMediaQuery74("(max-width: 768px)");

    return (
        <div>
            <h1>useMediaQuery Hook Demo</h1>

            {isMobile ? (
                <h2>📱 Mobile View</h2>
            ) : (
                <h2>💻 Desktop View</h2>
            )}
        </div>
    );
};

export default MediaQueryPage74;
