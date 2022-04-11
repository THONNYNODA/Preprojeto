import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

export const ModalDetalhe = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background-color: rgba(0, 0, 0, 0.45);
  z-index: 999;
`;

export const ContainerDetalhe = styled("div")`
  max-width: 560px;
  max-height: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircularProgresso = styled(CircularProgress)`
&.MuiCircularProgress-colorPrimary{
  color: rgba(31, 99, 87, 0.8);
}

`