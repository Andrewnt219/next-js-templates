import { theme } from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --accent-color: #006ae6;
  --accent-color-rgb: 0, 106, 230;

  --primary-color: #fff;
  --primary-color-rgb:   255, 255, 255;


  --primary-color-light: #F6F8FE;
  --primary-color-light-rgb: 246, 248, 254;

  --secondary-color: #751bba;
  --secondary-color-rgb: 117, 27, 186;

  --text-color: #000;
  --text-color-rgb: 0, 0, 0;

  --text-color-light: #717172;
  --text-color-light-rgb: 113, 113, 114;

  --border-color: #d6dbe6;

  box-sizing: border-box;

  scroll-behavior: smooth;  
  
  font-size: 100%;

  @media screen and (min-width: ${theme`screens.mdMobile`}) {
    font-size: 106.25%;
  }

  @media screen and (min-width: ${theme`screens.lgMobile`}) {
    font-size: 112.5%; 
  }

  @media screen and (min-width: ${theme`screens.smTablet`}) {
    font-size: 118.75%; 
  }

  @media screen and (min-width: ${theme`screens.mdTablet`}) {
    font-size: 143.75%;
  }

  @media screen and (min-width: ${theme`screens.lgTablet`}) {
    font-size: 156.25%;
  }

  @media screen and (min-width: ${theme`screens.smDesktop`}) {
    font-size: 168.75%;
  }

  @media screen and (min-width: ${theme`screens.mdDesktop`}) {
    font-size: 181.25%;
    
    
  }

  @media screen and (min-width: ${theme`screens.lgDesktop`}) {
    font-size: 231.25%;
  }

  @media screen and (min-width: ${theme`screens.wqhd`}) {
    font-size: 281.25%;
  }

  @media screen and (min-width: ${theme`screens.uhd4`}) {
    font-size: 437.5%;
  }

  @media screen and (min-width: ${theme`screens.uhd5`}) {
    font-size: 562.5%;
  }

  @media screen and (min-width: ${theme`screens.uhd8`}) {
    font-size: 875%;
  }

}


body {
  color: var(--text-color);
  
}

/* NOTE theme must end with 'mode' for ease of removing */
.dark-mode {
  --accent-color: #51d7fd;
  --acent-color-rgb: 81, 215, 253;

  --primary-color: #150d1c;
  --primary-color-rgb: 21, 13, 28;

  --primary-color-light: #0f0717;
  --primary-color-light-rgb: 15, 7, 23;

  --secondary-color: #6a2cb1;
  --secondary-color-rgb: 106, 44, 177;

  --text-color: #fff;
  --text-color-rgb: 255, 255, 255;

  --text-color-light: #9a9fac;
  --text-color-light-rgb: 154, 159, 172;

  --border-color: #ffffff2b;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;

  box-sizing: inherit;
  font-family: inherit;
  color: var(--text-color);
  transition: fill 300ms ${theme`transitionTimingFunction.theme`},  
    color 300ms ease, 
    background-color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`};
}

input,
select,
textarea {
  font-size: inherit;
  font-family: inherit;
  background: transparent;
}


#__next {
  background: var(--primary-color);
  transition: all 1000ms ease;
  position: relative;

}

.no-scroll {
  overflow-y: hidden;
}

/* * { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); } */

`;
