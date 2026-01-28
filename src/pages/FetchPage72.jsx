import useFetch72 from "../components/useFetch72";

const FetchPage72 = () => {
    const { data, loading, error } =
        useFetch72("https://jsonplaceholder.typicode.com/users");

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <h1>useFetch Hook Demo</h1>

            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        {user.name} – {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchPage72;
