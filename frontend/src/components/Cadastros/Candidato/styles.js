import { makeStyles } from "@mui/styles";



export const CadastroStyles = makeStyles({
  boxCenter: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    width: "100%",
    minWidth: 100,
    textAlign:'center'
  },
  boxField: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "5px",
  },
  containerField: {
    width: "100%",
    padding: "10px 0 ",
    
    
  },
  field: {
    "&.MuiTextField-root": {
      padding: "0 5px",
    },
  },
});
