import { css } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

//? update theme type in emotion.d.ts
//REF : https://colorhunt.co/palette/f6f6f6c7ffd898ded9161d6f
export const theme = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		white: '#ffffff',
		black: '#000000',
		neutral: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#e5e5e5',
			300: '#d4d4d4',
			400: '#a3a3a3',
			500: '#737373',
			600: '#525252',
			700: '#404040',
			800: '#262626',
			900: '#171717',
		},
		primary: {
			50: '#eaebfb',
			100: '#bfc3f2',
			200: '#959bea',
			300: '#6a73e1',
			400: '#3f4cd9',
			500: '#2632c0',
			600: '#1e2795',
			700: '#151c6a',
			800: '#0d1140',
			900: '#040615',
		},
		secondary: {
			50: '#e5ffed',
			100: '#b3ffca',
			200: '#80ffa6',
			300: '#4dff83',
			400: '#1aff5f',
			500: '#00e646',
			600: '#00b336',
			700: '#008027',
			800: '#004d17',
			900: '#001a08',
		}
	},
	transition: [
		'all 0.3s ease-in-out',
	],
	boxShadow: [
		'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
	]
}
//REF : https://mui.com/material-ui/customization/palette/
export const materialTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			light: theme.colors.primary[300],
			main: theme.colors.primary[700],
			dark: theme.colors.primary[800],
			contrastText: theme.colors.white,
		},
		secondary: {
			light: theme.colors.primary[50],
			main: theme.colors.secondary[100],
			dark: theme.colors.primary[500],
			contrastText: theme.colors.black,
		},
	},
})

export const globalStyles = css`
/* base.css */
pre {
	font-family: monospace;
	font-size: 0.8em;
}
abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted;
}
b,
b *,
strong,
strong * {
	font-weight: 700;
}
code,
kbd,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}
button {
	-webkit-appearance: button;
	cursor: pointer;
	background: transparent;
}
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
	border-style: none;
	padding: 0;
}
button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
}
button,
input,
optgroup,
select,
textarea {
	font: inherit;
	outline: none;
	border: none;
	color: inherit;
	-webkit-appearance: none;
}
option {
	font-weight: normal;
	display: block;
	white-space: nowrap;
	min-height: 1.2rem;
	padding: 0px 2px 1px;
}
input::placeholder {
	color: inherit;
  text-overflow: ellipsis;
}
progress {
	vertical-align: baseline;
}
textarea {
	resize: none;
}
[type='checkbox'],
[type='radio'] {
	padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
	height: auto;
}
[type='search'] {
	-webkit-appearance: textfield;
	outline-offset: -0.2rem;
}
[type='search']::-webkit-search-decoration {
	-webkit-appearance: none;
}
::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
	display: block;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/*scroll bar css*/
::-webkit-scrollbar,
::-webkit-scrollbar:horizontal {
	background: ${theme.colors.neutral[50]};
	width: 0.6rem;
	height: 0.6rem;
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:horizontal {
	background: ${theme.colors.neutral[300]};
}
/*text selection css*/
::-moz-selection,::selection {
	background: ${theme.colors.primary[700]};
	color: ${theme.colors.neutral[50]};
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
word-break: break-word;
outline: none;
}
html {
	-webkit-text-size-adjust: 100%;
	scrollbar-color: ${theme.colors.neutral[50]};
	scrollbar-width: thin;
	/* font-size: 62.5%; */
	scroll-behavior: smooth;
}
body {
	position: relative;
	font-weight: 400;
	line-height: 1.7;
	box-sizing: border - box;
	font-family: 'Poppins', sans-serif;
	font-size: 1rem;
	min-height: 100vh;
	background-image: ${theme.colors.neutral[50]};
	background-color: ${theme.colors.neutral[50]};
}

a {
	color: inherit;
	text-decoration: none;
}
li {
	list-style: none;
}

/* NProgress CSS */
/* Make clicks pass-through */
#nprogress {
	pointer-events: none;
}

#nprogress .bar {
	background: ${theme.colors.primary[700]};
	position: fixed;
	z-index: 1031;
	top: 0;
	left: 0;
	width: 100%;
	height: 4px;
}
/* Fancy blur effect */
#nprogress .peg {
	display: block;
	position: absolute;
	right: 0px;
	width: 100px;
	height: 100%;
	box-shadow: 0 0 10px ${theme.colors.primary[700]}, 0 0 5px ${theme.colors.primary[700]};
	opacity: 1;
	-webkit-transform: rotate(3deg) translate(0px, -4px);
	-ms-transform: rotate(3deg) translate(0px, -4px);
	transform: rotate(3deg) translate(0px, -4px);
}
.nprogress-custom-parent {
	overflow: hidden;
	position: relative;
}
.nprogress-custom-parent #nprogress.bar {
	position: absolute;
}
/* MUI Global CSS */

`