import {
    Stack,
    Box,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import itemData from "./data";
import { ImageContainer } from "./styles";

export default function Model() {
    return (
        <Stack sx={{ background: "#F6F4F0" }}>
            <Stack sx={{ margin: "20px" }}>
                <h1>Model</h1>
                <CustomeBreadcrumbs name="Model" />

                <ImageContainer>
                    <ImageList variant="quilted" cols={2} gap={40}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </ImageContainer>
            </Stack>
        </Stack>
    );
}
