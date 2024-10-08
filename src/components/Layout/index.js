import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Header from "./Header";
import { ContentContainer } from "./styles";
import Footer from "./Footer";

export default function Layout() {
    return (
        <Stack>
            <Header />
            <Outlet />
            <Footer />
        </Stack>
    );
}
