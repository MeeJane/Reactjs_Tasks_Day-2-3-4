import { useState, useEffect } from "react";

/* Task 46: Reusable Modal Confirmation */
function ConfirmModal({ show, message, onConfirm, onCancel }) {
    if (!show) return null;
    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex",
            justifyContent: "center", alignItems: "center"
        }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
                <p>{message}</p>
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

function TasksD345() {
    /* Task 41: Notes App */
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    /* Task 42: Simple Authentication (mock) */
    const [loggedIn, setLoggedIn] = useState(false);

    /* Task 43: Toggleable Password */
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    /* Task 44: Product Card */
    const ProductCard = ({ name, price, img }) => (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px", margin: "5px" }}>
            <img src={img} alt={name} style={{ width: "100%" }} />
            <h5>{name}</h5>
            <p>{price}</p>
        </div>
    );

    /* Task 45: Search History */
    const [search, setSearch] = useState("");
    const [history, setHistory] = useState([]);

    /* Task 46: Modal Confirmation */
    const [showModal, setShowModal] = useState(false);

    /* Task 47: Text Formatter */
    const [text, setText] = useState("");

    /* Task 48: Color Picker */
    const [color, setColor] = useState("#ff0000");

    /* Task 49: Expense Tracker */
    const [expense, setExpense] = useState("");
    const [expenses, setExpenses] = useState([]);

    /* Task 50: Form + List + Filter */
    const [items, setItems] = useState([]);
    const [itemInput, setItemInput] = useState("");
    const [filter, setFilter] = useState("");

    return (
        <div style={{ padding: "20px" }}>

            <hr />

            <h4>41. Build a Notes App using localStorage.</h4>
            <input value={note} onChange={e => setNote(e.target.value)} />
            <button onClick={() => { setNotes([...notes, note]); setNote(""); }}>Add Note</button>
            <ul>
                {notes.map((n, i) => (
                    <li key={i}>{n} <button onClick={() => setNotes(notes.filter((_, idx) => idx !== i))}>Delete</button></li>
                ))}
            </ul>
            <hr />

            <h4>42. Create a Simple Authentication UI (mock user).</h4>
            <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
            <p>{loggedIn ? "Welcome User!" : "Please login."}</p>
            <hr />

            <h4>43. Build a Toggleable Password Input component.</h4>
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
            <hr />

            <h4>44. Create a Product Card layout using props.</h4>
            <div style={{ display: "flex" }}>
                <ProductCard name="Laptop" price="$1200" img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXFxgYFhcXFh4dGhgXHRcXFxgXGBoYHSogGiAlHRoXITEiJSktLi4uGR8zODMuNyguLisBCgoKDg0OGxAQGi0mICYtLS0tKy0tLS4wLS0tMi0tMC4vLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAABAwEFBAYHBwIEBAcAAAABAAIRAwQFEiExQVFhcQYTIoGRoQcyQlKxwdEjYnKCksLwM+EUQ6KyCBVTYxY0c5Oj4vH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQUCAwQG/8QAMhEAAgIBAQUFBwMFAAAAAAAAAAECAxEEBRIhMXEiMmGx8BNBUYGhwfGR0eEjJDNCQ//aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiLHXrtYJe5rRvcQB5oDIiqN7+ki7rPINcVHD2afaPlkqTfHpr1Fns8feqO/aPqslFsjKOyKPvK+7PZxNatTZ+Jwnw1XA7V0rve3aOqhh2MbgZ+qB8Vr2folWecVeq0bTBL3eJgeZWudtVffkvubYU22d2LO/XH0kstsxCz1mvLIxASCAdDB2cVLLivoupCz3q6i1xLXUXZnU+q7ZyK7Us3h4ceT4mDTi2nzQREUEBERAEREAREQBERAEREAREQBERAEWC1WynTE1HtYN7nAfFU2+vSvdtnkdcarvdptJ84gJgF5QrhN9enWq6RZrO1g2OqmTzgZeapt49Lr1t2XXVi2MxT7DZ2iQRl3qcfEJZ5H6PvfpVY7KJrWmkzhiE+AVFvn03WOnIs9OpWO/1W+eZXIrP0QqOOKvVLSfdaarj+YHD5qSsHR+zMeDUbDB/wBaoMTvyM+EFap3Qh8WdVWjss+C6slLx9L942g4aLW0p2U2l7/GPkot903nbDiruqQdtapA/QM/JWy73MZUbTpU2sbE9lgbkT2ZAGpGeecEKwWqyPLYbGokncAHFV9u05p4hFLqdsdmQj35N9OBSLu9H7AftqznfdYMI0O0yTpuCsljuOy0P6dFkj2nDE7nLpWdkUwcTw4iJ+vIgg8M1FNvYufhiIOW+NIPI5/lVfZdqbs5m8fovod9VGnr7sfXzJKvV+C13jZ/JOXyC0GWgunk6PEjygLep0nkDZ/Mlq3dzmdK7Rr9FKmC/LMD7TC3/wCKqP2ruS4RZ/s73sD97g3/AHN+D4Xd16WiW9TB+B5fVR3b5rxCIi2GgIiIAiIgCIiAIiIAiq3Szp7Y7vOCq4uqRPVsEu4Tnl3rm19em+s6RZqDaY2OqGXfpGXmslFsjJ3ElQt8dLLFZR9taKbTuxSfAZrgdovK+bw1dXLTu+zZ45T5rJdvo2qu7Vasxk7GS508SQAD4rnt1NFXfmunM316e2fdi/Iv18+myzMkWejUqnY53Zb55+Sot6eli8rScFItpzo2k0l/iZ+Cs11dALEz1mOqmNajsueEQNoK3P8ADNpE0gxrGkZBoAAO0CPHkQuGW2Kv+cW+vD9zup2XObxOWOhzB9yXhazirOceNap+3M+S3rH0Ipz9rVc7e2mA3xxSY4hWys4tcWzDm7d41BjaIzjwzBnyarXEBwAOo3Hi1y0z198/BeBb07J08OLWepDV+jtKkMVGm0x7wl45Eg+Y71HGuZAII3DTwjLwKurJA1MccwoG33eZJZBB1AzHhBPkRyWWm1bfZm/mRqNJFLMFgi/8XUGQnvGffAWe7qpxgnCI2w75OA81v2F2w0mOGh1GXAtJA8ApeyNYSA0BmkBxBB5O2rddat14OeqDrlxR6uxjqj8gYLpc47TAHkAYGepkq3uhsTkGg1H8BGFo5nPxC1rvpNYJlrjGwggcXEZAd8ncFq3heECYLpdDGbatXedzW6kbIjVU01vv16/g3Tk5ywkQ94UgXBp3U2O4Hq3vf/pweKrr2kVHE5GDOzU4SfBzlYKAxPLnOlocWF+x75FS01PwhrMA5cVXL4ktmO0QJ8XtPnC7aOe6YWZ5nuxWkyOJgd5yPgpipbnADnmq1ZXS6NmQHAO0PcSSpe0nTnJHmAFN1ackbKZPBgvO0ltqsVT3azc+GOmfhK/Q6/NPSJxDabtrXtP+kn4x4L9J0H4mtdvAPiJVvpv8MV1KLaC/uZfLyPaIi3HGEREAREQBERAEREB+dP8AlLLZetuFqLy5jyQA6JGLDBOsAYdN6uN23DZqI+yosad8S79TpKhLxpih0jtDTkKtMnxax37SrPVYQJGYVDtWyat3d54wuHuL3ZtcHUnhZy+J9FUtMFZHOHrDT2h8+5awtTXDC/xWvUqOpneN+yNxVM4ZLX2eepKUqsGfLxMf7vJY75s+NmJmbmwW8Rs+be8LWo2gHTTdtC26VbZs5eMD4t7wsYycWanBxlvIqt9UyWitTElo7Q2lmp72lR9mtLXjLMakROe8gZg8Wq222wnN9PXUtG3i3eeHtcwqrabtY52JjurdOYjsk8NrTwVnRZCUMP5P7M66pqXI37K4D1ZH4TI8DmtitRa8Zwe4tPiFF0mVWntNDuI/kqSs9UHVrh3LXYnF5TNsl7zB/g3AzixfjE/625hb1GhOZAmdva8xn3nPjGSygDcfBeatoa0SQsfbTfA0SgpG/wD4gluENcRuaBE/imPjHNR1cElxxtD4wFwMss9PaA7QvOY3yeQUZaekVEb54gH/AHBQ1p6SlxhjTl6snTi0RA5gSuirTWv/AFNG7FE5eFpaxuBgDWhoaAdGUte3955AJHuiNTnCWozJMjWZ1AAbM8RFOePWblrU6zi4FxOLUNGbuYac5+++ANy2abC4xll60ZhoGjAdScySdTicTqF0xhuczGUM8jWsze1y88ojwkd6lKrsh3xy/nxWkG9uBy/tO/jwW1VdnyGvHWf7cFlLtNCqC5Gj0jE0XcHN8zH85r9B9Hq2Oy2d/vUaZ8WAr87XqZoVO4/6gu7+jutjuyxn/ssHgMPyVnplirHj+xRbUji/5fdliREW4rwiIgCIiAIiIAiIgOJ+lSl1V92KrsqNDT4uZ+4KUdVczRYP+IGlgFitHuVSP3/tW25+/MFUm149qEvBr9PyX2x5diUfHz/BrVKzKmvZd5FatWo+nrm3xCzWikx2hWi4VGeqZG5VkYr8l/CKx9mfadoGrO9u0ct44LfoWqQohzWv07L92w8tyULQQc8jt4/QrKdSkjKUFItdiqYv5/Pr8V4t1ha4yQCd+ju+PW5rVuypJEfz+blLvzCrpTlXLCK6zMJ8CHbd7NkjvWG02YMzLiFN2+n1NDrjOogH3ZzKqNG1utDnUXOjCXYnn2WN9dx4YZ8l201Wz4vkbarXJOWeC+wttVzW4u2RvxEDyaqXel8YjADO8uf8gpLpde5ecpbTblTpDLC1u105TpicQYnCBOIqoNvZxPaaKg3EEiOBJxd4IXpNFoMLefEqr9qy5JG/TcXeyz8pc1b9msRPsv8A/fMeQla1htlB0Q0UzuqBxH5XNdn4eKm7PeDGbaQ4ifq4+S6NRXbFdmL9dGb9Pq9LPvT4+PDzRmsl2GIyY06hkgn8Tz2j5LZqVGsbgZHdp3R/J0k6aZvLrDha7GdwifAkAc5HJZKdLMbZmBrI255YhvwgN3uVVKE28zOx6iDWKz1QpZz48toEcPkVmrZM4uPlv+I71tULMSPMnhsI8zO3OMsK816Umdg+OUwphxZEVgiLbTmlU/C6O4HP+b12D0QV8V1UPumo3wqOXKKtGQ4fdPmCuiegiviu5zfcrvHi2m/9xVnp+4+pSbWXbi/BnRkRFtKoIiIAiIgCIiAIiIDnPp6seO63O206jHd2bT8VXbmtpdZ6LzmHU2H/AEjwXQvSVY+uuu1sGvVOcObe0PguTdAbbisVITOHE3uD3R5QqzasM1Rfwfn+C42M/wCrKPh5fknKzWu0yKj3uewwcxsK3K7NrcuCy2Cn1hwEaqmj2UemT3Y5fIwssnWjSDvW/Z+itaqNnM/NWe7rtaxoLtYC3rbbRSZu4LZCPvk8IqbdpT3t2pEFYOjraGdWqJ3Nz+KyVrzpMxBjRibn2sydvJQtuvrETGf3dpHDiqpel7EFpBkAiD71Nxgg8Wn4pCj2kuEfXr4Gaosn2rX9i733eAr2Z4mQWyORCqgb1NCdKloDajyRMU8IwNjiWl5G2Gj2k6IVDUY7rJ6umIed8FwDBxMgLTvO1Go5zpgvdkRmGsAkuGWkNEcGUfeK79NTKNkov4nPqGq4eyj1/gpV8kveZnADET6xbsn3Wzm73i46lRtQZbI2TIH5Rq7mVu3hasbjhADG5NHsgNyk72t0A2nPatAOkzMfedm48hsXsdNHdrSKSx5MMEZiY5QFvWa1scIqNkcNR4GR4xwXgUJzgk7zl/deHWY7I5Z/NbZVuPE0SpcuRNWYUi3DIc33XCQPm1ZGWd1HtUXHDqQCHNMGcwQZz4KvgwYIg/zv8AFldXG0TzMfNanXXLmjmxZCXBtF0u7pPVf2KjG7c2khxPEOEHxCsFcjADPZiZ3/AN9nMrm9gtLAYIwzz+fyVvstb7PI4h5H6Hiqq/Z8E81rBaafaVkWlY8r6mYOmd5Vy9AjooWqn7tcHxYG/tVHYcmuE4XaHiJDmnZiBkEcirZ6DK0V7dT4scP1PHzC1Vw3U0dO0rFZCE14nX0RFkVQREQBERAEREAREQGtedDrKNRh9pjm+LSF+dvR5/Rq0zkadUjxA+YK/SS/Nt2H/DXlb6B060kfqJ+DlzayG9S0vAsdlSxqo+OV9CyGtnBVj6JWYOdjOgVStWR4KxdH7bhYRKo5x3YpnqNZGTpaiT14XphdIzjFA4iclzC0dK6j6xD3E557vBWm9K57TvdOLmNvw8lz3pDZsNUvZ6r82kacvFdOhpVjamufmc1VKphvRXH39CavUFoD2nX1Tx3Kv2y0YyPvbNztHxzyK9XZexfTfZ6mRPqE7H7AeBWXovZ+ttFORk12Nw/ACSPEBWNVLrT3ua+qM5XxsXZ9Y5lyrNFmstOg04Xu9c/9x09Y78rW1SONNqpd5W/C2oRlH2bQPZIaarwOUUqfJoUz0gt32jiTk1pb5A1XfpwsHGqVT7YDhh2oBc//ANSo4OLe5rR4rp0Wlfel7+JU3R4Z9/r+SNq5AMHDxHyHxPBZGNDTHrO2jdzKwl2sHPa7cNw4nXvWazUScvLduneeC9BV69evMqecuCNqkzFEnXYMh9XdymLPd5DScB09wfudK8XPdr6mbB2Zg1HGBynV3JuXBWK22JrKcSzj9nr5grm1erUeynxLvRaZKO/I57bWEOORHMEeRkLWn+D6tKkrxwyYy5Ejyd9VFu8VKsyik1NeJsyUqmeo/m/KRzgq1XPay2NoMSCdf5v47Zzp7nDafqtizXm6mIGe6dn8PxO9arLI/E5HHJ0273t7UNDmPMupv0JiNQcnR7Q3c5mPRI5rL2tTGTgdSJaCZPrU3QTtjEQuW2alba/qh4adpOBp+Z811L0OXEbJXqV6zhnTwMwgwCXAuJPcNm9c1kotcCY7yWM8Ds6L4DK+rnMwiIgCIiAIiIAiIgC/O/TeyCn0grg5CqxrhzNNvzYV+iFwf050+qvOyVh7bIPc6Pg5Q1lNHRpJ7l8JeKPNEkDCcxvW9YXYTGwqCs9tDhnqt6yWiDCrLdO8NM941lEpeFSGkzGWu7bMcNeUqo1SM2OADHGCNereRLS37rlZbwqdg/HduKqloza4RGREbgcwO54EcCurZ9WEzRJNRIO3UoJPtMIB4g6Hu0U70Lrhr3v4Hz1UXXYXvfG2kCfEFaty27qXS4dk+PMKyvq3otIqYSjXenLuvPH6fsS172j7Q6TIgHQntPk8Gy98bYaoe0kmdYaJM6lztMX3vaPIDYtm9KrXVMQMtOeXFuEjhoPFbFlsfWsgZy4ud+I//XL8y6YyjGCNUqZW2ShHx+fryICy0S4gbTnnv2E8APMq0XJcZqRLTg3bXmc8/dn1j3Be6dms9DOvVY3bhnM8MIzj+c1o9IVOkC2zUi4+/UyHcBnHDJclmsljdqWfExVFGlWbZLPwL5ZLobTaC8iYyAyAG4AaDgFTel9+sYTTZVwndgHhkSfEKp2rpDb7YS0OeQfZpCB3kZ+JXqx9EKpzqObTG71neWXmuSuE97em+Jz37TcliteuhFWi8C7OBO+APILxZqFWsYpsc4/dGQ5nYr/dHQtkYm0XVY1fUyYO8wzxVgdY6NFs167Gt3U4DeWN8N8MS6pWN8yqeZPLOd2LohVdnVe2mNw7TvLIeKt1wdDWtipTpucR/m1DDRsyJhvxKz1el1mpPNKhRxVBPac0ntDQF9QQwneGRxUVePSG2V2/aVepc49jCWvlmhBe53YcDuI10CwIwi5iy2egMdptDYiYZu/E7XuBUt0X6SWW1YqdmcZbsc0iRwJABXJrJSxVGVGB7rQB2i6eseQPWAGT+zqIJyJz1UtZqRjE8GGkEdrBBO2AC4aagLJIhs7RYLyfRMHNu7dyVlslqbUbiae7aOa5BcvS3CBTtRLxMCsAIGQIDoOfPXeFcLPVLIfTdkYIIMhw+YWLRBdkUbdt6tqZHsu3bDyUksQEREAREQBERAFx3/iMsv2Vkrx6lVzSeYxD/auxLnPp7smO6nO206tN3dOE/FSgng4/Sr7lvWa37Drs5qGsrpptO9o+C8VqhC6JVxZ7OOqcYqRfLNWxs8io20WE9qNx8oP0Whd1/wBGkyatQCdmpnkM1pXj09YJFGkT955j/SMz4haoxVb4Gy3X0VrtSXQl2Xf1dK0PORLOrbygAlUy0VWNMlwkMEDXM8PNY7df1sthwy4gmcFNsDvjPxK92PopWdnULaY45u8B9Vs9u8cjz2q18bH/AE4/qade8W6Mb3n4wsTKtesQGBziNMDfiWj4q63R0MYc20n1iNXOyYOfsjvKslC6KdMduqxgHs0gD3F+TAe8rU5t8zhlZZLm8dDnVj6JVn51HNYP1O8Bl5q1XN0HpnNtJ1WNXvyYOejR3lb56UWNhLaDG1KgBIxHGXEey1zgKYPJrtNqhby6WWuu0Cepce0wOh5cwTMTkwiD7I7tuBgt1Fvbd9Gi0dbWY1ugbTiJ0AxuhgPKVF1ul1kpvNOhSxVBIxOBdDhOTnPbhZnlIYYnVUSvVFYMdVNSq5mVQmQ8NnIhhd24G2Rsnesjw+pkXCGxhrQWsMiQ2qHDtHIiczltCnAc2yZvPpVa62VR3Uk/0y0io4kEgtzkN7sMcZULWIqYQ9tSrVb63WyKhbMjCJ7Y25yRy0yUaDJLcOwYqHa7RAIL2vfm06dkCe5bNKrm0NJe4gQ9oc6rTjINl0mOAI4RtnBgKLHnC1zj1QgMqlmANMA4C0jtgcATuyyW5ZbK2mS14c8n1qRBaCIye2e0TtywnTUEhfKlncHw4NYGgNqYZqTGRc4Tke8EL0/A12JgGRlnWHHIGgEAA7MiJCkG1YwSYotkEmHMEPbHvEmYjYTG4rYewNILnga9umMQdltmBHIHXRYntfVBe6QZkh5OIbcQES5vEaeZ9NLMMklxOrgIGnqubrM+1lPHVZIwFSoJhrAJj708ROXgFMXNfdSykQ5xaf6jKmn5AJLXcchwUOHvjA2Q0EmG+rOQJJ+ZK+Gi1pIqOAiDDcydMmnQnvKkg6pdV60bS3FRdmPWYcnt5jdxCsV3XyW9mpmNjto571xAWx9NwqU3OBHZa8ntAboOTeULofRO861qYetolhaBFSIbU5A7eWSxaMjpTHgiQZHBelXLHVdS0MjaDp/ZTdltbXjLI7RtWGAbCIigBERAFV/SfZesuq2NiYovcPyjF8laFitdnbUY+m8S17S1w3tcCCPAoD8d0r6wU2sDZIESTlrlksVNlptPqNcRwEN8Tl5rpt4+jhl3VHYortJljnN9Rk9kOGk/e5aL5A/sspTb4Hbv3WxScuBQrP0OrE9t7GjbniI4QPqrFdHQlhPZpvrEak5NHOIA7yp+9ekNjsYb9k573CRjbjJzjIZU2578R0yUBe3TO0ve1oNNtLKDUdOU59mMLN39PKNSsTRiMXgsVK5qdJvbqsptGraQBjgXAim39RWhaek1iotcaNMVi0gEn7UgnTWKYHEBypNes99VwNSpUf2mhtUiCD7MaaQdWzAjYsdAky9jAGtGGrTHZAnIuDpBOecOJg7CFJi5FhvTpba64a1owOP+W9pe+IxBzGAYYw/cERrGkDarSKzmVX1KjoEOfLiGVMyIZOJoMNzBA1jSF5bQZhEvlk4abgRjpndUcMg3Xfw2rNaHkVXNFSm6u/8AzWOD2vxZGmYAa05axz3qcGJ4eKhcf6WJklzmlpoVcpIc71XOz2mDHiNGmMfZcWa9RJLm9n+o17mjKdwOWu9ZLRScS4uYWUQW9ZTqVMZY7SWR2hwJEZwZmF7tNIhzS51V74BoGq8YXN3AscYdplijfmgMRtYLhDy5zmtiq0PdVpmC3AS/MgDa2MtNyzVqL8YGGmw4Q14x421dziJy8QRwKy0q7y6WMdgEF4LGsYHT2muDSGkT3r7VrMc/MtExkwdn9R+QWSIZ8tVHDUbil0EAdfUJa37pIIgd626bzVxPw4w4wWk4cLjtGGA/bnHPj9kNaMGGTlGGXeJEeCyG1kAhzWAn2jOIfhA08FLWCMmR1mNNh6wvLo9klpDdzyRLwctmUa7F7srnOHV0WRizwNkkkCMYdMnbl5Faj7wcXBxLnOEQXHLLhr5xwXqztq1yW02lxn1abYA7miAoJNtlB2EuqkhoOHEO08GMmkTBGyCRHkvbXMZJa0mcg90RBy7TCMI75G47VZLm6DWip265bSOw5Ocd+IaTuMzvVxujolZ6DsfbqVIjHUdJjaANI7kyQc6sd21rUYpNL+LRFPkCQGjuy5Ky3T0Aef8AzFQBsHsMzcPzaDlBBV76st9TT3dh5bj5L3SqB2mo1B1B4pkYIu6+jlms+bKcuOr3nE4+OncpUr0vigHghfBIMgweCyQmFQCQsd5Tk/I79h57lJKtlq2rJbHMyObd27kowCaRaf8AzKnx8CigG4iIgNK9btZaGFj8sjDhqOU68jkuVdIei1SzuJABaSYwzETlHdEjZyXYlitNnbUaWvEg7EM4TcTgr7O2owseDhI2GCOIOwqk33cr7OBjqF9GSKZzJaTBOWTWk8812vpR0UdSJqUxLT/M9x8iqq5gc0se0EHJzSNRxCLgbniaycwtIcxjAaUD2H1BLo3NkRG4QVkpuecPWuwYM6T3DNp1jBEuaTwynuU9flwuokvpNJpOgYm4nVKWmZ1c8agQQBKgq1Gk0EZz773dsHhTZp+dyzNDyhRqtc9zxD6py6vCGUqjYzGFubjpkYnnksocwgso9Y9pjrA2kGYMtQ+ZyJIIfkfNaOOm3RmI+88/tGXiStqnVtNQl8uIDSXF0BmHbiBhpHJAZG2ZwLZqUwGgtpup0/6pAHYLiA0mDtJ3I5tBoxhtNpcSCzN1Wk4OicLhhIO7UA5ZryX0xDA+q6m4gvpMMNxaQ1zpLstDh+q2azpw4XNY2C3rIMmDk1xgvDwDGEnZlkgPlqp1hhc8Q4g/aveS2q3WMJBJEECAMssgVge2jPZD3bwTDJ24faLd0wVYbvuK1WoQyjUe04QX1GikwNAgFoAmfvbYzlWW7vRpRaZr1nP+4zIRxcD8CgOettD3ENYIygNpjM+HaPeSrHdHQW2V4JYKLPeqZHuaPnC6ddt3ULOIoUWM4xLjzJW9iJ1Qgq10+j6y0oNUuru45M8Br3q22SgymA2mxrGjQNEI1ZGoDM1ZQsLVlCgg9heKtGcxk4aEfA7xwXsL0EBhZVzwuEO2bnfh+nx1WaF8qMBEO0XimS2cRy2E5Hkd/NAZQF9AX2kx7/UYebsh9Stundc/1HE8G5D6lMg0HVBManc0SfJZW2Gs/wB2mN5zd3DQd6mKNBrBDWgDgsijIIb/AMPM/wCrW/X/AGRTKJkBERQAiIgPL2AggiQdQVR+lPRTWpS7+HPeOKvSISm0cVEtOFw4EH+aKqXz0Y6rFXswlurqWAPc3e6niyjuMbF2rpL0XFQF9IQR7I+X08FSOpcwwciETwbOEkchs9qpiQWBs6VD2nMO+DkQdDAB3blIXfdVeo7EGVajxmx7XAMgjJ/WOmRwA57l0EXDZjUNTqKeImScOU740lSzGwIGQ4LLJG6VG6+hrx2n1eqLh220QMz915EsB2gKy3VcdCzgimwSYxOJxOJ3knmVvNCzMaoySZaVVwyzjd8wthjpWBrVka3aP/1SjFo2GrK1YqRn6LO0KTA9hZGrw0LICEB7asrVjbxIA4mT3NGa26Nie7Rpj3qmQ7mDPxUAxMz0z5L6JJgAk7m5+J0ClKd2j2yXcNG/pGXitxjABAAA3BRkEVRu559Yhg4Zu8TkFu0LAxmcSd7sz5raRQAiIgCIiAIiIAiIgCIiAIiIAoK/+j7awLmQH7Rsd9Cp1ECZyqrZSwkEQQYPA7ivrWLoF83O2uJECoBkdhG53D4KnVbKWOLXCHDUH4jeOKGxSyazGLMxiytpLIKakGNrVka1ZG017a3OBmdwEnwCkxPAYsrSd30W/ZbnqvzIDB97N36Rl4lStnuWk2C4F53u0/TomSCCs9F9T1QXcsh3uKlbNcp9t0cGfNxUyAvqjJBr2axU6fqtAO/aeZ1WwiKAEREAREQBERAEREAREQBERAEREAREQBERAFp3ldzKzYdkR6rhqPryW4iAplosFWmYNNztzmAkHu1CzWa7qr9KZbxf2fLVW1FOSckLZ7gb/mOLuDeyPLM+KlbPZ2MEMaGjgFlRQQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==" />
                <ProductCard name="Phone" price="$500" img="https://image01-in.oneplus.net/media/202512/12/515f7b2e234f759c3f0117a06601222c.png?x-amz-process=image/format,webp/quality,Q_80" />
            </div>
            <hr />

            <h4>45. Build a Search History feature.</h4>
            <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={() => { if (search) { setHistory([...history, search]); setSearch("") } }}>Add</button>
            <ul>{history.map((h, i) => <li key={i}>{h}</li>)}</ul>
            <hr />

            <h4>46. Create a Reusable Modal Confirmation dialog.</h4>
            <button onClick={() => setShowModal(true)}>Delete Item</button>
            <ConfirmModal show={showModal} message="Are you sure?" onConfirm={() => { alert("Deleted!"); setShowModal(false) }} onCancel={() => setShowModal(false)} />
            <hr />

            <h4>47. Build a Text Formatter (uppercase, lowercase, clear).</h4>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setText(text.toUpperCase())}>Uppercase</button>
            <button onClick={() => setText(text.toLowerCase())}>Lowercase</button>
            <button onClick={() => setText("")}>Clear</button>
            <p>{text}</p>
            <hr />

            <h4>48. Create a Color Picker mini app.</h4>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <div style={{ width: "100px", height: "50px", background: color, marginTop: "5px" }}></div>
            <hr />

            <h4>49. Build a Simple Expense Tracker UI.</h4>
            <input value={expense} onChange={e => setExpense(e.target.value)} placeholder="Add expense" />
            <button onClick={() => { setExpenses([...expenses, expense]); setExpense("") }}>Add</button>
            <ul>{expenses.map((e, i) => <li key={i}>{e}</li>)}</ul>
            <hr />

            <h4>50. Create a Mini App combining Form + List + Filter.</h4>
            <input value={itemInput} onChange={e => setItemInput(e.target.value)} placeholder="Add item" />
            <button onClick={() => { if (itemInput) { setItems([...items, itemInput]); setItemInput("") } }}>Add</button>
            <input placeholder="Filter" value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {items.filter(i => i.toLowerCase().includes(filter.toLowerCase())).map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
            <hr />

        </div>
    );
}

export default TasksD345;
