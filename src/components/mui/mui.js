import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f8d862',
        },
        secondary: {
            main: '#585492',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&::-webkit-scrollbar": {
                        width: 10,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#445d5b50",
                        borderRadius: "0 4px 4px 0",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#f8d862",
                        borderRadius: "4px",
                    },
                    boxShadow: "0 0 15px #FFFFFF"

                }
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    color: "#f8d862",
                    maxWidth: "330px",
                    margin: "20px 0 0"
                },
                outlined: {
                    color: "#f8d862",
                },
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    color: "#f8d862",
                    fontWeight: "700",
                },
                icon: {
                    color: "#f8d862",
                    fontWeight: "700",
                },
            }
        },
    }
});