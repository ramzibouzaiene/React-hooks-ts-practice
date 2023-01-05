import { useEffect, useState } from "react";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: string;
    phone: number;
    website: string;
}

function useFetchData<Payload>(url: string): {
    data: Payload | null;
    loading: boolean;
} {
    const [data, setData] = useState<Payload | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((d: Payload) => {
                setData(d);
                setLoading(true);
            });
    }, [url]);


    return {
        data,
        loading,
    };
}

function CustomHookComponent() { 
    const {data, loading} = useFetchData<User[]>("users-data.json")
    return (
        <div>
            {loading && <h3>{data![0].username}</h3>}
        </div>
    ) 
}

export default CustomHookComponent;
