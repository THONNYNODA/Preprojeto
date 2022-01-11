import React from "react";
import {
  BoxIcon,
  BoxMenu,
  ContainerMenu,
  ContainerMenuMobile,
  DrownMenuMobile,
  ItemsMenu,
  LinkMenu,
  LinkMenuMobile,
  ListaMenu,
  MenuAnimationReverso,
} from "./styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export function Desktop() {
  return (
    <ContainerMenu>
      <BoxMenu>
        <ListaMenu>
          <ItemsMenu>
            <BoxIcon>
              <HomeIcon />
            </BoxIcon>
            <LinkMenu to="/dashbord">Pagina Principal</LinkMenu>
          </ItemsMenu>
          <ItemsMenu>
            <BoxIcon>
              <PersonSearchIcon />
            </BoxIcon>
            <LinkMenu to="/vagas">Vagas</LinkMenu>
          </ItemsMenu>
          <ItemsMenu>
            <BoxIcon>
              <HomeIcon />
            </BoxIcon>
            <LinkMenu to="/dashboard">Pagina Principal</LinkMenu>
          </ItemsMenu>
        </ListaMenu>
      </BoxMenu>
    </ContainerMenu>
  );
}

export function Mobile(props) {

  const handleClouseMenu = () => {
    props.setOpenMenu(false);
  };

  console.log(props.openMenu);
  
  return (
    <DrownMenuMobile
      onClick={handleClouseMenu}
      onChange={handleClouseMenu}
      animate={props.openMenu ? "MenuAnimation" : "MenuAnimationReverso"}
    >
      <ContainerMenuMobile>
        <BoxMenu>
          <ListaMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/dashbord">Pagina Principal</LinkMenuMobile>
            </ItemsMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/vagas">Vagas</LinkMenuMobile>
            </ItemsMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/dashboard">Pagina Principal</LinkMenuMobile>
            </ItemsMenu>
          </ListaMenu>
        </BoxMenu>
      </ContainerMenuMobile>
    </DrownMenuMobile>
  );
}
