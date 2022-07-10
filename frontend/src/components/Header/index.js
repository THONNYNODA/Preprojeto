import React, { useState } from "react";
import {
  BoxHeader,
  BoxMenuPerfil,
  BoxPerfil,
  ContainerHeader,
  ItemMenuPerfil,
  LinkMenu,
  MenuPerfil,
  BoxIconPerfil,
  BoxSeach,
  IconSeach,
  InputSeach,
  ContainerPerfil,
  Text,
  Title,
  Divisorio,
  BoxIconClouse,
} from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";
import Logo from "../../assets/logo-footer.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Badge from "@mui/material/Badge";
import { BoxIcon } from "../Menu/styles";
import { Mobile } from "../Menu";
import { Link } from "react-router-dom";

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuPerfil, setOpenMenuPerfil] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpenMenuPerfil = () => {
    setOpenMenuPerfil(true);
  };

  function SeacherHeader() {
    return (
      <BoxSeach>
        <InputSeach type="text" placeholder="Pesquisar..." />
        <IconSeach>
          <SearchIcon />
        </IconSeach>
      </BoxSeach>
    );
  }

  function MenuPerfilHeader(props) {
    const handleCloseMenu = () => {
      props.setOpenMenuPerfil(false);
    };

    return (
      <BoxMenuPerfil>
        <BoxIconClouse onClick={handleCloseMenu} onClose={handleCloseMenu}>
          <CloseIcon />
        </BoxIconClouse>
        <header>
          <img src={PerfilMan} />
          <h4>Tony Takeharo Noda</h4>
          <p>Aux TI</p>
        </header>
        <Divisorio width="100%" minheight="0.2rem" />
        <nav>
          <ul>
            <li>
              <Link to="/edtarperfil">
                <a>Perfil</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>Sair</a>
              </Link>
            </li>
          </ul>
        </nav>
      </BoxMenuPerfil>
    );
  }

  return (
    <>
      <ContainerHeader>
        <BoxHeader>
          <BoxIcon
            onChange={handleOpenMenu}
            onClick={handleOpenMenu}
            color="#fff"
            cursor="pointer"
          >
            <MenuIcon />
          </BoxIcon>
        </BoxHeader>
        <BoxHeader>
          <img src={Logo} />
        </BoxHeader>

        <BoxHeader>
          <BoxPerfil
            cursor="pointer"
            img={PerfilMan}
            onChange={handleOpenMenuPerfil}
            onClick={handleOpenMenuPerfil}
          />
          {openMenuPerfil ? (
            <MenuPerfilHeader {...{ setOpenMenuPerfil }} />
          ) : null}
          <BoxIconPerfil>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </BoxIconPerfil>
        </BoxHeader>
      </ContainerHeader>
      {openMenu ? (
        <Mobile {...{ openMenu, setOpenMenu, handleOpenMenu }} />
      ) : null}
    </>
  );
}

export default Header;
