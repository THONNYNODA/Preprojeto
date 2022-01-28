import React from "react";
import {
  BoxIcon,
  BoxMenu,
  BoxSubMenu,
  ContainerMenu,
  ContainerMenuMobile,
  ContainerSubMenu,
  DrownMenuMobile,
  ItemsMenu,
  ItemsSubMenu,
  LinkMenu,
  LinkMenuMobile,
  ListaMenu,
  TitleSubMenu,
} from "./styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <>
      <DrownMenuMobile onClick={props.handleOpenMenu} />
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
            <ContainerSubMenu>
              <ItemsMenu>
                <LinkMenuMobile to="/cadastros">Cadastros</LinkMenuMobile>
              </ItemsMenu>
              <BoxSubMenu>
                <ItemsSubMenu>
                  <LinkMenuMobile to="/cadastrosvagas">Vagas</LinkMenuMobile>
                </ItemsSubMenu>
                <ItemsSubMenu>
                  <LinkMenuMobile to="/cadastrosvagas">Vagas</LinkMenuMobile>
                </ItemsSubMenu>
                <ItemsSubMenu>
                  <LinkMenuMobile to="/cadastrosvagas">Vagas</LinkMenuMobile>
                </ItemsSubMenu>
              </BoxSubMenu>
            </ContainerSubMenu>
          </ListaMenu>
        </BoxMenu>
      </ContainerMenuMobile>
    </>
  );
}
