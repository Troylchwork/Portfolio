import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MobileView, BrowserView } from "react-device-detect";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import App from "./App";
import i18n from "./i18n";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { AlertProvider } from "./context/alertContext";

const customTheme = createTheme({
    primary: "#1975FF",
    darkBeige: "#E6DACE",
    beige: "#F6F4F0",
    lightBeige: "#BCBEC0",
    boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
    boxShadowHover:
        "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Suspense fallback="loading">
        <BrowserRouter>
            <I18nextProvider i18n={i18n} defaultNS={"translation"}>
                <ThemeProvider theme={customTheme}>
                    <AlertProvider>
                        <App />
                    </AlertProvider>
                </ThemeProvider>
            </I18nextProvider>
        </BrowserRouter>
        <MobileView>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    background: "black",
                    color: "white",
                    width: "100%",
                    height: "100%",
                }}
            >
                Sorry, mobile version not publish yet.
            </div>
        </MobileView>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
