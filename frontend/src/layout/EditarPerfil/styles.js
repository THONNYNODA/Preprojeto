import { styled } from "@mui/system";

export const ContainerCadastros = styled("section")`
  width: 100%;
  margin-top: 2rem;
  height: 100vh;
  position: relative;
  display: flex;

  main {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;

    .containA {
      flex: 1;
      margin-inline: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-color: var(--primary-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      img {
        width: 150px;
        height: 150px;
      }
    }

    .containB {
      flex: 3;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 2rem;

      .title {
        font-weight: 400;
        margin-bottom: 5rem;
        color: var(--title-light);
      }
      .subtitle {
        font-weight: lighter;
        color: var(--text);
        font-size: 1.4rem;
      }

      .perfil{
        width: 100%;
        border: 2px solid;
      }

    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
