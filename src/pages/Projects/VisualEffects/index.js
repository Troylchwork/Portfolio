import {
    Stack,
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@mui/material";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import { itemData } from "./data";
import { Background } from "./styles";

export default function VisualEffect() {
    return (
        <Background>
            <Stack sx={{ margin: "20px" }}>
                <h1>Visual Effect</h1>
                <CustomeBreadcrumbs name="Visual Effect" />
                <ImageList>
                    <ImageListItem key="Subheader" cols={2}></ImageListItem>
                    {itemData.map((itemData) => (
                        <ImageListItem key={itemData.title}>
                            <img
                                srcSet={`${itemData.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${itemData.img}?w=248&fit=crop&auto=format`}
                                alt={itemData.title}
                                loading="lazy"
                            />
                            <ImageListItemBar title={itemData.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Stack>
        </Background>
    );
}
