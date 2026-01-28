import { useContext } from "react";
import { AuthContext62 } from "../context/AuthContext62";

export default function AuthUI62() {
    const { isLoggedIn62, login62, logout62 } = useContext(AuthContext62);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f2f2f2",
            }}
        >
            {isLoggedIn62 ? (
                <>
                    <h1>Welcome User 🎉</h1>
                    <button onClick={logout62}>Logout</button>
                </>
            ) : (
                <>
                    <h1>Please Login</h1>
                    <button onClick={login62}>Login</button>
                </>
            )}
        </div>
    );
}
