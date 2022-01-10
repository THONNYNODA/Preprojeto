import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from {
    width:0px;
  }

  to {
    width:100%;
  }
`;

export const ContainerMenu = styled("div")`
  width: 0%;
  animation: ${rotate} 2s linear infinite ;
  height: calc(100vh - 3.5rem);
  background-color: #fff;
`;

export const BoxMenu = styled("nav")`
  width: 100%;
`;

export const ListaMenu = styled("ul")`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const ItemsMenu = styled("li")`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  border-bottom: 1px outset rgba(255, 255, 255, 1);
  &:hover {
    background-color: rgba(200, 200, 200, 1);
    transition: 0.5s;
  }
`;

export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #1f6357;
`;

export const BoxIcon = styled("div")`
  color: #1f6357;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
