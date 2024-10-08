import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavButtonTitle = styled('nav')({
    fontWeight: 'bold',
    display: 'flex',
    gap: '2rem',
    alignitems: 'center',
})

export const DefaultNavLink = styled(NavLink)({
    borderBottom: '1px solid white'
})