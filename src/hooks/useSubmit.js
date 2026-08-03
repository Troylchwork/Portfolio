import { useState } from "react";

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    // const submit = async (url, data) => {
    //     setLoading(true);
    //     try {
    //         await wait(1000);
    //         setResponse({
    //             name: data.name,
    //             email: data.email,
    //             subject: data.subject,
    //             message: data.message,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const submit = async (url, data) => {
        setLoading(true);
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setResponse(data);
        } catch (error) {
            console.error("Submission Error:", error);
            alert("發送失敗，請稍後再試！");
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, response, submit };
};

export default useSubmit;
