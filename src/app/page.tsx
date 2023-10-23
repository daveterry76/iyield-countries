import CountrySelector from "@/components/CountrySelector";
import CountriesContextProvider from "@/contexts/CountriesContext";
import { Box, Typography } from "@mui/material";
import type { FC } from "react";

const HomePage: FC = () => {
  return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Typography variant="h3">Country Search</Typography>
        <em>
          <CountriesContextProvider>
            <CountrySelector />
          </CountriesContextProvider>
        </em>
      </Box>
  );
};

export default HomePage;
