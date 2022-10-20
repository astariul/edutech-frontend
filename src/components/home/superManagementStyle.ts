import { createStyles } from '@mantine/core';

const useSuperManagementStyles = createStyles((theme) => ({
  main: {
    width: "100%",
    height: "808px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-between",

    [`@media (max-width: 850px)`]: {
      display: "none"
    }
  },

  mainMobile: {
    width: "100%",
    height: "auto",
    display: "none",

    [`@media (max-width: 850px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  }

}));

export default useSuperManagementStyles;
