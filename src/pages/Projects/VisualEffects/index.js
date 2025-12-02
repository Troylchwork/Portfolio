import { Stack, Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import { itemData } from "./data";
import { Background } from "./styles";
import { useTranslation } from "react-i18next";

export default function VisualEffect() {
    const { t } = useTranslation();
    return (
        <Background>
            <Stack sx={{ margin: "20px" }}>
                <h1>{t("common.visualEffect")} </h1>
                <CustomeBreadcrumbs name={t("common.visualEffect")}  />
                <ImageList>
                    <ImageListItem key="Subheader" cols={2}></ImageListItem>
                    {itemData.map((itemData) => (
                        <ImageListItem key={itemData.title}>
                            <img srcSet={`${itemData.img}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${itemData.img}?w=248&fit=crop&auto=format`} alt={itemData.title} loading="lazy" />
                            <ImageListItemBar title={itemData.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Stack>
        </Background>
    );
}
