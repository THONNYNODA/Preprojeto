import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const ContainerHeader = styled("header")`
  width: 100%;
  max-height: 3.5rem;
  background-color: var(--primary-color);
  position: sticky;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  z-index: 9997;
`;

export const BoxHeader = styled("div")`
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex: 1;
  &:nth-of-type(1) {
    align-items: center;
  }
  &:nth-of-type(2) {
    flex-grow: 3;
    flex-direction: row-reverse;
  }
  &:nth-of-type(3) {
    flex-direction: row-reverse;
  }
`;
export const ContainerPerfil = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
`;

export const BoxPerfil = styled("div")`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: ${(props) => props.cursor};
  background-size: 100% 100%;
  background-image: url("${(props) => props.img}");
`;
export const BoxMenuPerfil = styled("menu")`
  width: 100%;
  max-width: 200px;
  min-height: 100%;
  position: absolute;
  top: 60px;
  right: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #95a3a6;
  z-index: 999;
`;

export const MenuPerfil = styled("ul")`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const ItemMenuPerfil = styled("li")`
  padding: 10px;
  position: relative;
  border-bottom: 1px outset rgba(255, 255, 255, 1);
  &:hover {
    background-color: var(--primary-color);
    transition: 0.5s;
  }
`;
export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const BoxIconPerfil = styled("div")`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export const BoxIconClouse = styled("button")`
  color: #fff;
  position: absolute;
  right: 0;
  font-size: 20px;
  border: none;
  background: none;
  &:hover {
    color: red;
  }

  cursor: pointer;
`;

export const BoxSeach = styled("div")`
  width: 100%;
  //max-width: 200px;
  position: relative;
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  height: 35px;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
export const IconSeach = styled("buttom")`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 15px;
  color: #95a3a6;
  cursor: pointer;
`;

export const Title = styled("h2")`
  position: relative;
  font-size: 14px;
  padding: 15px 0 5px 0;
  color: #fff;
`;
export const TitleLogo = styled("h2")`
  position: relative;
  padding: 15px 0;
  font-size: 32px;
  font-weight: lighter;
  color: #fff;
  user-select: none;
`;

export const Text = styled("p")`
  position: relative;
  font-size: 14px;
  color: #fff;
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "2px"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight || "100%"};
  margin: ${(props) => props.margin};
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(149, 163, 166, 1) 100%
  );
`;
