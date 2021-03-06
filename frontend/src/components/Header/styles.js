import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const ContainerHeader = styled("header")`
  width: 100%;
  //max-height: 3.5rem;
  background-color: var(--primary-color);
  position: fixed;
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
  padding-inline: 0.5rem;
  flex: 1;
  gap: 2rem;

  &:nth-of-type(2) {
    flex-grow: 3;
    justify-content: center;
    flex-direction: row-reverse;
  }
  &:nth-of-type(3) {
    flex-direction: row-reverse;
  }

  img {
    width: 50px;
  }
`;
export const ContainerPerfil = styled("div")`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
`;

export const BoxPerfil = styled("div")`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  cursor: ${(props) => props.cursor};
  background-size: 100% 100%;
  background-image: url("${(props) => props.img}");
`;
export const BoxMenuPerfil = styled("menu")`
  width: 100%;
  max-width: 15rem;
  position: absolute;
  top: 5rem;
  right: 4rem;
  background: rgba(31, 99, 87, 1);
  z-index: 999;

  header {
    display: block;
    text-align: center;
    padding: 0.5rem;

    img {
      width: 75px;
    }

    h4 {
      font-weight: lighter;
      font-size: 21px;
      color: #fff;
    }
    p {
      font-size: 18px;
      color: #fff;
      font-weight: lighter;
    }
  }

  nav {
    display: block;

    ul {
      list-style-type: none;

      li {
        padding: 0.5rem;
        font-size: 1.4rem;
        font-weight: lighter;
        text-align: center;
        display: block;
        transition: background 0.2s;

        a {
          text-decoration: none;
          color: #fff;
          cursor: pointer;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`;

export const MenuPerfil = styled("ul")`
  height: 100%;
  position: relative;
  list-style-type: none;
`;

export const ItemMenuPerfil = styled("li")`
  padding: 0.5rem;
  position: relative;
  border-bottom: 0.1rem outset rgba(255, 255, 255, 1);
  &:hover {
    background-color: var(--primary-color);
    transition: 0.5s;
  }
`;
export const LinkMenu = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #fff;
`;

export const BoxIconPerfil = styled("div")`
  color: #fff;
  display: flex;
  cursor: pointer;
`;
export const BoxIconClouse = styled("button")`
  color: #fff;
  position: absolute;
  right: 0;
  font-size: 2rem;
  border: none;
  background: none;
  &:hover {
    color: red;
  }
  cursor: pointer;
`;

export const BoxSeach = styled("div")`
  width: 100%;
  position: relative;
`;
export const InputSeach = styled("input")`
  width: 100%;
  position: relative;
  height: 3.5rem;
  padding-left: 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
export const IconSeach = styled("buttom")`
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  color: #95a3a6;
  cursor: pointer;
`;

export const Title = styled("h2")`
  position: relative;
  font-size: 1.4rem;
  font-weight: lighter;
  padding: 1.5rem 0 0.5rem 0;
  color: #fff;
`;

export const Text = styled("p")`
  position: relative;
  font-size: 1rem;
  color: #fff;
`;

export const Divisorio = styled("div")`
  position: relative;
  width: ${(props) => props.width || "0.2rem"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minheight || "100%"};
  margin: ${(props) => props.margin};
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(149, 163, 166, 1) 100%
  );
`;
