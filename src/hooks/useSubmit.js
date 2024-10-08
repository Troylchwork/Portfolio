import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        setLoading(true);
        try {
            await wait(1000);
            setResponse({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, response, submit };
};

export default useSubmit;
