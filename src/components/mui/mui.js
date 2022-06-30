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
    flex: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    modal: {
        position: 'absolute',
        flexDirection: "column",
        alignItems: "center",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 375,
        backgroundColor: "#445d5b",
        border: '2px solid #f8d862',
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "14px",
        p: 4,
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#f8d862"
                },
                body1: {
                    margin: "15px 0",
                    fontSize: "18px",
                    fontWeight: "500",
                }
            },
        },
    }
});