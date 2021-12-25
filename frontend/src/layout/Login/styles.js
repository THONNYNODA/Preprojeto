import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Background from "../../assets/fundologin.jpg";

export const ContainerLogin = styled(Box)`
  width: ${(props) => props.width};
  height: 100%;
  background-image: url(${Background});
  background-size: 100% 100%;
  position: relative;
  @media(max-width: 780px){
    width: 100%;
    
  };
`;

export const ContainerFilter = styled('div')`
  width: ${(props) => props.width};
  height: 100vh;
  background-color: rgba(48, 150, 96, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2.1rem;
 
`;

export const BoxText = styled('div')`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const Title = styled("h2")`
  padding: 15px 0;
  color: #e32727;
`;

export const Text = styled("p")`
  color: #ffffff;
`;
