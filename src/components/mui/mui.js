import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f8d862',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&::-webkit-scrollbar": {
                        width: 18,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#445d5b50",
                        borderRadius: "0 4px 4px 0"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#f8d862",
                        borderRadius: "0 4px 4px 0"
                    }

                }
            },
        }
    }
});