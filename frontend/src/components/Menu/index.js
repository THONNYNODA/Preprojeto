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
            <LinkMenu to="/candidato">Candidato</LinkMenu>
          </ItemsMenu>
        </ListaMenu>
      </BoxMenu>
    </ContainerMenu>
  );
}

export function Mobile(props) {
  return (
    <DrownMenuMobile
      onClick={props.handleOpenMenu}
      onChange={props.handleOpenMenu}
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
              <LinkMenuMobile to="/candidatos">Candidatos</LinkMenuMobile>
            </ItemsMenu>
            <ItemsMenu>
              <LinkMenuMobile to="/cadastros">Cadastros</LinkMenuMobile>
            </ItemsMenu>
          </ListaMenu>
        </BoxMenu>
      </ContainerMenuMobile>
    </DrownMenuMobile>
  );
}
