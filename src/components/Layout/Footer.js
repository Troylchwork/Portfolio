import { Box, Stack } from "@mui/material";
import { FooterContainer, FooterTitle } from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <Stack sx={{ justifyContent: "center" }}>
                © 2024 by Troy Leung.
            </Stack>
            <Box sx={{ display: "flex", width: "40%" }}>
                <Stack sx={{ flex: 1 }}>
                    <FooterTitle>Phone</FooterTitle>
                    5635 9822
                </Stack>
                <Stack sx={{ flex: 1 }}>
                    <FooterTitle>Email</FooterTitle>
                    troylchwork@gmail.com
                </Stack>
            </Box>
        </FooterContainer>
    );
}
