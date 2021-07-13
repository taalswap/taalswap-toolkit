import { Colors } from "./types";

export const baseColors = {
  failure: "rgb(255, 72, 66)",
  primary: "#00ab55",
  primaryBright: "#00ab55",
  primaryDark: "#0098A1",
  secondary: "#00ab55",
  success: "#00ab55",
  warning: "rgb(255, 72, 66)",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#ddd",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  subSectionbg: '#f7f7f7',
  subSectionlibg: '#ffffff',
  listBg:"rgba(0, 171, 85, 0.08)",
  detailsBg: '#EBF8F2',
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#ffffff",
  inputSecondary: "#00ab55",
  inputSmall: "#919EAB",
  inputBtn: "#dddddd",
  tertiary: "#F3F5F7",
  text: "#212b36",
  textDisabled: "#BDC2C4",
  textSubtle: "#637381",
  logoColor: "#000000",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F4F6F8 0%, #F4F6F8 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#00ab55",
  background: "#161C24",
  backgroundDisabled: "#454F5B",
  backgroundAlt: "rgb(33, 43, 54)",
  subSectionbg: '#161c24',
  subSectionlibg: '#212B36',
  listBg:"rgba(0, 171, 85, 0.16)",
  detailsBg: '#161C24',
  cardBorder: "#454F5B",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "rgb(33, 43, 54)",
  input: "#454F5B",
  inputSecondary: "#262130",
  inputSmall: "#454F5B",
  inputBtn: "rgb(145, 158, 171)",
  primaryDark: "#0098A1",
  tertiary: "-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));",
  text: "#FFFFFF",
  textDisabled: "rgb(145, 158, 171)",
  textSubtle: "#fff",
  logoColor: "#fff",
  disabled: "#454F5B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, rgb(33,43,54) 0%, rgb(33,43,54) 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
