import { createGlobalStyle } from "styled-components";
//hue default 169
export const GlobalStyle = createGlobalStyle`
    :root{
        --hue:169;
        --primary-color:hsl(var(--hue), 52%, 25%);
        --text:#212529;
        --text-gray:#384633;
        --title-light: rgba(31, 99, 87, 0.6);
        --error-color: #ff1700;
        --alert-color: #FEDA15;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar{
            width:0px;
        };
         ::-webkit-scrollbar-track{
             color:blue;
         };
        ::-webkit-scrollbar-thumb{
            background:var(--primary-color);
        }
    };
    body,html {
  width: 100%;
  height: 100%;
}

    html {
        scroll-behavior: smooth;
      };

body{
        font-size: 1.6rem;
        position: relative;
        background-color: #ffffff;
        
        
        
    };
    p{
        color: var(--text);
    };




`;
