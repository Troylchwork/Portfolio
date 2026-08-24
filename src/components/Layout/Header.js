import * as React from "react";
import { Popover, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, AppBar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";
import { LinkContainer, LinkTitle, LinkSubtitle, NavLinkText, LogoLink } from "./styles";
import { HOME_PATH, RESUME_PATH, PROJECTS_PATH, CONTACT_PATH } from "../../constants/paths";
import TroyLogo from "../../components/TroyLogo";
import { useTranslation } from "react-i18next";
import { Margin } from "@mui/icons-material";

function Header() {
    const { t, i18n } = useTranslation();
    const pages = [
        { name: `${t("common.home")}`, path: HOME_PATH },
        { name: `${t("common.resume")}`, path: RESUME_PATH },
        { name: `${t("common.projects")}`, path: PROJECTS_PATH },
        { name: `${t("common.contact")}`, path: CONTACT_PATH },
    ];
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changeLanguage = () => {
        const newLang = i18n.language === "en" ? "zh" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <AppBar position="static" sx={{ background: "white", color: "black", zIndex: 99 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* logo & name */}
                    <Box sx={{ flexGrow: "1", display: "flex" }}>
                        <LogoLink href="/">
                            <LinkContainer>
                                <LinkTitle>
                                    Troy Leung <br />
                                    <Box component="span" sx={{ display: { sm: "inline", md: "none" }, fontSize: "12px" }}>
                                        {t("common.jobTitleM")}
                                    </Box>
                                </LinkTitle>
                                <LinkSubtitle>/ {t("common.jobTitle")}</LinkSubtitle>
                            </LinkContainer>
                        </LogoLink>
                    </Box>

                    {/* mobile menu */}
                    <Box sx={{ flexGrow: "1", justifyContent: "flex-end", display: { xs: "flex", sm: "none" } }}>
                        <IconButton size="small" onClick={changeLanguage} color="inherit">
                            <LanguageIcon />
                        </IconButton>

                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>

                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ px: 4 }}>
                                    <NavLink key={page.path} to={page.path}>
                                        <Typography>{page.name}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* pc menu */}
                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", columnGap: "2rem", paddingRight: "10px", alignItems: "flex-end", display: { xs: "none", sm: "flex" } }}>
                        {pages.map((page) => (
                            <NavLink key={page.path} to={page.path}>
                                <NavLinkText>{page.name}</NavLinkText>
                            </NavLink>
                        ))}

                        {/* Language Button */}
                        <Button
                            startIcon={<LanguageIcon />}
                            onClick={changeLanguage}
                            variant="text"
                            size="small"
                            sx={{
                                minWidth: 40,
                                borderColor: "#000",
                                color: "#000",
                                "&:hover": { borderColor: "#000", backgroundColor: "rgba(0,0,0,0.04)" },
                            }}
                        >
                            <span style={{ fontSize: "12px" }}>{i18n.language === "en" ? "中文" : "EN"}</span>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
