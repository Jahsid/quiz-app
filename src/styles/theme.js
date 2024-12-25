import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    variant: "outlined",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                },
            },
        },
    },
});

export default theme;