import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    /* font-family: 'Space Grotesk', sans-serif; */
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight:500;
    text-decoration: none;
    font-size:100%;
    scroll-behavior:smooth;
    /* color: #0f2137; */
 

    /* font-size:1vw; */
    &:after{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
    &:before{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
}
html {
  scroll-behavior: smooth;
  cursor: none;
}
body{
  position:relative;
overflow-x: hidden;
height:100%;
width:100%;
/* background-color:#dbdcde; */
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
&::-webkit-scrollbar {
 display: none;
}
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
         overflow:auto
          }
}

`;
export default GlobalStyle;
