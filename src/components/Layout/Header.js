import * as React from "react";
import NavigationTitle from "../NavigationTitle";
import { Box, Stack } from "@mui/material";
import {
    DesktopMenu,
    TitleBar,
    LogoLink,
    LinkTitle,
    LinkSubtitle,
    LinkContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function navigateToHomePage(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <Stack height={80}>
            <TitleBar>
                <DesktopMenu>
                    <LogoLink href={"/"} onClick={(e) => navigateToHomePage(e)}>
                        <LinkContainer>
                            <LinkTitle>Troy Leung</LinkTitle>
                            <LinkSubtitle>
                                / Game Developer & Frontend Developer
                            </LinkSubtitle>
                        </LinkContainer>
                    </LogoLink>
                    <NavigationTitle />
                </DesktopMenu>
            </TitleBar>
        </Stack>
    );
}

export default Header;
