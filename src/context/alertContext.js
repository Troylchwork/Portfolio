import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
    const [state, setState] = useState({
        isOpen: false,
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    return (
        <AlertContext.Provider
            value={{
                ...state,
                onOpen: (name, email, subject, message) =>
                    setState({ isOpen: true, name, email, subject, message }),
                onClose: () =>
                    setState({
                        isOpen: false,
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    }),
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = () => useContext(AlertContext);
