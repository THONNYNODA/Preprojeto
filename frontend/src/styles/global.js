import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root{
        --hue:169;
        --primary-color:hsl(var(--hue), 52%, 25%);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar{
            width:0px;
        };
        // ::-webkit-scrollbar-track{
        //     color:blue;
        // };
        ::-webkit-scrollbar-thumb{
            background:var(--primary-color);
        }
    };

    html,body{
        width: 100%;
        height:100%;
        position: relative;
        background-color: #ffffff;
        
        
    };



`



