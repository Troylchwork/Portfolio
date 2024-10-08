import { Stack, Box } from "@mui/material";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import Cards from "../../../components/Cards";
import { game2D, game2D2, city } from "../../../assets/images";
import { Background, CardList } from "./styles";
export default function More() {
    return (
        <Background>
            <Stack sx={{ margin: "20px" }}>
                <h1>More</h1>
                <CustomeBreadcrumbs name="More" />
                <CardList>
                    <Cards
                        img={game2D}
                        title="2D Game"
                        subTitle="Basic 2Dgame"
                    />
                    <Cards
                        img={game2D2}
                        title="2D Scene"
                        subTitle="Visual Project"
                    />
                    <Cards
                        img={city}
                        title="SciFi City"
                        subTitle="Visual Project"
                    />
                </CardList>
            </Stack>
        </Background>
    );
}
