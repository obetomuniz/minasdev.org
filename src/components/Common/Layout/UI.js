import styled, { injectGlobal } from "styled-components";

import MontserratBlackWOFF2 from "@assets/fonts/Montserrat/Montserrat-Black.woff2";
import MontserratBlackWOFF from "@assets/fonts/Montserrat/Montserrat-Black.woff";
import MontserratBlackSVG from "@assets/fonts/Montserrat/Montserrat-Black.svg";

import MontserratExtraBoldWOFF2 from "@assets/fonts/Montserrat/Montserrat-ExtraBold.woff2";
import MontserratExtraBoldWOFF from "@assets/fonts/Montserrat/Montserrat-ExtraBold.woff";
import MontserratExtraBoldSVG from "@assets/fonts/Montserrat/Montserrat-ExtraBold.svg";

import MontserratBoldWOFF2 from "@assets/fonts/Montserrat/Montserrat-Bold.woff2";
import MontserratBoldWOFF from "@assets/fonts/Montserrat/Montserrat-Bold.woff";
import MontserratBoldSVG from "@assets/fonts/Montserrat/Montserrat-Bold.svg";

import MontserratSemiBoldWOFF2 from "@assets/fonts/Montserrat/Montserrat-SemiBold.woff2";
import MontserratSemiBoldWOFF from "@assets/fonts/Montserrat/Montserrat-SemiBold.woff";
import MontserratSemiBoldSVG from "@assets/fonts/Montserrat/Montserrat-SemiBold.svg";

import MontserratRegularWOFF2 from "@assets/fonts/Montserrat/Montserrat-Regular.woff2";
import MontserratRegularWOFF from "@assets/fonts/Montserrat/Montserrat-Regular.woff";
import MontserratRegularSVG from "@assets/fonts/Montserrat/Montserrat-Regular.svg";

import MontserratExtraLightWOFF2 from "@assets/fonts/Montserrat/Montserrat-ExtraLight.woff2";
import MontserratExtraLightWOFF from "@assets/fonts/Montserrat/Montserrat-ExtraLight.woff";
import MontserratExtraLightSVG from "@assets/fonts/Montserrat/Montserrat-ExtraLight.svg";

import MontserratLightWOFF2 from "@assets/fonts/Montserrat/Montserrat-Light.woff2";
import MontserratLightWOFF from "@assets/fonts/Montserrat/Montserrat-Light.woff";
import MontserratLightSVG from "@assets/fonts/Montserrat/Montserrat-Light.svg";

import MontserratThinWOFF2 from "@assets/fonts/Montserrat/Montserrat-Thin.woff2";
import MontserratThinWOFF from "@assets/fonts/Montserrat/Montserrat-Thin.woff";
import MontserratThinSVG from "@assets/fonts/Montserrat/Montserrat-Thin.svg";

injectGlobal`
  @font-face{
    font-family: "montserrat-black";
    src: url(${MontserratBlackWOFF2}) format("woff2"),
    url(${MontserratBlackWOFF}) format("woff"),
    url(${MontserratBlackSVG}#Montserrat-Black) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-extrabold";
    src: url(${MontserratExtraBoldWOFF2}) format("woff2"),
    url(${MontserratExtraBoldWOFF}) format("woff"),
    url(${MontserratExtraBoldSVG}#Montserrat-ExtraBold) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-bold";
    src: url(${MontserratBoldWOFF2}) format("woff2"),
    url(${MontserratBoldWOFF}) format("woff"),
    url(${MontserratBoldSVG}#Montserrat-Bold) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-semibold";
    src: url(${MontserratSemiBoldWOFF2}) format("woff2"),
    url(${MontserratSemiBoldWOFF}) format("woff"),
    url(${MontserratSemiBoldSVG}#Montserrat-SemiBold) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-regular";
    src: url(${MontserratRegularWOFF2}) format("woff2"),
    url(${MontserratRegularWOFF}) format("woff"),
    url(${MontserratRegularSVG}#Montserrat-Regular) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-extralight";
    src: url(${MontserratExtraLightWOFF2}) format("woff2"),
    url(${MontserratExtraLightWOFF}) format("woff"),
    url(${MontserratExtraLightSVG}#Montserrat-ExtraLight) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-light";
    src: url(${MontserratLightWOFF2}) format("woff2"),
    url(${MontserratLightWOFF}) format("woff"),
    url(${MontserratLightSVG}#Montserrat-Light) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }
  @font-face{
    font-family: "montserrat-thin";
    src: url(${MontserratThinWOFF2}) format("woff2"),
    url(${MontserratThinWOFF}) format("woff"),
    url(${MontserratThinSVG}#Montserrat-Thin) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }

  *,:after,:before{box-sizing:inherit}html{box-sizing:border-box}
  *{user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
  ol,ul{list-style:none}
  blockquote,q{quotes:none}
  blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}
  table{border-collapse:collapse;border-spacing:0}
  [contenteditable],input[type]{user-select:text}
  a{text-decoration:none;color:inherit}
  fieldset,input{appearance:none;border:0;padding:0;margin:0;min-width:0;font-size:1rem;font-family:inherit}
  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none}
  svg{display:inline-flex}
  img{display:block;width:100%}
  body,h1,h2,h3,h4,h5,h6,p{margin:0;font-size:1rem;font-weight:400}
  body{line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: montserrat-regular;}
`;

export const Wrapper = styled.div``;
