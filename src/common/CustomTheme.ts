const primaryColor: string = "#00cc7a";
const secondaryColor: string = "#ff8000";

interface ITheme {
  palette: {
    type?: string;
    primary: {
      light?: string;
      main: string;
      dark?: string;
      contrastText?: string;
    };
    secondary: {
      light?: string;
      main: string;
      dark?: string;
      contrastText?: string;
    };
  };
  // Expand as theme evolves...
}

const CustomTheme: ITheme = {
  palette: {
    type: "light",
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    }
  }
};

export default CustomTheme;
