import React from "react";
import {
    HOME_PATH,
    PROJECTS_PATH,
    RESUME_PATH,
    CONTACT_PATH,
} from "../../constants/paths";
import { NavButtonTitle, DefaultNavLink } from "./styles";

function NavigationTitle() {
    return (
        <NavButtonTitle >
            <DefaultNavLink to={HOME_PATH}>
                Home
            </DefaultNavLink>
            <DefaultNavLink to={RESUME_PATH}>
                Resume
            </DefaultNavLink>
            <DefaultNavLink to={PROJECTS_PATH}>
                Projects
            </DefaultNavLink>
            <DefaultNavLink to={CONTACT_PATH}>
                Contact
            </DefaultNavLink>
        </NavButtonTitle>
    );
}

export default NavigationTitle;
