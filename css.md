#root {
    height: 100%;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 1366px) and (min-height:768px) {
    body,html {
        height:100%
    }
}

@media only screen and (min-width: 2560px) and (max-width:3840px) {
    #root {
        overflow-y:auto
    }
}

@media only screen and (min-width: 1920px) and (max-width:2560px) {
    #root {
        overflow-y:auto
    }
}

@media only screen and (min-width: 1440px) and (max-width:1920px) {
    .game {
        min-height:100vh
    }
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    margin: 0;
    -webkit-user-select: none;
    user-select: none
}

code {
    font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace
}

h1,h2,h3,h4,h5 {
    margin: 0;
    padding: 0
}

:disabled {
    cursor: no-drop
}

:disabled,[disabled] {
    color: #777;
    opacity: .6
}

[disabled] {
    cursor: no-drop!important
}

.toChat {
    display: flex;
    flex-wrap: wrap;
    gap: 2px
}

.toChat_text {
    display: inline;
    overflow-wrap: break-word;
    white-space: normal;
    word-break: break-word
}

.App {
    text-align: center
}

.App-logo {
    height: 40vmin;
    pointer-events: none
}

@media(prefers-reduced-motion:no-preference) {
    .App-logo {
        animation: App-logo-spin 20s linear infinite
    }
}

.input {
    background: #cecdcd;
    border: 0 solid;
    border-radius: 6px;
    font-size: .8vw;
    outline: none;
    padding: 10px;
    width: 150px
}

@media only screen and (min-width: 3840px) {
    .input {
        font-size:40px;
        width: 450px
    }
}

textarea {
    -webkit-rtl-ordering: logical;
    -webkit-appearance: auto;
    appearance: auto;
    border-image: none;
    border-image: initial;
    border-style: inset;
    border-width: 2px;
    cursor: text;
    display: inline-block;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
    padding: 1px 2px;
    text-align: start;
    text-indent: 0;
    text-rendering: auto;
    text-shadow: none;
    text-transform: none;
    word-spacing: normal
}

.rr-zero {
    background: radial-gradient(circle,#1a1a1ad1 5%,rgba(117,182,229,.502) 200%)!important
}

.rr-1C,.rr-1C--yes {
    background: radial-gradient(circle,#000 0,#000 70%)!important
}

.rr-2 {
    background: radial-gradient(circle,#262627 0,#44545f 70%)!important
}

.rr-3 {
    background: radial-gradient(circle,#262626 0,#5e4e39 70%)!important
}

.rr-4 {
    background: radial-gradient(circle,#1b121d 0,#604676 70%)!important
}

.rr-5 {
    background: radial-gradient(circle,#262626 0,#642b2d 70%)!important
}

.drop {
    cursor: copy
}

.lds-spinner {
    color: #fff;
    display: inline-block;
    height: 66px;
    position: relative;
    width: 80px
}

.lds-spinner div {
    animation: lds-spinner 1.2s linear infinite;
    transform-origin: 40px 36px
}

.lds-spinner div:after {
    background: #fff;
    border-radius: 30px;
    content: " ";
    display: block;
    height: 14px;
    left: 37px;
    position: absolute;
    top: 8px;
    width: 4px
}

.lds-spinner div:first-child {
    animation-delay: -1.1s;
    transform: rotate(0deg)
}

.lds-spinner div:nth-child(2) {
    animation-delay: -1s;
    transform: rotate(30deg)
}

.lds-spinner div:nth-child(3) {
    animation-delay: -.9s;
    transform: rotate(60deg)
}

.lds-spinner div:nth-child(4) {
    animation-delay: -.8s;
    transform: rotate(90deg)
}

.lds-spinner div:nth-child(5) {
    animation-delay: -.7s;
    transform: rotate(120deg)
}

.lds-spinner div:nth-child(6) {
    animation-delay: -.6s;
    transform: rotate(150deg)
}

.lds-spinner div:nth-child(7) {
    animation-delay: -.5s;
    transform: rotate(180deg)
}

.lds-spinner div:nth-child(8) {
    animation-delay: -.4s;
    transform: rotate(210deg)
}

.lds-spinner div:nth-child(9) {
    animation-delay: -.3s;
    transform: rotate(240deg)
}

.lds-spinner div:nth-child(10) {
    animation-delay: -.2s;
    transform: rotate(270deg)
}

.lds-spinner div:nth-child(11) {
    animation-delay: -.1s;
    transform: rotate(300deg)
}

.lds-spinner div:nth-child(12) {
    animation-delay: 0s;
    transform: rotate(330deg)
}

@keyframes lds-spinner {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.loaderSpin {
    animation: animloader 4s cubic-bezier(0,1.3,.62,1.88) infinite backwards;
    border: 10px solid;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 100px;
    position: relative;
    width: 100px
}

@keyframes animloader {
    0% {
        border-color: #8d8d8d
    }

    25% {
        border-color: #fff0 #8d8d8d #8d8d8d
    }

    50% {
        border-color: #fff0 #8d8d8d #8d8d8d #fff0
    }

    75% {
        border-color: #fff0 #8d8d8d #fff0 #fff0
    }

    80% {
        border-color: #b6b6b6
    }

    85% {
        border-color: #8d8d8d
    }

    90% {
        border-color: #b6b6b6
    }

    95% {
        border-color: #8d8d8d
    }

    to {
        border-color: #b6b6b6
    }
}

.anim {
    animation: upBar .5s linear
}

@keyframes upBar {
    0% {
        background: #fff;
        color: #000;
        scale: 1.05
    }

    to {
        background: #8e0406;
        scale: 1
    }
}

.animNum {
    animation: upNum .5s linear
}

@keyframes upNum {
    0% {
        -webkit-text-fill-color: hsla(35,61%,72%,.451);
        background: -webkit-linear-gradient(#fff,#ff9500);
        -webkit-background-clip: text;
        scale: 1
    }

    40% {
        -webkit-text-fill-color: hsla(0,0%,100%,.451);
        background: -webkit-linear-gradient(#fff,#fff);
        -webkit-background-clip: text;
        scale: 1.32
    }

    60% {
        -webkit-text-fill-color: hsla(0,0%,100%,.451);
        background: -webkit-linear-gradient(#fff,#fff);
        -webkit-background-clip: text;
        scale: 1.32
    }

    to {
        -webkit-text-fill-color: hsla(35,61%,72%,.451);
        background: -webkit-linear-gradient(#fff,#ff9500);
        -webkit-background-clip: text;
        scale: 1
    }
}

.grin {
    background: #508758
}

.grinD {
    background: #525f55
}

.grinHP {
    background: linear-gradient(90deg,#24542b,#508758)
}

.red {
    background: #ff3b3b
}

.redD {
    background: rgba(94,15,15,.718)
}

.blo {
    background: #c68627
}

.gray {
    background: linear-gradient(90deg,#737373,#a5a5a5)
}

.lang {
    background: #ffffff5e;
    bottom: 0;
    font-size: 12px;
    padding: 2px 8px
}

.lang,.ver {
    color: #000;
    left: auto;
    line-height: 2;
    outline: none;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    width: auto;
    z-index: 5
}

.ver {
    background: hsla(0,0%,100%,.698);
    font-size: .5vw;
    opacity: 0;
    padding: .1vw .6vw;
    top: 0
}

.ver:hover {
    opacity: 1
}

@font-face {
    font-display: swap;
    font-family: RunicFont;
    font-style: normal;
    font-weight: 400;
    src: url(/static/media/SACRALIUMRunic-Regular.22a54fa9f4ae830fb315.woff2) format("woff2"),url(/static/media/SACRALIUMRunic-Regular.b9d7e22ccfed922a620a.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: RunicFontBold;
    font-style: normal;
    font-weight: 700;
    src: url(/static/media/SACRALIUMRunicBoldExpress-Regular.f7b7ae887de53d1c4fc1.woff2) format("woff2"),url(/static/media/SACRALIUMRunicBoldExpress-Regular.6fc8f52fe073fdb5b76f.woff) format("woff")
}

.mobOnlyBody .character--inventory {
    opacity: 0!important;
    pointer-events: none!important
}

.noEsta {
    filter: grayscale(1) brightness(.9)
}

.header-icons {
    display: flex
}

.newCharacter {
    background: url(/static/media/sacralium_character_screen_FIN_17_04_2023.045560d861613af19520.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%
}

.newCharacter__container {
    grid-gap: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%
}

.newCharacter__container--box {
    grid-gap: 60px;
    display: flex;
    z-index: 1
}

.newCharacter__container--box:first-child {
    position: absolute;
    top: 20px
}

.newCharacter__container--box:nth-child(2) {
    bottom: 19%;
    position: absolute
}

@media only screen and (min-height: 600px)and (max-height:670px) {
    .newCharacter__container--box:nth-child(2) {
        bottom:24%
    }
}

@media only screen and (min-height: 670px)and (max-height:750px) {
    .newCharacter__container--box:nth-child(2) {
        bottom:22%
    }
}

.newCharacter__container--box:nth-child(3) {
    bottom: 8%;
    position: absolute
}

.newCharacter__container--box--item {
    border-radius: 6px;
    color: #c59776;
    cursor: pointer;
    padding: 10px;
    position: relative;
    text-align: center;
    transition: .3s;
    width: 10vw
}

.newCharacter__container--box--item:hover {
    scale: 1.1
}

.newCharacter__container--box--item--img {
    position: inherit;
    width: 10vw;
    z-index: 1
}

.newCharacter__container--box--item h4 {
    font-size: 1vw;
    font-weight: 700;
    position: inherit;
    transform: translateY(-12px)
}

.newCharacter__container--box--item--active {
    color: #fff5e0;
    pointer-events: none;
    text-shadow: 0 2px 2px #000
}

.newCharacter__container--box--item--bgar {
    left: calc(50% - 2.7vw);
    position: absolute;
    top: -16%;
    width: 5.5vw;
    z-index: 0
}

.newCharacter__container--box--item--anim {
    animation: asdj2asd3 1s steps(20) infinite;
    background-image: url(/static/media/LoopFire_00000_20x1.5998013b282580094d9a.png);
    height: 141px;
    left: calc(50% - 59px);
    pointer-events: none;
    position: absolute;
    top: -6px;
    width: 118px;
    z-index: 1
}

@media only screen and (min-width: 450px)and (max-width:650px) {
    .newCharacter__container--box--item--anim {
        scale:.4;
        top: -35px
    }
}

@media only screen and (min-width: 650px)and (max-width:800px) {
    .newCharacter__container--box--item--anim {
        scale:.5;
        top: -32px
    }
}

@media only screen and (min-width: 800px)and (max-width:900px) {
    .newCharacter__container--box--item--anim {
        scale:.6;
        top: -28px
    }
}

@media only screen and (min-width: 900px)and (max-width:1000px) {
    .newCharacter__container--box--item--anim {
        scale:.7;
        top: -25px
    }
}

@media only screen and (min-width: 1000px)and (max-width:1200px) {
    .newCharacter__container--box--item--anim {
        scale:.8;
        top: -20px
    }
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .newCharacter__container--box--item--anim {
        scale:1;
        top: -16px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .newCharacter__container--box--item--anim {
        scale:2;
        top: 46px
    }
}

@media only screen and (min-width: 3840px) {
    .newCharacter__container--box--item--anim {
        scale:3;
        top: 90px
    }
}

@keyframes asdj2asd3 {
    0% {
        background-position: 0
    }

    to {
        background-position: -2401px
    }
}

.newCharacter__container--box__character {
    transform: translateY(10px);
    width: 28vw
}

.newCharacter__container--box__character--img {
    display: flex;
    justify-content: center
}

.newCharacter__container--box__character--img img {
    margin-bottom: -10vh;
    margin-right: -5vw;
    width: 58vh;
    z-index: -1
}

.newCharacter__container--box--form {
    grid-gap: 20px;
    align-items: center;
    display: flex
}

.newCharacter__container--box--form--name {
    color: #fff;
    font-size: 1vw;
    font-weight: 400
}

.newCharacter__container--box--form--name--other {
    color: #c6c4c4;
    text-decoration: underline
}

.newCharacter__container--box--form--name--list {
    display: flex;
    gap: 10px
}

.newCharacter__container--box--form--name--list--name {
    color: #fff;
    cursor: pointer;
    text-decoration: underline
}

.newCharacter__container--box--form--input {
    position: relative
}

.newCharacter__container--box--form--input--ref {
    cursor: pointer;
    position: absolute;
    right: .5vw;
    top: calc(50% - .5vw)
}

.newCharacter__container--box--form--input--ref img {
    width: 1vw
}

.newCharacter__container--box--form--play {
    align-items: center;
    background: #a00b0f;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    text-transform: uppercase;
    width: 150px
}

.swiper-button-next:after,.swiper-button-prev:after {
    color: #fff;
    font-size: 62px!important;
    font-weight: 800
}

.swiper-android .swiper-slide,.swiper-wrapper {
    transform: translateZ(0)
}

.swiper-pointer-events {
    touch-action: pan-y
}

.swiper-pointer-events.swiper-vertical {
    touch-action: pan-x
}

.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px
}

.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper {
    transform-style: preserve-3d
}

.swiper-horizontal.swiper-css-mode>.swiper-wrapper {
    scroll-snap-type: x mandatory
}

.swiper-vertical.swiper-css-mode>.swiper-wrapper {
    scroll-snap-type: y mandatory
}

.swiper-centered>.swiper-wrapper:before {
    content: "";
    flex-shrink: 0;
    order: 9999
}

.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child {
    -webkit-margin-start: var(--swiper-centered-offset-before);
    margin-inline-start:var(--swiper-centered-offset-before)}

.swiper-centered.swiper-horizontal>.swiper-wrapper: before {
    height:100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after)
}

.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child {
    -webkit-margin-before: var(--swiper-centered-offset-before);
    margin-block-start:var(--swiper-centered-offset-before)}

.swiper-centered.swiper-vertical>.swiper-wrapper: before {
    height:var(--swiper-centered-offset-after);
    min-width: 1px;
    width: 100%
}

.swiper-centered>.swiper-wrapper>.swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop:always}

.swiper-button-next,.swiper-button-prev {
    color: var(--swiper-theme-color)
}

.tooltip--active {
    background: linear-gradient(90deg,#252525,#2e2e2e);
    border: 1px solid #434242;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.278);
    box-sizing: border-box;
    color: #444;
    font-size: 13px;
    font-weight: 400;
    min-width: 360px;
    padding: 10px 20px;
    pointer-events: none;
    position: absolute;
    transform: translateY(-50%);
    visibility: hidden;
    z-index: 2
}

.tooltip--active i {
    height: 24px;
    margin-top: -12px;
    overflow: hidden;
    right: 100%;
    transform: rotate(0)
}

.tooltip--active i,.tooltip--active i:after {
    pointer-events: none!important;
    position: absolute;
    top: 50%;
    width: 12px
}

.tooltip--active i:after {
    background-color: #252525;
    border: 1px solid #434242;
    box-shadow: 0 1px 8px rgba(0,0,0,.502);
    content: "";
    height: 12px;
    left: 0;
    transform: translate(50%,-50%) rotate(-45deg)
}

.tooltip--input {
    position: relative
}

.tooltip--input--active {
    background: #f3e4c7;
    border: 1px solid #dfc296;
    border-radius: 6px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.278);
    box-sizing: border-box;
    color: #444;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    justify-content: space-around;
    left: 0;
    min-width: 200px;
    padding: 20px;
    position: absolute;
    top: 105%;
    width: 100%;
    z-index: 2
}

.tooltip--input--active i {
    height: 12px;
    margin-top: -12px;
    overflow: hidden;
    pointer-events: none!important;
    position: absolute;
    right: 50%;
    top: 0;
    width: 24px
}

.tooltip--input--active i:after {
    background-color: #f3e4c7;
    border: 1px solid #dfc296;
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 100%;
    transform: translate(50%,-50%) rotate(45deg);
    width: 12px
}

.black .tooltip--input--active {
    background: #2a2a29;
    border: 1px solid #807f7f;
    bottom: 150%;
    color: #818181;
    top: auto
}

.oI {
    height: 24px;
    overflow: hidden;
    pointer-events: none!important;
    visibility: hidden;
    width: 20px;
    z-index: 1000
}

.oI,.oI:after {
    position: absolute
}

.oI:after {
    background: #252525;
    border: 1px solid #434242;
    content: "";
    height: 22px;
    left: 0;
    top: 0;
    transform: translate(50%) rotate(45deg);
    width: 24px
}

.oIR {
    height: 25px;
    overflow: hidden;
    pointer-events: none;
    visibility: hidden;
    width: 20px;
    z-index: 1000
}

.oIR,.oIR:after {
    position: absolute
}

.oIR:after {
    background: #2e2e2e;
    border: 1px solid #434242;
    content: "";
    height: 22px;
    left: 0;
    top: 0;
    transform: translate(-50%) rotate(45deg);
    width: 24px
}

.openT {
    pointer-events: none;
    visibility: visible
}

.standart {
    align-items: center;
    display: flex;
    justify-content: center
}

.ui-button-one {
    background: url(/static/media/ui-button.c728b870986576f3f34c.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    border-image: url(/static/media/ui-button.c728b870986576f3f34c.png) 12 12 12 12 stretch stretch;
    border-radius: 1vw;
    border-style: inset;
    border-width: .5vw;
    flex-shrink: 0;
    font-size: 1vw;
    height: 2vw;
    padding: 0 5px;
    text-align: center;
    transition: .1s;
    width: 8vw
}

.ui-button-one,.ui-button-one[disabled] {
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center
}

.ui-button-one[disabled] {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vw;
    border-style: inset;
    border-width: .5vw;
    opacity: 1;
    transform: translateY(0)
}

.ui-button-two {
    align-items: center;
    background: url(/static/media/ui-button-2.3a9bd7bbcc879146bd2a.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button-2.3a9bd7bbcc879146bd2a.png) 12 12 12 12 stretch stretch;
    border-radius: 1vw;
    border-style: inset;
    border-width: .5vw;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1vw;
    height: 2vw;
    justify-content: center;
    padding: 0 5px;
    transition: .1s;
    width: 8vw
}

.ui-button-two:hover {
    background: url(/static/media/ui-button.c728b870986576f3f34c.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button.c728b870986576f3f34c.png) 12 12 12 12 stretch stretch
}

.ui-button-two[disabled] {
    align-items: center;
    background-size: 180% auto;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 1;
    transform: translateY(0)
}

.min {
    width: 8vw
}

.middle {
    width: 10vw
}

.big {
    width: 12vw
}

.sacr {
    width: 14vw
}

.auto {
    width: auto
}

.ui-button-slim {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) no-repeat 50%/100% 100%;
    border: none;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    height: 30px;
    min-width: 100px;
    transform: scale(1);
    transition: transform .2s ease-in-out
}

.ui-button-slim:hover {
    transform: scale(.95)
}

@media(min-width: 2300px) {
    .ui-button-one {
        border-radius:.9vw;
        border-width: .4vw;
        font-size: .8vw;
        height: 1.5vw;
        width: 7vw
    }
}

@media(min-width: 3000px) {
    .ui-button-one {
        border-radius:.8vw;
        border-width: .35vw;
        font-size: .7vw;
        height: 1.1vw;
        width: 6.5vw
    }
}

@media(min-width: 3100px) {
    .ui-button-one {
        border-radius:38px;
        border-width: 20px;
        font-size: 40px;
        height: 60px!important;
        width: 400px
    }
}

.iu-input {
    background: rgba(0,0,0,.361);
    border: 2px solid #7c8280;
    border-radius: .5vw;
    color: #fff;
    font-size: 1.2vw;
    outline: none;
    padding: .5vw
}

.modal {
    align-items: center;
    background: rgba(5,5,5,.549);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 13%;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition: .3s;
    visibility: hidden;
    width: 100%;
    z-index: 20
}

@media only screen and (min-width: 3840px) {
    .modal {
        left:650px
    }
}

.modal--open {
    opacity: 1;
    pointer-events: auto;
    visibility: visible
}

.modal__container {
    background: rgba(5,5,5,.831);
    border: 1px solid #ceab67;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
    padding: 60px 80px;
    position: relative;
    width: 30%
}

@media only screen and (min-width: 3840px) {
    .modal__container {
        max-width:none!important;
        width: 1800px
    }
}

.modal__container h1,.modal__container h2,.modal__container h3 {
    color: #efe5d0;
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 20px
}

.modal__container p {
    color: #7d7e7e;
    margin: 0 0 20px
}

.modal__container--content--plus {
    color: #fff;
    display: inline;
    margin-left: 8px
}

.modal__container--buttons {
    grid-gap: 20px;
    display: flex;
    justify-content: center
}

.modal__container--close {
    align-items: center;
    background: #252525;
    border: .15vw solid hsla(0,0%,80%,.471);
    border-radius: .3vw;
    cursor: pointer;
    display: flex;
    height: 2vw;
    justify-content: center;
    position: absolute;
    right: .2vw;
    top: -1.6vw;
    width: 2vw;
    z-index: 2
}

.mini .modal__container {
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 10px;
    height: auto;
    padding: 30px 40px;
    position: relative;
    width: 40%
}

@media only screen and (min-width: 3840px) {
    .mini .modal__container {
        max-width:none!important;
        width: 1200px
    }
}

.mini .modal__container h1,.mini .modal__container h2,.mini .modal__container h3 {
    color: #d5d5d5;
    font-size: 2vw;
    margin-bottom: 10px
}

@media only screen and (min-width: 3840px) {
    .mini .modal__container h1,.mini .modal__container h2,.mini .modal__container h3 {
        font-size:80px
    }
}

.mini .modal__container p {
    font-size: .8vw
}

@media only screen and (min-width: 3840px) {
    .mini .modal__container p {
        font-size:40px
    }
}

.mini .modal__container--buttons {
    font-size: .8vw
}

.mini .modal__container--buttons--gray,.mini .modal__container--buttons--red {
    height: .8vw;
    padding: 12px 5px
}

.mini .modal__container--buttons .application--button.red {
    background: #900406
}

.mini .modal__container--buttons .application--button.red:hover {
    background: #9d0608
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .mini .modal__container--buttons .ui-button-one {
        width:6vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .mini .modal__container--buttons .ui-button-one[disabled] {
        width:10vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .mini .modal__container--buttons .ui-button-one[disabled] {
        width:8vw
    }
}

.nota .modal__container {
    background: #181614;
    border: 0 solid #7d8288;
    box-shadow: 0 0 0 5px rgba(237,245,255,.549),0 0 8px 10px rgba(0,0,0,.361);
    height: auto;
    padding: 30px 40px;
    width: 50%
}

@media only screen and (min-width: 3840px) {
    .nota .modal__container {
        max-width:none!important;
        width: 1200px
    }

    .nota .modal__container .application__forModal {
        font-size: 30px
    }
}

.nota .modal__container h1,.nota .modal__container h2,.nota .modal__container h3 {
    color: #d5d5d5;
    font-size: 28px;
    margin-bottom: 10px
}

@media only screen and (min-width: 3840px) {
    .nota .modal__container h1,.nota .modal__container h2,.nota .modal__container h3 {
        font-size:80px
    }
}

.nota .modal__container p,.nota .modal__container--buttons {
    font-size: .8vw
}

.nota .modal__container--buttons--gray,.nota .modal__container--buttons--red {
    height: .8vw;
    padding: 12px 5px
}

.modal_invite .modal__container {
    background: #181614;
    border: 0 solid #7d8288;
    box-shadow: 0 0 0 5px rgba(237,245,255,.549),0 0 8px 10px rgba(0,0,0,.361);
    height: 200px;
    padding: 30px 40px;
    width: 50%
}

.modal_invite .modal__container h1 {
    color: #d5d5d5;
    font-size: 46px;
    margin-bottom: 10px;
    text-align: center
}

.modal_invite .modal__container p,.modal_invite .modal__container--buttons {
    font-size: .8vw
}

.modal_invite .modal__container--buttons--decline,.modal_invite .modal__container--buttons--gray,.modal_invite .modal__container--buttons--red {
    height: .8vw;
    padding: 12px 5px
}

.inv {
    left: 0!important
}

.abil>div {
    left: -13%;
    top: -10%;
    width: 30%!important
}

.landing-root-class {
    --bg_black: #000;
    --bg_gray: #0f0f0f;
    --title_color: #9c9a98;
    --text_color: #9c9a98;
    --light-text: #fff;
    --header_height: 70px;
    --transition: transform 0.2s cubic-bezier(0.075,0.5,0,1);
    --elements_transition: 0.25s ease-in;
    --index: 1.45vw;
    --font-family: "Calibri",sans-serif;
    --second-family: "Times New Roman",sans-serif;
    --font-size: clamp(1.25rem,calc(1.06rem + 0.94vw),2rem);
    --paragraph-size: clamp(0.88rem,calc(0.72rem + 0.78vw),1.5rem);
    *,:after,:before {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth!important
    }

    li,ol,ul {
        list-style: none
    }

    img {
        display: block;
        max-width: 100%
    }

    body {
        font-size: 16px
    }

    body._lock {
        overflow: hidden
    }

    .page {
        flex: 1 1 auto
    }

    .border {
        background: linear-gradient(90deg,#0f0f0f4d,#fddb7866 50%,#0f0f0f4d);
        height: 1px;
        width: 100%
    }

    section [class*=__container] {
        margin: 0 auto;
        max-width: 320px;
        padding: 20px 20px 0;
        position: relative
    }

    @media (min-width: 480px) {
        section [class*=__container] {
            max-width:480px;
            padding: 30px 20px 0
        }
    }

    @media (min-width: 768px) {
        section [class*=__container] {
            max-width:768px;
            padding: 50px 30px 0
        }
    }

    @media (min-width: 1024px) {
        section [class*=__container] {
            max-width:1024px;
            padding: 65px 50px 0
        }
    }

    @media (min-width: 1200px) {
        section [class*=__container] {
            max-width:1200px
        }
    }

    @media (min-width: 1600px) {
        section [class*=__container] {
            max-width:1350px
        }
    }

    @media (min-width: 1920px) {
        section [class*=__container] {
            max-width:1700px;
            padding: 80px 50px 0
        }
    }

    @media (min-width: 3840px) {
        section [class*=__container] {
            max-width:3245px;
            padding: 168px 50px 0
        }
    }

    .title {
        -webkit-text-fill-color: #0000;
        background: linear-gradient(180deg,#fff8d5,#efd7aa);
        background-clip: text;
        -webkit-background-clip: text;
        font-family: var(--second-family);
        font-size: 20px;
        font-weight: 400;
        letter-spacing: .03em;
        line-height: 130%;
        margin-bottom: 4%;
        text-shadow: 0 0 15px #9d822b;
        text-transform: uppercase
    }

    @media (min-width: 768px) {
        .title {
            font-size:24px
        }
    }

    @media (min-width: 1024px) {
        .title {
            font-size:28px
        }
    }

    @media (min-width: 1200px) {
        .title {
            font-size:32px
        }
    }

    @media (min-width: 1920px) {
        .title {
            font-size:36px
        }
    }

    @media (min-width: 3840px) {
        .title {
            font-size:72px
        }
    }

    .text {
        color: var(--text_color);
        font-family: var(--font-family);
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 16px;
        text-align: justify;
        text-align: left
    }

    @media (min-width: 768px) {
        .text {
            font-size:16px;
            margin-bottom: 20px
        }
    }

    @media (min-width: 1024px) {
        .text {
            font-size:22px;
            margin-bottom: 20px
        }
    }

    @media (min-width: 1200px) {
        .text {
            font-size:24px;
            margin-bottom: 30px
        }
    }

    @media (min-width: 1920px) {
        .text {
            font-size:28px;
            margin-bottom: 34px
        }
    }

    @media (min-width: 3840px) {
        .text {
            font-size:56px;
            margin-bottom: 60px
        }
    }

    .bg-black {
        background-color: var(--bg_black)
    }

    .bg-gray {
        background-color: var(--bg_gray)
    }

    .button-go {
        background-color: #900302;
        border-radius: 4px;
        font-size: 14px;
        min-width: 80px;
        padding: 5px 12px;
        text-decoration: none;
        text-transform: uppercase
    }

    @media (min-width: 768px) {
        .button-go {
            font-size:20px;
            min-width: 150px
        }
    }

    @media (min-width: 1024px) {
        .button-go {
            font-size:26px;
            min-width: 200px
        }
    }

    @media (min-width: 1200px) {
        .button-go {
            min-width:234px
        }
    }

    @media (min-width: 1600px) {
        .button-go {
            padding:12px 25px
        }
    }

    @media (min-width: 1920px) {
        .button-go {
            font-size:30px
        }
    }

    @media (min-width: 3840px) {
        .button-go {
            font-size:52px;
            min-width: 468px
        }
    }

    .button-gray,.button-red {
        align-items: center;
        aspect-ratio: 236/57;
        background-color: initial;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-size: contain;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 12px;
        text-decoration: none;
        -webkit-user-select: none;
        user-select: none
    }

    .button-gray strong,.button-red strong {
        font-size: 20px
    }

    .button-gray img,.button-red img {
        display: inline-block;
        flex: 0 1 9%;
        margin-right: 3%
    }

    @media (min-width: 1024px) {
        .button-gray strong,.button-red strong {
            font-size:26px
        }
    }

    @media (min-width: 1920px) {
        .button-gray,.button-red {
            width:310px
        }

        .button-gray strong,.button-red strong {
            font-size: 30px
        }
    }

    @media (min-width: 3840px) {
        .button-gray,.button-red {
            width:570px
        }

        .button-gray strong,.button-red strong {
            font-size: 60px
        }
    }

    .button-go,.button-gray,.button-red {
        opacity: .85;
        text-align: center;
        transition: var(--elements_transition)
    }

    .button-go strong,.button-gray strong,.button-red strong {
        -webkit-text-fill-color: #0000;
        background: linear-gradient(180deg,#fff8d5,#efd7aa);
        background-clip: text;
        -webkit-background-clip: text;
        font-family: var(--font-family);
        font-weight: 400;
        letter-spacing: .03em;
        text-shadow: 0 0 45px #9d822b;
        transition: var(--elements_transition)
    }

    @media (any-hover: hover) {
        .button-go:hover,.button-gray:hover,.button-red:hover {
            opacity:1
        }

        .button-go:hover strong,.button-gray:hover strong,.button-red:hover strong {
            text-shadow: 0 0 15px #9d822b
        }
    }

    .button-red {
        background-image: url(/static/media/button_red.be029d23be51876ddaf9.webp)
    }

    .button-gray {
        background-image: url(/static/media/button_gray.81b3c0fc8df23d34988f.webp)
    }

    .navigation {
        box-sizing: border-box;
        left: 0;
        padding: 0 20px;
        position: fixed;
        top: 20px;
        transition: var(--elements_transition);
        width: 100%;
        z-index: 50
    }

    @media (min-width: 768px) {
        .navigation {
            padding:0 30px;
            top: 30px
        }
    }

    @media (min-width: 1024px) {
        .navigation {
            padding:0 50px
        }
    }

    @media (min-width: 1200px) {
        .navigation {
            top:30px
        }
    }

    @media (min-width: 1600px) {
        .navigation {
            padding:0 35px;
            top: 90px
        }
    }

    @media (min-width: 3840px) {
        .navigation {
            padding:0 70px;
            top: 184px
        }
    }

    .navigation.sticky {
        padding: 0;
        top: 0
    }

    .navigation.show {
        opacity: 1;
        -webkit-user-select: auto;
        user-select: auto;
        visibility: visible
    }

    .navigation__wrapper {
        background-color: #1d1d1dd4;
        border: 1px solid #222;
        border-radius: 4px;
        margin: 0 auto;
        padding: 12px 16px;
        width: 100%;
        z-index: 50
    }

    @media (min-width: 768px) {
        .navigation__wrapper {
            padding:25px 16px
        }
    }

    @media (min-width: 1024px) {
        .navigation__wrapper {
            padding:22px 25px
        }
    }

    @media (min-width: 1600px) {
        .navigation__wrapper {
            padding:23px 32px
        }
    }

    @media (min-width: 3840px) {
        .navigation__wrapper {
            padding:44px 64px
        }
    }

    .navigation__body {
        align-items: center;
        display: flex;
        gap: 36px;
        justify-content: space-between;
        margin: 0 auto;
        position: relative
    }

    @media (min-width: 1600px) {
        .navigation__body {
            max-width:1600px
        }
    }

    @media (min-width: 1920px) {
        .navigation__body {
            max-width:1600px
        }
    }

    @media (min-width: 3840px) {
        .navigation__body {
            max-width:3245px
        }
    }

    .navigation__logo {
        cursor: pointer
    }

    .navigation__logo img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    @media (max-width: 767.98px) {
        .navigation__logo {
            height:32px;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 32px
        }
    }

    @media (min-width: 768px) {
        .navigation__logo {
            aspect-ratio:29/6;
            flex: 0 0 125px;
            position: relative
        }
    }

    @media (min-width: 1024px) {
        .navigation__logo {
            flex:0 0 175px
        }
    }

    @media (min-width: 1200px) {
        .navigation__logo {
            flex:0 0 203px
        }
    }

    @media (min-width: 3840px) {
        .navigation__logo {
            flex:0 0 406px
        }
    }

    .navigation__menu {
        flex: 1 1 auto
    }

    .menu {
        display: none
    }

    @media (min-width: 767.98px) {
        .menu {
            display:flex;
            justify-content: center;
            justify-content: flex-start
        }
    }

    .menu__body {
        width: 100%
    }

    .menu__list {
        display: flex
    }

    @media (min-width: 767.98px) {
        .menu__list {
            flex-direction:row;
            gap: 20px
        }
    }

    @media (min-width: 1024px) {
        .menu__list {
            gap:32px
        }
    }

    @media (min-width: 1600px) {
        .menu__list {
            gap:37px
        }
    }

    @media (min-width: 3840px) {
        .menu__list {
            gap:74px
        }
    }

    .menu__link {
        color: #9c9a98;
        font-family: var(--font-family);
        font-weight: 300;
        text-decoration: none;
        transition: color var(--elements_transition)
    }

    .menu__link.active {
        color: #fff;
        font-weight: 400
    }

    .menu__link:focus {
        outline: none
    }

    .menu__link:focus-visible {
        outline: 2px dashed #fff;
        outline-offset: 3px
    }

    @media (any-hover: hover) {
        .menu__link:hover {
            color:#fff
        }
    }

    @media (min-width: 768px) {
        .menu__link {
            color:#d5d5d5;
            font-size: 16px;
            position: relative
        }
    }

    @media (min-width: 1024px) {
        .menu__link {
            font-size:20px
        }
    }

    @media (min-width: 1200px) {
        .menu__link {
            font-size:26px
        }
    }

    @media (min-width: 1920px) {
        .menu__link {
            font-size:30px
        }
    }

    @media (min-width: 3840px) {
        .menu__link {
            font-size:52px
        }
    }

    .mobile-menu {
        background-color: #050505;
        height: 100%;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        -webkit-user-select: none;
        user-select: none;
        visibility: hidden;
        width: 100%;
        z-index: 10
    }

    .mobile-menu._active {
        -webkit-user-select: auto;
        user-select: auto;
        visibility: visible
    }

    .mobile-menu__body {
        padding: 90px 50px 50px;
        width: 100%
    }

    .mobile-menu__list {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center
    }

    @media (min-width: 768px) {
        .mobile-menu__list {
            display:none;
            -webkit-user-select: none;
            user-select: none;
            visibility: hidden
        }
    }

    .mobile-menu__item {
        border-bottom: 1px solid #1d1d1dd4;
        padding: 16px 0;
        width: 100%
    }

    .mobile-menu__link {
        color: #9c9a98;
        font-family: var(--font-family);
        font-size: 24px;
        font-weight: 300;
        text-decoration: none;
        transition: color var(--elements_transition)
    }

    .mobile-menu__link.active {
        color: #fff;
        font-weight: 400
    }

    .mobile-menu__link:focus {
        outline: none
    }

    .mobile-menu__link:focus-visible {
        outline: 2px dashed #fff;
        outline-offset: 3px
    }

    #nav-icon {
        cursor: pointer;
        display: block;
        height: 25px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        width: 30px;
        z-index: 50
    }

    @media (min-width: 768px) {
        #nav-icon {
            display:none
        }
    }

    #nav-icon span {
        background: #fff;
        display: block;
        height: 2px;
        opacity: 1;
        position: absolute;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        width: 50%
    }

    #nav-icon span: nth-child(2n) {
        border-radius:0 9px 9px 0;
        left: 50%
    }

    #nav-icon span: nth-child(odd) {
        border-radius:9px 0 0 9px;
        left: 0
    }

    #nav-icon span: first-child,#nav-icon span:nth-child(2) {
        top:0
    }

    #nav-icon span: nth-child(3),#nav-icon span:nth-child(4) {
        top:10px
    }

    #nav-icon span: nth-child(3) {
        left:0
    }

    #nav-icon span: nth-child(5),#nav-icon span:nth-child(6) {
        top:20px
    }

    #nav-icon._active span: first-child,#nav-icon._active span:nth-child(6) {
        transform:rotate(45deg)
    }

    #nav-icon._active span: nth-child(2),#nav-icon._active span:nth-child(5) {
        transform:rotate(-45deg)
    }

    #nav-icon._active span: first-child {
        top:7px
    }

    #nav-icon._active span: nth-child(2) {
        left:calc(50% - 5px);
        top: 7px
    }

    #nav-icon._active span: nth-child(3) {
        left:-50%;
        opacity: 0
    }

    #nav-icon._active span: nth-child(4) {
        left:100%;
        opacity: 0
    }

    #nav-icon._active span: nth-child(5) {
        top:17px
    }

    #nav-icon._active span: nth-child(6) {
        left:calc(50% - 5px);
        top: 17px
    }

    .header {
        background-color: #0f0f0f;
        background-position: 50%;
        background-size: cover;
        overflow: hidden;
        position: relative
    }

    .header__container {
        height: 100vh;
        margin: 0 auto;
        max-height: 750px;
        min-height: 700px;
        position: relative;
        z-index: 0
    }

    .header__container:after {
        background: linear-gradient(0deg,#000 39%,#0000 52%);
        bottom: 0;
        content: "";
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 0
    }

    @media (min-width: 480px) {
        .header__container {
            max-height:650px;
            max-width: 480px;
            min-height: 600px
        }

        .header__container:after {
            content: none
        }
    }

    @media (min-width: 768px) {
        .header__container {
            max-width:768px;
            min-height: 600px
        }
    }

    @media (min-width: 1024px) {
        .header__container {
            max-width:1024px;
            min-height: 650px
        }
    }

    @media (min-width: 1200px) {
        .header__container {
            max-width:1200px;
            min-height: 750px
        }
    }

    @media (min-width: 1600px) {
        .header__container {
            max-width:1350px;
            min-height: 950px
        }
    }

    @media (min-width: 1920px) {
        .header__container {
            max-width:1700px;
            min-height: 950px
        }
    }

    @media (min-width: 3840px) {
        .header__container {
            max-width:3245px;
            min-height: 1900px
        }
    }

    .header__content {
        background-position: 50%;
        background-size: cover;
        bottom: 20px;
        left: 0;
        padding-left: 20px;
        padding-right: 20px;
        position: absolute;
        transition: var(--transition);
        will-change: transform;
        z-index: 1
    }

    @media (min-width: 480px) {
        .header__content {
            max-width:506px;
            padding-left: 20px;
            padding-right: 0;
            top: 18%
        }
    }

    @media (min-width: 768px) {
        .header__content {
            max-width:580px;
            padding-left: 30px;
            top: 18%
        }
    }

    @media (min-width: 1024px) {
        .header__content {
            max-width:700px;
            padding-left: 50px;
            top: 16%
        }
    }

    @media (min-width: 1200px) {
        .header__content {
            max-width:755px;
            top: 23%
        }
    }

    @media (min-width: 1600px) {
        .header__content {
            max-width:870px;
            top: 33%
        }
    }

    @media (min-width: 1920px) {
        .header__content {
            max-width:870px
        }
    }

    @media (min-width: 3840px) {
        .header__content {
            max-width:1560px
        }
    }

    .header__hero {
        aspect-ratio: 1115/2628;
        position: absolute;
        right: 50%;
        top: 20px;
        width: 250px;
        will-change: transform
    }

    .header__hero img {
        height: auto;
        object-fit: cover;
        width: 100%
    }

    @media (max-width: 479.98px) {
        .header__hero {
            transform:translateX(50%)
        }
    }

    @media (min-width: 480px) {
        .header__hero {
            right:0;
            top: 30%;
            width: 290px
        }
    }

    @media (min-width: 768px) {
        .header__hero {
            right:10px;
            top: 7%;
            width: 290px
        }
    }

    @media (min-width: 1024px) {
        .header__hero {
            right:30px;
            top: 7%;
            width: 360px
        }
    }

    @media (min-width: 1200px) {
        .header__hero {
            top:10%;
            width: 400px
        }
    }

    @media (min-width: 1600px) {
        .header__hero {
            right:68px;
            top: 13%;
            width: 460px
        }
    }

    @media (min-width: 1920px) {
        .header__hero {
            width:542px
        }
    }

    @media (min-width: 3840px) {
        .header__hero {
            width:1050px
        }
    }

    .header__buttons {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;
        margin-top: 20px;
        padding-bottom: 20px
    }

    @media (min-width: 480px) {
        .header__buttons {
            align-items:flex-start;
            margin-top: 120px
        }
    }

    @media (min-width: 768px) {
        .header__buttons {
            margin-top:36px
        }
    }

    @media (min-width: 1024px) {
        .header__buttons {
            flex-direction:row;
            gap: 40px;
            margin-top: 50px
        }
    }

    @media (min-width: 1920px) {
        .header__buttons {
            margin-top:58px
        }
    }

    @media (min-width: 3840px) {
        .header__buttons {
            gap:76px;
            margin-top: 116px
        }
    }

    .header__text-link {
        color: #efd7aa;
        text-decoration: none;
        transition: var(--elements_transition)
    }

    @media (any-hover: hover) {
        .header__text-link:hover {
            color:#fff8d5
        }
    }

    .header__auth-form {
        margin-top: 20px
    }

    @media (min-width: 480px) {
        .header__auth-form {
            margin-top:30px
        }
    }

    @media (min-width: 768px) {
        .header__auth-form {
            margin-top:36px
        }
    }

    @media (min-width: 1024px) {
        .header__auth-form {
            margin-top:50px
        }
    }

    @media (min-width: 1920px) {
        .header__auth-form {
            margin-top:58px
        }
    }

    @media (min-width: 3840px) {
        .header__auth-form {
            margin-top:116px
        }
    }

    .auth-form__form-wrapper {
        align-items: flex-start;
        display: flex;
        flex-direction: column
    }

    .auth-form__field-wrapper {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%
    }

    @media (min-width: 768px) {
        .auth-form__field-wrapper {
            align-items:center;
            flex-direction: row
        }
    }

    @media (min-width: 1024px) {
        .auth-form__field-wrapper {
            gap:20px
        }
    }

    .auth-form__input {
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        border: 1px solid #9c9a984d;
        border-radius: 12px;
        box-sizing: border-box;
        caret-color: #333;
        color: #000;
        font-family: var(--font-family);
        font-size: 16px;
        height: 67.6px;
        padding: 12px 16px;
        transition: background-color .25s ease-in-out,border-color .25s ease-in-out;
        width: 100%
    }

    .auth-form__input::placeholder {
        color: #999;
        opacity: 1
    }

    .auth-form__input:focus {
        background-color: #fff;
        border-color: #9c9a9880;
        outline: none
    }

    @media (min-width: 480px) {
        .auth-form__input {
            border-radius:10px
        }
    }

    @media (min-width: 768px) {
        .auth-form__input {
            border-radius:12px;
            font-size: 18px
        }
    }

    @media (min-width: 1024px) {
        .auth-form__input {
            border-radius:14px;
            font-size: 20px
        }
    }

    @media (min-width: 1920px) {
        .auth-form__input {
            border-radius:16px;
            font-size: 24px;
            padding: 14px 18px
        }
    }

    @media (min-width: 3840px) {
        .auth-form__input {
            border-radius:32px;
            font-size: 48px;
            padding: 28px 36px
        }
    }

    .auth-form__input--password {
        padding-right: 50px
    }

    @media (min-width: 768px) {
        .auth-form__input--password {
            padding-right:52px
        }
    }

    @media (min-width: 1024px) {
        .auth-form__input--password {
            padding-right:54px
        }
    }

    @media (min-width: 1920px) {
        .auth-form__input--password {
            padding-right:60px
        }
    }

    @media (min-width: 3840px) {
        .auth-form__input--password {
            padding-right:120px
        }
    }

    .auth-form__play-button {
        align-self: center;
        flex-shrink: 0;
        height: 67.6px
    }

    @media (min-width: 768px) {
        .auth-form__play-button {
            align-self:auto
        }
    }

    @media (min-width: 1920px) {
        .auth-form__play-button {
            height:68.8px
        }
    }

    @media (min-width: 3840px) {
        .auth-form__play-button {
            height:137.6px
        }
    }

    .auth-form__password-wrapper {
        min-width: 42%;
        position: relative;
        width: 100%
    }

    @media (min-width: 768px) {
        .auth-form__password-wrapper {
            flex:1 1 auto;
            width: auto
        }
    }

    .auth-form__submit-icon {
        align-items: center;
        background-color: #4a4a4a;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        height: 36px;
        justify-content: center;
        padding: 0;
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        transition: background-color .25s ease-in-out;
        width: 36px;
        z-index: 10
    }

    .auth-form__submit-icon svg {
        stroke: #fff;
        stroke-width: 2.5;
        height: 18px;
        width: 18px
    }

    @media (any-hover: hover) {
        .auth-form__submit-icon:hover {
            background-color:#900302
        }
    }

    @media (min-width: 768px) {
        .auth-form__submit-icon {
            height:38px;
            right: 7px;
            width: 38px
        }

        .auth-form__submit-icon svg {
            height: 19px;
            width: 19px
        }
    }

    @media (min-width: 1024px) {
        .auth-form__submit-icon {
            height:40px;
            right: 7px;
            width: 40px
        }

        .auth-form__submit-icon svg {
            height: 20px;
            width: 20px
        }
    }

    @media (min-width: 1920px) {
        .auth-form__submit-icon {
            height:44px;
            right: 8px;
            width: 44px
        }

        .auth-form__submit-icon svg {
            height: 22px;
            width: 22px
        }
    }

    @media (min-width: 3840px) {
        .auth-form__submit-icon {
            height:88px;
            right: 16px;
            width: 88px
        }

        .auth-form__submit-icon svg {
            height: 44px;
            width: 44px
        }
    }

    .auth-form__forgot-password {
        align-self: flex-end;
        color: #efd7aa;
        font-family: var(--font-family);
        font-size: 14px;
        margin-left: auto;
        margin-right: 20%;
        margin-top: 8px;
        text-decoration: none;
        transition: var(--elements_transition)
    }

    @media (any-hover: hover) {
        .auth-form__forgot-password:hover {
            color:#fff8d5;
            text-decoration: underline
        }
    }

    @media (min-width: 768px) {
        .auth-form__forgot-password {
            font-size:16px;
            margin-top: 10px
        }
    }

    @media (min-width: 1024px) {
        .auth-form__forgot-password {
            font-size:18px;
            margin-top: 12px
        }
    }

    @media (min-width: 1920px) {
        .auth-form__forgot-password {
            font-size:20px;
            margin-top: 14px
        }
    }

    @media (min-width: 3840px) {
        .auth-form__forgot-password {
            font-size:40px;
            margin-top: 28px
        }
    }
}

@font-face {
    font-family: swiper-icons;
    font-style: normal;
    font-weight: 400;
    src: url("data:application/font-woff;charset=utf-8;base64, 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")
}

:root {
    --swiper-theme-color: #007aff
}

:host {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1
}

.swiper {
    display: block;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 1
}

.swiper-vertical>.swiper-wrapper {
    flex-direction: column
}

.swiper-wrapper {
    box-sizing: initial;
    display: flex;
    height: 100%;
    position: relative;
    transition-property: transform;
    transition-timing-function: ease;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function,initial);
    width: 100%;
    z-index: 1
}

.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper {
    transform: translateZ(0)
}

.swiper-horizontal {
    touch-action: pan-y
}

.swiper-vertical {
    touch-action: pan-x
}

.swiper-slide {
    display: block;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%
}

.swiper-slide-invisible-blank {
    visibility: hidden
}

.swiper-autoheight,.swiper-autoheight .swiper-slide {
    height: auto
}

.swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform,height
}

.swiper-backface-hidden .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0)
}

.swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px
}

.swiper-3d .swiper-wrapper {
    transform-style: preserve-3d
}

.swiper-3d {
    perspective: 1200px
}

.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide {
    transform-style: preserve-3d
}

.swiper-css-mode>.swiper-wrapper {
    -ms-overflow-style: none;
    overflow: auto;
    scrollbar-width: none
}

.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar {
    display: none
}

.swiper-css-mode>.swiper-wrapper>.swiper-slide {
    scroll-snap-align: start start
}

.swiper-css-mode.swiper-horizontal>.swiper-wrapper {
    scroll-snap-type: x mandatory
}

.swiper-css-mode.swiper-vertical>.swiper-wrapper {
    scroll-snap-type: y mandatory
}

.swiper-css-mode.swiper-free-mode>.swiper-wrapper {
    scroll-snap-type: none
}

.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide {
    scroll-snap-align: none
}

.swiper-css-mode.swiper-centered>.swiper-wrapper:before {
    content: "";
    flex-shrink: 0;
    order: 9999
}

.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop:always}

.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child {
    -webkit-margin-start: var(--swiper-centered-offset-before);
    margin-inline-start:var(--swiper-centered-offset-before)}

.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper: before {
    height:100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after)
}

.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child {
    -webkit-margin-before: var(--swiper-centered-offset-before);
    margin-block-start:var(--swiper-centered-offset-before)}

.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper: before {
    height:var(--swiper-centered-offset-after);
    min-width: 1px;
    width: 100%
}

.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top {
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10
}

.swiper-3d .swiper-slide-shadow {
    background: #00000026
}

.swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(270deg,#00000080,#0000)
}

.swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(90deg,#00000080,#0000)
}

.swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(0deg,#00000080,#0000)
}

.swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(180deg,#00000080,#0000)
}

.swiper-lazy-preloader {
    border: 4px solid #007aff;
    border: 4px solid var(--swiper-preloader-color,var(--swiper-theme-color));
    border-radius: 50%;
    border-top: 4px solid #0000;
    box-sizing: border-box;
    height: 42px;
    left: 50%;
    margin-left: -21px;
    margin-top: -21px;
    position: absolute;
    top: 50%;
    transform-origin: 50%;
    width: 42px;
    z-index: 10
}

.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader {
    animation: swiper-preloader-spin 1s linear infinite
}

.swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff
}

.swiper-lazy-preloader-black {
    --swiper-preloader-color: #000
}

@keyframes swiper-preloader-spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.swiper-virtual .swiper-slide {
    -webkit-backface-visibility: hidden;
    transform: translateZ(0)
}

.swiper-virtual.swiper-css-mode .swiper-wrapper:after {
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0
}

.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after {
    height: 1px;
    width: var(--swiper-virtual-size)
}

.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after {
    height: var(--swiper-virtual-size);
    width: 1px
}

:root {
    --swiper-navigation-size: 44px
}

.swiper-button-next,.swiper-button-prev {
    align-items: center;
    color: #007aff;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
    cursor: pointer;
    display: flex;
    height: 44px;
    height: var(--swiper-navigation-size);
    justify-content: center;
    margin-top: -22px;
    margin-top: calc(0px - var(--swiper-navigation-size)/2);
    position: absolute;
    top: 50%;
    top: var(--swiper-navigation-top-offset,50%);
    width: 27px;
    width: calc(var(--swiper-navigation-size)/44*27);
    z-index: 10
}

.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled {
    cursor: auto;
    opacity: .35;
    pointer-events: none
}

.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden {
    cursor: auto;
    opacity: 0;
    pointer-events: none
}

.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev {
    display: none!important
}

.swiper-button-next svg,.swiper-button-prev svg {
    height: 100%;
    object-fit: contain;
    transform-origin: center;
    width: 100%
}

.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg {
    transform: rotate(180deg)
}

.swiper-button-prev,.swiper-rtl .swiper-button-next {
    left: 10px;
    left: var(--swiper-navigation-sides-offset,10px);
    right: auto
}

.swiper-button-lock {
    display: none
}

.swiper-button-next:after,.swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: 44px;
    font-size: var(--swiper-navigation-size);
    font-variant: normal;
    letter-spacing: 0;
    line-height: 1;
    text-transform: none!important
}

.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after {
    content: "prev"
}

.swiper-button-next,.swiper-rtl .swiper-button-prev {
    left: auto;
    right: 10px;
    right: var(--swiper-navigation-sides-offset,10px)
}

.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after {
    content: "next"
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    transform: translateZ(0);
    transition: opacity .3s;
    z-index: 10
}

.swiper-pagination.swiper-pagination-hidden {
    opacity: 0
}

.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled {
    display: none!important
}

.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction {
    bottom: 8px;
    bottom: var(--swiper-pagination-bottom,8px);
    left: 0;
    top: auto;
    top: var(--swiper-pagination-top,auto);
    width: 100%
}

.swiper-pagination-bullets-dynamic {
    font-size: 0;
    overflow: hidden
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    position: relative;
    transform: scale(.33)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(.33)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(.33)
}

.swiper-pagination-bullet {
    background: #000;
    background: var(--swiper-pagination-bullet-inactive-color,#000);
    border-radius: 50%;
    border-radius: var(--swiper-pagination-bullet-border-radius,50%);
    display: inline-block;
    height: 8px;
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));
    opacity: .2;
    opacity: var(--swiper-pagination-bullet-inactive-opacity,.2);
    width: 8px;
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px))
}

button.swiper-pagination-bullet {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
}

.swiper-pagination-bullet:only-child {
    display: none!important
}

.swiper-pagination-bullet-active {
    background: #007aff;
    background: var(--swiper-pagination-color,var(--swiper-theme-color));
    opacity: 1;
    opacity: var(--swiper-pagination-bullet-opacity,1)
}

.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets {
    left: auto;
    left: var(--swiper-pagination-left,auto);
    right: 8px;
    right: var(--swiper-pagination-right,8px);
    top: 50%;
    transform: translate3d(0,-50%,0)
}

.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    display: block;
    margin: 6px 0;
    margin: var(--swiper-pagination-bullet-vertical-gap,6px) 0
}

.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px
}

.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    transition: transform .2s,top .2s
}

.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap,4px)
}

.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap
}

.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: transform .2s,left .2s
}

.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: transform .2s,right .2s
}

.swiper-pagination-fraction {
    color: inherit;
    color: var(--swiper-pagination-fraction-color,inherit)
}

.swiper-pagination-progressbar {
    background: #00000040;
    background: var(--swiper-pagination-progressbar-bg-color,#00000040);
    position: absolute
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #007aff;
    background: var(--swiper-pagination-color,var(--swiper-theme-color));
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: scale(0);
    transform-origin: left top;
    width: 100%
}

.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top
}

.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    height: 4px;
    height: var(--swiper-pagination-progressbar-size,4px);
    left: 0;
    top: 0;
    width: 100%
}

.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar {
    height: 100%;
    left: 0;
    top: 0;
    width: 4px;
    width: var(--swiper-pagination-progressbar-size,4px)
}

.swiper-pagination-lock {
    display: none
}

.swiper-scrollbar {
    background: #0000001a;
    background: var(--swiper-scrollbar-bg-color,#0000001a);
    border-radius: 10px;
    border-radius: var(--swiper-scrollbar-border-radius,10px);
    position: relative;
    touch-action: none
}

.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled {
    display: none!important
}

.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal {
    bottom: 4px;
    bottom: var(--swiper-scrollbar-bottom,4px);
    height: 4px;
    height: var(--swiper-scrollbar-size,4px);
    left: 1%;
    left: var(--swiper-scrollbar-sides-offset,1%);
    position: absolute;
    top: auto;
    top: var(--swiper-scrollbar-top,auto);
    width: 98%;
    width: calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);
    z-index: 50
}

.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar {
    height: 98%;
    height: calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);
    left: auto;
    left: var(--swiper-scrollbar-left,auto);
    position: absolute;
    right: 4px;
    right: var(--swiper-scrollbar-right,4px);
    top: 1%;
    top: var(--swiper-scrollbar-sides-offset,1%);
    width: 4px;
    width: var(--swiper-scrollbar-size,4px);
    z-index: 50
}

.swiper-scrollbar-drag {
    background: #00000080;
    background: var(--swiper-scrollbar-drag-bg-color,#00000080);
    border-radius: 10px;
    border-radius: var(--swiper-scrollbar-border-radius,10px);
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    width: 100%
}

.swiper-scrollbar-cursor-drag {
    cursor: move
}

.swiper-scrollbar-lock {
    display: none
}

.swiper-zoom-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%
}

.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain
}

.swiper-slide-zoomed {
    cursor: move;
    touch-action: none
}

.swiper .swiper-notification {
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: -1000
}

.swiper-free-mode>.swiper-wrapper {
    margin: 0 auto;
    transition-timing-function: ease-out
}

.swiper-grid>.swiper-wrapper {
    flex-wrap: wrap
}

.swiper-grid-column>.swiper-wrapper {
    flex-direction: column;
    flex-wrap: wrap
}

.swiper-fade.swiper-free-mode .swiper-slide {
    transition-timing-function: ease-out
}

.swiper-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity
}

.swiper-fade .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-cube {
    overflow: visible
}

.swiper-cube .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 100%;
    pointer-events: none;
    transform-origin: 0 0;
    visibility: hidden;
    width: 100%;
    z-index: 1
}

.swiper-cube .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-cube.swiper-rtl .swiper-slide {
    transform-origin: 100% 0
}

.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible
}

.swiper-cube .swiper-cube-shadow {
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: .6;
    position: absolute;
    width: 100%;
    z-index: 0
}

.swiper-cube .swiper-cube-shadow:before {
    background: #000;
    bottom: 0;
    content: "";
    filter: blur(50px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.swiper-cube .swiper-slide-next+.swiper-slide {
    pointer-events: auto;
    visibility: visible
}

.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 0
}

.swiper-flip {
    overflow: visible
}

.swiper-flip .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: none;
    z-index: 1
}

.swiper-flip .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 0
}

.swiper-creative .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    transition-property: transform,opacity,height
}

.swiper-cards {
    overflow: visible
}

.swiper-cards .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    transform-origin: center bottom
}

.landing-root-class {
    .fog {
        height: 100%;
        width: 100%
    }

    .fog div: after,.fog div:before,.fog:after,.fog:before {
        background-position:50%;
        background-repeat: repeat-x;
        background-size: cover;
        content: "";
        height: 100%;
        left: 0;
        opacity: .4;
        position: absolute;
        top: 0;
        width: 100%;
        will-change: transform
    }

    .fog div: after,.fog div:before {
        left:100%
    }

    @keyframes fogmove {
        0% {
            transform: translateZ(0)
        }

        to {
            transform: translate3d(-100%,0,0)
        }
    }

    .about {
        background-color: #0f0f0f
    }

    .about__sliders {
        display: flex;
        flex-direction: column-reverse;
        gap: 20px
    }

    @media (min-width: 768px) {
        .about__sliders {
            flex-direction:row;
            gap: 29px
        }
    }

    @media (min-width: 1024px) {
        .about__sliders {
            gap:34px
        }
    }

    @media (min-width: 1200px) {
        .about__sliders {
            gap:22px
        }
    }

    @media (min-width: 1920px) {
        .about__sliders {
            gap:64px
        }
    }

    @media (min-width: 3840px) {
        .about__sliders {
            gap:120px
        }
    }

    .about__slider-media {
        flex: 0 0 100%
    }

    @media (min-width: 768px) {
        .about__slider-media {
            flex:0 0 354px
        }
    }

    @media (min-width: 1024px) {
        .about__slider-media {
            flex:0 0 497px
        }
    }

    @media (min-width: 1200px) {
        .about__slider-media {
            flex:0 0 627px
        }
    }

    @media (min-width: 1600px) {
        .about__slider-media {
            flex:0 0 740px
        }
    }

    @media (min-width: 1920px) {
        .about__slider-media {
            flex:0 0 892px
        }
    }

    @media (min-width: 3840px) {
        .about__slider-media {
            flex:0 0 1784px
        }
    }

    .swiper {
        height: 100%;
        width: 100%
    }

    .swiper-slide {
        will-change: transform
    }

    .slider-media__bg {
        aspect-ratio: 16/9;
        background-color: #0f0f0f
    }

    .slider-media__bg img,.slider-media__bg video {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    .slider-text__slide {
        background-color: #0f0f0f
    }

    .slider-text__content {
        min-height: auto
    }

    @media (min-width: 768px) {
        .slider-text__content {
            padding-left:20px
        }
    }

    .slider-text__text:last-child {
        margin-bottom: 0
    }

    .swiper-pagination {
        align-items: center;
        bottom: auto!important;
        display: flex;
        gap: 7px;
        height: auto;
        justify-content: center;
        padding: 20px 0 29px;
        position: relative;
        z-index: 0
    }

    @media (min-width: 768px) {
        .swiper-pagination {
            padding:24px 0 30px
        }
    }

    @media (min-width: 1920px) {
        .swiper-pagination {
            gap:9px;
            padding: 30px 0 35px
        }
    }

    @media (min-width: 3840px) {
        .swiper-pagination {
            gap:17px;
            padding: 69px 0 70px
        }
    }

    .swiper-pagination .swiper-pagination-bullet {
        background-color: initial;
        background-image: url(/static/media/swiper-pagination.6b9b0022811c0694b880.svg);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0;
        display: inline-block;
        height: 19px;
        margin: 0!important;
        opacity: 1;
        position: relative;
        width: 19px
    }

    @media (min-width: 1920px) {
        .swiper-pagination .swiper-pagination-bullet {
            height:23px;
            width: 23px
        }
    }

    @media (min-width: 3840px) {
        .swiper-pagination .swiper-pagination-bullet {
            height:46px;
            width: 46px
        }
    }

    .swiper-pagination .swiper-pagination-bullet-active {
        background-image: url(/static/media/swiper-pagination-active.6c6fb68442bab3f228e1.svg)
    }

    .world {
        background-image: url(/static/media/world-bg.8f0ccdd106f2fdae8eef.webp);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 30px
    }

    @media (min-width: 768px) {
        .world {
            padding-bottom:35px
        }
    }

    @media (min-width: 1024px) {
        .world {
            padding-bottom:60px
        }
    }

    @media (min-width: 1200px) {
        .world {
            padding-bottom:85px
        }
    }

    @media (min-width: 1600px) {
        .world {
            padding-bottom:95px
        }
    }

    .world__container {
        display: block;
        padding-right: 15px!important
    }

    @media (min-width: 1024px) {
        .world__container {
            display:grid;
            grid-template-columns: 1fr 520px
        }
    }

    @media (min-width: 1200px) {
        .world__container {
            gap:20px;
            grid-template-columns: 1fr 650px
        }
    }

    @media (min-width: 1600px) {
        .world__container {
            gap:30px;
            grid-template-columns: 1fr 790px
        }
    }

    @media (min-width: 1920px) {
        .world__container {
            gap:70px;
            grid-template-columns: 1fr 970px
        }
    }

    @media (min-width: 3840px) {
        .world__container {
            gap:120px;
            grid-template-columns: 1fr 1942px
        }
    }

    @media (min-width: 768px) {
        .world__content {
            margin-bottom:20px
        }
    }

    .world__map {
        aspect-ratio: 8/5;
        position: relative
    }

    .world__map img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    @media (min-width: 768px) {
        .world__map {
            margin:0 auto;
            max-width: 568px
        }
    }

    @media (min-width: 1024px) {
        .world__map {
            max-width:100%
        }
    }

    .cults {
        position: relative;
        z-index: 0
    }

    .cults:before {
        aspect-ratio: 240/139;
        background-image: url(/static/media/cults-bg-top.14dbb17ccbeb39c3dea3.webp);
        background-position: 50%;
        content: "";
        left: 0;
        opacity: .9;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1
    }

    .cults:before,.cults__bg {
        background-repeat: no-repeat;
        background-size: cover
    }

    .cults__bg {
        background-color: #050505;
        background-image: url(/static/media/cults-bg-bottom.1979f9ea0bbcdb2eec14.webp);
        background-position: bottom;
        min-height: 100%;
        overflow: hidden;
        position: relative
    }

    @media (min-width: 1024px) {
        .cults__bg {
            background-image:url(/static/media/cults-bg-bottom-1024.68b16e07c6a18c9b7c1f.webp);
            background-position: bottom
        }
    }

    @media (min-width: 1200px) {
        .cults__bg {
            background-image:url(/static/media/cults-bg-bottom-1200.0936fdb154fe85560d08.webp);
            background-position: bottom
        }
    }

    @media (min-width: 1600px) {
        .cults__bg {
            background-image:url(/static/media/cults-bg-bottom-1600.37018f7e4badbf4ba181.webp);
            background-position: bottom
        }
    }

    @media (min-width: 1920px) {
        .cults__bg {
            background-image:url(/static/media/cults-bg-bottom-full-hd.cbfec625dd83a8e8c2b0.webp);
            background-position: bottom
        }
    }

    @media (min-width: 3840px) {
        .cults__bg {
            background-image:url(/static/media/cults-bg-bottom-4k.477fbaf4c7dae4bf8f92.webp);
            background-position: bottom
        }
    }

    .cults__container {
        z-index: 2
    }

    .cults__text {
        text-align: justify
    }

    .cults__skills {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%
    }

    @media (min-width: 480px) {
        .cults__skills {
            flex-direction:row;
            gap: 6px;
            justify-content: space-between
        }
    }

    .cults__skill {
        flex: 1 1 auto;
        max-width: 230px;
        width: 100%
    }

    @media (min-width: 480px) {
        .cults__skill {
            flex:0 0 140px;
            max-width: none
        }
    }

    @media (min-width: 768px) {
        .cults__skill {
            flex:0 0 229px
        }
    }

    @media (min-width: 1024px) {
        .cults__skill {
            flex:0 0 299px
        }
    }

    @media (min-width: 1200px) {
        .cults__skill {
            flex:0 0 339px
        }
    }

    @media (min-width: 1600px) {
        .cults__skill {
            flex:0 0 375px
        }
    }

    @media (min-width: 1920px) {
        .cults__skill {
            flex:0 0 480px
        }
    }

    @media (min-width: 3840px) {
        .cults__skill {
            flex:0 0 960px
        }
    }

    .cults__skills-2 {
        aspect-ratio: 320/97;
        width: 100%
    }

    .cults__skills-2 img {
        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    .skill {
        display: block;
        filter: drop-shadow(#000 35px 30px 20px);
        position: relative
    }

    .skill__wrapper {
        aspect-ratio: 345/359;
        background-image: url(/static/media/skill-bg.7b8742d0f990159f0dc4.png);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-clip-path: polygon(50% 0,100% 0,100% 70%,50% 100%,0 70%,0 0);
        clip-path: polygon(50% 0,100% 0,100% 70%,50% 100%,0 70%,0 0);
        height: 100%;
        padding-top: 11%;
        text-align: center;
        -webkit-user-select: none;
        user-select: none;
        width: 100%
    }

    .skill__title {
        -webkit-text-fill-color: #0000;
        background: linear-gradient(180deg,#fff8d5,#efd7aa);
        background-clip: text;
        -webkit-background-clip: text;
        font-family: var(--second-family);
        font-size: 24px;
        font-weight: 400;
        letter-spacing: .03em;
        line-height: 130%;
        margin-bottom: 2.5%;
        text-shadow: 0 0 15px #9d822b
    }

    @media (min-width: 480px) {
        .skill__title {
            font-size:16px
        }
    }

    @media (min-width: 768px) {
        .skill__title {
            font-size:24px
        }
    }

    @media (min-width: 1024px) {
        .skill__title {
            font-size:28px
        }
    }

    @media (min-width: 1200px) {
        .skill__title {
            font-size:30px
        }
    }

    @media (min-width: 1920px) {
        .skill__title {
            font-size:36px
        }
    }

    @media (min-width: 3840px) {
        .skill__title {
            font-size:72px
        }
    }

    .skill__subtitle {
        color: #fff;
        font-family: var(--font-family);
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 6%
    }

    @media (min-width: 480px) {
        .skill__subtitle {
            font-size:12px
        }
    }

    @media (min-width: 768px) {
        .skill__subtitle {
            font-size:16px
        }
    }

    @media (min-width: 1024px) {
        .skill__subtitle {
            font-size:22px
        }
    }

    @media (min-width: 1200px) {
        .skill__subtitle {
            font-size:24px
        }
    }

    @media (min-width: 1920px) {
        .skill__subtitle {
            font-size:28px
        }
    }

    @media (min-width: 3840px) {
        .skill__subtitle {
            font-size:56px
        }
    }

    .skill__logo {
        aspect-ratio: 1/1;
        margin: 0 auto;
        width: 35%
    }

    .skill__logo img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    .danji {
        background: linear-gradient(180deg,#131313,#050505)
    }

    .danji__container {
        display: block;
        position: relative
    }

    @media (min-width: 480px) {
        .danji__container {
            min-height:630px
        }
    }

    @media (min-width: 768px) {
        .danji__container {
            display:flex;
            justify-content: flex-end;
            min-height: auto
        }
    }

    .danji__img {
        aspect-ratio: 273/356;
        display: block;
        margin: -16% auto 12px;
        position: relative;
        width: 234px;
        z-index: 1
    }

    .danji__img img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    @media (min-width: 480px) {
        .danji__img {
            margin-bottom:20px;
            width: 322px
        }
    }

    @media (min-width: 768px) {
        .danji__img {
            bottom:-6%;
            left: 0;
            margin-bottom: 0;
            margin-top: 0;
            position: absolute;
            top: -14%;
            width: auto
        }
    }

    @media (min-width: 1600px) {
        .danji__img {
            left:40px
        }
    }

    @media (min-width: 1920px) {
        .danji__img {
            left:120px
        }
    }

    @media (min-width: 3840px) {
        .danji__img {
            left:120px
        }
    }

    .danji__content {
        flex: 1 1 auto;
        margin-bottom: 20px
    }

    @media (min-width: 768px) {
        .danji__content {
            flex:0 0 353px
        }
    }

    @media (min-width: 1024px) {
        .danji__content {
            flex:0 0 489px;
            margin-bottom: 30px
        }
    }

    @media (min-width: 1200px) {
        .danji__content {
            flex:0 0 599px;
            margin-bottom: 70px
        }
    }

    @media (min-width: 1600px) {
        .danji__content {
            flex:0 0 700px;
            margin-bottom: 135px
        }
    }

    @media (min-width: 1920px) {
        .danji__content {
            flex:0 0 848px;
            margin-bottom: 200px
        }
    }

    @media (min-width: 3840px) {
        .danji__content {
            flex:0 0 1696px;
            margin-bottom: 400px
        }
    }

    .registration {
        position: relative;
        z-index: 1
    }

    .registration__container {
        padding-top: 30px!important
    }

    @media (min-width: 480px) {
        .registration__container {
            padding-top:30px!important
        }
    }

    @media (min-width: 768px) {
        .registration__container {
            padding-top:107px!important
        }
    }

    @media (min-width: 1024px) {
        .registration__container {
            padding-top:85px!important
        }
    }

    @media (min-width: 1200px) {
        .registration__container {
            padding-top:100px!important
        }
    }

    @media (min-width: 1920px) {
        .registration__container {
            padding-top:138px!important
        }
    }

    @media (min-width: 3840px) {
        .registration__container {
            padding-top:275px!important
        }
    }

    .registration__figure {
        aspect-ratio: 234/305;
        display: block;
        margin: 0 auto
    }

    .registration__figure img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    @media (min-width: 480px) {
        .registration__figure {
            max-width:305px
        }
    }

    @media (min-width: 768px) {
        .registration__figure {
            margin:0 0 0 auto;
            max-width: 339px
        }
    }

    @media (min-width: 1024px) {
        .registration__figure {
            bottom:0;
            max-width: 381px;
            position: absolute;
            right: 0
        }
    }

    @media (min-width: 1200px) {
        .registration__figure {
            max-width:428px
        }
    }

    @media (min-width: 1600px) {
        .registration__figure {
            max-width:468px
        }
    }

    @media (min-width: 1920px) {
        .registration__figure {
            max-width:611px
        }
    }

    @media (min-width: 3840px) {
        .registration__figure {
            max-width:1222px
        }
    }

    .registration__body {
        max-width: 740px
    }

    @media (min-width: 480px) {
        .registration__body {
            max-width:740px
        }
    }

    @media (min-width: 768px) {
        .registration__body {
            max-width:100%
        }
    }

    @media (min-width: 1024px) {
        .registration__body {
            max-width:570px
        }
    }

    @media (min-width: 1200px) {
        .registration__body {
            max-width:670px
        }
    }

    @media (min-width: 1600px) {
        .registration__body {
            max-width:740px
        }
    }

    @media (min-width: 1920px) {
        .registration__body {
            max-width:873px
        }
    }

    @media (min-width: 3840px) {
        .registration__body {
            max-width:1746px
        }
    }

    .registration__content {
        margin-bottom: 30px
    }

    @media (min-width: 768px) {
        .registration__content {
            margin-bottom:40px
        }
    }

    @media (min-width: 1024px) {
        .registration__content {
            margin-bottom:48px
        }
    }

    @media (min-width: 1200px) {
        .registration__content {
            margin-bottom:65px
        }
    }

    @media (min-width: 1600px) {
        .registration__content {
            margin-bottom:95px
        }
    }

    @media (min-width: 1920px) {
        .registration__content {
            margin-bottom:149px
        }
    }

    @media (min-width: 3840px) {
        .registration__content {
            margin-bottom:299px
        }
    }

    .registration__subtitle {
        color: #fff;
        font-family: var(--font-family);
        font-size: 18px;
        font-weight: 400;
        letter-spacing: .03em;
        line-height: 130%;
        margin-bottom: 16px;
        margin-top: 30px
    }

    @media (min-width: 768px) {
        .registration__subtitle {
            font-size:20px;
            margin-top: 40px
        }
    }

    @media (min-width: 1024px) {
        .registration__subtitle {
            font-size:24px;
            margin-top: 48px
        }
    }

    @media (min-width: 1200px) {
        .registration__subtitle {
            font-size:28px;
            margin-top: 65px
        }
    }

    @media (min-width: 1920px) {
        .registration__subtitle {
            font-size:32px;
            margin-top: 80px
        }
    }

    @media (min-width: 3840px) {
        .registration__subtitle {
            font-size:64px;
            margin-top: 160px
        }
    }

    .registration__list {
        list-style: none;
        margin-bottom: 20px;
        margin-left: 0;
        padding-left: 0
    }

    @media (min-width: 768px) {
        .registration__list {
            margin-bottom:30px
        }
    }

    @media (min-width: 1920px) {
        .registration__list {
            margin-bottom:40px
        }
    }

    @media (min-width: 3840px) {
        .registration__list {
            margin-bottom:80px
        }
    }

    .registration__list-item {
        list-style: none;
        margin-bottom: 12px;
        padding-left: 20px;
        position: relative
    }

    .registration__list-item:before {
        content: "-";
        left: 0;
        position: absolute
    }

    @media (min-width: 768px) {
        .registration__list-item {
            margin-bottom:16px;
            padding-left: 24px
        }
    }

    @media (min-width: 1920px) {
        .registration__list-item {
            margin-bottom:20px;
            padding-left: 28px
        }
    }

    @media (min-width: 3840px) {
        .registration__list-item {
            margin-bottom:40px;
            padding-left: 56px
        }
    }

    .registration__button-wrapper {
        margin-top: 40px
    }

    @media (min-width: 768px) {
        .registration__button-wrapper {
            margin-top:50px
        }
    }

    @media (min-width: 1024px) {
        .registration__button-wrapper {
            margin-top:60px
        }
    }

    @media (min-width: 1920px) {
        .registration__button-wrapper {
            margin-top:80px
        }
    }

    @media (min-width: 3840px) {
        .registration__button-wrapper {
            margin-top:160px
        }
    }

    .registration__play-button {
        display: inline-flex
    }

    .registration__form {
        padding-bottom: 30px
    }

    @media (min-width: 480px) {
        .registration__form {
            padding-bottom:38px
        }
    }

    @media (min-width: 768px) {
        .registration__form {
            padding-bottom:0
        }
    }

    @media (min-width: 1024px) {
        .registration__form {
            padding-bottom:56px
        }
    }

    @media (min-width: 1200px) {
        .registration__form {
            padding-bottom:65px
        }
    }

    @media (min-width: 1600px) {
        .registration__form {
            padding-bottom:90px
        }
    }

    @media (min-width: 1920px) {
        .registration__form {
            padding-bottom:108px
        }
    }

    .registration-hint {
        background-color: #191919;
        border: 2px solid #313536;
        border-radius: 20px;
        box-shadow: 0 .7vw 2.1vw 2vw #0003;
        color: #9c9a98;
        font-family: var(--font-family);
        font-size: 14px;
        left: 10px;
        padding: 3%;
        position: absolute;
        right: 10px;
        top: 60px;
        transition: var(--elements_transition);
        z-index: 1
    }

    @media (min-width: 480px) {
        .registration-hint {
            font-size:14px;
            left: 20px;
            right: 20px;
            top: 0;
            width: 90%
        }
    }

    @media (min-width: 768px) {
        .registration-hint {
            top:70px
        }
    }

    @media (min-width: 1024px) {
        .registration-hint {
            border-radius:25px;
            bottom: 1%;
            font-size: 20px;
            left: auto;
            padding: 2.3%;
            right: 0;
            top: auto;
            transform: none;
            width: 36%
        }
    }

    @media (min-width: 1200px) {
        .registration-hint {
            font-size:22px;
            width: 37%
        }
    }

    @media (min-width: 1600px) {
        .registration-hint {
            font-size:22px;
            width: 39%
        }
    }

    @media (min-width: 1920px) {
        .registration-hint {
            font-size:24px;
            width: 43%
        }
    }

    @media (min-width: 3840px) {
        .registration-hint {
            font-size:50px
        }
    }

    .registration-hint:before {
        background-color: #191919;
        border-bottom-left-radius: 10px;
        border-color: #191919 #191919 #313536 #313536;
        border-style: solid;
        border-width: 2px;
        bottom: -15px;
        content: "";
        height: 30px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        transform: rotate(-45deg);
        width: 30px
    }

    @media (min-width: 1024px) {
        .registration-hint:before {
            left:-15px;
            top: 42%;
            transform: rotate(45deg)
        }
    }

    @media (min-width: 1600px) {
        .registration-hint:before {
            top:26%
        }
    }

    @media (min-width: 1920px) {
        .registration-hint:before {
            height:40px;
            left: -20px;
            top: 17%;
            width: 40px
        }
    }

    @media (min-width: 3840px) {
        .registration-hint:before {
            height:60px;
            left: -30px;
            top: 34%;
            width: 60px
        }
    }

    .registration-hint p {
        margin-bottom: 1.5%
    }

    .registration-hint__close-btn {
        cursor: pointer;
        font-size: 80%;
        position: absolute;
        right: 4%;
        top: 7%;
        transition: color .25s ease-in;
        z-index: 10
    }

    @media (any-hover: hover) {
        .registration-hint__close-btn:hover {
            color:#fff
        }
    }

    .form-message {
        border: 2px solid #313536;
        border-radius: 10px;
        color: #9c9a98;
        font-size: 14px;
        padding: 2% 5.5% 1% 2.5%;
        right: 50%;
        top: 240px;
        transform: translateX(50%);
        width: 90%
    }

    .form-message,.form-message:before {
        background-color: #191919;
        position: absolute;
        z-index: 10
    }

    .form-message:before {
        border-bottom-left-radius: 10px;
        border-color: #191919 #191919 #313536 #313536;
        border-style: solid;
        border-width: 2px;
        bottom: -15px;
        content: "";
        height: 30px;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
        width: 30px
    }

    @media (min-width: 1024px) {
        .form-message:before {
            left:17px;
            top: 56%;
            transform: rotate(-45deg)
        }
    }

    @media (min-width: 1920px) {
        .form-message:before {
            height:40px;
            left: 24px;
            width: 40px
        }
    }

    @media (min-width: 3840px) {
        .form-message:before {
            height:60px;
            left: -30px;
            width: 60px
        }
    }

    @media (min-width: 480px) {
        .form-message {
            font-size:14px;
            top: 130px;
            width: auto
        }
    }

    @media (min-width: 768px) {
        .form-message {
            top:176px
        }
    }

    @media (min-width: 1024px) {
        .form-message {
            border-radius:20px;
            font-size: 20px;
            left: auto;
            right: -80%;
            top: -106%;
            transform: none;
            width: 358px
        }
    }

    @media (min-width: 1200px) {
        .form-message {
            font-size:22px;
            width: 439px
        }
    }

    @media (min-width: 1600px) {
        .form-message {
            font-size:22px;
            right: 3%;
            top: 60%;
            width: 490px
        }
    }

    @media (min-width: 1920px) {
        .form-message {
            font-size:24px;
            right: -51%;
            top: -101%;
            width: 490px
        }
    }

    @media (min-width: 3840px) {
        .form-message {
            font-size:50px;
            right: 11%;
            top: 67%;
            width: 1010px
        }
    }

    .form-message__close-btn {
        align-items: center;
        cursor: pointer;
        display: flex;
        font-size: 80%;
        justify-content: center;
        margin: -8px;
        min-height: 32px;
        min-width: 32px;
        padding: 8px;
        position: absolute;
        right: 3%;
        transition: color .25s ease-in;
        z-index: 20
    }

    @media (min-width: 768px) {
        .form-message__close-btn {
            min-height:40px;
            min-width: 40px;
            padding: 10px
        }
    }

    @media (min-width: 1920px) {
        .form-message__close-btn {
            margin:-12px;
            min-height: 48px;
            min-width: 48px;
            padding: 12px
        }
    }

    @media (any-hover: hover) {
        .form-message__close-btn:hover {
            color:#fff
        }
    }

    .form-message__body {
        margin-bottom: .5%;
        position: relative;
        z-index: 11
    }

    .form-message__footer {
        position: relative;
        text-align: center;
        z-index: 11
    }

    .form-message__link {
        color: #9cabac;
        display: inline-block;
        font-size: 90%;
        text-decoration: none;
        transition: color .25s ease-in
    }

    @media (any-hover: hover) {
        .form-message__link:hover {
            color:#fff
        }
    }

    .form__fields {
        display: flex;
        flex-direction: column;
        gap: 6px
    }

    @media (min-width: 768px) {
        .form__fields {
            gap:21px
        }
    }

    @media (min-width: 1920px) {
        .form__fields {
            gap:25px
        }
    }

    @media (min-width: 3840px) {
        .form__fields {
            gap:50px
        }
    }

    .form__field {
        grid-gap: 6px;
        display: grid;
        font-family: var(--font-family);
        font-size: 16px;
        gap: 6px;
        grid-template-columns: 210px 1fr;
        grid-template-columns: 1fr;
        position: relative
    }

    @media (min-width: 480px) {
        .form__field {
            font-size:16px;
            grid-template-columns: 1fr
        }
    }

    @media (min-width: 768px) {
        .form__field {
            font-size:20px;
            gap: 30px;
            grid-template-columns: 135px 1fr
        }
    }

    @media (min-width: 1024px) {
        .form__field {
            font-size:24px;
            grid-template-columns: 180px 1fr
        }
    }

    @media (min-width: 1200px) {
        .form__field {
            font-size:30px;
            gap: 32px;
            grid-template-columns: 215px 1fr
        }
    }

    @media (min-width: 1920px) {
        .form__field {
            font-size:36px;
            gap: 50px;
            grid-template-columns: 251px 1fr
        }
    }

    @media (min-width: 3840px) {
        .form__field {
            font-size:72px;
            gap: 110px;
            grid-template-columns: 491px 1fr
        }
    }

    .form label {
        align-self: center;
        color: #fff
    }

    .form input {
        -webkit-appearance: none;
        appearance: none;
        background-color: #cccaca;
        border: 1px solid #0000;
        border-radius: 6px;
        caret-color: #333;
        cursor: auto;
        font-family: var(--font-family);
        font-size: 16px;
        padding: 6px 10px;
        transition: background-color .25s ease-in-out;
        width: 100%
    }

    .form input: focus {
        background-color:#fff;
        outline: none
    }

    .form input: -moz-placeholder,.form input:-ms-input-placeholder,.form input::-moz-placeholder,.form input::-webkit-input-placeholder,.form input::placeholder {
        -webkit-text-fill-color:#333;
        color: #333;
        text-shadow: none
    }

    .form input: -webkit-autofill {
        -webkit-text-fill-color:inherit;
        border: inherit;
        -webkit-box-shadow: inherit;
        font-size: inherit
    }

    .form input: -webkit-autofill,.form input:-webkit-autofill:first-line,.form input:-webkit-autofill:focus,.form input:-webkit-autofill:hover,.form input:autofill {
        -webkit-text-fill-color:inherit;
        border: inherit;
        -webkit-box-shadow: inherit;
        font-size: inherit
    }

    @media (min-width: 768px) {
        .form input {
            font-size:20px
        }
    }

    @media (min-width: 1024px) {
        .form input {
            font-size:24px
        }
    }

    @media (min-width: 1200px) {
        .form input {
            font-size:30px
        }
    }

    @media (min-width: 1920px) {
        .form input {
            font-size:36px
        }
    }

    @media (min-width: 3840px) {
        .form input {
            font-size:72px
        }
    }

    .form #name {
        padding-right: 12%
    }

    .form__update-button {
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        height: 1.2em;
        min-height: 20px;
        min-width: 20px;
        opacity: .7;
        position: absolute;
        right: 1.5%;
        top: 50%;
        transform: translateY(6%);
        transition: var(--elements_transition);
        width: 1.2em
    }

    .form__update-button:hover {
        opacity: 1
    }

    .form__update-button svg {
        display: inline-block;
        height: 100%;
        width: 100%
    }

    @media (min-width: 768px) {
        .form__update-button {
            transform:translateY(-50%)
        }
    }

    .form__hint-name {
        color: #fff;
        cursor: pointer;
        font-size: 27px;
        transition: var(--elements_transition)
    }

    .form__hint-name:hover {
        color: #bdbcbc
    }

    .form__field--honeypot {
        clip: rect(0,0,0,0);
        height: 1px;
        left: -9999px;
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        visibility: hidden;
        width: 1px
    }

    .form__button-container {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 25px
    }

    @media (min-width: 480px) {
        .form__button-container {
            grid-template-columns:1fr
        }
    }

    @media (min-width: 768px) {
        .form__button-container {
            gap:30px;
            grid-template-columns: 135px 1fr
        }
    }

    @media (min-width: 1024px) {
        .form__button-container {
            gap:30px;
            grid-template-columns: 180px 1fr
        }
    }

    @media (min-width: 1200px) {
        .form__button-container {
            gap:32px;
            grid-template-columns: 215px 1fr
        }
    }

    @media (min-width: 1920px) {
        .form__button-container {
            gap:50px;
            grid-template-columns: 251px 1fr
        }
    }

    @media (min-width: 3840px) {
        .form__button-container {
            gap:110px;
            grid-template-columns: 491px 1fr
        }
    }

    .form__button-container button {
        margin: 0 auto;
        position: relative
    }

    @media (min-width: 768px) {
        .form__button-container button {
            align-self:center;
            grid-column: 2;
            justify-self: start;
            margin: 0
        }
    }

    .form__button-container button.load {
        opacity: .4
    }

    .form__button-container button.load: after {
        animation:barStripe .6s linear infinite;
        background: linear-gradient(45deg,#0000 49%,#fff 50%,#fff 0,#0000 51%,#0000),linear-gradient(-45deg,#0000 49%,#fff 50%,#fff 0,#0000 51%,#0000);
        background-size: 1em 1em;
        border-radius: 4px;
        content: "";
        inset: 0;
        position: absolute
    }

    .form__button-container button: disabled {
        background-image:url(/static/media/button_gray.81b3c0fc8df23d34988f.webp);
        cursor: not-allowed;
        opacity: .8
    }

    @media (min-width: 1024px) {
        .form__button-container {
            margin-top:50px
        }
    }

    @media (min-width: 1920px) {
        .form__button-container {
            margin-top:60px
        }
    }

    @media (min-width: 3840px) {
        .form__button-container {
            margin-top:115px
        }
    }

    @keyframes barStripe {
        0% {
            background-position: 1em 0
        }

        to {
            background-position: 0 0
        }
    }

    .footer {
        background-color: #0f0f0f;
        padding: 20px 0
    }

    .footer__container {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: var(--font-family);
        font-size: 14px;
        font-weight: 400;
        gap: 10px;
        justify-content: center;
        letter-spacing: .03em;
        text-align: center
    }

    @media (min-width: 768px) {
        .footer__container {
            flex-direction:row;
            gap: 34px
        }
    }

    @media (min-width: 1024px) {
        .footer__container {
            font-size:18px
        }
    }

    @media (min-width: 1200px) {
        .footer__container {
            font-size:22px
        }
    }

    @media (min-width: 1920px) {
        .footer__container {
            font-size:26px;
            gap: 40px
        }
    }

    @media (min-width: 3840px) {
        .footer__container {
            font-size:52px;
            gap: 80px
        }
    }

    .footer__text {
        color: #40403f
    }

    .footer .text-blue {
        color: #566364
    }

    .footer__link {
        position: relative;
        text-decoration: none
    }

    .footer__link,.footer__link:before {
        transition: var(--elements_transition)
    }

    .footer__link:before {
        background-color: #566364;
        bottom: 0;
        content: "";
        height: 1px;
        position: absolute;
        width: 100%
    }

    .footer__link:focus {
        outline: none
    }

    .footer__link:focus-visible {
        outline: 2px dashed #566364;
        outline-offset: 3px
    }

    @media (any-hover: hover) {
        .footer__link:hover {
            color:#9cabac;
            text-decoration: none
        }

        .footer__link:hover:before {
            background-color: #9cabac
        }
    }

    .success-reg-msg {
        font-family: var(--font-family);
        font-size: 17px;
        padding: 7.5% 8.5% 3.5%;
        position: absolute;
        right: 50%;
        top: 240px;
        transform: translateX(50%);
        width: 350px;
        z-index: 100
    }

    .success-reg-msg svg {
        inset: 0;
        position: absolute;
        width: 100%
    }

    @media (min-width: 480px) {
        .success-reg-msg {
            font-size:17px;
            padding: 5.5% 6.5% 2.5%;
            top: 180px
        }
    }

    @media (min-width: 768px) {
        .success-reg-msg {
            font-size:19px;
            padding: 3.5% 4.5% 1.5%;
            top: 240px
        }
    }

    @media (min-width: 1024px) {
        .success-reg-msg {
            bottom:10px;
            font-size: 20px;
            right: -2px;
            top: auto;
            transform: none;
            width: 403px
        }
    }

    @media (min-width: 1200px) {
        .success-reg-msg {
            font-size:22px;
            width: 478px
        }
    }

    @media (min-width: 1600px) {
        .success-reg-msg {
            bottom:20px;
            font-size: 24px;
            right: -130px;
            width: 680px
        }
    }

    @media (min-width: 1920px) {
        .success-reg-msg {
            bottom:63px;
            right: 88px;
            width: 680px
        }
    }

    @media (min-width: 3840px) {
        .success-reg-msg {
            bottom:5px;
            font-size: 48px;
            right: 105px;
            width: 1331px
        }
    }

    .success-reg-msg__close-btn {
        color: #fff;
        cursor: pointer;
        font-size: 80%;
        position: absolute;
        right: 6%;
        top: 9%;
        transition: color .25s ease-in;
        z-index: 10
    }

    @media (any-hover: hover) {
        .success-reg-msg__close-btn:hover {
            color:#9c9a98
        }
    }

    .success-reg-msg__body {
        margin-bottom: 5%;
        position: relative;
        z-index: 11
    }

    .success-reg-msg__text {
        color: #9c9a98
    }

    .success-reg-msg__text:not(:last-child) {
        margin-bottom: 2%
    }

    .success-reg-msg__text span {
        font-weight: 700
    }

    .success-reg-msg__footer {
        display: flex;
        gap: 2%;
        justify-content: center;
        margin-bottom: 5%;
        position: relative;
        text-align: center;
        z-index: 11
    }

    @media (max-width: 1599.99px) {
        .success-reg-msg__button {
            padding:0;
            width: 230px
        }

        .success-reg-msg__button strong {
            font-size: 20px
        }
    }

    .success-reg-msg__svg-desc {
        display: none
    }

    @media (min-width: 1024px) {
        .success-reg-msg__svg-desc {
            display:block
        }
    }

    .success-reg-msg__svg-mob {
        display: block
    }

    @media (min-width: 1024px) {
        .success-reg-msg__svg-mob {
            display:none
        }
    }

    .community {
        background: linear-gradient(180deg,#131313,#050505);
        overflow: hidden;
        position: relative
    }

    .community:before {
        background-image: url(/static/media/community-bg-3.f656b236a722317d9055.png);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        height: 150%;
        left: 0;
        right: 0;
        top: -14px;
        z-index: 1
    }

    .community:after,.community:before {
        content: "";
        display: block;
        position: absolute
    }

    .community:after {
        background-color: #42515f;
        inset: 0;
        mix-blend-mode: color;
        pointer-events: none;
        z-index: 2
    }

    .community__container {
        display: flex;
        gap: 2%;
        position: relative;
        z-index: 3
    }

    @media (min-width: 768px) {
        .community__container {
            justify-content:flex-end;
            min-height: auto
        }
    }

    @media (max-width: 767.99px) {
        .community__container {
            align-items:center;
            flex-direction: column-reverse;
            justify-content: center
        }
    }

    .community__img {
        aspect-ratio: 449/536;
        display: block;
        position: relative;
        width: 234px
    }

    .community__img img {
        height: 100%;
        object-fit: cover;
        width: 100%
    }

    @media (min-width: 480px) {
        .community__img {
            width:322px
        }
    }

    @media (min-width: 768px) {
        .community__img {
            bottom:-64px;
            left: 1%;
            position: absolute;
            width: 370px
        }
    }

    @media (min-width: 1024px) {
        .community__img {
            bottom:-90px;
            left: 2%;
            width: 450px
        }
    }

    @media (min-width: 1200px) {
        .community__img {
            left:3%;
            width: 500px
        }
    }

    @media (min-width: 1920px) {
        .community__img {
            left:9%;
            width: 594px
        }
    }

    @media (min-width: 3840px) {
        .community__img {
            bottom:-191px;
            left: 7%;
            width: 1180px
        }
    }

    .community__content {
        flex: 1 1 auto;
        margin-bottom: 6%
    }

    @media (min-width: 768px) {
        .community__content {
            flex:0 0 353px
        }
    }

    @media (min-width: 1024px) {
        .community__content {
            flex:0 0 489px
        }
    }

    @media (min-width: 1200px) {
        .community__content {
            flex:0 0 599px
        }
    }

    @media (min-width: 1600px) {
        .community__content {
            flex:0 0 700px
        }
    }

    @media (min-width: 1920px) {
        .community__content {
            flex:0 0 848px
        }
    }

    @media (min-width: 3840px) {
        .community__content {
            flex:0 0 1696px
        }
    }

    .community__text {
        margin-bottom: 9%
    }

    @media (max-width: 767.99px) {
        .community__text {
            margin-bottom:5%
        }

        .community__button {
            margin: 0 auto
        }
    }

    .authorization {
        background-size: cover;
        display: flex;
        height: 100%;
        justify-content: center;
        overflow: hidden;
        width: 100%
    }

    .authorization__container {
        grid-gap: 10vw;
        display: flex
    }

    .authorization__container--left {
        align-items: flex-end;
        display: flex;
        flex: 1 1;
        justify-content: center;
        transform: translateY(10vw)
    }

    .authorization__container--left img {
        width: 60vh
    }

    .authorization__container--right {
        align-items: center;
        display: flex;
        flex: 2 1;
        justify-content: center
    }

    .authorization__container--right__block {
        background: rgba(20,24,27,.769);
        border: 1px solid #ff8100;
        border-radius: 10px;
        padding: 1.8vw 2vw 2vw;
        position: relative
    }

    .authorization__container--right__block--logo {
        left: calc(50% - 7.5vw);
        position: absolute;
        top: -2vw
    }

    .authorization__container--right__block--logo img {
        width: 15vw
    }

    .authorization__container--right__block--soc {
        grid-gap: 12px;
        display: flex;
        justify-content: flex-end
    }

    .authorization__container--right__block--soc--img {
        cursor: no-drop
    }

    .authorization__container--right__block--soc--img img {
        width: 40px
    }

    .authorization__container--right__block--field {
        display: flex;
        flex-direction: column
    }

    .authorization__container--right__block--field label {
        grid-gap: 10px;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-size: 1vw
    }

    .authorization__container--right__block--field input {
        background: #fff;
        border: 0 solid;
        border-radius: 6px;
        color: #000;
        font-size: 1.2vw;
        outline: none;
        padding: 10px 20px
    }

    .authorization__container--right__block--field .nope {
        animation: nope .3s linear
    }

    @keyframes nope {
        0% {
            scale: 1
        }

        30% {
            scale: 1.1
        }

        60% {
            scale: 1
        }

        90% {
            scale: 1.1
        }

        to {
            scale: 1
        }
    }

    .authorization__container--right__block--field--forgot {
        color: #957748;
        cursor: pointer;
        text-decoration: underline
    }

    .authorization__container--right__block .pass {
        margin-top: 10px
    }

    .authorization__container--right__block--play {
        background: #6d0d00;
        border: 1px solid #a20b0c;
        border-radius: .2vw;
        color: #ecd5b7;
        cursor: pointer;
        font-size: 2vw;
        margin-top: 1.5vw;
        padding: .8vw 1.5vw;
        text-align: center;
        text-transform: uppercase;
        width: 16vw
    }

    .authorization__container--right__block--play:hover {
        background: #711509
    }
}

.game {
    background: #292929;
    display: flex;
    height: auto;
    justify-content: center;
    min-width: 1366px;
    width: 100%
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game {
        min-width:auto
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game {
        height:auto
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game {
        height:auto
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game {
        height:auto
    }
}

.game--container {
    display: flex;
    min-height: 768px;
    min-width: 1366px;
    width: 100%
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .game--container {
        min-height:768px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container {
        max-width:3840px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container {
        min-height:768px;
        min-width: 1366px
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container {
        min-height:768px;
        min-width: 1366px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container {
        min-height:670px
    }
}

.game--container__left {
    background: url(/static/media/newBgCharacter.15bd62fdb26b92b6add0.jpg) no-repeat 50%;
    background-color: #292929;
    background-position: -17vw -9vw;
    background-size: cover;
    background-size: 65vw
}

.game--container__left,.game--container__left--invis {
    display: flex;
    max-width: 30%;
    position: relative;
    width: 100%;
    z-index: 11
}

.game--container__left--invis {
    background: url(/static/media/invisBgCharacter.815e5bda8dad647dc1d9.png) no-repeat 50%;
    background-color: #292929;
    background-size: cover;
    height: 100vh
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__left--invis {
        max-width:26%
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__left--invis {
        background-size:49vw;
        max-width: 29%
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--invis {
        height:auto
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--invis {
        height:auto
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--invis {
        height:100vh
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--invis {
        background-position:top;
        background-size: 2100px;
        height: 100vh
    }
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .game--container__left {
        background-position:-232px -123px;
        background-size: 888px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__left {
        max-width:26%
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__left {
        background-position:-17vw -10vw;
        background-size: 65vw;
        max-width: 29%
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left {
        height:auto
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left {
        height:auto
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left {
        height:100vh
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left {
        background-position:top;
        background-size: 2100px;
        height: 100vh
    }
}

.game--container__left--infoid {
    background: rgba(0,0,0,.102);
    bottom: 0;
    color: #ffffff7d;
    font-size: 8px;
    left: 0;
    line-height: 2;
    padding: 5px 10px;
    position: absolute;
    -webkit-user-select: text;
    user-select: text;
    width: auto;
    z-index: 5
}

.game--container__left--chain {
    background: url(data:image/png;base64,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);
    background-size: contain;
    height: 100%;
    opacity: .6;
    position: absolute;
    right: 0;
    width: .66vw
}

.game--container__left--block {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 2vw 2vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block {
        gap:30px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__left--block {
        padding:.5vw 2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__left--block {
        padding:.5vw 2vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block {
        overflow-y:hidden
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block {
        overflow-y:hidden
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block {
        overflow-y:hidden
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block {
        padding:28px
    }
}

.game--container__left--block__head {
    grid-gap: .5vw;
    display: flex;
    margin-bottom: 8vh;
    padding: 0 20px;
    position: relative
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__head {
        margin-bottom:20px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head {
        grid-gap:20px;
        margin-bottom: 140px
    }
}

.game--container__left--block__head--flag {
    height: 100px;
    left: -35px;
    position: absolute;
    top: 0;
    width: calc(100% + 80px);
    z-index: 1
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--flag {
        height:8vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--flag {
        height:8vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--flag {
        height:8vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--flag {
        height:8vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--flag {
        height:320px
    }
}

.game--container__left--block__head--level {
    align-items: center;
    background: url(/static/media/levelBg.45710cf683cd4636e7e9.png) no-repeat;
    background-size: contain;
    display: flex;
    height: 5.5vw;
    justify-content: center;
    min-height: 74px;
    min-width: 68px;
    position: relative;
    width: 5vw;
    z-index: 2
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--level {
        height:210px;
        width: 200px
    }
}

.game--container__left--block__head--level--num {
    -webkit-text-fill-color: hsla(35,61%,72%,.451);
    background: -webkit-linear-gradient(#fff,#ff9500);
    -webkit-background-clip: text;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 12px;
    text-shadow: 0 4px 3px rgba(0,0,0,.431)
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--level--num {
        font-size:22px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--level--num {
        font-size:1.4vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--level--num {
        font-size:1.4vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--level--num {
        font-size:1.4vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--level--num {
        font-size:50px
    }
}

.game--container__left--block__head--info {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    z-index: 2
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info {
        gap:10px
    }
}

.game--container__left--block__head--info--name,.game--container__left--block__head--info--name--anto {
    color: #fff;
    font-family: RunicFont,serif;
    font-size: 15px;
    padding-top: .6vw
}

.game--container__left--block__head--info--name--anto {
    left: 5vw;
    position: relative
}

.game--container__left--block__head--info--name--anto--boss {
    color: #319fb8;
    font-family: RunicFont,serif;
    font-size: 18px;
    left: 5vw;
    padding-top: 1.2vw;
    position: relative
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--name--anto--boss {
        font-size:20px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--name--anto--boss {
        font-size:20px
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--name--anto--boss {
        font-size:30px;
        padding-bottom: 0
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--name--anto--boss {
        font-size:1.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--name--anto--boss {
        font-size:65px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--name--anto {
        font-size:20px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--name--anto {
        font-size:20px
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--name--anto {
        font-size:30px;
        padding-bottom: 0
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--name--anto {
        font-size:1.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--name--anto {
        font-size:65px
    }
}

.game--container__left--block__head--info--name--boss {
    color: #319fb8;
    font-family: RunicFont,serif;
    font-size: 18px;
    left: 5vw;
    padding-top: 1.2vw;
    position: relative
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--name--boss {
        font-size:20px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--name--boss {
        font-size:20px
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--name--boss {
        font-size:30px;
        padding-bottom: 0
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--name--boss {
        font-size:1.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--name--boss {
        font-size:65px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--name {
        font-size:20px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--name {
        font-size:20px
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--name {
        font-size:30px;
        padding-bottom: 0
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--name {
        font-size:1.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--name {
        font-size:65px
    }
}

.game--container__left--block__head--info--stat {
    display: flex;
    flex-direction: column;
    min-width: 186px;
    position: relative;
    width: 14vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--stat {
        width:600px
    }
}

.game--container__left--block__head--info--stat--bar-bg {
    background: #5a0912;
    border: 1px solid #b13604;
    border-radius: 6px;
    height: 14px;
    width: 100%
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--stat--bar-bg {
        height:1.2vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--stat--bar-bg {
        height:1.2vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--stat--bar-bg {
        height:1.2vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--stat--bar-bg {
        height:1.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--stat--bar-bg {
        height:44px
    }
}

.game--container__left--block__head--info--stat--bar-bg--active {
    background: #8e0406;
    border: 1px solid #c95903;
    border-radius: 6px;
    height: 14px;
    max-width: 100%;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 0;
    z-index: 1
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--stat--bar-bg--active {
        height:1.2vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--stat--bar-bg--active {
        height:1.2vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--stat--bar-bg--active {
        height:1.2vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active {
        height:1.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active {
        height:44px
    }
}

.game--container__left--block__head--info--stat--bar-bg--active--level {
    color: #e7d5ac;
    font-size: 10px;
    left: 6px;
    position: absolute;
    top: 2px;
    z-index: 2
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__head--info--stat--bar-bg--active--level {
        font-size:12px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--stat--bar-bg--active--level {
        font-size:.8vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--stat--bar-bg--active--level {
        font-size:.8vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active--level {
        font-size:.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active--level {
        font-size:34px
    }
}

.game--container__left--block__head--info--stat--bar-bg--active--exp {
    color: #e7d5ac;
    font-size: 10px;
    left: calc(50% - 3.5vw);
    max-width: 7vw;
    position: absolute;
    text-align: center;
    top: 2px;
    white-space: nowrap;
    width: 100%;
    z-index: 2
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .game--container__left--block__head--info--stat--bar-bg--active--exp {
        font-size:12px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .game--container__left--block__head--info--stat--bar-bg--active--exp {
        font-size:.8vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__left--block__head--info--stat--bar-bg--active--exp {
        font-size:.8vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active--exp {
        font-size:.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head--info--stat--bar-bg--active--exp {
        font-size:34px
    }
}

.game--container__left--block__head__inventory {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: .2vw;
    cursor: pointer;
    display: flex;
    height: 2.2vw;
    justify-content: center;
    min-height: 29px;
    min-width: 29px;
    position: absolute;
    right: -1vw;
    top: 2vh;
    transition: transform .2s ease-in-out;
    width: 2.2vw;
    z-index: 11
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__head__inventory {
        right:-2vw
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head__inventory {
        border-width:10px;
        font-size: 80px;
        height: 90px;
        right: -40px;
        width: 90px
    }
}

.game--container__left--block__head__inventory img {
    height: 2.1vw;
    min-height: 28px;
    min-width: 28px;
    width: 2.1vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__head__inventory img {
        height:70px;
        width: 70px
    }
}

.game--container__left--block__head__inventory--open {
    display: none
}

.game--container__left--block__head__iconMap {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: .2vw;
    cursor: pointer;
    display: flex;
    height: 2.2vw;
    justify-content: center;
    position: absolute;
    right: -3vw;
    top: 8vh;
    width: 2.2vw;
    z-index: 11
}

.game--container__left--block__head__iconMap img {
    height: 2.1vw;
    width: 2.1vw
}

.game--container__left--block__head__dung {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: .2vw;
    cursor: pointer;
    display: flex;
    height: 2.2vw;
    justify-content: center;
    position: absolute;
    right: -3vw;
    top: 22vh;
    width: 2.2vw;
    z-index: 11
}

.game--container__left--block__head__dung img {
    height: 2.1vw;
    width: 2.1vw
}

.game--container__left--block__characteristics {
    display: flex;
    flex-direction: column;
    margin: 4vh 0 1vh
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__characteristics {
        margin:120px 0 60px
    }
}

.game--container__left--block__characteristics--mini {
    display: flex;
    justify-content: center
}

.game--container__left--block__characteristics--mini--box {
    grid-gap: 20px;
    display: flex
}

.game--container__left--block__characteristics--mini--box--item {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: .7vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__characteristics--mini--box--item {
        font-size:11px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__characteristics--mini--box--item {
        font-size:24px
    }
}

.game--container__left--block__characteristics--mini--box--item img {
    margin-right: 4px;
    min-width: 13px;
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__characteristics--mini--box--item img {
        width:30px
    }
}

.game--container__left--block__characteristics--mini-slots {
    display: flex;
    flex-wrap: wrap;
    gap: .5vw;
    justify-content: center;
    margin-top: 1vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__characteristics--mini-slots {
        gap:6px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__characteristics--mini-slots {
        gap:30px;
        margin-top: 50px
    }
}

.game--container__left--block__characteristics--mini-slots--item {
    align-items: center;
    background: rgba(0,0,0,.502);
    border: 2px solid #ffffff4a;
    border-radius: .5vw;
    display: flex;
    height: 1.4vw;
    justify-content: center;
    min-height: 23px;
    min-width: 23px;
    width: 1.4vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__characteristics--mini-slots--item {
        border-radius:16px;
        height: 55px;
        width: 55px
    }
}

.game--container__left--block__characteristics--mini-slots--item>div {
    align-items: center;
    display: flex;
    justify-content: center
}

.game--container__left--block__characteristics--mini-slots--item img {
    width: 1.4vw
}

.game--container__left--block__characteristics--mini-slots--item__closed img {
    width: 1.2vw
}

.game--container__left--block__info {
    display: flex;
    margin-left: 4%
}

.game--container__left--block__info--box {
    grid-gap: 1vh;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__left--block__info--box {
        grid-gap:.5vh
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__left--block__info--box {
        grid-gap:.5vh
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box {
        grid-gap:24px
    }
}

.game--container__left--block__info--box__tooltip {
    display: flex;
    flex-direction: column;
    gap: .6vw;
    max-width: 420px
}

.game--container__left--block__info--box__tooltip h2 {
    color: #d3d3d3;
    font-weight: 400
}

.game--container__left--block__info--box__tooltip h5 {
    color: #b4b4b4;
    font-weight: 400
}

.game--container__left--block__info--box__tooltip--list {
    color: #b4b4b4;
    display: flex;
    flex-direction: column;
    gap: .2vw
}

.game--container__left--block__info--box__tooltip--list--item {
    align-items: center;
    display: flex;
    font-size: .8vw;
    gap: .2vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box__tooltip--list--item {
        font-size:12px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__left--block__info--box__tooltip--list--item {
        font-size:.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__left--block__info--box__tooltip--list--item {
        font-size:.6vw
    }
}

.game--container__left--block__info--box__tooltip--list--item--img {
    align-items: center;
    border: 1px solid hsla(0,0%,100%,.129);
    border-radius: .3vw;
    display: flex;
    height: 1.5vw;
    justify-content: center;
    width: 1.5vw
}

.game--container__left--block__info--box__tooltip--list--item--img img {
    max-height: 1.2vw;
    max-width: 1.2vw
}

.game--container__left--block__info--box__block {
    grid-gap: 1vh;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.game--container__left--block__info--box__block2 {
    grid-gap: 1vh;
    align-items: flex-end;
    display: flex;
    flex: 1 1;
    flex-direction: row;
    padding-bottom: 2px
}

.game--container__left--block__info--box--item {
    grid-gap: 10px;
    align-items: flex-start;
    display: flex
}

.game--container__left--block__info--box--item--name {
    color: #b4b4b4;
    font-size: .8vw;
    min-width: 70px;
    width: 4.8vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box--item--name {
        font-size:12px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--name {
        font-size:30px;
        width: 200px
    }
}

.game--container__left--block__info--box--item--name-mini {
    color: #b4b4b4;
    font-size: .8vw;
    min-width: 70px;
    width: 4.2vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box--item--name-mini {
        font-size:12px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--name-mini {
        font-size:30px;
        width: 200px
    }
}

.game--container__left--block__info--box--item--name-miniT {
    color: #b4b4b4;
    font-size: .8vw;
    min-width: 6.2vw;
    width: 6.2vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--name-miniT {
        font-size:30px;
        width: 200px
    }
}

.game--container__left--block__info--box--item .auto {
    width: auto
}

.game--container__left--block__info--box--item--boost {
    align-items: center;
    background: #2d763c;
    border-radius: .3vw;
    color: #56ff52;
    cursor: pointer;
    display: flex;
    font-size: .8vw;
    font-weight: 600;
    height: 1vw;
    justify-content: center;
    padding-bottom: .1vw;
    width: 1.1vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--boost {
        border-radius:14px;
        font-size: 30px;
        height: 48px;
        padding-bottom: 5px;
        width: 50px
    }
}

.game--container__left--block__info--box--item--val {
    color: #fff;
    font-size: .8vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box--item--val {
        font-size:12px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--val {
        font-size:30px
    }
}

.game--container__left--block__info--box--item--plus {
    display: flex;
    font-size: .8vw
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--plus {
        font-size:30px
    }
}

.game--container__left--block__info--box--item--plus {
    color: #75d580
}

.game--container__left--block__info--box--item--plus .plus--red,.game--container__left--block__info--box--item--plus.plus--red {
    color: #ff5b5b
}

.game--container__left--block__info--box--item--plus .plus--green,.game--container__left--block__info--box--item--plus.plus--green {
    color: #75d580
}

.game--container__left--block__info--box--item--stat {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: .8vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box--item--stat {
        font-size:12px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--stat {
        font-size:30px
    }
}

.game--container__left--block__info--box--item--stat--spec {
    color: #ce8d45
}

.game--container__left--block__info--box--item--stat img {
    margin-right: .3vw;
    min-width: 12px;
    width: 1vw
}

@media only screen and (max-width: 1365px) {
    .game--container__left--block__info--box--item--stat img {
        margin-right:3px
    }
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__info--box--item--stat img {
        margin-right:14px;
        width: 40px
    }
}

.game--container__left--block__notify {
    color: #fff;
    font-size: .8vw;
    margin-top: 1.5vh
}

@media only screen and (min-width: 3840px) {
    .game--container__left--block__notify {
        font-size:34px;
        margin-top: 44px
    }
}

.game--container__left--block__notify b {
    color: #56ff52
}

.game--container__right {
    flex: 5 1;
    position: relative
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .game--container__right {
        overflow-x:hidden;
        overflow-y: auto
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .game--container__right {
        overflow-x:hidden;
        overflow-y: auto
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .game--container__right {
        height:auto
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .game--container__right {
        height:auto
    }
}

.load {
    min-width: 1366px
}

.lds-ellipsis {
    height: 80px;
    width: 80px
}

.lds-ellipsis div {
    height: 13px;
    width: 13px
}

.lds-ellipsis div:first-child,.lds-ellipsis div:nth-child(2) {
    left: 8px
}

.lds-ellipsis div:nth-child(3) {
    left: 32px
}

.lds-ellipsis div:nth-child(4) {
    left: 56px
}

.animInv {
    animation: inventoryScale .4s ease-in-out
}

@keyframes inventoryScale {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.15)
    }

    to {
        transform: scale(1)
    }
}

.character {
    grid-gap: 10px;
    align-items: flex-end;
    display: flex;
    position: relative
}

.character--pre {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: -22%;
    position: absolute
}

.character--tooltip {
    display: flex
}

.character--tooltip__cont {
    border-radius: 1vw;
    mask-composite: intersect;
    -webkit-mask-composite: destination-in;
    mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    -webkit-mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    padding: 1vw;
    position: relative;
    width: 22vw
}

.character--tooltip__cont:before {
    background: linear-gradient(180deg,#0009,#0000),url(/static/media/newBgCharacter.15bd62fdb26b92b6add0.jpg) no-repeat 50%;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1
}

.character--tooltip__cont--invis {
    border-radius: 1vw;
    mask-composite: intersect;
    -webkit-mask-composite: destination-in;
    mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    -webkit-mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    padding: 1vw;
    position: relative;
    width: 22vw
}

.character--tooltip__cont--invis:before {
    background: linear-gradient(180deg,#0000,#0000),url(/static/media/invisBgCharacter.815e5bda8dad647dc1d9.png) no-repeat 50%;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1
}

.character--tooltip .game--container__left--block__head {
    margin: 0;
    padding: 0 0 1vw
}

.character--tooltip .character {
    margin-bottom: 2vw;
    min-height: auto
}

.character--tooltip .character--bottom-bg {
    bottom: 0;
    left: 0
}

.character--tooltip .character--center {
    bottom: -1.1vw;
    height: 42vh;
    max-width: 340px;
    min-width: 170px
}

@media(min-width: 1366px)and (min-height:768px) {
    .character--tooltip .character--center {
        height:34vh
    }
}

@media(standardscreen) {
    .character--tooltip .character--center {
        height: 42vh
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .character--tooltip .character--center {
        height:42vh;
        max-width: 23vw;
        width: 23vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--tooltip .character--center {
        max-width:23vw;
        width: 23vw
    }
}

@media only screen and (min-width: 3840px) {
    .character--tooltip .character--center {
        max-width:800px;
        width: 100%
    }
}

.character--tooltip .character--center--isMob img {
    width: 16vw
}

.character--tooltip .character--center img {
    width: 20vw
}

.character--bottom-bg {
    bottom: -40px;
    opacity: .3;
    position: absolute;
    width: 100%;
    z-index: 1
}

.character--inventory {
    grid-gap: .2vw;
    align-items: center;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .character--inventory {
        grid-gap:16px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .character--inventory {
        grid-gap:.8vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--inventory {
        grid-gap:.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .character--inventory {
        grid-gap:35px
    }
}

.character--inventory:first-child {
    z-index: 12
}

.character--inventory:nth-child(3) {
    z-index: 11
}

.character--inventory .undefined {
    position: relative
}

@media only screen and (min-height: 665px)and (max-height:1000px)and (min-width:1440px)and (max-width:1600px) {
    .character--inventory .undefined {
        display:flex;
        justify-content: center
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .character--inventory .undefined {
        display:flex;
        justify-content: center
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .character--inventory .undefined {
        display:flex;
        justify-content: center
    }
}

.character--inventory--full {
    display: none;
    height: 6.8vw;
    left: -1.3vw;
    position: absolute;
    top: -1.6vw;
    width: 6.8vw;
    z-index: -1
}

@media only screen and (min-height: 665px)and (max-height:1000px)and (min-width:1440px)and (max-width:1600px) {
    .character--inventory--full {
        height:5.4vw;
        left: -1.1vw;
        top: -1.4vw;
        width: 5.4vw
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .character--inventory--full {
        height:5.4vw;
        left: -1.1vw;
        top: -1.4vw;
        width: 5.4vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .character--inventory--full {
        height:5.4vw;
        left: -1.1vw;
        top: -1.4vw;
        width: 5.4vw
    }
}

@media only screen and (min-width: 3840px) {
    .character--inventory--full {
        height:260px;
        left: -50px;
        top: -60px;
        width: 260px
    }
}

.character--inventory--full--yes {
    display: block
}

.character--inventory--item {
    align-items: center;
    background: #000;
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1.5vh;
    border-style: inset;
    border-width: .3vw;
    display: flex;
    height: 2vw;
    justify-content: center;
    max-height: 60px;
    max-width: 60px;
    min-height: 35px;
    min-width: 35px;
    position: relative;
    width: 2vw
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .character--inventory--item {
        height:3.6vw;
        max-height: 4vw;
        max-width: 4vw;
        width: 3.6vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .character--inventory--item {
        height:3.6vw;
        max-height: 4vw;
        max-width: 4vw;
        width: 3.6vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--inventory--item {
        height:3.6vw;
        max-height: 4vw;
        max-width: 4vw;
        width: 3.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .character--inventory--item {
        border-radius:20px;
        border-width: 10px;
        height: 140px;
        max-height: 140px;
        max-width: 140px;
        width: 140px
    }
}

@media only screen and (min-height: 665px)and (max-height:1000px)and (min-width:1440px)and (max-width:1600px) {
    .character--inventory--item {
        height:2.6vw;
        max-height: 3vw;
        max-width: 3vw;
        width: 2.6vw
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .character--inventory--item {
        height:2.6vw;
        max-height: 3vw;
        max-width: 3vw;
        width: 2.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .character--inventory--item {
        height:2.6vw;
        max-height: 3vw;
        max-width: 3vw;
        width: 2.6vw
    }
}

.character--inventory--item--level {
    bottom: .5vh;
    color: #fff;
    right: .4vw
}

.character--inventory--item--level,.character--inventory--item--level--info {
    font-size: .7vw;
    position: absolute;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.character--inventory--item--level--info {
    bottom: .3vh;
    color: #f3ce8f;
    right: .3vw;
    text-align: right;
    white-space: nowrap
}

.character--inventory--item img {
    filter: none;
    height: 2.6vw;
    min-height: 35px;
    min-width: 35px;
    object-fit: contain;
    pointer-events: none;
    width: 2.6vw
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .character--inventory--item img {
        height:100%;
        width: 100%
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .character--inventory--item img {
        height:100%;
        width: 100%
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--inventory--item img {
        height:100%;
        width: 100%
    }
}

@media only screen and (min-width: 3840px) {
    .character--inventory--item img {
        height:100%;
        width: 100%
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .character--inventory--item img {
        height:2.6vw;
        max-height: 3vw;
        max-width: 3vw;
        width: 2.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .character--inventory--item img {
        height:2.6vw;
        max-height: 3vw;
        max-width: 3vw;
        width: 2.6vw
    }
}

.character--center {
    align-items: flex-end;
    display: flex;
    flex: 3 1;
    justify-content: center;
    pointer-events: none;
    position: relative;
    z-index: 2
}

.character--center>div {
    bottom: -10px;
    max-width: 350px;
    min-width: 280px;
    position: absolute
}

@media only screen and (min-width: 1437px)and (max-width:1497px)and (min-height:932px)and (max-height:992px) {
    .character--center>div {
        bottom:38px
    }
}

@media only screen and (max-width: 1365px)and (max-height:767px) {
    .character--center>div {
        min-width:auto;
        position: static
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .character--center>div {
        max-width:23vw;
        width: 21vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .character--center>div {
        max-width:23vw;
        width: 21vw
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--center>div {
        max-width:23vw;
        width: 21vw
    }
}

@media only screen and (min-width: 3840px) {
    .character--center>div {
        max-width:800px;
        width: 800px
    }
}

@media only screen and (min-height: 665px)and (max-height:1000px)and (min-width:1440px)and (max-width:1600px) {
    .character--center>div {
        max-width:17vw;
        width: 17vw
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .character--center>div {
        max-width:15vw;
        min-width: auto;
        width: 15vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .character--center>div {
        gap:.6vw;
        max-width: 17vw;
        min-width: auto;
        width: 17vw
    }
}

.character--center img {
    height: auto;
    margin-bottom: -13.8vh;
    margin-left: -3.5vw;
    width: 150%
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .character--center img {
        width:160%
    }
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .character--center img,.character--center img.character--center--mob {
        height:auto;
        margin-bottom: -83px;
        margin-left: -61px;
        width: 190%
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .character--center img.character--center--mob {
        height:auto;
        margin-bottom: -11.5vh;
        margin-left: -6.5vw;
        width: 167%
    }
}

.character__bufs {
    grid-gap: 6px;
    display: flex;
    flex-direction: column;
    left: 95%;
    position: absolute;
    top: 10vw;
    width: 2.5vw;
    z-index: 11
}

@media only screen and (min-width: 3840px) {
    .character__bufs {
        left:1120px;
        top: 378px;
        width: 180px
    }
}

.character__bufs--item {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative
}

.character__bufs--item,.character__bufs--item img {
    border-radius: 8px;
    height: 2.2vw;
    width: 2.2vw
}

.character__bufs--item--ant {
    background-color: darkred;
    left: -5vw;
    top: -40vh;
    z-index: 10
}

.character__bufs--item--many {
    border-radius: 100px;
    color: #fff;
    font-size: 10px;
    height: 14px;
    left: -6px;
    padding-bottom: 1px;
    top: -6px;
    width: 15px
}

.character__bufs--item--many,.character__bufs--item--stack {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute
}

.character__bufs--item--stack {
    background: #2c2b2b;
    border: 1px solid #000;
    border-radius: 50%;
    color: #f3ce8f;
    font-size: 1vw;
    height: 1.3vw;
    line-height: 1;
    right: -30%;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;
    top: -30%;
    width: 1.3vw
}

.character__bufs .positive {
    border: 1px solid #01630c;
    box-shadow: inset 0 0 30px 10px #00a613
}

.character__bufs .positive .character__bufs--item--many {
    background: #005309;
    border: 1px solid #00a613
}

.character__bufs .negative {
    border: 1px solid #444;
    box-shadow: inset 0 0 30px 10px #303030
}

.character__bufs .negative .character__bufs--item--many {
    background: #790000;
    border: 1px solid #d60701
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .character {
        max-height:282px
    }
}

.character-info-zodiak {
    display: flex;
    flex-direction: column;
    font-size: .6vw;
    gap: 1vw;
    padding: 2vw 0;
    width: 22vw
}

.character-info-zodiak--profile {
    grid-gap: .5vw;
    display: grid;
    gap: .5vw;
    left: -3.5vw;
    position: relative
}

.character-info-zodiak--one {
    display: flex;
    height: 12vw;
    margin-bottom: 1.2vw;
    pointer-events: none;
    position: relative
}

.character-info-zodiak--one--circles {
    position: relative
}

.character-info-zodiak--one--circles img {
    height: 13vw;
    left: calc(100% + 5vw);
    position: absolute
}

.character-info-zodiak--one--circles img:first-child {
    animation: moveCir4 4s linear infinite
}

.character-info-zodiak--one--circles img:nth-child(2),.character-info-zodiak--one--circles img:nth-child(3) {
    animation: moveCir3 10s linear infinite
}

.character-info-zodiak--one--circles img:nth-child(4) {
    animation: moveCir3 20s linear infinite
}

.character-info-zodiak--one--circles img:nth-child(5) {
    animation: moveCir 15s linear infinite
}

.character-info-zodiak--one--circles img:nth-child(6) {
    animation: moveCir2 10s linear infinite
}

.character-info-zodiak--one--pento {
    left: calc(50% - 3.3vw);
    position: absolute;
    top: 17%
}

.character-info-zodiak--one--pento img {
    width: 8vw
}

.character-info-zodiak--one--pento--circl {
    animation: moveCir5 10s linear infinite;
    left: calc(52% - 3.3vw);
    position: absolute;
    top: 23%
}

.character-info-zodiak--one--pento--circl img {
    width: 7.3vw
}

.character-info-zodiak--one--zodiak {
    left: calc(50% - 1.3vw);
    position: absolute;
    top: 40%
}

.character-info-zodiak--one--zodiak img {
    width: 4vw
}

.character-info-zodiak--one--stars {
    position: absolute
}

.character-info-zodiak--one--stars img {
    width: 2vw
}

.character-info-zodiak--one--house {
    left: calc(39% - 1.3vw);
    position: absolute;
    top: 17%
}

.character-info-zodiak--one--house img {
    width: 8.5vw
}

.character-info-zodiak--two {
    display: flex
}

.character-info-zodiak--two--left {
    display: flex;
    height: 3vw;
    justify-content: center;
    width: 4vw
}

.character-info-zodiak--two--left--profile {
    display: flex;
    height: 2vw;
    justify-content: center;
    width: 4vw
}

.character-info-zodiak--two--left img {
    height: 75%;
    width: auto
}

.character-info-zodiak--two--right {
    display: flex;
    flex-direction: column;
    gap: .1vw;
    justify-content: center;
    width: 16vw
}

.character-info-zodiak--two--right--one {
    color: #b4b4b4
}

.character-info-zodiak--two--right--two {
    color: #888
}

.character-info-zodiak--two--right--two--profile {
    color: #888;
    width: 24vw
}

.character-info-zodiak--two--right--three {
    color: #ce8d45
}

.mob_level_tlp {
    left: 3.2vw
}

.mob_level_tlp>img {
    width: 2vw
}

.mob_level_tlp>span {
    font-size: 1.2vw;
    left: 0;
    text-align: center;
    top: 17%;
    width: 2vw
}

.dmg__tlp--title {
    gap: .2vw
}

.dmg__tlp--desc {
    gap: .2vw;
    margin-left: 1vw
}

.blueM {
    filter: hue-rotate(190deg) saturate(.5) brightness(2.5)
}

.active-bar {
    grid-gap: 4px;
    display: flex;
    flex-direction: column;
    max-width: 80%
}

.active-bar--one {
    background: #4c4b4b;
    border-radius: 3px;
    height: .4vw;
    position: relative;
    width: 100%
}

.active-bar--one--active {
    border-radius: 3px;
    height: .4vw;
    position: absolute;
    transition: .3s;
    width: 20%
}

.active-bar--bg {
    background: #4c4b4b;
    border: 1px solid gray;
    border-radius: 3px;
    height: 1vw;
    position: relative;
    width: 100%
}

.active-bar--bg--active {
    border-radius: 3px;
    height: 1vw;
    position: absolute;
    transition: .3s;
    width: 20%
}

.active-bar--line {
    background: #4c4b4b;
    border: 1px solid gray;
    border-radius: 2px;
    height: .3vw;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .active-bar--line {
        height:20px
    }
}

.active-bar--line--active {
    border: 1px solid gray;
    border-radius: 2px;
    height: .3vw;
    position: absolute;
    width: 20%
}

.active-bar--line--numMind {
    color: #fff;
    font-size: 1vh;
    left: 0;
    position: relative;
    top: -.1vw;
    z-index: 10
}

@media only screen and (min-width: 3840px) {
    .active-bar--line--numMind {
        font-size:30px;
        top: -10px
    }
}

.active-bar--line--numArmor {
    display: none
}

.active-bar--line--numArmor,.active-bar--line--numArmorShow {
    color: #fff;
    font-size: 1vh;
    left: 0;
    position: relative;
    top: -.1vw;
    z-index: 10
}

.active-bar--numHp {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,#c3d5c1,#fff);
    color: #0000;
    font-size: 1.3vh;
    font-weight: 700;
    left: 0;
    margin-left: .3vw;
    position: absolute;
    top: .3vh;
    z-index: 10
}

@media only screen and (min-width: 3840px) {
    .active-bar--numHp {
        font-size:24px
    }
}

.preInventory {
    align-items: center;
    background: #00000094;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10
}

.inventory {
    height: 80vh;
    outline: none;
    width: 80%
}

.inventory__container {
    background: #181614;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: .66vw;
    display: flex;
    flex-direction: column;
    height: 80vh;
    position: relative
}

@media only screen and (min-width: 1437px)and (max-width:1497px)and (min-height:932px)and (max-height:992px) {
    .inventory__container {
        height:60vh
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .inventory__container {
        height:67vh
    }
}

@media only screen and (max-height: 720px) {
    .inventory__container {
        height:84vh
    }
}

.inventory__container--header {
    grid-gap: 15px;
    display: flex;
    padding: .8vw 2vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header {
        padding:30px 60px
    }
}

.inventory__container--header--oftt,.inventory__container--header--oftt--other {
    display: flex
}

.inventory__container--header--oftt--other img {
    width: 2.2vw
}

.inventory__container--header--item {
    grid-gap: .6vw;
    align-items: center;
    display: flex
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header--item {
        grid-gap:20px
    }
}

.inventory__container--header--item>img {
    height: 1.4vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header--item>img {
        height:50px
    }
}

.inventory__container--header--item--num {
    color: #fff;
    font-size: 1vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header--item--num {
        font-size:40px
    }
}

.inventory__container__hub {
    display: flex;
    flex-direction: column;
    height: 90%;
    padding: 0 4px 10px
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .inventory__container__hub {
        overflow:auto
    }
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .inventory__container__hub {
        height:90%;
        padding: 0 4px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .inventory__container__hub {
        height:90%;
        padding: 0 4px 4px
    }
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub {
        height:100%;
        padding: 0 4px 4px
    }
}

.inventory__container__hub--tabs {
    display: flex;
    padding: 0 1px;
    z-index: 2
}

.inventory__container__hub--tabs--item {
    background: #212020;
    border: 2px solid #434140;
    border-bottom: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 2px 0 0 #5b5d5f;
    color: #767676;
    cursor: pointer;
    font-size: 1vw;
    margin: 3px -1px;
    min-width: 70px;
    padding: .3vw .4vw;
    text-align: center;
    transform: translateY(3px);
    width: 7vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--tabs--item {
        font-size:40px;
        padding: 10px;
        width: 220px
    }
}

.inventory__container__hub--tabs--item--active {
    background: #272727;
    border: 2px solid #5b5d5f;
    border-bottom: none;
    box-shadow: 0 0 0 0 #5b5d5f;
    color: #fff;
    margin: 0 -1px 4px;
    transform: translateY(6px);
    z-index: 1
}

.inventory__container__hub--tabs--item:hover:not(.inventory__container__hub--tabs--item--active) {
    background: #2f2d2d;
    color: #abaaaa
}

.inventory__container__hub--body {
    background: #272727;
    border: 2px solid #5b5d5f;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    height: 100%;
    overflow: hidden;
    padding: 20px 2vw 15px
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body {
        overflow:auto
    }
}

.inventory__container__hub--body.profile__container {
    padding: 20px 4vw 15px
}

.inventory__container__hub--body--things {
    display: flex;
    height: 100%;
    overflow: auto
}

.inventory__container__hub--body--things::-webkit-scrollbar {
    height: 5px;
    width: 12px
}

.inventory__container__hub--body--things::-webkit-scrollbar-track {
    background: #000;
    height: 5px
}

.inventory__container__hub--body--things::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.inventory__container__hub--body--things::-webkit-scrollbar-thumb:hover {
    background: #555
}

.inventory__container__hub--body--things::-webkit-scrollbar-thumb:vertical {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.inventory__container__hub--body--things::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--things::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--things--filter {
    grid-gap: .8vw;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 0
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--things--filter {
        grid-gap:20px
    }
}

.inventory__container__hub--body--things--filter--nav {
    cursor: pointer;
    opacity: .7
}

.inventory__container__hub--body--things--filter--nav img {
    width: 2vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--things--filter--nav img {
        width:70px
    }
}

.inventory__container__hub--body--things--filter--nav--active {
    background: radial-gradient(circle,rgba(0,255,77,.141) -20%,#0b0b5c00 80%);
    filter: invert(2%) sepia(6%) saturate(17%) hue-rotate(184deg) brightness(130%);
    opacity: 1
}

.inventory__container__hub--body--things--grid {
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(72px,1fr));
    margin-right: 10px;
    width: 100%
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .inventory__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr))
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .inventory__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr))
    }
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(160px,1fr))
    }
}

.inventory__container__hub--body--things--grid--item {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: 2px solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 100%;
    justify-content: center;
    object-fit: cover;
    position: relative;
    width: 100%
}

.inventory__container__hub--body--things--grid--item:hover {
    border: 2px solid #626464
}

.inventory__container__hub--body--things--grid--item--in {
    opacity: .4
}

.inventory__container__hub--body--things--grid--item img {
    max-height: 100%;
    max-width: 100%
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .inventory__container__hub--body--things--grid--item img {
        max-height:100%;
        max-width: 100%
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .inventory__container__hub--body--things--grid--item img {
        max-height:100%;
        max-width: 100%
    }
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--things--grid--item img {
        max-height:100%;
        max-width: 100%
    }
}

.inventory__container__hub--body--things--grid--item--menu {
    align-items: center;
    background: #1e1e1e;
    border: 2px solid #464646;
    border-radius: 6px;
    color: #747171;
    display: flex;
    flex-direction: column;
    opacity: 1;
    padding: 10px 2px;
    pointer-events: auto;
    position: absolute;
    top: 80%;
    visibility: visible;
    z-index: 3
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--things--grid--item--menu {
        font-size:40px;
        padding: 20px 10px
    }
}

.inventory__container__hub--body--things--grid--item--menu--use {
    cursor: pointer;
    padding: 10px 20px
}

.inventory__container__hub--body--things--grid--item--menu--use:hover {
    background: #262626;
    color: #fff
}

.inventory__container__hub--body--things--grid--item--menu--use--disabled {
    color: inherit;
    cursor: default
}

.inventory__container__hub--body--things--grid--item--menu--use--disabled:hover {
    background: inherit;
    color: inherit
}

.inventory__container__hub--body--things--grid--item--menu i {
    bottom: 100%;
    height: 12px;
    left: 50%;
    margin-left: -12px;
    overflow: hidden;
    position: absolute;
    width: 24px
}

.inventory__container__hub--body--things--grid--item--menu i:after {
    background-color: #1e1e1e;
    box-shadow: 0 0 0 2px #464646;
    content: "";
    height: 20px;
    left: 50%;
    position: absolute;
    top: -4px;
    transform: translate(-50%,50%) rotate(45deg);
    width: 20px;
    z-index: 0
}

.inventory__container__hub--body--things--grid--item--menu .off {
    color: #3d3c3c;
    pointer-events: none
}

.inventory__container__hub--body--things--grid--item--menu--flipped i {
    bottom: auto;
    top: 100%;
    transform: rotate(180deg)
}

.inventory__container__hub--body--things--grid--item:hover--tooltip {
    display: block
}

.inventory__container__hub--body--things--grid--item--tooltip {
    background-color: #eee;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000080;
    box-sizing: border-box;
    color: #444;
    display: none;
    font-size: 13px;
    font-weight: 400;
    left: 100%;
    min-width: 200px;
    padding: 10px 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99999999
}

.inventory__container__hub--body--things--grid--item--tooltip i {
    height: 24px;
    margin-top: -12px;
    overflow: hidden;
    position: absolute;
    right: 100%;
    top: 50%;
    width: 12px
}

.inventory__container__hub--body--things--grid--item--tooltip i:after {
    background-color: #eee;
    box-shadow: 0 1px 8px #00000080;
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(50%,-50%) rotate(-45deg);
    width: 12px
}

.inventory__container__hub--body--things--item {
    display: flex;
    flex-direction: column;
    max-width: 22vw;
    white-space: nowrap
}

.inventory__container__hub--body--things--item--book {
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--things--item--box {
    padding: .3vw 0
}

.inventory__container__hub--body--things--item--box:first-child {
    display: flex
}

.inventory__container__hub--body--things--item--box:nth-child(2) {
    grid-gap: 10px;
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--things--item--box--icon {
    align-items: center;
    background: #262626;
    border: 1px solid #434242;
    border-radius: 10px;
    display: flex;
    flex-shrink: 0;
    height: 6vw;
    justify-content: center;
    margin-right: 20px;
    overflow: hidden;
    width: 6vw
}

.inventory__container__hub--body--things--item--box--icon--level {
    bottom: -4.5vh;
    color: #f3ce8f;
    font-size: 14px;
    position: relative;
    right: .5vw;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.inventory__container__hub--body--things--item--box--icon--amount {
    align-items: center;
    background-color: green;
    border: 1px solid #000;
    border-radius: 6px;
    bottom: -1vh;
    color: #fff;
    display: flex;
    justify-content: center;
    position: absolute;
    right: -1vw;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--icon img {
    height: 6vw;
    max-height: 6vw;
    max-width: 6vw;
    width: 100%
}

.inventory__container__hub--body--things--item--box--head {
    grid-gap: .2vw;
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--things--item--box--head--title {
    color: #c6c6c6;
    font-size: 1vw
}

.inventory__container__hub--body--things--item--box--head--title--extension {
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--things--item--box--head--title--extension--description {
    color: #989898;
    font-size: .6vw;
    margin-top: 10px;
    max-width: 30vw;
    white-space: normal;
    word-break: break-word
}

.inventory__container__hub--body--things--item--box--head--other {
    color: #989898;
    display: flex;
    flex-direction: column;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--head--other--desc {
    text-wrap: wrap;
    color: #989898;
    font-size: .6vw
}

.inventory__container__hub--body--things--item--box--info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap
}

.inventory__container__hub--body--things--item--box--info--reqs {
    display: flex;
    flex-wrap: wrap
}

.inventory__container__hub--body--things--item--box--info--title {
    color: #e0dfdf;
    font-size: .9vw
}

.inventory__container__hub--body--things--item--box--info--other {
    align-items: center;
    color: #989898;
    display: flex;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--info--other div {
    margin-left: 2%
}

.inventory__container__hub--body--things--item--box--info--other--value {
    color: #e0dfdf
}

.inventory__container__hub--body--things--item--box--info--other img {
    margin-right: 5px;
    width: .8vw
}

.inventory__container__hub--body--things--item--box--info--other--name {
    margin: 0 0 0 5px
}

.inventory__container__hub--body--things--item--box--info--other--limit {
    align-items: center;
    color: #e06666;
    display: flex;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--info--other--limitAnim {
    align-items: center;
    animation: limitDurab 1s infinite;
    color: #e06666;
    display: flex;
    font-size: .7vw
}

@keyframes limitDurab {
    0% {
        color: #e0dfdf
    }

    20% {
        color: #e06666
    }

    40% {
        color: #e0dfdf
    }

    60% {
        color: #e06666
    }

    80% {
        color: #e0dfdf
    }

    to {
        color: #e06666
    }
}

.inventory__container__hub--body--things--item--box--info--other--below {
    align-items: center;
    color: #e0dfdf;
    display: flex;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--info--other--leftSlot {
    color: #6e6e6e;
    font-size: .7vw;
    text-decoration: line-through
}

.inventory__container__hub--body--things--item--box--buffs {
    grid-gap: 20px;
    display: flex;
    margin-top: 10px;
    white-space: break-spaces
}

.inventory__container__hub--body--things--item--box--buffs img {
    height: 3vw;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--buffs--vict {
    margin-top: 0
}

.inventory__container__hub--body--things--item--box--buffs--info {
    grid-gap: 5px;
    text-wrap: wrap;
    color: #7d7e7e;
    display: flex;
    flex-direction: column;
    font-size: .7vw;
    margin-top: 5px
}

.inventory__container__hub--body--things--item--box--buffs--info--title {
    color: #e0dfdf;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--buffs--info--desc {
    color: #989898;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--buffs--rune {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: .1vw solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 2vw;
    justify-content: center;
    object-fit: cover;
    width: 2vw
}

.inventory__container__hub--body--things--item--box--buffs--rune img {
    width: 1.8vw
}

.inventory__container__hub--body--things--item--box--runP {
    grid-gap: .8vw;
    display: flex;
    margin-bottom: .8vw;
    max-width: 70%;
    white-space: break-spaces
}

.inventory__container__hub--body--things--item--box--runP img {
    height: 3vw;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--runP--info {
    display: flex;
    flex-direction: column;
    justify-content: center
}

.inventory__container__hub--body--things--item--box--runP--info--title {
    color: #e0dfdf;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--runP--info--desc {
    color: #989898;
    font-size: .7vw
}

.inventory__container__hub--body--things--item--box--runP--rune,.inventory__container__hub--body--things--item--box--runP--rune--fullP {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    background-color: #3e3e3e;
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
    border: .1vw solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 3vw;
    justify-content: center;
    object-fit: cover;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--runP--rune--fullP img {
    height: 3vw;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--runP--rune--fullP:hover {
    box-shadow: inset 0 0 0 1px #ffffff82
}

.inventory__container__hub--body--things--item--box--runP--rune--fullP--chosenR {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    background-color: #3e3e3e;
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
    border: .1vw solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff82;
    display: flex;
    height: 3vw;
    justify-content: center;
    object-fit: cover;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--runP--rune--fullP--chosenR img {
    height: 3vw;
    width: 3vw
}

.inventory__container__hub--body--things--item--box--runP--rune img {
    width: 1.8vw
}

.inventory__container__hub--body--skills {
    grid-gap: 20px;
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--skills--abilities__title,.inventory__container__hub--body--skills--equipments__title {
    color: #b4b4b4;
    font-size: .8vw;
    margin-bottom: 10px;
    margin-left: 1.8vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities__title,.inventory__container__hub--body--skills--equipments__title {
        font-size:30px;
        margin-left: 70px
    }
}

.inventory__container__hub--body--skills--abilities--active,.inventory__container__hub--body--skills--abilities--combat,.inventory__container__hub--body--skills--equipments--active,.inventory__container__hub--body--skills--equipments--combat {
    grid-gap: 6px;
    display: grid;
    grid-auto-rows: 2.2vw;
    grid-template-columns: repeat(auto-fill,2.2vw);
    height: 2.2vw;
    margin-left: 1.8vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities--active,.inventory__container__hub--body--skills--abilities--combat,.inventory__container__hub--body--skills--equipments--active,.inventory__container__hub--body--skills--equipments--combat {
        grid-gap:20px;
        grid-template-columns: repeat(auto-fill,80px);
        height: 80px;
        margin-left: 70px
    }
}

.inventory__container__hub--body--skills--abilities--active--item,.inventory__container__hub--body--skills--abilities--combat--item,.inventory__container__hub--body--skills--equipments--active--item,.inventory__container__hub--body--skills--equipments--combat--item {
    align-items: center;
    aspect-ratio: 1/1;
    border: 2px solid #ffffff1c;
    border-radius: .4vw;
    display: flex;
    height: 100%;
    justify-content: center;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: 100%
}

.inventory__container__hub--body--skills--abilities--active--item:hover,.inventory__container__hub--body--skills--abilities--combat--item:hover,.inventory__container__hub--body--skills--equipments--active--item:hover,.inventory__container__hub--body--skills--equipments--combat--item:hover {
    border: 2px solid #626464
}

.inventory__container__hub--body--skills--abilities--active--item--in,.inventory__container__hub--body--skills--abilities--combat--item--in,.inventory__container__hub--body--skills--equipments--active--item--in,.inventory__container__hub--body--skills--equipments--combat--item--in {
    opacity: .4
}

.inventory__container__hub--body--skills--abilities--active--item__level,.inventory__container__hub--body--skills--abilities--combat--item__level,.inventory__container__hub--body--skills--equipments--active--item__level,.inventory__container__hub--body--skills--equipments--combat--item__level {
    bottom: 4px;
    color: #fff;
    font-size: 14px;
    position: absolute;
    right: 6px;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.inventory__container__hub--body--skills--abilities--active--item img,.inventory__container__hub--body--skills--abilities--combat--item img,.inventory__container__hub--body--skills--equipments--active--item img,.inventory__container__hub--body--skills--equipments--combat--item img {
    height: 1.9vw
}

.inventory__container__hub--body--skills--abilities--combat--item,.inventory__container__hub--body--skills--equipments--combat--item {
    align-items: center;
    display: flex;
    justify-content: center
}

.inventory__container__hub--body--skills--abilities--combat--item img,.inventory__container__hub--body--skills--equipments--combat--item img {
    height: auto;
    width: 100%
}

.inventory__container__hub--body--skills--abilities--combat--item__closed,.inventory__container__hub--body--skills--equipments--combat--item__closed {
    display: none
}

.inventory__container__hub--body--skills--abilities--combat--item__closed img,.inventory__container__hub--body--skills--equipments--combat--item__closed img {
    width: 15px
}

.inventory__container__hub--body--skills--abilities--combat--item__needless,.inventory__container__hub--body--skills--equipments--combat--item__needless {
    opacity: .4
}

.inventory__container__hub--body--skills--abilities--hub,.inventory__container__hub--body--skills--equipments--hub {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    margin-top: 20px
}

.inventory__container__hub--body--skills--abilities--hub--filter,.inventory__container__hub--body--skills--equipments--hub--filter {
    grid-gap: 3px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 .3vw 0 0
}

.inventory__container__hub--body--skills--abilities--hub--filter--nav,.inventory__container__hub--body--skills--equipments--hub--filter--nav {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 1.5vw;
    justify-content: center;
    opacity: .7;
    width: 1.5vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities--hub--filter--nav,.inventory__container__hub--body--skills--equipments--hub--filter--nav {
        height:70px;
        margin: 10px;
        width: 70px
    }
}

.inventory__container__hub--body--skills--abilities--hub--filter--nav--active,.inventory__container__hub--body--skills--equipments--hub--filter--nav--active {
    background: radial-gradient(circle,rgba(0,255,77,.141) -20%,#0b0b5c00 80%);
    filter: invert(2%) sepia(6%) saturate(17%) hue-rotate(184deg) brightness(130%);
    opacity: 1
}

.inventory__container__hub--body--skills--abilities--hub--filter--nav img,.inventory__container__hub--body--skills--equipments--hub--filter--nav img {
    width: 1.1vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities--hub--filter--nav img,.inventory__container__hub--body--skills--equipments--hub--filter--nav img {
        width:70px
    }
}

.inventory__container__hub--body--skills--abilities--hub--grid,.inventory__container__hub--body--skills--equipments--hub--grid {
    grid-gap: 6px;
    display: grid;
    grid-auto-rows: 2.2vw;
    grid-template-columns: repeat(auto-fill,2.2vw);
    width: 100%
}

.inventory__container__hub--body--skills--abilities--hub--grid--item,.inventory__container__hub--body--skills--equipments--hub--grid--item {
    align-items: center;
    aspect-ratio: 1/1;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: 2px solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 100%;
    justify-content: center;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities--hub--grid--item,.inventory__container__hub--body--skills--equipments--hub--grid--item {
        height:70px;
        width: 70px
    }
}

.inventory__container__hub--body--skills--abilities--hub--grid--item:hover,.inventory__container__hub--body--skills--equipments--hub--grid--item:hover {
    border: 2px solid #626464
}

.inventory__container__hub--body--skills--abilities--hub--grid--item--in,.inventory__container__hub--body--skills--equipments--hub--grid--item--in {
    opacity: .4
}

.inventory__container__hub--body--skills--abilities--hub--grid--item__level,.inventory__container__hub--body--skills--equipments--hub--grid--item__level {
    bottom: 1px;
    color: #fff;
    font-size: 14px;
    left: 2px;
    position: absolute;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.inventory__container__hub--body--skills--abilities--hub--grid--item img,.inventory__container__hub--body--skills--equipments--hub--grid--item img {
    height: 1.9vw;
    width: auto
}

.inventory__container__hub--body--skills--abilities--hub--grid {
    height: 8.1vw;
    overflow-y: auto;
    scrollbar-gutter: stable
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--abilities--hub--grid {
        grid-gap:10px;
        grid-template-columns: repeat(auto-fill,85px);
        height: 180px
    }
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar {
    width: 14px
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar-track {
    background: #1e1e1e
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,#5c5c5c,#4b4b4b);
    border: none;
    border-left: 1px solid #ffffff1a;
    border-radius: 6px
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar-button:single-button {
    background-color: #bbb;
    border-style: solid;
    display: block;
    height: 14px;
    width: 14px
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(/static/media/caret-up.bbe398779e82572b5202.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--skills--abilities--hub--grid::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(/static/media/caret-down.be74ad55fed8012ab30d.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--skills--abilities--hub--grid--item {
    background: #0000;
    border: 2px solid #303131;
    border-radius: .4vw;
    box-shadow: none;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    overflow: hidden
}

.inventory__container__hub--body--skills--abilities--hub--grid--item img {
    width: 2vw
}

.inventory__container__hub--body--skills--abilities--hub--grid--item__unbattled {
    border: 2px solid #fff
}

.inventory__container__hub--body--skills--abilities--hub--grid .no {
    filter: grayscale(1)
}

.inventory__container__hub--body--skills--equipments--hub--grid {
    height: 10.1vw;
    overflow-y: auto;
    scrollbar-gutter: stable
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--skills--equipments--hub--grid {
        grid-gap:15px;
        grid-template-columns: repeat(auto-fill,80px);
        height: 180px
    }
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar {
    width: 14px
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar-track {
    background: #1e1e1e
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg,#5c5c5c,#4b4b4b);
    border: none;
    border-left: 1px solid #ffffff1a;
    border-radius: 6px
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar-button:single-button {
    background-color: #bbb;
    border-style: solid;
    display: block;
    height: 14px;
    width: 14px
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(/static/media/caret-up.bbe398779e82572b5202.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--skills--equipments--hub--grid::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(/static/media/caret-down.be74ad55fed8012ab30d.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--skills--equipments--hub--grid--item__unactive img {
    opacity: .4
}

.inventory__container__hub--body--skills--item {
    display: flex;
    flex-direction: column;
    white-space: nowrap
}

.inventory__container__hub--body--skills--item--box {
    max-width: 400px;
    min-width: 400px;
    padding: 10px 0
}

.inventory__container__hub--body--skills--item--box:first-child {
    display: flex
}

.inventory__container__hub--body--skills--item--box:nth-child(2) {
    grid-gap: 10px;
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--skills--item--box--icon {
    align-items: center;
    background: #262626;
    border-radius: 10px;
    display: flex;
    height: 80px;
    justify-content: center;
    margin-right: 20px;
    min-width: 80px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: 80px
}

.inventory__container__hub--body--skills--item--box--icon img {
    height: 80px
}

.inventory__container__hub--body--skills--item--box--icon--level {
    bottom: 4px;
    color: #f3ce8f;
    font-size: .7vw;
    position: absolute;
    right: 10px;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.inventory__container__hub--body--skills--item--box--head {
    grid-gap: 8px;
    display: flex;
    flex-direction: column;
    width: 100%
}

.inventory__container__hub--body--skills--item--box--head--title {
    color: #c6c6c6;
    font-size: 1vw
}

.inventory__container__hub--body--skills--item--box--head--other {
    color: #989898;
    display: flex;
    flex-direction: column;
    font-size: .7vw
}

.inventory__container__hub--body--skills--item--box--head--other--char--level__container {
    height: 5px;
    margin-top: 6px;
    position: relative;
    width: 100px
}

.inventory__container__hub--body--skills--item--box--head--other--char--level__container--bar {
    background: #fff;
    height: 100%;
    width: 0
}

.inventory__container__hub--body--skills--item--box--info {
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--skills--item--box--info--title {
    color: #e0dfdf;
    font-size: 16px
}

.inventory__container__hub--body--skills--item--box--info--other {
    color: #989898;
    font-size: .7vw
}

.inventory__container__hub--body--skills--item--box--info--other img {
    margin-right: 5px;
    width: 16px
}

.inventory__container__hub--body--skills--item--box--info--other--name {
    margin: 0 0 0 5px
}

.inventory__container__hub--body--skills--item--box--info--other--runes {
    grid-gap: 1vw;
    display: flex;
    flex-wrap: wrap
}

.inventory__container__hub--body--skills--item--box--info--other--runes--item {
    grid-gap: 5px;
    align-items: center;
    color: #c6c6c6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
}

.inventory__container__hub--body--skills--item--box--info--other--runes--item img {
    margin: 0;
    width: 2vw!important
}

.inventory__container__hub--body--skills--item--box--buffs {
    grid-gap: 20px;
    display: flex;
    white-space: break-spaces
}

.inventory__container__hub--body--skills--item--box--buffs img {
    height: 40px;
    width: 40px
}

.inventory__container__hub--body--skills--item--box--buffs--info {
    grid-gap: 5px;
    display: flex;
    flex-direction: column
}

.inventory__container__hub--body--skills--item--box--buffs--info--title {
    color: #e0dfdf;
    font-size: .7vw
}

.inventory__container__hub--body--skills--item--box--buffs--info--desc {
    color: #989898;
    font-size: .7vw
}

.inventory__container__hub--body--magazine {
    background: #272727;
    border: 2px solid #5b5d5f;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    height: 100%;
    padding: 0 20px
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--magazine {
        max-height:none
    }
}

.inventory__container__hub--body--magazine--container {
    height: 100%;
    max-height: 90%;
    overflow: auto;
    position: relative;
    top: 3%;
    width: 99%
}

.inventory__container__hub--body--magazine--container--section {
    color: #b4b4b4;
    padding-bottom: 2%
}

.inventory__container__hub--body--magazine--container--section--title {
    padding: 5px
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--magazine--container--section--title {
        font-size:30px;
        padding: 20px
    }
}

.inventory__container__hub--body--magazine--container--section--table {
    color: #bbb38a;
    left: 4%;
    position: relative
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--magazine--container--section--table {
        font-size:30px
    }
}

.inventory__container__hub--body--magazine--container--section--table--btn {
    background-color: #272727;
    border: 0 solid #000;
    color: #00805a;
    left: 4%;
    position: relative
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--magazine--container--section--table--btn {
        font-size:30px
    }
}

.inventory__container__hub--body--magazine--container--section--table--btn:hover {
    color: #17a217
}

.inventory__container__hub--body--magazine--container--section--tableItem {
    color: #b4b4b4
}

.inventory__container__hub--body--magazine--container--section--tableItem--quest {
    color: #bbb38a
}

.inventory__container__hub--body--magazine--container--section--tableItem--quest:hover {
    color: #f2ebc6
}

.inventory__container__hub--body--magazine--container--section--tableItem--quest--empty {
    color: #bbb38a;
    margin-left: 4%;
    margin-top: 1%
}

@media only screen and (min-width: 3840px) {
    .inventory__container__hub--body--magazine--container--section--tableItem--quest--empty {
        font-size:30px
    }
}

.inventory__container__hub--body--magazine--container--section--tableItem--done {
    color: green
}

.inventory__container__hub--body--magazine--container--section--tableItem--done:hover {
    color: #04d204
}

.inventory__container__hub--body--magazine--container--section--tableItem:hover {
    color: #fff
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar {
    height: 5px;
    right: 10px;
    width: 12px
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-track {
    background: #000;
    height: 5px
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-thumb:hover {
    background: #555
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-thumb:vertical {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 5px 5px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__container__hub--body--magazine--container::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 5px 5px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.inventory__preSendMoney {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px
}

.inventory__sendMoney {
    color: #9c9b9b;
    display: flex;
    font-size: .8vw;
    margin: 10px 0 0
}

@media only screen and (min-width: 3840px) {
    .inventory__sendMoney {
        font-size:40px
    }
}

.inventory__sendMoney--one {
    padding-top: 6px;
    width: 30%
}

.inventory__sendMoney--two {
    display: flex;
    flex-direction: column;
    width: 100%
}

.inventory__sendMoney--two--info:nth-child(2) {
    margin: 10px 0 0
}

.inventory__sendMoney--two--info:nth-child(3) {
    margin: 5px 0 10px
}

.inventory__sendMoney--two--info {
    align-items: center;
    display: flex
}

.inventory__sendMoney--two--info--check {
    background: #0000;
    border: 2px solid #cecdcd;
    border-radius: 50%;
    cursor: pointer;
    height: 10px;
    margin-right: 12px;
    width: 10px
}

.inventory__sendMoney--two--info--check--active {
    background: #cecdcd
}

.inventory__sendMoney--two--info--text {
    display: flex
}

.inventory__sendMoney--two--info--text img {
    height: 16px;
    margin: 0 5px
}

@media only screen and (min-width: 3840px) {
    .inventory__sendMoney--two--info--text img {
        height:40px
    }
}

.inventory__preObject {
    grid-gap: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px
}

.inventory__preObject--img {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: 2px solid #303131;
    border-radius: 10px;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 70px;
    justify-content: center;
    margin-right: 10px;
    object-fit: cover;
    position: relative;
    width: 70px
}

@media only screen and (min-width: 3840px) {
    .inventory__preObject--img {
        height:170px;
        padding: 20px;
        width: 170px
    }
}

.inventory__preObject--img img {
    height: 100%;
    object-fit: cover
}

@media only screen and (min-width: 3840px) {
    .inventory__preObject--info {
        font-size:50px
    }
}

.inventory__preObject--info h4,.inventory__preObject--info h5 {
    color: #fff
}

.inventory__preObject--info--title {
    margin-bottom: 10px
}

.inventory__preObject--info--title--vict {
    margin-bottom: 0
}

.inventory__preObject--info--line {
    text-wrap: wrap;
    color: #7d7e7e;
    font-size: 12px
}

.inventory__preObject--in {
    color: #7d7e7e;
    display: flex;
    flex-direction: column
}

@media only screen and (min-width: 3840px) {
    .inventory__preObject--in {
        font-size:40px
    }

    .inventory__preObject--in input {
        font-size: 40px;
        width: 450px
    }
}

.inventory__preObject--in--buttons {
    display: flex;
    justify-content: space-between
}

.inventory__preObject--in--title {
    color: #fff;
    font-size: 1.6vw
}

.inventory__preObject--in--title b {
    font-weight: 400;
    text-decoration: underline
}

.inventory__profile {
    color: #b4b4b4;
    display: flex;
    flex-direction: column
}

.inventory__profile h6 {
    font-size: .8vw;
    font-weight: 400;
    margin: 0
}

.inventory__profile .character-info-zodiak {
    gap: .5vw;
    padding: 0
}

.inventory__profile .character-info-zodiak--profile {
    font-size: .8vw;
    font-weight: 400;
    height: 10vw;
    line-height: .92vw;
    max-height: 10vw;
    min-height: 10vw
}

.inventory__profile--container__up {
    display: flex;
    gap: 3vw;
    max-height: 685px
}

.inventory__profile--container__down {
    display: flex;
    justify-content: space-between
}

.inventory__profile__left {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    gap: .5vw;
    justify-content: center
}

@media only screen and (min-width: 3840px) {
    .inventory__profile__left {
        height:55vh
    }
}

@media(max-height: 1383px)and (min-width:1728px) {
    .inventory__profile__left {
        height:auto
    }
}

.inventory__profile__left--exit {
    color: #fff;
    cursor: pointer;
    display: flex;
    gap: 1vw
}

.inventory__profile__left--block {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: 9px;
    z-index: 1
}

.inventory__profile__left--block--box {
    margin-left: -52px
}

.inventory__profile__left--block--box .character-info-zodiak--one--circles img {
    left: calc(100% + 7.4vw)
}

.inventory__profile__left--block--box.character-info-zodiak--one {
    height: 14vw
}

.inventory__profile__left--block--box .character-info-zodiak--one--circles {
    left: 48%;
    transform: translateX(16%) translateX(-13vw)
}

.inventory__profile__left--block--box .character-info-zodiak--two--right {
    display: flex;
    flex-direction: column;
    gap: .1vw;
    justify-content: center;
    width: 16vw
}

.inventory__profile__left--block--box .character-info-zodiak--two--right--two {
    width: 24vw
}

.inventory__profile__right {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    font-size: .8vw;
    gap: .7vw;
    justify-content: space-between
}

@media only screen and (min-width: 3840px) {
    .inventory__profile__right {
        gap:1.4vh
    }
}

.inventory__profile__right--top {
    display: flex;
    flex-direction: column;
    gap: 1vw
}

.inventory__profile__right--midle {
    display: flex;
    flex-direction: column;
    padding-right: 40px
}

.inventory__profile__right--midle--one {
    display: flex;
    flex-direction: column;
    gap: .5vw;
    margin-bottom: 11px;
    position: relative
}

.inventory__profile__right--midle--one--item {
    align-items: center;
    display: flex;
    gap: .4vw
}

.inventory__profile__right--midle--one--item--progress-bar {
    background: #333;
    border: .1vw solid #4e4e4e;
    border-radius: .5vw;
    height: .5vw;
    overflow: hidden;
    position: relative;
    width: 48%
}

.inventory__profile__right--midle--one--item--progress-bar--fill {
    background: #dcdcdc;
    border-radius: .6vw;
    height: 100%;
    transition: width .3s ease-in-out;
    width: 100%
}

.inventory__profile__right--midle--one--item--left {
    display: flex;
    justify-content: space-between;
    width: 70%
}

.inventory__profile__right--midle--one--item--right {
    width: 10%
}

.inventory__profile__right--desc {
    display: flex;
    flex-direction: column;
    margin-right: 61px
}

@media(max-height: 1383px)and (min-width:1728px) {
    .inventory__profile__right--desc {
        height:auto;
        max-height: auto;
        min-height: auto
    }
}

.inventory__profile__right--desc--title {
    align-items: center;
    display: flex
}

.inventory__profile__right--desc--title h6 {
    opacity: .6
}

.inventory__profile__right--desc--btns {
    display: flex;
    gap: 3.5vw;
    left: .3vw;
    position: relative
}

.inventory__profile__right--desc--input {
    height: 66%;
    left: .3vw;
    position: relative
}

.inventory__profile__right--desc--input textarea {
    background: #252424;
    border: .1vw solid #3a3a3a;
    border-radius: .4vw;
    color: #b4b4b4;
    font-size: .8vw;
    height: 88%;
    max-width: 96%;
    outline: none;
    padding: .4vw;
    resize: none;
    width: 96%
}

.inventory__profile__right--desc--input--no {
    align-items: center;
    color: #6e6e6e;
    display: flex;
    gap: .6vw;
    left: 1%;
    position: absolute;
    top: 1%
}

.inventory__profile__right--desc--input--no img {
    width: 2vw
}

.inventory__profile__right__container {
    display: flex;
    gap: .5vw;
    max-height: 6vw;
    min-height: 6vw
}

.inventory__profile__right__container--one {
    position: relative;
    top: .2vw
}

.inventory__profile__right__container--one--slider {
    width: 6.6vw
}

.inventory__profile__right__container--one--slider--container {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%
}

.inventory__profile__right__container--one--slider--container img {
    border: .04vw solid;
    border-radius: .4vw;
    max-width: 6vw;
    width: 85%
}

.inventory__profile__right__container--two .character-info-zodiak--two--left {
    margin: .4vw .4vw 0 0;
    width: auto
}

.next,.prev {
    display: none
}

.greenC {
    color: #75d580
}

.redC {
    color: #e06666
}

.whiteC {
    color: #c6c6c6
}

.blueC {
    color: #72ffff
}

.status-icon {
    color: #bbb38a
}

.status-icon--done {
    color: green
}

.noImage {
    background-color: #c92222;
    height: 100%;
    opacity: .5;
    width: 100%
}

.scalp_item {
    align-items: flex-start;
    color: #c6c6c6;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
    width: 20vw
}

.inventory__item--mini {
    height: 2vw;
    width: 2vw
}

@media only screen and (min-width: 3840px) {
    .inventory__item--mini {
        height:75px;
        width: 75px
    }
}

.inventory__item--max {
    height: 70px;
    width: 70px
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .inventory__item--max {
        height:100px;
        width: 100px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .inventory__item--max {
        height:100px;
        width: 100px
    }
}

@media only screen and (min-width: 3840px) {
    .inventory__item--max {
        height:160px;
        width: 160px
    }
}

.select-ui {
    display: flex;
    flex-direction: column;
    gap: .6vw
}

.select-ui--nav {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: .3vw
}

.select-ui--nav div {
    font-size: .8vw
}

.select-ui--nav div:first-child {
    border: .1vw solid #fff;
    border-radius: 15vw;
    height: .7vw;
    width: .7vw
}

.select-ui--nav--active div:first-child {
    background: #fff
}

.slider-container {
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative
}

.slider-container button {
    background: #00000080;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: .4vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.slider {
    display: flex;
    justify-content: space-between;
    transition: transform .5s ease-in-out;
    width: 85%
}

.slider img {
    border: .04vw solid;
    border-radius: .4vw;
    max-width: 6vw;
    width: 33%
}

.prev {
    left: 0
}

.next {
    right: 0
}

.rebirth {
    gap: 10px
}

.rebirth,.rebirth--price {
    align-items: center;
    display: flex;
    height: 2vw;
    justify-content: center
}

.rebirth--price {
    gap: 4px
}

.rebirth--price>img {
    height: 1.1vw;
    width: 1vw
}

.rebirthBtn,.rebirthBtn--profile {
    width: 10vw!important
}

.inventory-hub-parameters {
    background-color: #333;
    color: #ccc;
    font-family: Arial,sans-serif;
    font-size: 14px;
    padding: 15px
}

.scrollable-content {
    height: 100%;
    overflow-y: auto
}

.parameters-block {
    margin-bottom: 25px
}

.parameters-block h3 {
    border-bottom: 1px solid #555;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
    padding-bottom: 8px
}

.parameter {
    line-height: 1.5;
    margin-bottom: 8px
}

.parameter span {
    display: block
}

.parameter-name {
    color: #f0f0f0;
    font-weight: 700
}

.parameter span:not(.parameter-name) {
    color: #aaa;
    padding-left: 15px
}

.parameter-row {
    display: flex;
    gap: 20px;
    justify-content: space-between
}

.parameter-row .parameter {
    width: 48%
}

.parameter-health {
    position: relative
}

.hp-details {
    position: absolute;
    right: 0;
    text-align: right;
    top: 0
}

.debuff {
    color: #ff4d4d!important
}

.buff {
    color: #0ff!important
}

.set-bonus-text {
    color: #ffe599!important
}

.preShop {
    align-items: center;
    background: #00000094;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2
}

.shop {
    height: 80vh;
    outline: none;
    width: 80%
}

.shop__container {
    border: 0 solid;
    border-radius: 8px;
    box-shadow: 0 0 0 0 #656b6e82;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%
}

.shop__container.my__products {
    padding-left: .5vw
}

.shop__container--close {
    align-items: center;
    background: #272421;
    background: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 0 0 0 #656b6e82;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 1.8vw;
    justify-content: center;
    padding: .3vw;
    position: absolute;
    right: 2vw;
    top: -3vh;
    width: 1.8vw;
    z-index: 10
}

@media only screen and (min-width: 3840px) {
    .shop__container--close {
        height:80px;
        position: absolute;
        right: 40px;
        top: -70px;
        width: 80px
    }
}

.shop__container--close img {
    height: 1vw;
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .shop__container--close img {
        height:40px;
        width: 40px
    }
}

.shop__container--header {
    display: flex;
    gap: .7vw;
    padding: 1vw 1.5vw
}

@media only screen and (min-width: 3840px) {
    .shop__container--header {
        padding:40px
    }
}

.shop__container--header--item {
    grid-gap: .6vw
}

.shop__container--header--item>img {
    height: 1.4vw
}

@media only screen and (min-width: 3840px) {
    .shop__container--header--item>img {
        height:50px
    }
}

.shop__container--header--item--num {
    color: #fff;
    font-size: 1vw
}

.shop__container--header--item--num.own {
    font-size: 1.1vw
}

@media only screen and (min-width: 3840px) {
    .shop__container--header--item--num {
        font-size:40px
    }
}

.shop__container--header--item--other {
    background-color: #2e2e2e;
    border: 1px solid #444648;
    border-radius: .3vw;
    cursor: pointer;
    display: flex;
    margin-left: .4vw;
    padding: .3vw
}

.shop__container--header--item--other>img {
    width: .6vw
}

.shop__container--header--item--other:hover {
    background-color: #9e1616
}

.shop__container__hub {
    border: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px 10px
}

.shop__container__hub--tab {
    display: flex;
    height: 5vh;
    justify-content: center;
    margin-bottom: 15px;
    padding-bottom: 10px
}

.shop__container__hub--tab--line {
    align-items: flex-start;
    color: #565c5b;
    display: flex;
    font-size: 1.5vw;
    justify-content: center
}

.shop__container__hub--tab--item {
    border-bottom: 0;
    color: #5d5f5e;
    cursor: pointer;
    font-size: 1.5vw;
    min-width: 70px;
    text-align: center;
    width: 10vw
}

.shop__container__hub--tab--item--active {
    color: #acacac;
    z-index: 1
}

.shop__container__hub--body {
    background: #272727;
    border: 2px solid #5b5d5f;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    height: 100%;
    padding: 20px
}

.shop__container__hub--body--things {
    display: flex;
    height: 100%
}

.shop__container__hub--body--things--filter {
    grid-gap: .8vw;
    display: flex;
    flex-direction: column;
    padding: 0 1.5vw 10px .9vw
}

.shop__container__hub--body--things--filter--market {
    grid-gap: .8vw;
    display: flex;
    flex-direction: column;
    padding: 3.5vw 1vw 10px 0
}

.shop__container__hub--body--things--filter--nav {
    cursor: pointer;
    opacity: .7
}

.shop__container__hub--body--things--filter--nav img {
    width: 1.6vw
}

@media only screen and (min-width: 3840px) {
    .shop__container__hub--body--things--filter--nav img {
        width:80px
    }
}

.shop__container__hub--body--things--filter--nav--active {
    background: radial-gradient(circle,rgba(0,255,77,.141) -20%,#0b0b5c00 80%);
    background: url(/static/media/light_.bff66751402fa5b7dbc9.png);
    background-repeat: no-repeat;
    background-size: cover;
    filter: invert(2%) sepia(6%) saturate(17%) hue-rotate(184deg) brightness(130%);
    opacity: 1
}

.shop__container__hub--body--things--grid {
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(72px,1fr));
    height: 74px;
    width: 100%
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .shop__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr));
        height: 100px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .shop__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr));
        height: 100px
    }
}

@media only screen and (min-width: 3840px) {
    .shop__container__hub--body--things--grid {
        grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
        height: 160px
    }
}

.shop__container__hub--body--things--grid--item {
    align-items: center;
    background-color: #1a1a1ad1;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #232928;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 12.1vh;
    justify-content: center;
    object-fit: cover;
    position: -webkit-sticky;
    position: sticky;
    top: 5%;
    width: 195%
}

.shop__container__hub--body--things--grid--item:hover {
    background-image: url(data:image/png;base64,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AAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACgwCbJ3PcQAAAAAADA67VJ8mhdH+xzEAAAAAAA4MztnhT0wybJgySZUxAAAAAAAIDfkzlzuC5PNknurX++sK+BAAAAAACA12G+vS7ubZJ8kyRz5uL+BgIAAAAAAM7aqbP/u5skd5J8m+Rwznm8v7EAAAAAAICzsp75H2ZpAHd2LxO4tVzM5fUiAAAAAADw5jpcz/yTtQHsgsDXSW4neWu7nVeTvLWH4QAAAAAAgF/v9Fn/7SwN4GkQSJKbWW4bONpu55/nzB/Of0YAAAAAAOBVzbmc8Sc5ynLmf3N37XQQ2Cb5LMndLO8TuLbdzvfnzNG5TgsAAAAAAPwic+ZwzvnenPNallcD3M1y5r/d7Tl45n/+l+QfST5M8kGS4znn8Zx5nOThGHl8PqMDAAAAAAAvMebMQZa7AU6/H/jfST5/dvOzQWDnn0m+SPKXJJeSXExyPOfZTgoAAAAAAJyJkyyPCPoyyf3nbXhREEiSB0n+ta7fSfJukgtnOR0AAAAAAPDKnmR58s/3eUEEOO3/HiW2/t77hz4AAAAASUVORK5CYII=)
}

.shop__container__hub--body--things--grid--item--in {
    opacity: .4
}

.shop__container__hub--body--things--grid--item img {
    max-height: 95%;
    max-width: 95%
}

.shop__container__hub--body--things--grid--item--tooltip {
    background-color: #eee;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000080;
    box-sizing: border-box;
    color: #444;
    display: none;
    font-size: 13px;
    font-weight: 400;
    left: 100%;
    min-width: 200px;
    padding: 10px 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99999999
}

.shop__container__hub--body--things--grid--item--tooltip i {
    height: 24px;
    margin-top: -12px;
    overflow: hidden;
    position: absolute;
    right: 100%;
    top: 50%;
    width: 12px
}

.shop__container__hub--body--things--grid--item--tooltip i:after {
    background-color: #eee;
    box-shadow: 0 1px 8px #00000080;
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(50%,-50%) rotate(-45deg);
    width: 12px
}

.shop__container__hub--body--things--item {
    display: flex;
    flex-direction: column;
    white-space: nowrap
}

.shop__container__hub--body--things--item--box {
    padding: 20px 0
}

.shop__container__hub--body--things--item--box:first-child {
    display: flex
}

.shop__container__hub--body--things--item--box:nth-child(2) {
    grid-gap: 10px;
    border-top: 1px solid #383838;
    display: flex;
    flex-direction: column
}

.shop__container__hub--body--things--item--box:last-child {
    border-top: 1px solid #383838
}

.shop__container__hub--body--things--item--box--icon {
    align-items: center;
    background: #262626;
    border: 1px solid #434242;
    border-radius: 10px;
    display: flex;
    height: 6vw;
    justify-content: center;
    margin-right: 20px;
    max-height: 6vw;
    max-width: 6vw;
    object-fit: cover;
    width: 6vw
}

.shop__container__hub--body--things--item--box--icon img {
    height: 6vw;
    max-height: 6vw;
    max-width: 6vw;
    width: auto
}

.shop__container__hub--body--things--item--box--head {
    grid-gap: 8px;
    display: flex;
    flex-direction: column
}

.shop__container__hub--body--things--item--box--head--title {
    color: #c6c6c6;
    font-size: 1vw
}

.shop__container__hub--body--things--item--box--head--other {
    color: #989898;
    display: flex;
    flex-direction: column;
    font-size: .7vw
}

.shop__container__hub--body--things--item--box--head--other--desc {
    color: #989898;
    font-size: .6vw
}

.shop__container__hub--body--things--item--box--info {
    display: flex;
    flex-direction: column
}

.shop__container__hub--body--things--item--box--info--title {
    color: #e0dfdf;
    font-size: .7vw
}

.shop__container__hub--body--things--item--box--info--other {
    align-items: center;
    color: #989898;
    display: flex;
    font-size: .7vw
}

.shop__container__hub--body--things--item--box--info--other div {
    margin-left: 2%
}

.shop__container__hub--body--things--item--box--info--other img {
    margin-right: 5px;
    width: .8vw
}

.shop__container__hub--body--things--item--box--info--other--name {
    margin: 0 0 0 5px
}

.shop .greenC {
    color: green
}

.shop .redC {
    color: red
}

.shop .tooltip.shop {
    height: 12.1vh;
    width: 50%
}

.shop .tooltip.image_shop {
    height: 20px;
    min-height: 20px;
    width: 20px
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .shop .tooltip.image_shop {
        height:140px;
        min-height: 140px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .shop .tooltip.image_shop {
        height:200px;
        min-height: 200px
    }
}

@media only screen and (min-width: 3840px) {
    .shop .tooltip.image_shop {
        height:300px;
        min-height: 300px
    }
}

.shop .shop__border {
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: .66vw;
    height: auto;
    height: 80%;
    position: relative;
    width: 40%;
    width: 100%
}

.shop .item_title {
    color: #acacac;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    margin-bottom: 3px
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .shop .item_title {
        font-size:18px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .shop .item_title {
        font-size:24px
    }
}

@media only screen and (min-width: 3840px) {
    .shop .item_title {
        font-size:30px
    }
}

.shop .item_text {
    color: #5f5a54;
    font-size: .6vw;
    margin: 0
}

.shop .shop-container {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    max-height: 55vh;
    min-height: 30vh;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .shop .shop-container {
        max-height:50vh;
        min-height: 40vh
    }
}

.shop .shop-container::-webkit-scrollbar {
    width: .6vw
}

.shop .shop-container::-webkit-scrollbar-track {
    background: #000;
    border-radius: .21vw
}

.shop .shop-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop .shop-container::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: .21vw;
    min-height: 20px
}

.shop .shop-container::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop .shop-container::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop .shop-container--runeOption {
    align-items: center;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1vw;
    height: auto;
    justify-content: center;
    left: 10vw;
    position: absolute;
    top: 23vh;
    width: 60%;
    z-index: 1
}

.shop .weapon_desc_container {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis
}

.shop .weapon_desc_item {
    align-self: start;
    display: flex;
    flex-wrap: wrap
}

.shop .weapon_desc_item .inventory__container__hub--body--things--item--box--info--other--limit {
    font-size: .6vw
}

.shop .item_text {
    display: block;
    flex-shrink: 1;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.shop .item_text:not(:last-child) {
    margin-right: 4px
}

.shop .shop.ui-button-one {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch
}

.shop .shop.ui-button-one:hover {
    background: url(/static/media/ui-button.c728b870986576f3f34c.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button.c728b870986576f3f34c.png) 12 12 12 12 stretch stretch
}

.shop .shop.ui-button-one[disabled] {
    cursor: not-allowed;
    filter: drop-shadow(2px 4px 6px black);
    opacity: .5;
    transform: translateY(0)
}

.shop .shop.ui-button-one[disabled]:hover {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch
}

.shop .shop.ui-button-one.buy,.shop .shop.ui-button-one.sell {
    font-size: 1vw;
    height: 25%
}

.shop .shop--item {
    display: flex;
    gap: 2.2vw;
    height: 100%;
    scroll-snap-align: start;
    width: 100%
}

.shop .shop--item--left {
    align-items: center;
    display: flex;
    gap: 30px;
    height: 100%;
    width: 70%
}

.shop .shop--item--left--inner {
    align-items: center;
    display: flex;
    height: 7vh;
    justify-content: center;
    padding-left: 2vh;
    width: 7vh
}

.shop .shop--item--left--inner--info {
    color: #fff;
    display: flex;
    flex-direction: column;
    left: 12%;
    position: absolute;
    top: 17%;
    width: 60%
}

.shop .shop--item--left--inner--image {
    align-items: center;
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 7.7vh;
    justify-content: center;
    object-fit: cover;
    padding: .2vh;
    position: -webkit-sticky;
    position: sticky;
    top: 5%;
    width: 7.7vh
}

.shop .shop--item--right {
    align-items: center;
    display: flex;
    justify-content: flex-start
}

.modal_shop {
    align-items: center;
    background: #00000094;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3
}

.modal_shop--container {
    border-radius: 6px;
    height: 30%;
    position: relative;
    width: 30%
}

.modal_shop--container--border {
    align-items: center;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 18px;
    display: flex;
    flex-direction: column;
    gap: 30%;
    height: 80%;
    justify-content: center;
    position: relative;
    width: 100%
}

.modal_shop--container--msg {
    color: #e0dfdf;
    font-size: .7vw
}

.shop__container--header--item img.grow {
    transform: scale(1.2);
    transition: transform .2s ease
}

.shop__container--header--item--num.highlight {
    color: #fff;
    font-weight: 700;
    transform: scale(1.1);
    transition: all .2s ease
}

.shop__container--header--item img {
    transition: transform .2s ease
}

.shop__container--header--item--num {
    transition: all .2s ease
}

.shop_upgrade {
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 40 40 40 40 stretch stretch;
    border-style: inset;
    border-width: 18px;
    height: 62vh;
    left: 10vw;
    position: absolute;
    top: 10vh;
    width: 44vw;
    z-index: 2
}

.shop__container__upgrade {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 5px;
    width: 99%
}

.shop__container__upgrade--left {
    height: 88%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 10px;
    width: 50%
}

.shop__container__upgrade--left::-webkit-scrollbar {
    width: 7px
}

.shop__container__upgrade--left::-webkit-scrollbar-track {
    background: #000
}

.shop__container__upgrade--left::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop__container__upgrade--left::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 4px;
    min-height: 20px
}

.shop__container__upgrade--left::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__upgrade--left::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__upgrade--right {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    height: 100%;
    margin-left: 2vw;
    width: 45%
}

.shop__container__upgrade--right--fire {
    filter: hue-rotate(190deg) saturate(3);
    height: 180%;
    left: -37%;
    position: relative;
    top: -161%;
    width: 180%;
    z-index: 1
}

.shop__container__upgrade--right--header {
    display: flex;
    flex-direction: column;
    gap: .2vw
}

.shop__container__upgrade--right--header--title {
    color: #fff;
    font-size: 1.5vw
}

.shop__container__upgrade--right--header--title>p {
    margin: 0
}

.shop__container__upgrade--right--header--desc {
    color: #b4b4b4;
    font-size: .8vw
}

.shop__container__upgrade--right--button {
    align-items: center;
    display: flex;
    justify-content: center
}

.shop__container__upgrade--right--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.charSlot {
    filter: grayscale(1) brightness(.9)
}

.runePos {
    box-shadow: inset 0 0 0 2px #2ea8ff
}

.mainSlot {
    background-image: url(/static/media/slotBck.93f2a9f5af2b0f496e64.png);
    background-size: contain;
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #42b0ff
}

.mainSlot:hover {
    border: 2px solid #42b0ff
}

.mainSlot--itemIn {
    background-image: none;
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #42b0ff
}

.blueMask,.blueMask--active {
    background: #2ea8ff;
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 0 #2ea8ff;
    position: absolute
}

.blueMask--active {
    opacity: .2
}

.blueMask--active--join {
    opacity: 1
}

.blueMask--active--join,.blueMask--none {
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 0 #2ea8ff;
    position: absolute
}

.blueMask--none {
    background: #2ea8ff;
    opacity: 0
}

.shop__container__runeInsert--center--itemCell--box--left,.shop__container__runeJoin--right--itemCell--box--left,.shop__container__upgrade--right--itemCell--box--left {
    display: flex;
    flex-direction: row;
    gap: 2vw
}

.shop__container__runeInsert--center--itemCell--box--left--info,.shop__container__runeJoin--right--itemCell--box--left--info,.shop__container__upgrade--right--itemCell--box--left--info {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: .5vh;
    justify-content: flex-start;
    width: 100%
}

.shop__container__runeInsert--center--itemCell--box--left--info--title,.shop__container__runeJoin--right--itemCell--box--left--info--title,.shop__container__upgrade--right--itemCell--box--left--info--title {
    color: #fff;
    font-size: 1.1vw
}

.shop__container__runeInsert--center--itemCell--box--left--info--desc,.shop__container__runeJoin--right--itemCell--box--left--info--desc,.shop__container__upgrade--right--itemCell--box--left--info--desc {
    width: 100%
}

.shop__container__runeInsert--center--itemCell--box--left--info--desc--potential,.shop__container__runeJoin--right--itemCell--box--left--info--desc--potential,.shop__container__upgrade--right--itemCell--box--left--info--desc--potential {
    color: #545454;
    font-size: .8vw;
    font-weight: 500
}

.shop__container__runeInsert--center--itemCell--box--left--info--desc--name,.shop__container__runeJoin--right--itemCell--box--left--info--desc--name,.shop__container__upgrade--right--itemCell--box--left--info--desc--name {
    color: #b4b4b4;
    font-size: .8vw;
    margin-top: .5vh
}

.shop__container__runeInsert--center--itemCell--box--left--info--desc--num,.shop__container__runeJoin--right--itemCell--box--left--info--desc--num,.shop__container__upgrade--right--itemCell--box--left--info--desc--num {
    margin-left: 2px
}

.upgrade>img {
    height: 1.1vw;
    width: 1.2vw
}

.shop__container__runeInsert {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 5px;
    max-height: 54vh;
    width: 99%
}

.shop__container__runeInsert--left {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 10px;
    width: 18vw
}

.shop__container__runeInsert--left::-webkit-scrollbar {
    width: 7px
}

.shop__container__runeInsert--left::-webkit-scrollbar-track {
    background: #000
}

.shop__container__runeInsert--left::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop__container__runeInsert--left::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 4px;
    min-height: 20px
}

.shop__container__runeInsert--left::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeInsert--left::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeInsert--center {
    display: flex;
    flex-direction: column;
    gap: 4vh;
    height: 100%;
    margin-left: 1.2vw;
    width: 16vw
}

.shop__container__runeInsert--center--fire {
    filter: hue-rotate(190deg) saturate(3);
    height: 180%;
    left: -37%;
    position: relative;
    top: -161%;
    width: 180%;
    z-index: 1
}

.shop__container__runeInsert--center--header {
    display: flex;
    flex-direction: column;
    gap: .2vw
}

.shop__container__runeInsert--center--header--title {
    color: #fff;
    font-size: 1.5vw
}

.shop__container__runeInsert--center--header--title>p {
    margin: 0
}

.shop__container__runeInsert--center--header--desc {
    color: #b4b4b4;
    font-size: .8vw
}

.shop__container__runeInsert--center--runes--runP {
    grid-gap: .8vw;
    display: flex;
    margin-bottom: .4vw;
    max-width: 100%;
    white-space: break-spaces
}

.shop__container__runeInsert--center--runes--runP--rune {
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    background-color: rgba(68,68,68,.478);
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
    border: .1vw solid #303131;
    border-radius: .3vw
}

.shop__container__runeInsert--center--runes--runP--rune,.shop__container__runeInsert--center--runes--runP--rune--fullP {
    align-items: center;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 2.7vw;
    justify-content: center;
    object-fit: cover;
    width: 2.7vw
}

.shop__container__runeInsert--center--runes--runP--rune--fullP {
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    background-color: #3e3e3e;
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
    border: .1vw solid #303131;
    border-radius: .4vw
}

.shop__container__runeInsert--center--runes--runP--rune--fullP img {
    height: 2.7vw;
    width: 2.7vw
}

.shop__container__runeInsert--center--runes--runP--rune--fullP:hover {
    box-shadow: inset 0 0 0 1px #ffffff82
}

.shop__container__runeInsert--center--runes--runP--rune--fullP--chosenR {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    background-color: #3e3e3e;
    background-image: url(data:image/png;base64,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);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 35%;
    border: .1vw solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff82;
    display: flex;
    height: 2.7vw;
    justify-content: center;
    object-fit: cover;
    width: 2.7vw
}

.shop__container__runeInsert--center--runes--runP--rune--fullP--chosenR img {
    height: 2.7vw;
    width: 2.7vw
}

.shop__container__runeInsert--center--runes--runP--rune img {
    width: 1.8vw
}

.shop__container__runeInsert--center--runes--runP--info {
    display: flex;
    flex-direction: column;
    justify-content: center
}

.shop__container__runeInsert--center--runes--runP--info--title {
    color: #e0dfdf;
    font-size: .7vw
}

.shop__container__runeInsert--center--runes--runP--info--other {
    align-items: center;
    color: #989898;
    display: flex;
    font-size: .7vw
}

.shop__container__runeInsert--right {
    height: 54vh;
    margin-left: 1.2vw;
    width: 6vw
}

.shop__container__runeInsert--right--grid {
    grid-gap: .3vw .6vw;
    display: grid;
    grid-template-columns: repeat(auto-fill,2.2vw);
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
    width: 100%
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar {
    width: 7px
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar-track {
    background: #000
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 4px;
    min-height: 20px
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeInsert--right--grid::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeInsert--center--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.inventory__item--mini_rune {
    height: 2.5vw;
    width: 2.5vw
}

.shop__container__runeInsert--abilities--hub--grid--item,.shop__container__runeInsert--equipments--hub--grid--item {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: .1vw solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 2.5vw;
    justify-content: center;
    object-fit: cover;
    position: relative;
    width: 2.5vw
}

.shop__container__runeInsert--abilities--hub--grid--item:hover,.shop__container__runeInsert--equipments--hub--grid--item:hover {
    border: 2px solid #626464
}

.shop__container__runeInsert--abilities--hub--grid--item__level,.shop__container__runeInsert--equipments--hub--grid--item__level {
    bottom: 4px;
    color: #fff;
    font-size: 14px;
    position: absolute;
    right: 6px;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.shop__container__runeInsert--abilities--hub--grid--item img,.shop__container__runeInsert--equipments--hub--grid--item img {
    width: 2.5vw
}

.disabled {
    filter: grayscale(1) brightness(.9)
}

.enabled {
    box-shadow: inset 0 0 0 2px #2ea8ff
}

.shop__container__runeJoin {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 5px;
    width: 99%
}

.shop__container__runeJoin--left {
    height: 52vh;
    padding: 1vw;
    width: 13vw
}

.shop__container__runeJoin--left--grid {
    grid-gap: .6vw .8vw;
    display: grid;
    grid-template-columns: repeat(auto-fill,2.2vw);
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
    width: 100%
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar {
    width: 7px
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar-track {
    background: #000
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 4px;
    min-height: 20px
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeJoin--left--grid::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__runeJoin--right {
    background-image: url(/static/media/spiral.605ed917073e4ac8c4b3.png);
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    gap: 8vh;
    height: 100%;
    margin-left: 1.2vw;
    width: 27vw
}

.shop__container__runeJoin--right--header {
    display: flex;
    flex-direction: column;
    gap: .2vw
}

.shop__container__runeJoin--right--header--title {
    color: #fff;
    font-size: 1.5vw
}

.shop__container__runeJoin--right--header--title>p {
    margin: 0
}

.shop__container__runeJoin--right--header--desc {
    color: #b4b4b4;
    font-size: .8vw
}

.shop__container__runeJoin--right--button {
    align-items: center;
    display: flex;
    justify-content: center
}

.shop__container__runeJoin--right--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.mainSlotJoin {
    background-blend-mode: overlay;
    background-image: url(/static/media/run.10.6f1eab2e434fac40210f.png);
    background-size: contain;
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #42b0ff
}

.mainSlotJoin:hover {
    border: 2px solid #42b0ff
}

.mainSlotJoin--itemIn {
    background-image: none;
    border: 2px solid #a9dbff;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #42b0ff
}

.shop__container__runeJoin--right--itemCell--box--left--plus {
    align-items: center;
    color: #48484894;
    display: flex;
    font-size: -webkit-xxx-large;
    justify-content: center;
    width: 2vw
}

.addSlotJoin {
    background: #0000;
    background-image: url(/static/media/spiral.605ed917073e4ac8c4b3.png);
    background-repeat: no-repeat;
    background-size: contain
}

.rune_join_box {
    gap: 1vw
}

.upgrIt {
    bottom: -48%;
    left: 25%;
    position: relative
}

.upgrIt-prize {
    align-items: center;
    display: flex;
    height: 23vw;
    justify-content: center;
    top: -14vw;
    width: 35vw
}

.upgrIt-prize,.upgrIt-prize__background {
    mix-blend-mode: screen;
    position: absolute;
    z-index: 10
}

.upgrIt-prize__background {
    height: 100%;
    left: 0;
    object-fit: contain;
    top: 0;
    width: 100%
}

.upgrIt-prize__item {
    background: #1b1b1b;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-style: inset;
    border-width: .3vw;
    filter: drop-shadow(0 0 15px rgba(255,255,255,.7));
    left: 60%;
    position: absolute;
    top: 36%;
    z-index: 10
}

.upgrIt-prize__item>img {
    position: relative;
    width: 5vw;
    z-index: 10
}

.grayed-out {
    box-shadow: none;
    filter: grayscale(1) brightness(.9)
}

.playingField {
    background: url(/static/media/bgBig.e24ec9ec201e15c92877.jpg) repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 1
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .playingField {
        height:100%
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .playingField {
        height:100%
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .playingField {
        height:100vh
    }
}

.playingFieldMain {
    height: 100vh
}

.playingFieldMain__component {
    height: 70vh
}

.map {
    background: url(/static/media/backMap.718ce19086df22d40b8d.png) 50%;
    background-size: cover;
    height: 72vh;
    mask-image: linear-gradient(0deg,#0000 0,#000 0,#000 100%,#0000 0);
    -webkit-mask-image: linear-gradient(0deg,#0000 0,#000 0,#000 100%,#0000 0);
    min-height: 568px;
    overflow: hidden;
    position: relative;
    width: 100%
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .map {
        height:74vh;
        max-height: 68%
    }
}

@media only screen and (min-width: 3840px) {
    .map {
        height:65vh
    }
}

.map--content {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 5%;
    width: 90%
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .map--content {
        margin:0 10%;
        width: 80%
    }
}

.map--content--inner {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%
}

.map--content--inner--map {
    height: 90%;
    width: 90%
}

.map--content--inner--map,.map--content__back {
    background: url(/static/media/contentMap.b3016f17b4a7f36dc1bf.png) 50%;
    background-size: cover;
    mask-image: linear-gradient(90deg,#0000 0,#000 15%,#000 85%,#0000);
    -webkit-mask-image: linear-gradient(90deg,#0000 0,#000 15%,#000 85%,#0000)
}

.map--content__back {
    aspect-ratio: 16/9;
    position: relative;
    transition: .2s;
    width: 100%
}

.map--content__back--active {
    filter: sepia(1)
}

.map__close {
    background: #272421;
    border-radius: 8px;
    box-shadow: 0 0 0 3px #656b6e82;
    color: #fff;
    cursor: pointer;
    display: flex;
    padding: .3vw;
    position: absolute;
    right: 1.2vw;
    top: 3vh;
    z-index: 5
}

.map__close img {
    height: 1.5vw;
    width: 1.5vw
}

.map-object {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    pointer-events: none;
    position: absolute
}

.map-object[name] {
    border: 1px solid blue
}

.map-object:not([name]) {
    border-radius: 100%
}

.map-object>img {
    height: auto;
    width: 1.2vw
}

.characterMap {
    font-size: 20px;
    font-weight: 700;
    will-change: left,top
}

.characterMap--icon>img {
    filter: drop-shadow(.2vw .2vw .18vw rgba(0,0,0,.6784313725));
    height: auto;
    transform: translateX(30%);
    width: 3vw
}

.map-edge {
    opacity: 1;
    pointer-events: none;
    position: absolute
}

.bottom,.top {
    height: 5vw;
    left: 0;
    opacity: 1;
    width: 100%
}

.top {
    align-items: flex-start;
    background: linear-gradient(0deg,#cec5b800 50%,#cec5b8 0);
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%
}

.top--item,.top--item--img {
    height: 100%;
    width: 100%
}

.top--item--img {
    background: url(/static/media/topMap.b3eedf18df687cdfb72b.png) 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%
}

.top--item--overlay {
    background: linear-gradient(0deg,#a1a1a100 35%,#ccae83 75%);
    height: 200%;
    opacity: .5;
    position: absolute;
    top: 40%;
    width: 100%;
    z-index: -1
}

.bottom {
    align-items: flex-end;
    background: linear-gradient(180deg,#cec5b800 50%,#cec5b8 60%);
    bottom: -2%;
    display: flex;
    justify-content: center;
    width: 100%
}

.bottom--item,.bottom--item--img {
    height: 100%;
    width: 100%
}

.bottom--item--img {
    background: url(/static/media/bottomMap.2d7d75728c9a3e4335a6.png) 50%;
    background-size: 100% 100%
}

.bottom--item--overlay {
    background: linear-gradient(180deg,#a1a1a100 35%,#ccae83 75%);
    bottom: 40%;
    height: 200%;
    opacity: .5;
    position: absolute;
    width: 100%;
    z-index: -1
}

.left,.right {
    height: 100%;
    opacity: 1;
    top: 0;
    width: 12vw
}

.left {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: left;
    left: 0
}

.left--item {
    height: 100%;
    width: 70%
}

.left--item--img {
    background: url(/static/media/leftMap.687744b51ce3b306a71d.png) 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 101%;
    width: 100%
}

.right {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: right;
    right: 0
}

.right--item {
    height: 100%;
    width: 70%
}

.right--item--img {
    background: url(/static/media/rightMap.5be15c2c3a05312fd258.png) 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%
}

.buttons {
    position: fixed;
    z-index: 10
}

.PENone {
    pointer-events: none
}

.devMode .map-object[name] {
    border: 0 solid!important
}

.neighbor {
    cursor: pointer;
    pointer-events: all
}

.neighbor>img {
    height: auto;
    transition: transform .3s ease;
    width: 1.2vw;
    z-index: 2
}

.neighbor:hover>img {
    transform: scale(1.2)
}

.neighbor_img {
    bottom: 0;
    height: 5vw!important;
    position: absolute;
    width: 2.2vw!important;
    z-index: 1
}

.loc\.1>img {
    height: auto;
    width: 2.5vw
}

.loc\.2>img {
    height: auto;
    width: 1.2vw
}

.loc\.4>img {
    height: auto;
    width: 2.5vw
}

.loc\.5>img {
    height: auto;
    width: 1.6vw
}

.loc\.6>img {
    height: auto;
    width: 3vw
}

.loc\.6 .neighbor_img {
    height: 7vw!important;
    width: 4.2vw!important
}

.loc\.7>img {
    height: auto;
    width: 1.8vw
}

.loc\.8>img {
    height: auto;
    width: 4vw
}

.loc\.10>img {
    height: auto;
    width: 3.5vw
}

.loc\.10 .neighbor_img {
    height: 7vw!important;
    width: 5.2vw!important
}

.loc\.11>img {
    height: auto;
    width: 1.5vw
}

.loc\.12>img,.loc\.13>img {
    height: auto;
    width: 2vw
}

.loc\.14>img {
    height: auto;
    width: 2.2vw
}

.loc\.15>img {
    height: auto;
    width: 3.2vw
}

.loc\.15 .neighbor_img {
    height: 6vw!important;
    width: 3.2vw!important
}

.loc\.16>img {
    height: auto;
    width: 1.8vw
}

.loc\.17>img {
    height: auto;
    width: 2vw
}

.loc\.18>img {
    height: auto;
    width: 3vw
}

.locationIn {
    height: 100vh;
    position: relative
}

.locationIn__back {
    height: 70vh;
    margin-bottom: 0;
    width: 100%
}

.locationIn__back>img {
    mask-image: linear-gradient(0deg,#0000 8%,#000 20%);
    -webkit-mask-image: linear-gradient(0deg,#0000 8%,#000 14%);
    width: 100%
}

.locationIn__back--button {
    left: 3vw;
    position: absolute;
    top: .8vw
}

.locationIn__back--drops {
    bottom: 6vw;
    margin-bottom: 0;
    position: relative;
    z-index: -1
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .locationIn__back--drops {
        bottom:96px
    }
}

.locationIn__back--drops>img {
    display: block;
    height: 35vh;
    mask-image: linear-gradient(0deg,#0000 0,#000);
    -webkit-mask-image: linear-gradient(0deg,#0000 0,#000);
    width: 100%
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .locationIn__back--drops>img {
        height:24vh
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .locationIn__back--drops>img {
        height:24vh
    }
}

.locationIn__container {
    height: 70vh;
    position: absolute;
    top: 0
}

.locationIn__container--test {
    background: #fff;
    cursor: pointer;
    padding: 10px;
    text-align: center
}

.locationIn__container--test:hover {
    background: #e5e5e5
}

.locationIn__container--buttons {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    left: 2%;
    position: absolute;
    top: 3%
}

.locationIn__container--item {
    cursor: pointer;
    position: absolute
}

.locationIn__container--item--back {
    bottom: 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: .3s;
    z-index: 1
}

.locationIn__container--item--back>img {
    cursor: pointer;
    width: 100%
}

.locationIn__container--item--back.l7b2:hover~.locationIn__container--item--back--back {
    cursor: pointer;
    opacity: 1
}

.locationIn__container--item>.imgLI {
    cursor: pointer;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    z-index: 2
}

.locationIn__container--item>.imgLI:hover+.locationIn__container--item--back {
    cursor: pointer;
    opacity: 1
}

.locationIn--money {
    background: radial-gradient(circle,rgba(0,0,0,.651) 30%,#fff0 100%);
    left: 3vw;
    min-width: 4vw;
    position: absolute;
    top: 2vw;
    z-index: 1
}

.l1b1 {
    left: 27vw;
    min-width: 221px;
    top: 2.2vw;
    width: 16.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l1b1 {
        left:367px;
        top: 30px
    }
}

@media only screen and (min-width: 3840px) {
    .l1b1 {
        left:1030px;
        top: 70px;
        width: 620px
    }
}

.l1b2 {
    left: 17vw;
    min-width: 139px;
    top: 17.2vw;
    width: 10.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l1b2 {
        left:231px;
        top: 234px
    }
}

@media only screen and (min-width: 3840px) {
    .l1b2 {
        left:600px;
        top: 640px;
        width: 400px
    }
}

.l1b3 {
    left: 42.2vw;
    min-width: 207px;
    top: 13.2vw;
    width: 15.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l1b3 {
        left:574px;
        top: 179px
    }
}

@media only screen and (min-width: 3840px) {
    .l1b3 {
        left:1650px;
        top: 500px;
        width: 600px
    }
}

.l1b4 {
    left: 43.2vw;
    min-width: 112px;
    top: 30.2vw;
    width: 8.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l1b4 {
        left:587px;
        top: 410px
    }
}

@media only screen and (min-width: 3840px) {
    .l1b4 {
        left:1650px;
        top: 1150px;
        width: 300px
    }
}

.l1b5 {
    left: 25vw;
    min-width: 112px;
    top: 25.2vw;
    width: 12.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l1b5 {
        left:587px;
        top: 410px
    }
}

@media only screen and (min-width: 3840px) {
    .l1b5 {
        left:1650px;
        top: 1150px;
        width: 300px
    }
}

.l2b1 {
    height: 10.2vw;
    left: 46vw;
    top: 2.2vw;
    width: 7.2vw
}

.l2b1 .imgLI {
    width: 260px
}

.l2b1 .locationIn__container--item--back {
    bottom: -7vh;
    left: 1vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l2b1 {
        height:156px;
        left: 650px;
        top: 110px;
        width: 110px
    }
}

@media only screen and (min-width: 3840px) {
    .l2b1 {
        height:400px;
        left: 1820px;
        top: 300px;
        width: 250px
    }

    .l2b1 .imgLI {
        height: 400px!important
    }
}

.l2b2 {
    height: 12.2vw;
    left: 13vw;
    top: 12.2vw;
    width: 7.2vw
}

.l2b2 .imgLI {
    width: 200px
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l2b2 {
        height:187px;
        left: 220px;
        top: 202px;
        width: 110px
    }
}

@media only screen and (min-width: 3840px) {
    .l2b2 {
        height:500px;
        left: 620px;
        top: 600px;
        width: 300px
    }

    .l2b2 .imgLI {
        height: 500px!important
    }
}

.l2b3 {
    left: 30.2vw;
    top: 22.6vw;
    width: 9.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l2b3 {
        left:404px;
        top: 302px;
        width: 141px
    }
}

@media only screen and (min-width: 3840px) {
    .l2b3 {
        left:1150px;
        top: 850px;
        width: 350px
    }
}

.l3b1 {
    left: 22.5vw;
    top: 3.6vw;
    width: 27.2vw
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l3b1 {
        left:21.5vw;
        top: 3vw
    }
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l3b1 {
        left:294px;
        top: 28px;
        width: 420px
    }
}

@media only screen and (min-width: 1365px)and (min-height:767px)and (max-width:1707px)and (max-height:960px) {
    .l3b1 {
        left:294px;
        top: 28px;
        width: 420px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .l3b1 {
        left:21.3vw;
        top: 3vw;
        width: 27.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l3b1 {
        left:779px;
        top: 64px;
        width: 1120px
    }

    .l3b1>div {
        left: -100px!important;
        top: 0;
        transform: scaleX(1.1)
    }
}

.l3b2 {
    left: 31vw;
    min-width: 288px;
    top: 17.6vw;
    width: 21.2vw;
    z-index: 2
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l3b2 {
        left:467px;
        top: 259px
    }
}

@media only screen and (min-width: 1365px)and (min-height:767px)and (max-width:1707px)and (max-height:960px) {
    .l3b2 {
        left:464px;
        top: 259px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .l3b2 {
        left:31.9vw;
        top: 18vw;
        width: 20.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l3b2 {
        left:1200px;
        top: 672px;
        width: 840px
    }
}

.l3b3 {
    left: 43.2vw;
    min-width: 125px;
    top: 27.2vw;
    width: 9.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l3b3 {
        left:593px;
        top: 371px
    }
}

@media only screen and (min-width: 1365px)and (min-height:767px)and (max-width:1707px)and (max-height:960px) {
    .l3b3 {
        left:622px;
        top: 393px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .l3b3 {
        left:43.2vw;
        top: 27.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l3b3 {
        left:1646px;
        top: 1050px;
        width: 360px
    }
}

.l3b2_1 {
    left: 38.5vw;
    top: 15.5vw;
    width: 12vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l3b2_1 {
        left:45.5vw;
        top: 19.5vw
    }
}

@media only screen and (min-width: 1365px)and (min-height:767px)and (max-width:1707px)and (max-height:960px) {
    .l3b2_1 {
        left:38.5vw;
        top: 15.5vw;
        width: 12vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .l3b2_1 {
        left:38.5vw;
        top: 15.5vw;
        width: 12vw
    }
}

@media only screen and (min-width: 3840px) {
    .l3b2_1 {
        left:38.5vw;
        top: 15.5vw;
        width: 12vw
    }
}

.l3b2_2 {
    left: 27.5vw;
    top: 6.5vw;
    width: 12vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l3b2_2 {
        left:31.5vw;
        top: 9.5vw;
        width: 12vw
    }
}

@media only screen and (min-width: 1365px)and (min-height:767px)and (max-width:1707px)and (max-height:960px) {
    .l3b2_2 {
        left:27.5vw;
        top: 6.5vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .l3b2_2 {
        left:27.5vw;
        top: 6.5vw;
        width: 12vw
    }
}

@media only screen and (min-width: 3840px) {
    .l3b2_2 {
        left:27.5vw;
        top: 6.5vw;
        width: 360px
    }
}

.l4b1 {
    left: 21.5vw;
    top: 5.8vw;
    width: 10.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l4b1 {
        left:291px;
        top: 76px;
        width: 145px
    }
}

@media only screen and (min-width: 3840px) {
    .l4b1 {
        left:820px;
        top: 200px;
        width: 400px
    }
}

.l4b2 {
    left: 38vw;
    top: 14.6vw;
    width: 11.4vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l4b2 {
        left:513px;
        top: 198px;
        width: 166px
    }
}

@media only screen and (min-width: 3840px) {
    .l4b2 {
        left:1480px;
        top: 580px;
        width: 430px
    }
}

.l4b3 {
    left: 23vw;
    top: 23vw;
    width: 20.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l4b3 {
        left:319px;
        top: 309px;
        width: 277px
    }
}

@media only screen and (min-width: 3840px) {
    .l4b3 {
        left:900px;
        top: 850px;
        width: 730px
    }
}

.l4b4 {
    left: 48vw;
    top: 25.2vw;
    width: 7.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l4b4 {
        left:651px;
        top: 344px;
        width: 110px
    }
}

@media only screen and (min-width: 3840px) {
    .l4b4 {
        left:1860px;
        top: 1000px;
        width: 300px
    }
}

.l5b1 {
    left: 40.5vw;
    top: 6vw;
    width: 13.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l5b1 {
        left:554px;
        top: 65px;
        width: 202px
    }
}

@media only screen and (min-width: 3840px) {
    .l5b1 {
        left:1570px;
        top: 230px;
        width: 510px
    }
}

.l5b2 {
    left: 25.8vw;
    top: 18.38vw;
    width: 6.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l5b2 {
        left:352px;
        top: 249px;
        width: 95px
    }
}

@media only screen and (min-width: 3840px) {
    .l5b2 {
        left:1000px;
        top: 700px;
        width: 250px
    }
}

.l5b3 {
    left: 41vw;
    top: 19.4vw;
    width: 8.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l5b3 {
        left:552px;
        top: 269px;
        width: 125px
    }
}

@media only screen and (min-width: 3840px) {
    .l5b3 {
        left:1600px;
        top: 740px;
        width: 320px
    }
}

.l5b4 {
    left: 10vw;
    top: 23vw;
    width: 10.2vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .l5b4 {
        left:127px;
        top: 315px;
        width: 156px
    }
}

@media only screen and (min-width: 3840px) {
    .l5b4 {
        left:390px;
        top: 880px;
        width: 400px
    }
}

.l6b1 {
    left: 45vw;
    top: 12.1vw;
    width: 11.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b1 {
        left:47.9vw;
        top: 13.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b1 {
        left:47.9vw;
        top: 13.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b1 {
        left:45.5vw;
        top: 12.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b1 {
        left:1744px;
        top: 507px;
        width: 400px
    }

    .l6b1Back {
        bottom: .3vw!important;
        height: 1vw;
        left: 1vw!important;
        width: 1vw
    }

    .l6b1Back>img {
        bottom: -1vw!important;
        height: 35vh!important;
        left: -1vw!important;
        position: absolute;
        width: 5vw!important
    }
}

.l6b2 {
    left: 55.9vw;
    top: 15vw;
    width: 10.9vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b2 {
        left:57.5vw;
        top: 16vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b2 {
        left:57.5vw;
        top: 16vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b2 {
        left:56.5vw;
        top: 15.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b2 {
        left:2128px;
        top: 580px;
        width: 400px
    }
}

.l6b3 {
    left: 9vw;
    top: 11.2vw;
    width: 15vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b3 {
        top:12.9vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b3 {
        top:12.9vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b3 {
        left:9.2vw;
        top: 11.3vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b3 {
        left:338px;
        top: 416px;
        width: 590px
    }
}

.l6b4 {
    left: 37vw;
    top: 20vw;
    width: 7.8vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b4 {
        left:39vw;
        top: 21vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b4 {
        left:39vw;
        top: 21vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b4 {
        left:37.5vw;
        top: 20.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b4 {
        left:1429px;
        top: 771px;
        width: 300px
    }
}

.l6b5 {
    left: 19.7vw;
    top: 25.6vw;
    width: 20vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b5 {
        left:22.2vw;
        top: 27.1vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b5 {
        left:22.2vw;
        top: 27.1vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b5 {
        left:20.1vw;
        top: 26vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b5 {
        left:765px;
        top: 990px;
        width: 751px
    }

    .l6b5Back {
        bottom: 50px!important;
        left: 185px!important
    }

    .l6b5Back>img {
        height: 492px!important;
        width: 468px!important
    }
}

.l6b6 {
    left: 23.8vw;
    top: 13.7vw;
    width: 9.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b6 {
        left:25.3vw;
        top: 15vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b6 {
        left:25.3vw;
        top: 15vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b6 {
        left:24.2vw;
        top: 14.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b6 {
        left:915px;
        top: 529px;
        width: 360px
    }
}

.l6b7 {
    left: 49.5vw;
    top: 25vw;
    width: 7.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l6b7 {
        left:52.5vw;
        top: 26.6vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l6b7 {
        left:52.5vw;
        top: 26.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l6b7 {
        left:50vw;
        top: 25.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l6b7 {
        left:1906px;
        top: 968px;
        width: 275px
    }
}

.l7b1 {
    height: 7vw;
    left: 22vw;
    top: 20vw;
    width: 7.5vw;
    z-index: 10
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l7b1 {
        left:23vw;
        top: 21vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l7b1 {
        left:22vw;
        top: 20vw
    }
}

@media only screen and (min-width: 3840px) {
    .l7b1 {
        height:200px;
        left: 840px;
        top: 860px;
        width: 285px
    }
}

.l7b2 {
    height: 7vw;
    left: 33vw;
    pointer-events: all;
    top: 21.1vw;
    width: 12vw
}

.l7b2:hover .locationIn__container--item--back {
    cursor: pointer;
    opacity: 1
}

.l7b2>img {
    bottom: 0;
    left: -9.5vw;
    pointer-events: none;
    position: absolute;
    width: 28vw;
    z-index: 10
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l7b2>img {
        width:29vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l7b2>img {
        width:29vw
    }
}

@media only screen and (min-width: 3840px) {
    .l7b2>img {
        left:-245px;
        top: -300px;
        width: 1120px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l7b2 {
        left:34.5vw;
        top: 22.3vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l7b2 {
        left:33vw;
        top: 21.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l7b2 {
        left:1100px;
        top: 769px;
        width: 660px
    }
}

.l7b3 {
    left: 40.5vw;
    mask-image: linear-gradient(0deg,#0000 8%,#000 20%);
    -webkit-mask-image: linear-gradient(0deg,#0000 8%,#000 14%);
    top: 25vw;
    width: 15vw;
    z-index: 2
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l7b3 {
        left:42.5vw;
        top: 26.3vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l7b3 {
        left:41vw;
        top: 25.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l7b3 {
        left:1680px;
        top: 995px;
        width: 420px
    }
}

.l7b4 {
    left: 7vw;
    mask-image: linear-gradient(0deg,#0000 8%,#000 20%);
    -webkit-mask-image: linear-gradient(0deg,#0000 8%,#000 14%);
    top: 4.6vw;
    width: 4vw;
    z-index: 2
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l7b4 {
        left:7vw;
        top: 4.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l7b4 {
        left:7vw;
        top: 4.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l7b4 {
        left:1680px;
        top: 995px;
        width: 420px
    }
}

.l7b3Back {
    bottom: 3vw;
    left: 8vw
}

@media only screen and (min-width: 3840px) {
    .l7b3Back {
        bottom:1vw!important;
        height: 10vh;
        left: 3vw!important;
        width: 4vw
    }

    .l7b3Back>img {
        height: 9vh!important;
        width: 5vw!important
    }
}

.l8b1 {
    left: 41.7vw;
    top: 10.7vw;
    width: 15.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l8b1 {
        left:45vw;
        top: 11.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l8b1 {
        left:45vw;
        top: 11.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l8b1 {
        left:42.3vw;
        top: 11vw
    }
}

@media only screen and (min-width: 3840px) {
    .l8b1 {
        left:1580px;
        top: 410px;
        width: 610px
    }
}

.l8b2 {
    left: 15.9vw;
    top: 8vw;
    width: 20.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l8b2 {
        left:17.2vw;
        top: 8.8vw;
        width: 21vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l8b2 {
        left:17.2vw;
        top: 8.8vw;
        width: 21vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l8b2 {
        left:16.4vw;
        top: 8.4vw
    }
}

@media only screen and (min-width: 3840px) {
    .l8b2 {
        left:620px;
        top: 315px;
        width: 765px
    }
}

.l8b3 {
    left: 38.5vw;
    top: 23vw;
    width: 18vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l8b3 {
        left:40.7vw;
        top: 24.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l8b3 {
        left:40.7vw;
        top: 24.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l8b3 {
        left:39.3vw;
        top: 23.4vw
    }
}

@media only screen and (min-width: 3840px) {
    .l8b3 {
        left:1510px;
        top: 895px;
        width: 660px
    }
}

.l8b4 {
    left: 34.2vw;
    top: 16.5vw;
    width: 8vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l8b4 {
        left:36vw;
        top: 17.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l8b4 {
        left:36vw;
        top: 17.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l8b4 {
        left:34.8vw;
        top: 16.9vw
    }
}

@media only screen and (min-width: 3840px) {
    .l8b4 {
        left:1330px;
        top: 640px;
        width: 290px
    }
}

.l8b5 {
    left: 23.2vw;
    top: 27.2vw;
    width: 11.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l8b5 {
        left:24.2vw;
        top: 28.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l8b5 {
        left:24.2vw;
        top: 28.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l8b5 {
        left:23.5vw;
        top: 27.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l8b5 {
        left:880px;
        top: 1040px;
        width: 420px
    }
}

.l9b1 {
    left: 11.1vw;
    top: 2.1vw;
    width: 22vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l9b1 {
        left:11.75vw;
        top: 2.1vw;
        width: 23.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l9b1 {
        left:11.75vw;
        top: 1.9vw;
        width: 24vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l9b1 {
        left:11.3vw;
        top: 2.1vw;
        width: 22.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l9b1 {
        left:428px;
        top: 80px;
        width: 845px
    }
}

.l9b2 {
    left: 27.5vw;
    mask-image: linear-gradient(0deg,#0000 17%,#000 41%);
    -webkit-mask-image: linear-gradient(0deg,#0000 17%,#000 41%);
    top: 24.3vw;
    width: 18vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l9b2 {
        left:29.8vw;
        top: 26vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l9b2 {
        left:29.9vw;
        top: 26vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l9b2 {
        left:28.2vw;
        top: 25vw
    }
}

@media only screen and (min-width: 3840px) {
    .l9b2 {
        left:1085px;
        top: 945px;
        width: 650px
    }
}

.l10b1 {
    left: 27.5vw;
    top: 2.2vw;
    width: 12.1vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b1 {
        left:29.1vw;
        top: 2.7vw;
        width: 12.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b1 {
        left:29vw;
        top: 2.5vw;
        width: 12.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l10b1 {
        left:27.7vw;
        top: 2.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b1 {
        left:1040px;
        top: 80px;
        width: 470px
    }
}

.l10b2 {
    left: 55.6vw;
    top: 13.3vw;
    width: 7.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b2 {
        left:58.8vw;
        top: 14vw;
        width: 8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b2 {
        left:58.7vw;
        top: 14vw;
        width: 8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l10b2 {
        left:56.5vw;
        top: 13.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b2 {
        left:2135px;
        top: 510px;
        width: 290px
    }
}

.l10b3 {
    left: 35.5vw;
    top: 13vw;
    width: 9.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b3 {
        left:37.5vw;
        top: 14vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b3 {
        left:37.5vw;
        top: 14vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b3 {
        left:1330px;
        top: 500px;
        width: 350px
    }
}

.l10b4 {
    left: 7vw;
    top: 17.5vw;
    width: 11vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b4 {
        left:8vw;
        top: 18.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b4 {
        left:8vw;
        top: 18.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b4 {
        left:270px;
        top: 660px;
        width: 420px
    }
}

.l10b5 {
    left: 18.5vw;
    top: 21.6vw;
    width: 15.9vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b5 {
        left:19.5vw;
        top: 22.6vw;
        width: 16.9vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b5 {
        left:19.5vw;
        top: 22.6vw;
        width: 16.9vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l10b5 {
        left:18.5vw;
        top: 21.6vw;
        width: 15.9vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b5 {
        left:700px;
        top: 825px;
        width: 600px
    }
}

.l10b6 {
    left: 41vw;
    mask-image: linear-gradient(0deg,#0000 14%,#000 19%);
    -webkit-mask-image: linear-gradient(0deg,#0000 14%,#000 19%);
    top: 24.8vw;
    width: 25.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b6 {
        left:44vw;
        top: 26.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b6 {
        left:43.2vw;
        top: 26.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b6 {
        left:1580px;
        top: 970px;
        width: 930px
    }
}

.l10b7 {
    left: 31.2vw;
    top: 29.2vw;
    width: 6.6vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l10b7 {
        left:32.8vw;
        top: 30.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l10b7 {
        left:32.5vw;
        top: 30.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l10b7 {
        left:31.2vw;
        top: 29.2vw;
        width: 6.6vw
    }
}

@media only screen and (min-width: 3840px) {
    .l10b7 {
        left:1165px;
        top: 1095px;
        width: 270px
    }
}

.l10b6Back {
    bottom: 3vw;
    left: 8vw
}

@media only screen and (min-width: 3840px) {
    .l10b6Back {
        bottom:7vw!important;
        height: 10vh;
        left: 13vw!important;
        width: 3vw
    }

    .l10b6Back>img {
        height: 18vh!important;
        width: 8vw!important
    }
}

.l11b1 {
    left: 26vw;
    top: 2.3vw;
    width: 11.3vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l11b1 {
        left:27.5vw;
        top: 3vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l11b1 {
        left:27.5vw;
        top: 3vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l11b1 {
        top:2.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l11b1 {
        left:990px;
        top: 100px;
        width: 420px
    }
}

.l11b2 {
    left: 40.1vw;
    top: 9.5vw;
    width: 6.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l11b2 {
        left:41.5vw;
        top: 10.6vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l11b2 {
        left:41.5vw;
        top: 10.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l11b2 {
        left:40.6vw;
        top: 9.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .l11b2 {
        left:1530px;
        top: 365px;
        width: 250px
    }
}

.l11b3 {
    left: 14vw;
    top: 19.3vw;
    width: 16vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l11b3 {
        left:15vw;
        top: 20.7vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l11b3 {
        left:15vw;
        top: 20.7vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l11b3 {
        left:14.5vw;
        top: 19.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l11b3 {
        left:560px;
        top: 755px;
        width: 570px
    }
}

.l11b4 {
    left: 43.5vw;
    top: 24.5vw;
    width: 16vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l11b4 {
        left:46.2vw;
        top: 26vw;
        width: 16.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l11b4 {
        left:46.2vw;
        top: 26vw;
        width: 16.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l11b4 {
        left:44.2vw;
        top: 25vw
    }
}

@media only screen and (min-width: 3840px) {
    .l11b4 {
        left:1660px;
        top: 940px;
        width: 620px
    }

    .l11b2Back {
        bottom: 3.7vw!important;
        height: 10vh;
        left: 1vw!important;
        width: 3vw
    }

    .l11b2Back>img {
        height: 18vh!important;
        width: 8vw!important
    }

    .l11b3Back {
        bottom: 5.8vw!important;
        height: 10vh;
        left: 3.9vw!important;
        width: 3vw
    }

    .l11b3Back>img {
        height: 18vh!important;
        width: 8vw!important
    }
}

.l12b1 {
    left: 27vw;
    top: 3.5vw;
    width: 10vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l12b1 {
        left:28.5vw;
        top: 4.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l12b1 {
        left:28.5vw;
        top: 4.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l12b1 {
        left:27.2vw;
        top: 3.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l12b1 {
        left:1030px;
        top: 140px;
        width: 380px
    }
}

.l12b2 {
    left: 32vw;
    top: 19.5vw;
    width: 18.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l12b2 {
        left:34vw;
        top: 20.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l12b2 {
        left:34vw;
        top: 20.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l12b2 {
        left:32vw;
        top: 19.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l12b2 {
        left:1250px;
        top: 750px;
        width: 650px
    }
}

.l12b3 {
    left: 19vw;
    top: 23vw;
    width: 11vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l12b3 {
        left:20vw;
        top: 24vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l12b3 {
        left:20vw;
        top: 24vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l12b3 {
        left:19vw;
        top: 23vw
    }
}

@media only screen and (min-width: 3840px) {
    .l12b3 {
        left:715px;
        top: 865px;
        width: 400px
    }
}

.l13b1 {
    left: 18.5vw;
    top: 3.2vw;
    width: 8vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l13b1 {
        left:19.9vw;
        top: 3.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l13b1 {
        left:19.9vw;
        top: 3.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l13b1 {
        left:18.7vw;
        top: 3.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l13b1 {
        left:715px;
        top: 140px;
        width: 300px
    }
}

.l13b2 {
    left: 36vw;
    top: 12.2vw;
    width: 19vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l13b2 {
        left:38vw;
        top: 13.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l13b2 {
        left:38vw;
        top: 13.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l13b2 {
        left:36vw;
        top: 12.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l13b2 {
        left:1370px;
        top: 455px;
        width: 770px
    }
}

.l13b3 {
    left: 35.9vw;
    top: 21vw;
    width: 17vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l13b3 {
        left:37.8vw;
        top: 22.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l13b3 {
        left:37.8vw;
        top: 22.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l13b3 {
        left:36.4vw;
        top: 21.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l13b3 {
        left:1390px;
        top: 825px;
        width: 575px
    }
}

.l13b4 {
    left: 23vw;
    mask-image: linear-gradient(0deg,#0000 35%,#000 55%);
    -webkit-mask-image: linear-gradient(0deg,#0000 35%,#000 55%);
    top: 27vw;
    width: 12vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l13b4 {
        left:25vw;
        top: 28.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l13b4 {
        left:25vw;
        top: 28.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l13b4 {
        left:23vw;
        top: 27vw
    }
}

@media only screen and (min-width: 3840px) {
    .l13b4 {
        left:890px;
        top: 1035px;
        width: 430px
    }
}

.l14b1 {
    left: 36vw;
    top: 1.5vw;
    width: 21.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l14b1 {
        left:39vw;
        top: 2.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l14b1 {
        left:39vw;
        top: 2.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l14b1 {
        left:36.9vw;
        top: 1.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l14b1 {
        left:1390px;
        top: 65px;
        width: 805px
    }
}

.l14b2 {
    left: 30.8vw;
    top: 12vw;
    width: 7vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l14b2 {
        left:32.6vw;
        top: 12.7vw;
        width: 7.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l14b2 {
        left:32.6vw;
        top: 12.7vw;
        width: 7.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l14b2 {
        left:31.4vw;
        top: 12.3vw
    }
}

@media only screen and (min-width: 3840px) {
    .l14b2 {
        left:1190px;
        top: 465px;
        width: 270px
    }
}

.l14b3 {
    left: 22.2vw;
    top: 11.4vw;
    width: 9.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l14b3 {
        left:23.5vw;
        top: 12vw;
        width: 9.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l14b3 {
        left:23.5vw;
        top: 12vw;
        width: 9.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l14b3 {
        left:22.5vw;
        top: 11.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l14b3 {
        left:850px;
        top: 440px;
        width: 350px
    }
}

.l14b4 {
    left: 51.2vw;
    top: 11.4vw;
    width: 9.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l14b4 {
        left:54.2vw;
        top: 12.4vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l14b4 {
        left:54.2vw;
        top: 12.4vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l14b4 {
        left:51.8vw;
        top: 11.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l14b4 {
        left:1970px;
        top: 440px;
        width: 340px
    }
}

.l14b5 {
    left: 40vw;
    mask-image: linear-gradient(0deg,#0000 25%,#000 38%);
    -webkit-mask-image: linear-gradient(0deg,#0000 25%,#000 38%);
    top: 21.4vw;
    width: 19.2vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l14b5 {
        left:42.5vw;
        top: 23vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l14b5 {
        left:42.5vw;
        top: 23vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l14b5 {
        left:40.5vw;
        top: 21.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l14b5 {
        left:1560px;
        top: 830px;
        width: 700px
    }
}

.l15b1 {
    left: 27.4vw;
    top: 4.5vw;
    width: 25.5vw;
    z-index: 3
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b1 {
        left:29vw;
        top: 4vw;
        width: 27.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b1 {
        left:29vw;
        top: 4vw;
        width: 27.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b1 {
        left:28vw;
        top: 4.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b1 {
        left:1070px;
        top: 160px;
        width: 970px
    }
}

.l15b2 {
    left: 45vw;
    top: 4.1vw;
    width: 22vw;
    z-index: 1
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b2 {
        left:48.6vw;
        top: 4.7vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b2 {
        left:48.6vw;
        top: 4.7vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b2 {
        left:46.1vw;
        top: 4.5vw;
        width: 21.8vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b2 {
        left:1752px;
        top: 170px;
        width: 815px
    }
}

.l15b3 {
    left: 12.4vw;
    top: 10.2vw;
    width: 14vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b3 {
        left:14vw;
        top: 11.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b3 {
        left:14vw;
        top: 11.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b3 {
        left:13vw;
        top: 10.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b3 {
        left:420px;
        top: 340px;
        width: 600px
    }
}

.l15b4 {
    left: 51.7vw;
    top: 17.4vw;
    width: 14vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b4 {
        left:55.4vw;
        top: 18.6vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b4 {
        left:55.4vw;
        top: 18.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b4 {
        left:52.5vw;
        top: 17.7vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b4 {
        left:1985px;
        top: 665px;
        width: 540px
    }
}

.l15b5 {
    left: 8.7vw;
    mask-image: linear-gradient(0deg,#0000 0,#000 19%);
    -webkit-mask-image: linear-gradient(0deg,#0000 0,#000 19%);
    top: 23vw;
    width: 14vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b5 {
        left:9.1vw;
        top: 24.2vw;
        width: 15vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b5 {
        left:9.1vw;
        top: 24.2vw;
        width: 15vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b5 {
        left:8.8vw;
        top: 23.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b5 {
        left:330px;
        top: 895px;
        width: 530px
    }
}

.l15b6 {
    left: 22.7vw;
    top: 22.4vw;
    width: 12vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b6 {
        left:24vw;
        top: 23.7vw;
        width: 12.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b6 {
        left:24vw;
        top: 23.7vw;
        width: 12.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b6 {
        left:22.7vw;
        top: 22.7vw;
        width: 12.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b6 {
        left:860px;
        top: 865px;
        width: 470px
    }
}

.l15b7 {
    left: 43.4vw;
    mask-image: linear-gradient(0deg,#0000 27%,#000 50%);
    -webkit-mask-image: linear-gradient(0deg,#0000 27%,#000 50%);
    top: 26.6vw;
    width: 9vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l15b7 {
        left:45.7vw;
        top: 28.6vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l15b7 {
        left:45.7vw;
        top: 28.6vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l15b7 {
        left:43.8vw;
        top: 27.3vw
    }
}

@media only screen and (min-width: 3840px) {
    .l15b7 {
        left:1650px;
        top: 1050px;
        width: 305px
    }
}

.l16b1 {
    left: 24.5vw;
    top: 4.5vw;
    width: 20.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l16b1 {
        left:26.4vw;
        top: 5.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l16b1 {
        left:26.4vw;
        top: 5.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l16b1 {
        left:24.5vw;
        top: 4.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l16b1 {
        left:970px;
        top: 200px;
        width: 740px
    }
}

.l16b2 {
    left: 15vw;
    top: 14vw;
    width: 6vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l16b2 {
        left:16.2vw;
        top: 15.2vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l16b2 {
        left:16.2vw;
        top: 15.2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l16b2 {
        left:15.5vw;
        top: 14.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l16b2 {
        left:580px;
        top: 545px;
        width: 230px
    }
}

.l16b3 {
    left: 37vw;
    top: 24vw;
    width: 15vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l16b3 {
        left:40vw;
        top: 25.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l16b3 {
        left:40vw;
        top: 25.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l16b3 {
        left:37.5vw;
        top: 24.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l16b3 {
        left:1430px;
        top: 930px;
        width: 560px
    }
}

.l16b4 {
    left: 9vw;
    mask-image: linear-gradient(0deg,#0000 27%,#000 50%);
    -webkit-mask-image: linear-gradient(0deg,#0000 27%,#000 50%);
    top: 29vw;
    width: 16vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l16b4 {
        left:9vw;
        top: 31vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l16b4 {
        left:9vw;
        top: 31vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l16b4 {
        left:9vw;
        top: 29.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l16b4 {
        left:350px;
        top: 1140px;
        width: 550px
    }
}

.l17b1 {
    left: 25vw;
    top: 1.1vw;
    width: 27.1vw;
    z-index: 1
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l17b1 {
        left:26.5vw;
        top: 1.2vw;
        width: 28.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l17b1 {
        left:26.5vw;
        top: 1.2vw;
        width: 28.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l17b1 {
        left:25.6vw;
        top: 1.3vw
    }
}

@media only screen and (min-width: 3840px) {
    .l17b1 {
        left:965px;
        top: 42px;
        width: 1040px
    }
}

.l17b1Back {
    bottom: 7vw!important;
    left: 6vw!important
}

.l17b1Back>img {
    height: 53vh!important;
    width: 28vw!important
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l17b1Back>img {
        height:60vh!important;
        width: 29vw!important
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l17b1Back>img {
        height:60vh!important;
        width: 29vw!important
    }
}

@media only screen and (min-width: 3840px) {
    .l17b1Back {
        bottom:5vw!important;
        left: 5vw!important
    }

    .l17b1Back>img {
        height: 53vh!important;
        width: 23vw!important
    }
}

.l17b2 {
    left: 37vw;
    top: 13.6vw;
    width: 19vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l17b2 {
        left:39.6vw;
        top: 14.5vw;
        width: 19.7vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l17b2 {
        left:39.6vw;
        top: 14.5vw;
        width: 19.7vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l17b2 {
        left:37.9vw;
        top: 13.9vw
    }
}

@media only screen and (min-width: 3840px) {
    .l17b2 {
        left:1450px;
        top: 530px;
        width: 700px
    }
}

.l17b3 {
    left: 4.8vw;
    top: 16.7vw;
    width: 19vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l17b3 {
        left:5.3vw;
        top: 17.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l17b3 {
        left:5.3vw;
        top: 17.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l17b3 {
        left:4.8vw;
        top: 17vw
    }
}

@media only screen and (min-width: 3840px) {
    .l17b3 {
        left:160px;
        top: 630px;
        width: 800px
    }
}

.l17b4 {
    left: 8.8vw;
    top: 29.7vw;
    width: 23vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l17b4 {
        left:9.8vw;
        top: 31.4vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l17b4 {
        left:9.8vw;
        top: 31.4vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l17b4 {
        left:8.8vw;
        top: 30.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l17b4 {
        left:365px;
        top: 1150px;
        width: 800px
    }

    .l17b4Back {
        left: 4.8vw!important
    }
}

.l18b1 {
    left: 33.6vw;
    top: -4.8vw;
    width: 26.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l18b1 {
        left:35.8vw;
        width: 27.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l18b1 {
        left:35.8vw;
        width: 27.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l18b1 {
        left:34.1vw;
        width: 27vw
    }
}

@media only screen and (min-width: 3840px) {
    .l18b1 {
        left:1300px;
        top: -185px;
        width: 1010px
    }
}

.l18b2 {
    left: 42vw;
    mask-image: linear-gradient(0deg,#0000 24%,#000 43%);
    -webkit-mask-image: linear-gradient(0deg,#0000 24%,#000 43%);
    top: 16.8vw;
    width: 19vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l18b2 {
        left:44.5vw;
        top: 18.4vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l18b2 {
        left:44.5vw;
        top: 18.4vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l18b2 {
        left:42.5vw;
        top: 16.5vw;
        width: 20.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l18b2 {
        left:1610px;
        top: 570px;
        width: 870px
    }
}

.l18b3 {
    left: 16.6vw;
    top: 12vw;
    width: 21.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l18b3 {
        left:17.5vw;
        top: 12.5vw;
        width: 22.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l18b3 {
        left:17.5vw;
        top: 12.5vw;
        width: 22.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l18b3 {
        left:17vw
    }
}

@media only screen and (min-width: 3840px) {
    .l18b3 {
        left:650px;
        top: 460px;
        width: 800px
    }
}

.l18b4 {
    left: 15.6vw;
    top: 22vw;
    width: 13.5vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l18b4 {
        left:17.2vw;
        top: 23.3vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l18b4 {
        left:17.2vw;
        top: 23.3vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l18b4 {
        left:16.2vw;
        top: 22.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l18b4 {
        left:640px;
        top: 850px;
        width: 490px
    }
}

.l19b1 {
    left: 11.2vw;
    top: 1.1vw;
    width: 12vw;
    z-index: 3
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l19b1 {
        left:12vw;
        top: 1.9vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l19b1 {
        left:12vw;
        top: 1.9vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l19b1 {
        left:11.4vw;
        top: 1.3vw
    }
}

@media only screen and (min-width: 3840px) {
    .l19b1 {
        left:430px;
        top: 55px;
        width: 450px
    }
}

.l19b2 {
    left: 37.3vw;
    top: .7vw;
    width: 18.8vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l19b2 {
        left:39.4vw;
        top: .8vw;
        width: 19.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l19b2 {
        left:39.4vw;
        top: .8vw;
        width: 19.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l19b2 {
        left:38vw;
        top: .9vw
    }
}

@media only screen and (min-width: 3840px) {
    .l19b2 {
        left:1430px;
        top: 30px;
        width: 720px
    }
}

.l19b3 {
    left: 16.4vw;
    top: -6.5vw;
    width: 24.8vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l19b3 {
        left:17.5vw;
        top: -6.4vw;
        width: 25.8vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l19b3 {
        left:17.5vw;
        top: -6.4vw;
        width: 25.8vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l19b3 {
        left:16.8vw;
        top: -6.2vw
    }
}

@media only screen and (min-width: 3840px) {
    .l19b3 {
        left:630px;
        top: -245px;
        width: 950px
    }
}

.l19b4 {
    left: 31.2vw;
    top: 16.5vw;
    width: 25vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l19b4 {
        left:34.2vw;
        top: 17.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l19b4 {
        left:34.2vw;
        top: 17.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l19b4 {
        left:31.9vw;
        top: 17vw
    }
}

@media only screen and (min-width: 3840px) {
    .l19b4 {
        left:1155px;
        top: 640px;
        width: 1010px
    }
}

.l19b5 {
    left: 37vw;
    mask-image: linear-gradient(0deg,#0000 10%,#000 28%);
    -webkit-mask-image: linear-gradient(0deg,#0000 10%,#000 28%);
    top: 20vw;
    width: 17vw
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .l19b5 {
        left:40vw;
        top: 21.5vw
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .l19b5 {
        left:40vw;
        top: 21.5vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .l19b5 {
        left:37.5vw;
        top: 20.5vw
    }
}

@media only screen and (min-width: 3840px) {
    .l19b5 {
        left:1460px;
        top: 790px;
        width: 610px
    }

    .l19b1Back {
        bottom: 4.6vw!important;
        height: 10vh;
        left: 4.9vw!important;
        width: 2vw
    }

    .l19b1Back>img {
        height: 18vh!important;
        width: 4vw!important
    }

    .l19b3Back {
        bottom: 4.8vw!important;
        height: 10vh;
        left: 11.7vw!important;
        width: 2vw
    }

    .l19b3Back>img {
        height: 18vh!important;
        width: 7vw!important
    }

    .l19b4Back {
        bottom: 1.7vw!important;
        height: 9.5vh;
        left: 9.9vw!important;
        width: 7vw
    }

    .l19b4Back>img {
        height: 13vh!important;
        width: 15vw!important
    }

    .l19b5Back {
        bottom: 2.7vw!important;
        height: 9.5vh;
        left: 2.9vw!important;
        width: 6vw
    }

    .l19b5Back>img {
        height: 14vh!important;
        width: 16vw!important
    }
}

.characterSelec {
    align-items: center;
    display: flex;
    height: 38vw;
    justify-content: center;
    left: calc(-30vw + 10vh);
    position: absolute;
    top: 10vh;
    width: 20vw;
    z-index: 100
}

@media only screen and (min-width: 3840px) {
    .characterSelec {
        left:calc(-19vw + 10vh);
        top: 5vh
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .characterSelec {
        left:calc(-36vw + 10vh);
        top: 6vh
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .characterSelec {
        left:calc(-31vw + 15vh);
        top: 13vh
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .characterSelec {
        left:calc(-29vw + 4vh);
        top: 9vh
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .characterSelec {
        left:calc(-33vw + 12vh);
        top: 13vh
    }
}

@media only screen and (max-height: 767px) {
    .characterSelec {
        left:calc(-33vw + 16vh);
        top: 6vh
    }
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .characterSelec {
        left:calc(-33vw + 5vh);
        top: 11vh
    }
}

@media only screen and (width: 1440px)and (height:720px) {
    .characterSelec {
        left:calc(-33vw + 11vh);
        top: 10vh
    }
}

@media only screen and (width: 1440px)and (height:900px) {
    .characterSelec {
        left:calc(-33vw + 20vh);
        top: 19vh
    }
}

.characterSelec--anim {
    left: -19vw;
    position: absolute;
    top: 0;
    width: 92vw
}

.characterSelec--content {
    height: 100%;
    width: 100%
}

.characterSelec--content .newCharacter__container--box__character--img img {
    opacity: .8;
    width: 29vh
}

.characterSelec--content--img {
    display: flex;
    justify-content: center
}

.characterSelec--content--forBuy {
    align-items: center;
    bottom: 7vw;
    color: #fff;
    display: flex;
    justify-content: center;
    left: 50%;
    min-width: 200px;
    position: absolute;
    text-shadow: 1px 1px 3px #000c;
    transform: translateX(-50%);
    z-index: 5
}

.characterSelec--content--forBuy--yes {
    background: #000;
    background: radial-gradient(circle,rgba(0,0,0,.651) 30%,#fff0 100%);
    color: #fff
}

.characterSelec--content--forBuy--buy,.characterSelec--content--forBuy--yes {
    align-items: center;
    display: flex;
    height: 2vw;
    justify-content: center;
    width: 100%
}

.baraban__container {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%
}

.baraban__elem__1 {
    left: 0;
    position: absolute;
    top: 10vw
}

.baraban__elem__1 img {
    width: 22vw
}

.baraban__elem__2 {
    height: 18vw;
    position: absolute;
    right: 0;
    top: 18.2vw
}

.baraban__elem__2 img {
    width: 22vw
}

.baraban__elem__2:hover .baraban__glif--light {
    opacity: 1
}

.baraban__glif {
    position: absolute;
    right: -2.5vw;
    top: 8vw;
    z-index: 20
}

.baraban__glif>img {
    cursor: pointer;
    width: 21vw
}

.baraban__glif--back>img {
    height: 16vw;
    width: 14vw
}

.baraban__glif--light {
    left: -1vw;
    opacity: 0;
    position: relative;
    top: -14vw
}

.baraban__glif--light>img {
    height: 16vw;
    width: 14vw
}

.reels__container {
    margin-top: 5.2vw
}

.reels__container,.reels__container__forbtn {
    display: flex;
    justify-content: center;
    width: 100%
}

.reels__container__forbtn {
    position: relative;
    z-index: 15
}

.reel {
    background-color: #0000;
    height: 23vw;
    overflow: hidden;
    position: relative;
    width: 14vw
}

.reel:last-child {
    color: red
}

.reel:last-child .reel-layers-container {
    margin-left: 1vw
}

.reel-layers-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%
}

.reel-background-effect,.reel-canvas,.reel-item-image {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: opacity .4s ease-in-out
}

.reel-canvas {
    height: 100%;
    object-fit: contain;
    width: 100%;
    z-index: 1
}

.reel-background-effect {
    height: 40%;
    mix-blend-mode: screen;
    object-fit: cover;
    width: 100%;
    z-index: 2
}

.reel-item-image {
    object-fit: contain;
    padding-bottom: .5vw;
    padding-right: .5vw;
    z-index: 3
}

.jackpot {
    bottom: 48%;
    left: 25%;
    position: relative
}

.jackpot-prize {
    align-items: center;
    display: flex;
    height: 50vw;
    justify-content: center;
    left: -8vw;
    mix-blend-mode: screen;
    position: absolute;
    top: 10.5vw;
    width: 50vw;
    z-index: 10
}

.jackpot-prize__background {
    height: 100%;
    left: 0;
    mix-blend-mode: screen;
    object-fit: contain;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1
}

.jackpot-prize__item {
    filter: drop-shadow(0 0 15px rgba(255,255,255,.7));
    height: 50%;
    object-fit: contain;
    position: relative;
    width: 50%;
    z-index: 12
}

.spin__button {
    width: 10vw
}

.spin__button img {
    margin: 0 5px;
    width: 1vw
}

.spin__button--disabled {
    align-items: center;
    background: #3f3f3f;
    border: 1px solid #525253;
    border-radius: .4vw;
    bottom: 6vw;
    color: #d2d2d2;
    display: flex;
    font-size: 1vw;
    justify-content: center;
    margin-left: 20px;
    padding: 8px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    width: 10vw
}

.spin__button--disabled img {
    margin-right: 10px;
    width: 1vw
}

.spin__button--proc {
    align-items: center;
    background: #900406;
    border: 1px solid #d80707;
    border-radius: .4vw;
    bottom: -4vw;
    color: #d2d2d2;
    cursor: pointer;
    display: flex;
    font-size: 1vw;
    justify-content: center;
    padding: 8px;
    position: absolute;
    text-align: center;
    width: 8vw
}

.reward__item {
    background: #1b1b1b;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-style: inset;
    border-width: .3vw;
    display: flex;
    filter: drop-shadow(0 0 15px rgba(255,255,255,.7));
    left: 19%;
    position: absolute;
    top: 63vh;
    transition: transform .3s ease-in-out,opacity .3s ease-in-out;
    z-index: 10
}

.reward__item>img {
    position: relative;
    width: 8vw;
    z-index: 10
}

.reward__item--animating {
    animation: prizeScaleOut .6s ease-in-out forwards
}

@keyframes prizeScaleOut {
    0% {
        opacity: 1;
        transform: scale(1)
    }

    50% {
        opacity: 1;
        transform: scale(1.1)
    }

    to {
        opacity: 0;
        transform: scale(0)
    }
}

.userEther__drums {
    align-items: center;
    bottom: 37%;
    color: #fff;
    display: flex;
    gap: 1vw;
    justify-content: space-evenly;
    left: 15%;
    position: absolute;
    z-index: 11
}

.userEther__drums--item {
    align-items: center;
    display: flex;
    font-size: 1.2vw;
    gap: .4vw;
    justify-content: center
}

.userEther__drums--item>img {
    width: 2vw
}

.userEther__drums--mark {
    left: 4vw;
    position: relative;
    top: -43vh;
    width: 5vw;
    z-index: 11
}

.drum__tlp {
    align-items: baseline;
    color: #aeaeae;
    display: flex;
    flex-direction: column;
    gap: .2vw;
    justify-content: center
}

.dungeon_container {
    background-size: cover;
    min-height: 81vh;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .dungeon_container {
        min-height:68vh
    }
}

@media only screen and (max-width: 1365px) {
    .dungeon_container {
        min-height:85vh
    }
}

.dungeon_container--monolit {
    background: url(/static/media/bcaknewijjsid.5de189de2cbac1f2c8c2.jpg);
    background-size: cover;
    mask-image: linear-gradient(0deg,#0000 1%,#000 6%);
    -webkit-mask-image: linear-gradient(0deg,#0000 1%,#000 6%)
}

.dungeon_container--drops {
    bottom: 6vw;
    margin-bottom: 0;
    position: relative;
    z-index: -1
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .dungeon_container--drops {
        bottom:96px
    }
}

.dungeon_container--drops>img {
    display: block;
    height: 35vh;
    mask-image: linear-gradient(0deg,#0000 0,#000);
    -webkit-mask-image: linear-gradient(0deg,#0000 0,#000);
    width: 100%
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .dungeon_container--drops>img {
        height:24vh
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .dungeon_container--drops>img {
        height:24vh
    }
}

@keyframes flashShake {
    0% {
        opacity: 0;
        transform: translateX(0)
    }

    10% {
        opacity: 1;
        transform: translateX(-5px)
    }

    20% {
        transform: translateX(5px)
    }

    30% {
        transform: translateX(-4px)
    }

    40% {
        transform: translateX(4px)
    }

    50% {
        transform: translateX(-2px)
    }

    60% {
        transform: translateX(2px)
    }

    70% {
        transform: translateX(0)
    }

    to {
        opacity: 1;
        transform: translateX(0)
    }
}

.dungeon_container__close {
    background: #272421;
    border-radius: 8px;
    box-shadow: 0 0 0 3px #656b6e82;
    color: #fff;
    cursor: pointer;
    display: flex;
    padding: .3vw;
    position: absolute;
    right: 1.2vw;
    z-index: 5
}

.dungeon_container__close img {
    height: 1.5vw;
    width: 1.5vw
}

.dungeon_container--dungeon {
    height: 36vw;
    position: absolute;
    right: 0;
    top: 0;
    width: 31vw
}

@media only screen and (min-width: 3840px) {
    .dungeon_container--dungeon {
        height:31vw;
        width: 26vw
    }
}

.dungeon_container--dungeon>img {
    height: 34vw;
    left: 22%;
    object-fit: fill;
    position: absolute;
    top: 2%;
    width: 77%
}

@media only screen and (min-width: 3840px) {
    .dungeon_container--dungeon>img {
        height:30vw
    }
}

.dungeon_container--dungeon--rooms {
    grid-gap: 1.5vw;
    display: grid;
    gap: 1.5vw;
    grid-template-columns: repeat(15,2.5vw);
    grid-template-rows: repeat(15,2.5vw);
    left: 0;
    margin: 55% 10%;
    position: absolute;
    top: 0
}

@media only screen and (min-width: 3840px) {
    .dungeon_container--dungeon--rooms {
        margin:30% -30%
    }
}

.dungeon_container--dungeon--rooms--cell {
    border: 0 solid #000;
    height: 100%;
    position: relative;
    width: 100%
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell:before {
    border-style: 0 solid;
    content: "";
    height: 0;
    position: absolute;
    width: 0
}

.dungeon_container--dungeon--rooms .arrow_up:before {
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    content: "";
    height: 2vw;
    left: 68%;
    position: absolute;
    top: -1.8vw;
    transform: translateX(-50%);
    width: .7vw
}

.dungeon_container--dungeon--rooms .arrow_down:before {
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    bottom: -1.8vw;
    content: "";
    height: 2vw;
    left: 37%;
    position: absolute;
    transform: translateX(-50%);
    width: .7vw
}

.dungeon_container--dungeon--rooms .arrow_left:before {
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    content: "";
    height: .7vw;
    left: -1.8vw;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    width: 2vw
}

.dungeon_container--dungeon--rooms .arrow_right:before {
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    content: "";
    height: .7vw;
    position: absolute;
    right: -1.8vw;
    top: 75%;
    transform: translateY(-50%);
    width: 2vw
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell.content {
    border: .4vw solid rgba(94,77,69,.623);
    border-image: url(data:image/png;base64,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) 10 10 10 10 stretch;
    border-radius: 8px;
    position: relative
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell.content img {
    height: 95%;
    left: 3%;
    position: relative;
    top: 2%;
    width: 95%
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell.content.active {
    background-color: #faebd7
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell.content.active img {
    height: 6vh;
    left: 20%;
    position: relative;
    top: -1vh;
    width: 3vw
}

.dungeon_container--dungeon--rooms .dungeon_container--dungeon--rooms--cell.empty {
    background-color: #0000;
    position: relative
}

.dungeon_container--dungeon--map {
    height: 25vw;
    left: 28%;
    overflow: hidden;
    position: relative;
    top: 15%;
    width: 65%
}

@media only screen and (min-width: 3840px) {
    .dungeon_container--dungeon--map {
        height:23vw;
        top: 17%
    }
}

.dungeon_container--dungeon--level {
    align-items: center;
    color: #8e714f;
    display: flex;
    font-family: RunicFont,serif;
    font-size: .8vw;
    height: 2vh;
    justify-content: center;
    left: 11vw;
    position: absolute;
    text-shadow: 0 2px 2px #fff3;
    top: 2.5vw;
    width: 50%;
    z-index: 1
}

@media only screen and (min-width: 3840px) {
    .dungeon_container--dungeon--level {
        font-size:1.5vw;
        left: 9.5vw;
        top: 1.5vw
    }
}

.dungeon_modal_base {
    align-items: baseline;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 60 60 60 60 stretch stretch;
    border-style: inset;
    border-width: 18px;
    color: azure;
    display: flex;
    flex-direction: column;
    font-size: 1vw;
    height: auto;
    justify-content: center;
    left: -102%;
    min-height: 20vh;
    padding: .5vw 2vw;
    position: absolute;
    top: 49%;
    width: 85%;
    z-index: 10
}

@media only screen and (max-width: 1365px) {
    .dungeon_modal_base {
        left:-113%
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .dungeon_modal_base {
        left:-113%
    }
}

.dungeon_modal_base--enter {
    align-items: center;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 60 60 60 60 stretch stretch;
    border-style: inset;
    border-width: 18px;
    color: azure;
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    left: 20%;
    position: absolute;
    top: 20%;
    width: 50%;
    z-index: 10
}

.dungeon_modal_base--enter--response {
    color: #bbb38a;
    margin: 15px
}

.dungeon_modal_base--enter--response:hover {
    color: #fff;
    cursor: pointer
}

.dungeon_container--dungeon--level>p:first-letter,.dungeon_modal_base--enter>p:first-letter,.dungeon_modal_base>p:first-letter {
    color: brown;
    font-size: 1.5vw;
    font-weight: 700
}

.dungeon_modal_base--enter--response--disabled {
    opacity: .6;
    pointer-events: none
}

.loot {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px
}

.loot--item {
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: 2px solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    font-size: 1rem;
    margin: 0
}

.loot--item,.loot--item--img {
    height: 4vw;
    width: 4vw
}

.loot--money {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px;
    width: 15vw
}

.loot--money>img {
    margin-right: .5vw;
    width: 33px
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.cornerImg {
    animation: fadeIn 1s ease-in-out forwards;
    height: 10vh;
    left: -12vw;
    opacity: 0;
    position: absolute;
    top: 12vw;
    width: 10vw;
    z-index: 5
}

@media only screen and (min-width: 3840px) {
    .cornerImg {
        height:9vh;
        top: 9.2vw!important;
        width: 9vw
    }
}

@media only screen and (max-width: 1365px) {
    .cornerImg {
        left:-15vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .cornerImg {
        left:-15vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .cornerImg {
        left:-15vw
    }
}

.cornerImg--mob {
    animation: fadeIn 1s ease-in-out forwards;
    display: flex;
    height: 8vh;
    height: 100%;
    justify-content: center;
    left: -22vw;
    opacity: 0;
    position: absolute;
    top: -9vh;
    width: 8vw;
    width: 60%;
    z-index: 5
}

@media only screen and (max-width: 1365px) {
    .cornerImg--mob {
        left:-20vw
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .cornerImg--mob {
        left:-18vw
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .cornerImg--mob {
        left:-20vw
    }
}

.cornerImg--mob img {
    position: absolute;
    top: 2vh;
    width: 160%
}

.fadeIn {
    animation: fadeIn 1s ease-in-out forwards
}

.loot-btn {
    height: 2vw;
    outline: none;
    width: 8vw
}

.ban {
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%
}

.ban>span:first-letter {
    color: brown;
    font-size: 1.5vw;
    font-weight: 700
}

.dungeon_background--back,.dungeon_background--front,.dungeon_background--middle {
    mask-image: linear-gradient(0deg,#0000 20%,#000 28%);
    -webkit-mask-image: linear-gradient(0deg,#0000 20%,#000 28%);
    min-height: 90vh;
    position: absolute;
    width: 100%
}

.dungeon_background--back>img,.dungeon_background--front>img,.dungeon_background--middle>img {
    min-height: 100vh;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .dungeon_background--back,.dungeon_background--front,.dungeon_background--middle {
        min-height:80vh
    }
}

.cubs {
    display: contents
}

.cubs img {
    height: 12px;
    width: 12px
}

.cubs--anim img {
    animation: spinner 3s linear infinite
}

@keyframes spinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(2340deg)
    }
}

.cubs--anim--end img {
    animation: endccc 2s linear infinite
}

@keyframes endccc {
    0% {
        opacity: 1
    }

    40% {
        opacity: .5
    }

    50% {
        opacity: 1
    }

    80% {
        opacity: .5
    }

    to {
        opacity: 1
    }
}

.chestKeyCont {
    background: #1f1f1f;
    border: 1px solid gray;
    border-radius: 4px;
    left: -7vw;
    position: absolute;
    top: 16vw;
    z-index: 11
}

.chestKeyCont,.chestKeyCont>img {
    height: 3vw;
    width: 3vw
}

.characterSelec--content {
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative
}

.overlay-img-ripple {
    height: 79%;
    left: 23px;
    position: absolute;
    top: 43px;
    width: 20.3vw
}

.character-display-area {
    height: 100%;
    left: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1
}

.swiper-control-container {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10
}

.swiper-control-container .swiper {
    background: #0000;
    height: 100%;
    pointer-events: none;
    width: 100%
}

.swiper-control-container .swiper-slide {
    background: #0000
}

.swiper-control-container .swiper-button-next,.swiper-control-container .swiper-button-prev {
    --swiper-navigation-color: #fff;
    --swiper-navigation-size: 30px;
    filter: drop-shadow(0 0 5px rgba(0,0,0,.7));
    pointer-events: auto
}

.characterSelec--content--forBuy {
    z-index: 999
}

.characterSelec--content--forBuy--buy,.characterSelec--content--forBuy--yes {
    padding: 10px 20px;
    text-align: center
}

.npc_container {
    height: 68vh;
    min-height: 568px;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .npc_container {
        height:1400px
    }
}

.npc_container>img {
    animation: fadeTo75 .5s ease forwards;
    animation-delay: .5s;
    mask-image: linear-gradient(0deg,#0000 8%,#000 20%);
    -webkit-mask-image: linear-gradient(0deg,#0000 8%,#000 20%);
    opacity: 1;
    position: relative;
    width: 100%
}

@keyframes fadeTo75 {
    to {
        opacity: .75
    }
}

.npc_container__close {
    background: #272421;
    border-radius: 8px;
    box-shadow: 0 0 0 3px #656b6e82;
    color: #fff;
    cursor: pointer;
    display: flex;
    padding: .3vw;
    position: absolute;
    right: 1.2vw;
    z-index: 5
}

.npc_container__close img {
    height: 1.5vw;
    width: 1.5vw
}

.npc_container--npcImg {
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: center;
    left: 38vw;
    position: absolute;
    top: 11vh;
    width: 10vh;
    z-index: 1
}

@media only screen and (max-width: 1365px) {
    .npc_container--npcImg {
        left:50%;
        top: 20%;
        transform: translate(-50%,-50%)
    }
}

.npc_container--npcImg {
    animation: slideUpNPC .2s ease-out forwards;
    animation-delay: .8s;
    opacity: 0;
    transform: translateY(30px)
}

@media only screen and (min-width: 3840px) {
    .npc_container--npcImg {
        height:200px;
        left: 1650px;
        top: 300px;
        width: 350px
    }
}

.npc_container--npcImg>img {
    height: 30vh
}

@media only screen and (min-width: 3840px) {
    .npc_container--npcImg>img {
        height:700px
    }
}

.npc_container--drums {
    background-size: cover;
    font-family: Prox,serif;
    font-size: 1.2vw;
    justify-content: space-evenly;
    min-height: 100%;
    position: absolute;
    top: 0;
    z-index: 10
}

.npc_container--drums,.npc_container--drums--container {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%
}

.npc_container--drums--container {
    color: #fff;
    justify-content: center
}

.npc_container--drums--container--reward {
    align-items: center;
    background-color: #faebd7;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    height: 8vw;
    justify-content: center;
    position: absolute;
    top: 2vw;
    width: 8vw
}

.npc_container--drums--container--reward img {
    width: 4vw
}

.npc_container--drums--container--reward span {
    color: #303131
}

.npc_container--drums--container--inventory {
    align-items: center;
    bottom: 6vw;
    display: flex;
    height: 8vw;
    justify-content: space-evenly;
    left: 0;
    position: absolute;
    width: 15vw
}

.npc_container--drums--container--inventory--eth,.npc_container--drums--container--inventory--tokens {
    align-items: center;
    display: flex;
    gap: 10px
}

.npc_container--drums--container--inventory--eth img,.npc_container--drums--container--inventory--tokens img {
    height: 1vw;
    width: 1vw
}

.npc_container--drums--container--rolls {
    align-items: center;
    background-color: #313131;
    border: 1px solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    flex-direction: row;
    gap: .5vw;
    height: 56vh;
    justify-content: space-evenly;
    overflow: hidden;
    width: 40vw
}

.npc_container--drums--container--rolls--slot1,.npc_container--drums--container--rolls--slot2,.npc_container--drums--container--rolls--slot3 {
    align-items: center;
    background: radial-gradient(circle,#fff0 28%,#1a1a1ad1 108%);
    border: 1px solid #303131;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    font-size: 2rem;
    height: 5.5vw;
    height: 50px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 5.5vw;
    width: 80px
}

.npc_container--drums--container--rolls--slot1.spinning:before,.npc_container--drums--container--rolls--slot2.spinning:before,.npc_container--drums--container--rolls--slot3.spinning:before {
    background: linear-gradient(180deg,#000c 0,#0000 20%,#0000 80%,#000c);
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2
}

.npc_container--drums--container--rolls--slot1.spinning .slot-content,.npc_container--drums--container--rolls--slot2.spinning .slot-content,.npc_container--drums--container--rolls--slot3.spinning .slot-content {
    align-items: center;
    animation: slotSpin .5s linear infinite;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%
}

.npc_container--drums--container--rolls--slot1.spinning.stopping .slot-content,.npc_container--drums--container--rolls--slot2.spinning.stopping .slot-content,.npc_container--drums--container--rolls--slot3.spinning.stopping .slot-content {
    animation: slotSpin .5s linear infinite,slotStop 1s ease-out forwards
}

.npc_container--drums--button {
    background: #3f3f3f;
    border: 1px solid #525253;
    border-radius: .4vw;
    color: #d2d2d2;
    cursor: pointer;
    font-size: 1vw;
    margin-left: 20px;
    padding: 8px;
    text-align: center;
    width: 40%
}

.npc_container--drums--button:hover {
    background: #444
}

.npc_container--drums--button--exit {
    background: #900406;
    border: 1px solid #d80707;
    border-radius: .4vw;
    bottom: 10vw;
    color: #d2d2d2;
    cursor: pointer;
    font-size: 1vw;
    margin-left: 20px;
    padding: 8px;
    position: absolute;
    right: 2vw;
    text-align: center;
    width: 10vw
}

.npc_container--drums--button--exit:hover {
    background: #9d0608
}

.npc_container--drums--button--rollBtn {
    align-items: center;
    background: #900406;
    border: 1px solid #d80707;
    border-radius: .4vw;
    bottom: 6vw;
    color: #d2d2d2;
    cursor: pointer;
    display: flex;
    font-size: 1vw;
    justify-content: center;
    margin-left: 20px;
    padding: 8px;
    position: absolute;
    text-align: center;
    width: 10vw
}

.npc_container--drums--button--rollBtn:hover {
    background: #9d0608
}

.npc_container--drums--button--rollBtn img {
    margin-right: 10px;
    width: 1vw
}

.npc_container--drums--button--rollBtn--disabled {
    align-items: center;
    background: #3f3f3f;
    border: 1px solid #525253;
    border-radius: .4vw;
    bottom: 6vw;
    color: #d2d2d2;
    display: flex;
    font-size: 1vw;
    justify-content: center;
    margin-left: 20px;
    padding: 8px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    width: 10vw
}

.npc_container--drums--button--rollBtn--disabled img {
    margin-right: 10px;
    width: 1vw
}

.npc_container--drums--button--rollBtn--proc {
    align-items: center;
    background: #900406;
    border: 1px solid #d80707;
    border-radius: .4vw;
    bottom: -4vw;
    color: #d2d2d2;
    cursor: pointer;
    display: flex;
    font-size: 1vw;
    justify-content: center;
    padding: 8px;
    position: absolute;
    text-align: center;
    width: 8vw
}

.npc_container--altar {
    align-items: center;
    bottom: 2vw;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;
    left: 13vw;
    min-height: 3vw;
    position: absolute;
    z-index: 10
}

@media only screen and (min-width: 3840px) {
    .npc_container--altar {
        bottom:20vh
    }
}

.npc_container--altar--count,.npc_container--altar--title {
    color: #c7c7c7
}

.npc_container--altar--desc {
    color: #c7c7c7
}

.npc_container--altar--desc,.npc_container--altar--sacrifice {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly
}

.npc_container--altar--sacrifice {
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 60 60 60 60 stretch stretch;
    border-style: inset;
    border-width: 18px;
    height: 100%;
    min-height: 23vw;
    min-width: 600px;
    padding: 1vw;
    width: 100%
}

.npc_container--altar--sacrifice--button {
    background: #900406;
    border: 1px solid #d80707;
    border-radius: .4vw;
    color: #d2d2d2;
    cursor: pointer;
    font-size: 1vw;
    padding: 8px;
    text-align: center;
    width: 40%
}

.npc_container--altar--sacrifice--button:hover {
    background: #9d0608
}

.npc_container--altar--sacrifice--button--cancel {
    background: #3f3f3f;
    border: 1px solid #525253;
    border-radius: .4vw;
    bottom: -2vw;
    color: #d2d2d2;
    cursor: pointer;
    font-size: 1vw;
    padding: 8px;
    position: relative;
    text-align: center;
    width: 40%
}

.npc_container--altar--sacrifice--button--cancel:hover {
    background: #444
}

.npc_container--altar--sacrifice--count,.npc_container--altar--sacrifice--desc {
    color: #c7c7c7;
    font-family: Prox,serif;
    font-size: 1vw
}

.npc_container--altar--sacrifice--victims {
    grid-gap: 14px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center
}

.npc_container--altar--sacrifice--victims--text {
    color: #c7c7c7;
    font-family: Prox,serif;
    font-size: 1vw;
    margin-right: .7vw
}

.npc_container--altar--sacrifice--victims input {
    border: 0 solid;
    border-radius: 6px;
    max-width: 2vw;
    outline: none;
    padding: 4px;
    width: 100%
}

.npc_container--altar--sacrifice--modal {
    align-items: center;
    background: rgba(5,5,5,.549);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 100%;
    z-index: 20
}

.npc_container--altar--sacrifice--modal--container {
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 18px;
    height: auto;
    padding: 30px 40px;
    position: relative;
    width: 60%
}

.npc_container--altar--sacrifice--modal--container h1,.npc_container--altar--sacrifice--modal--container h2,.npc_container--altar--sacrifice--modal--container h3 {
    color: #d5d5d5;
    font-size: 1.4vw;
    margin-bottom: 10px
}

@media only screen and (min-width: 3840px) {
    .npc_container--altar--sacrifice--modal--container h1,.npc_container--altar--sacrifice--modal--container h2,.npc_container--altar--sacrifice--modal--container h3 {
        font-size:80px
    }
}

.npc_container--altar--sacrifice--modal--container p {
    color: #d5d5d5;
    font-size: .8vw
}

@media only screen and (min-width: 3840px) {
    .npc_container--altar--sacrifice--modal--container p {
        font-size:40px
    }
}

.npc_container--altar--sacrifice--modal--container--buttons {
    font-size: .8vw;
    height: .8vw;
    padding: 12px 5px
}

.npc_container--altar--sacrifice--modal--container--content--reward {
    align-items: center;
    color: #d5d5d5;
    display: flex;
    justify-content: center;
    min-height: 2vw
}

.npc_container--altar--sacrifice--modal--container--content--reward>img {
    margin-left: .5vw;
    width: 1vw
}

.npc_modal_base {
    align-items: flex-start;
    animation: growModal .3s ease-out forwards;
    animation-delay: .5s;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 60 60 60 60 stretch stretch;
    border-style: inset;
    border-width: 18px;
    color: azure;
    cursor: context-menu;
    display: flex;
    flex-direction: column;
    font-size: .7vw;
    justify-content: space-evenly;
    left: 18vw;
    min-height: 149px;
    min-width: 354px;
    opacity: 0;
    padding: 2%;
    position: absolute;
    top: 12vw;
    transform: scale(.4);
    width: 26vw;
    z-index: 10
}

@keyframes fadeInModal {
    to {
        opacity: 1;
        transform: scale(1)
    }
}

@media only screen and (max-width: 1365px) {
    .npc_modal_base {
        left:25%;
        top: 32%;
        transform: translate(-50%,-50%)
    }
}

@media only screen and (min-width: 3840px) {
    .npc_modal_base {
        font-size:30px;
        left: 600px;
        min-height: 400px;
        top: 500px;
        width: 1400px
    }
}

.npc_modal_base--texts {
    align-items: flex-start;
    animation: fadeInText .2s ease-in forwards;
    animation-delay: 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 15vw;
    opacity: 0;
    overflow: auto;
    width: 100%
}

.npc_modal_base--texts>p {
    font-size: 1.2em;
    line-height: 1.4em
}

@media only screen and (max-width: 1365px) {
    .npc_modal_base--texts>p {
        font-size:11px;
        line-height: 15px
    }
}

.npc_modal_base--texts--extend {
    justify-content: flex-start
}

.npc_modal_base--texts::-webkit-scrollbar {
    height: 5px;
    width: 12px
}

.npc_modal_base--texts::-webkit-scrollbar-track {
    background: #000;
    height: 5px
}

.npc_modal_base--texts::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.npc_modal_base--texts::-webkit-scrollbar-thumb:hover {
    background: #555
}

.npc_modal_base--texts::-webkit-scrollbar-thumb:vertical {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.npc_modal_base--texts::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.npc_modal_base--texts::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.npc_modal_base--loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: space-between;
    width: 100%
}

.npc_modal_base--texts>p:first-letter {
    color: brown;
    font-family: RunicFontBold;
    font-size: 3vw;
    font-weight: 700;
    margin-left: -2px
}

.npc_modal_base--responses {
    align-items: flex-start;
    animation: fadeInText .2s ease-in forwards;
    animation-delay: 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0
}

.npc_modal_base--responses--elem {
    color: #bbb38a;
    cursor: pointer;
    font-size: 1.2em;
    height: 100%;
    margin: 5px;
    padding-left: .2vw;
    position: relative;
    text-indent: -.5vw
}

@media only screen and (max-width: 1365px) {
    .npc_modal_base--responses--elem {
        font-size:11px
    }
}

.npc_modal_base--responses--elem>img {
    flex-shrink: 0;
    height: auto;
    margin-bottom: .05vw;
    min-width: 6px;
    width: .5vw
}

.npc_modal_base--responses--elem:hover {
    color: #fff;
    cursor: pointer
}

.noScalp__desc {
    color: #d2d2d2;
    font-family: Prox,serif;
    font-size: 1vw
}

@keyframes slotSpin {
    0% {
        transform: translateX(-100%)
    }

    to {
        transform: translateX(100%)
    }
}

@keyframes slotStop {
    0% {
        animation-timing-function: linear
    }

    to {
        animation-timing-function: cubic-bezier(.4,0,.2,1);
        transform: translateX(0)
    }
}

@keyframes growModal {
    0% {
        opacity: 0;
        transform: scale(.4)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
}

@keyframes slideUpNPC {
    0% {
        opacity: 0;
        transform: translateY(30px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fadeInText {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.altarBackImg {
    opacity: 1!important;
    right: 12vw!important;
    width: 120%!important
}

@media only screen and (min-width: 3840px) {
    .altarBackImg {
        right:0!important;
        width: 100%!important
    }
}

.drumsBackImg {
    opacity: 1!important
}

.exchange__container {
    background-image: url(/static/media/%D0%A5%D1%80%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D1%89%D0%B5_%D0%AD%D1%84%D0%B8%D1%80%D0%B0_final.f8cef32fbe24865e6b6d.png);
    background-position-x: -10vw;
    background-size: 84vw;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%
}

.exchange__container--back>img {
    position: absolute;
    right: -5vw;
    top: -2vw;
    width: 90vw
}

.exchange__container--hub {
    background-color: #e4d6c6c2;
    border: 2px solid #000;
    border-radius: 8px;
    height: 15vw;
    left: 9vw;
    position: relative;
    top: 34vh;
    width: 50vw
}

.exchange__container--hub--ether {
    align-items: center;
    display: flex;
    gap: 1vw;
    justify-content: center;
    position: absolute;
    top: -3vw
}

.exchange__container--hub--ether>img {
    transition: transform .2s ease;
    width: 2vw
}

.exchange__container--hub--ether>img.exchange__ether-icon--grow {
    transform: scale(1.2)
}

.exchange__container--hub--ether--count {
    color: #fff;
    font-family: RunicFont;
    font-size: 2.4vw;
    font-weight: 700;
    text-shadow: -1px -1px 0 #000c,1px -1px 0 #000c,-1px 1px 0 #000c,1px 1px 0 #000c;
    transition: all .2s ease
}

.exchange__container--hub--ether--count.exchange__ether-count--highlight {
    transform: scale(1.1)
}

.exchange__container--hub--close {
    align-items: center;
    background: #252525;
    border: .15vw solid hsla(0,0%,80%,.471);
    border-radius: .3vw;
    cursor: pointer;
    display: flex;
    height: 2vw;
    justify-content: center;
    position: absolute;
    right: 2vw;
    top: -1.5vw;
    width: 2vw;
    z-index: 2
}

.exchange__container--hub--close>img {
    width: 1vw
}

.exchange__container--hub--upper {
    display: flex;
    height: 65%;
    justify-content: center
}

.exchange__container--hub--upper--title {
    line-height: 1.2vw;
    padding: 1vw 2.5vw
}

.exchange__container--hub--upper--title>p:first-letter {
    color: brown;
    font-family: RunicFontBold;
    font-size: 3vw;
    font-weight: 700;
    margin-left: -2px
}

.exchange__container--hub--lower {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    padding: 0 1.5vw
}

.exchange__container--hub--lower--left,.exchange__container--hub--lower--middle {
    align-items: center;
    display: flex;
    justify-content: center
}

.exchange__container--hub--lower--middle {
    flex: 1 1;
    gap: 1vw
}

.exchange__container--hub--lower--right {
    align-items: center;
    display: flex;
    justify-content: center
}

.exchange__currency-option,.exchange__currency-select {
    align-items: center;
    display: flex;
    gap: .4vw
}

.exchange__currency-option {
    cursor: pointer;
    padding: .3vw .6vw;
    transition: all .2s
}

.exchange__currency-option input[type=radio] {
    cursor: pointer;
    height: .8vw;
    width: .8vw
}

.exchange__currency-option img {
    height: 1.2vw;
    width: 1.2vw
}

.exchange__currency-option span {
    font-size: .8vw;
    min-width: 3vw
}

.exchange__currency-option:hover {
    background: #8b45131a
}

.exchange__input-group {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    position: relative
}

.exchange__input-icon {
    height: 1.2vw;
    left: .4vw;
    pointer-events: none;
    position: absolute;
    top: .35vw;
    width: 1.2vw
}

.exchange__input {
    background: #fff;
    border: 1px solid #4d4d4d;
    border-radius: 6px;
    font-size: .9vw;
    font-weight: 600;
    outline: none;
    padding: .3vw .5vw .3vw 1.8vw;
    text-align: left;
    transition: border .2s ease;
    width: 7vw
}

.exchange__input:focus {
    border-color: #8b4513
}

.exchange__slider {
    -webkit-appearance: none;
    background: #0000;
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(.15vw);
    width: 100%
}

.exchange__slider::-webkit-slider-runnable-track {
    background: #0000;
    border-radius: 3px;
    height: 4px
}

.exchange__slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #999;
    -webkit-clip-path: polygon(50% 0,100% 40%,100% 100%,0 100%,0 40%);
    clip-path: polygon(50% 0,100% 40%,100% 100%,0 100%,0 40%);
    cursor: pointer;
    height: 14px;
    margin-top: -5px;
    width: 14px
}

.exchange__slider::-moz-range-track {
    background: #0000;
    border-radius: 3px;
    height: 4px
}

.exchange__slider::-moz-range-thumb {
    background: #999;
    border: none;
    border-radius: 3px;
    clip-path: polygon(50% 0,100% 40%,100% 100%,0 100%,0 40%);
    cursor: pointer;
    height: 14px;
    width: 14px
}

.exchange__arrow {
    align-items: center;
    display: flex
}

.exchange__arrow img {
    width: 1.2vw
}

.exchange__result {
    align-items: center;
    display: flex;
    gap: .3vw
}

.exchange__result-icon {
    height: 1.2vw;
    width: 1.2vw
}

.exchange__result-value {
    font-size: .9vw;
    font-weight: 700;
    min-width: 3vw
}

.exchange__rate {
    color: #666;
    font-size: .7vw
}

.inventory__container--header--item--other {
    background-color: #181614;
    border: 2px solid #444648;
    border-radius: .3vw;
    cursor: pointer;
    display: flex;
    height: .5vw;
    justify-content: center;
    padding: .3vw;
    width: .5vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header--item--other {
        padding:14px
    }
}

.inventory__container--header--item--other>img {
    width: .6vw
}

@media only screen and (min-width: 3840px) {
    .inventory__container--header--item--other>img {
        width:20px
    }
}

.event_container {
    display: flex;
    height: 25vw;
    left: 10vw;
    position: absolute;
    top: 10vw;
    width: 45vw
}

@media only screen and (min-width: 3840px) {
    .event_container {
        left:450px;
        top: 400px
    }
}

.event_container--npc_container {
    width: 100%
}

.event_container--npc_container--npcImg {
    left: 30vw;
    position: relative;
    top: -9vw;
    width: 16vw;
    z-index: 9
}

.event_container--npc_container--npcImg>img {
    height: 28vh
}

@media only screen and (min-width: 3840px) {
    .event_container--npc_container--npcImg>img {
        height:800px
    }
}

.event_container--npc_container--mobImg {
    left: 28vw;
    position: relative;
    top: -9vw;
    width: 15vw;
    z-index: 9
}

@media only screen and (min-width: 3840px) {
    .event_container--npc_container--mobImg {
        left:1000px
    }
}

.event_container--npc_container--mobImg>img {
    height: 21vw
}

@media only screen and (min-width: 3840px) {
    .event_container--npc_container--mobImg>img {
        height:800px
    }
}

.eventNpc_modal_base {
    align-items: flex-start;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 60 60 60 60 stretch stretch;
    border-style: inset;
    border-width: 18px;
    color: azure;
    cursor: context-menu;
    display: flex;
    flex-direction: column;
    font-size: small;
    height: 16vw;
    justify-content: center;
    left: 9vw;
    overflow: auto;
    padding: 2%;
    position: absolute;
    top: 2vw;
    width: 30vw;
    z-index: 10
}

@media only screen and (min-width: 3840px) {
    .eventNpc_modal_base {
        font-size:30px;
        height: 600px;
        left: 50px;
        top: 50px;
        width: 1400px
    }
}

.eventNpc_modal_base--extend {
    justify-content: flex-start
}

.eventNpc_modal_base::-webkit-scrollbar {
    height: 5px;
    width: 12px
}

.eventNpc_modal_base::-webkit-scrollbar-track {
    background: #000;
    height: 5px
}

.eventNpc_modal_base::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.eventNpc_modal_base::-webkit-scrollbar-thumb:hover {
    background: #555
}

.eventNpc_modal_base::-webkit-scrollbar-thumb:vertical {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    height: 5px;
    max-height: 5px
}

.eventNpc_modal_base::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.eventNpc_modal_base::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 17px 10px;
    border: none;
    box-shadow: inset 0 0 6px #0000004d
}

.eventNpc_modal_base.eventNpc_modal_base>p:first-letter {
    color: brown;
    font-size: 1.5vw;
    font-weight: 700
}

.eventNpc_modal_base--response {
    color: #bbb38a;
    cursor: pointer;
    margin: 10px
}

.eventNpc_modal_base--response:hover {
    color: #fff
}

.eventNpc_modal_base--battle,.eventNpc_modal_base--leave {
    color: #bbb38a;
    cursor: pointer;
    margin: 10px
}

.eventNpc_modal_base--battle:hover,.eventNpc_modal_base--leave:hover {
    color: #fff
}

.playingFieldFooter {
    bottom: 0;
    display: flex;
    height: 20vh;
    min-height: 150px;
    position: absolute;
    width: 100%;
    z-index: 1
}

@media only screen and (min-width: 1000px)and (max-width:1200px) {
    .playingFieldFooter {
        height:18vh;
        min-height: 140px
    }
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .playingFieldFooter {
        height:18vh;
        min-height: 140px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .playingFieldFooter {
        height:22vh;
        min-height: 20vh
    }
}

@media only screen and (min-height: 800px)and (max-height:900px)and (min-width:1440px)and (max-width:1440px) {
    .playingFieldFooter {
        height:35vh
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .playingFieldFooter {
        height:21vh
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .playingFieldFooter {
        height:22vh
    }
}

@media only screen and (min-width: 3840px) {
    .playingFieldFooter {
        height:35vh
    }
}

.playingFieldFooter--window {
    background: url(/static/media/bgBig.e24ec9ec201e15c92877.jpg) repeat;
    height: 100%;
    width: 100%
}

.playingFieldFooter--window .chat__block1--body--message--item {
    font-size: 16px
}

.playingFieldFooter--window .chat__block1--body--message--item .chat__block1--body--message--item--battle {
    align-items: flex-start;
    display: flex;
    justify-content: center
}

.playingFieldFooter--window .chat__block1--body--message--item .chat__block1--body--message--item--attack {
    margin-top: 1vh
}

.playingFieldFooter--window .chat__block1--head--tabs img {
    width: 20px
}

.playingFieldFooter--window .chat__block2--box--item .chat__block2--box--item--user {
    font-size: 14px
}

.playingFieldFooter--window .chat__block2--box--item .chat__block2--box--item--rebirth img {
    width: 16px
}

html {
    min-width: 100%
}

.chatWindowOpen {
    min-width: 0!important
}

.footerBattle {
    height: 32vh
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .footerBattle {
        height:34vh
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .footerBattle {
        height:36vh
    }
}

@media only screen and (min-width: 3840px) {
    .footerBattle {
        height:38vh
    }
}

.chat__block1 {
    display: flex;
    flex: 13 1;
    flex-direction: column;
    padding: 0 2%;
    width: 100%
}

.chat__block1,.chat__block1 * {
    -webkit-user-select: text!important;
    user-select: text!important
}

.chat__block1--body--message--item--text {
    white-space: pre-wrap
}

.chat__block1--body--message--item--text::selection {
    white-space: pre
}

.chat__block1--body--message--item--time {
    flex-shrink: 0
}

.chat__block1--head {
    display: flex;
    justify-content: space-between
}

.chat__block1--head--tabs {
    grid-gap: .2vw;
    align-items: center;
    display: flex
}

.chat__block1--head--tabs--item {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: .6;
    padding: 2px;
    position: relative
}

.chat__block1--head--tabs--item img {
    min-width: 13px;
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--head--tabs--item img {
        width:44px
    }
}

.chat__block1--head--tabs--item--active {
    opacity: 1
}

.chat__block1--head--tabs--only {
    cursor: pointer;
    margin-left: .5vw
}

.chat__block1--head--tabs--only label {
    align-items: center;
    display: flex;
    font-size: .8vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--head--tabs--only label {
        font-size:35px
    }
}

.chat__block1--head--tabs--only label input {
    height: .8vw;
    width: .8vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--head--tabs--only label input {
        height:40px;
        width: 40px
    }
}

.chat__block1--head--share {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 2px
}

.chat__block1--head--share img {
    min-width: 13px;
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--head--share img {
        width:44px
    }
}

.chat__block1--body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
    padding-right: 2px
}

.chat__block1--body--message {
    display: flex;
    flex: 6 1;
    flex-direction: column;
    gap: .1vw;
    margin: 3px 0;
    overflow-y: auto;
    scroll-behavior: auto;
    transition: .3s
}

.chat__block1--body--message::-webkit-scrollbar {
    width: .5em!important
}

.chat__block1--body--message--logs {
    display: flex;
    flex: 6 1;
    flex-direction: column;
    gap: .3vw;
    margin: 2px 0;
    overflow-y: hidden;
    transition: .3s
}

.chat__block1--body--message::-webkit-scrollbar {
    width: 1em
}

.chat__block1--body--message::-webkit-scrollbar-track {
    background: #cec5b8;
    border: 2px solid #b7b0a4
}

.chat__block1--body--message::-webkit-scrollbar-thumb {
    background-color: #dcd4c6;
    border: 2px solid #b7b0a4
}

.chat__block1--body--message--item {
    align-items: flex-start;
    display: flex;
    font-size: .8vw;
    gap: .4vw;
    line-height: 1.1
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--message--item {
        font-size:30px
    }
}

.chat__block1--body--message--item--time {
    color: #505050
}

.chat__block1--body--message--item--sender {
    border-bottom: 1px solid #f4a460;
    color: #f4a460;
    cursor: pointer
}

.chat__block1--body--message--item--battle {
    display: flex
}

.chat__block1--body--message--item--battle img {
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--message--item--battle img {
        width:44px
    }
}

.chat__block1--body--message--item--battle--rever {
    transform: scaleX(-1)
}

.chat__block1--body--message--item--text {
    color: #72675a;
    display: flex;
    flex-wrap: wrap;
    gap: .2vw;
    justify-content: flex-start;
    -webkit-user-select: text!important;
    user-select: text!important;
    word-break: break-all
}

.chat__block1--body--message--item--text__share {
    cursor: pointer;
    margin-left: 5px
}

.chat__block1--body--message--item--text__share img {
    height: 16px;
    width: 16px
}

.chat__block1--body--message--item--text__share span {
    text-wrap: nowrap
}

.chat__block1--body--message--item--text--blue {
    color: #2c356e;
    white-space: nowrap
}

.chat__block1--body--message--item--text--blue--invis {
    color: #2c356e;
    font-style: italic
}

.chat__block1--body--message--item--text--red {
    color: #9c2222;
    white-space: nowrap
}

.chat__block1--body--message--item--text--red--invis {
    color: #9c2222;
    font-style: italic
}

.chat__block1--body--message--item--text--hp {
    background-color: none;
    color: #000;
    font-weight: 600;
    padding: 0 2px
}

.chat__block1--body--message--item--text--hp--crit {
    background-color: none;
    color: red;
    font-weight: 600;
    padding: 0 2px
}

.chat__block1--body--message--item--text--hp--power {
    background-color: none;
    color: #e69138;
    font-weight: 600;
    padding: 0 2px
}

.chat__block1--body--message--item--text--hp--dodge {
    background-color: none;
    color: #5a4632;
    display: flex;
    gap: 4px;
    padding: 0 2px
}

.chat__block1--body--message--item--text--hp--dodge--did {
    color: #6fa8dc;
    font-weight: 700;
    text-transform: uppercase
}

.chat__block1--body--message--item--text--hp--contr {
    background-color: none;
    color: #5a4632;
    padding: 0 2px
}

.chat__block1--body--message--item--text--hp--contr:nth-child(5) {
    color: #000;
    font-weight: 600
}

.chat__block1--body--message--item--text--hp--magic {
    background-color: none;
    color: #319fb8;
    font-weight: 600;
    padding: 0 2px
}

.chat__block1--body--message--item--text--skillAction {
    color: #e69138;
    font-weight: 700;
    text-transform: uppercase
}

.chat__block1--body--message--item--text--critAdj {
    color: red;
    font-weight: 700;
    text-transform: uppercase
}

.chat__block1--body--message--item--text--comboStrong {
    color: #000;
    font-weight: 700
}

.chat__block1--body--message--item--text--hill {
    color: #4a7b67;
    padding: 0 2px
}

.chat__block1--body--message--item--text--strong {
    padding: 0 2px 0 0
}

.chat__block1--body--message--item--text--name {
    border-bottom: 1px solid #f4a460;
    color: #f4a460;
    cursor: pointer
}

.chat__block1--body--message--item--text--item {
    cursor: pointer;
    text-transform: lowercase
}

.chat__block1--body--message--item--text--link {
    color: blue
}

.chat__block1--body--message--item--text--battleLink {
    color: red
}

.chat__block1--body--message--item--text--emotion {
    color: #bbb
}

.chat__block1--body--message--item--text--yell {
    color: #000;
    font-weight: 700
}

.chat__block1--body--message--item--text br {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    height: auto
}

.chat__block1--body--message--item--attack {
    align-items: center;
    align-self: flex-start;
    display: flex;
    margin: 0
}

.chat__block1--body--message--item--attack:nth-child(3) {
    height: 1vw;
    position: relative;
    top: 5%
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--message--item--attack:nth-child(3) {
        height:44px
    }
}

.chat__block1--body--message--item--attack--container {
    align-items: center;
    border-left: 3px solid red;
    border-right: 3px solid red;
    display: flex;
    justify-content: flex-start
}

.chat__block1--body--message--item--attack--container__opponents {
    border-color: blue
}

.chat__block1--body--message--item--attack--container--target {
    align-items: center;
    border: 1px solid #555;
    border-radius: 2px;
    display: flex;
    height: 8px;
    justify-content: center;
    width: 8px
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--message--item--attack--container--target {
        height:20px;
        width: 20px
    }
}

.chat__block1--body--message--item--attack--container--target--attack {
    background: red;
    border-radius: 50%;
    height: 5px;
    width: 5px
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--message--item--attack--container--target--attack {
        height:12px;
        width: 12px
    }
}

.chat__block1--body--message--item--attack--container--target__defence {
    background: #bbb
}

.chat__block1--body--message--item--attack--container--target__defence .chat__block1--body--message--item--attack--container--target--attack {
    background: #000
}

.chat__block1--body--input {
    grid-gap: 10px;
    align-items: center;
    display: flex;
    flex: 1 1;
    min-height: 2vw;
    padding-bottom: 1vw;
    position: relative
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--input {
        font-size:30px;
        min-height: 50px;
        padding-bottom: 50px
    }
}

.chat__block1--body--input--disabled {
    background: hsla(0,0%,94%,.302)!important;
    opacity: .5;
    pointer-events: none
}

.chat__block1--body--input--field {
    background: hsla(0,0%,100%,.302);
    border: 1px solid #b8afa2;
    border-radius: .4vw;
    font-size: 1vw;
    height: auto;
    outline: none;
    padding: .4vw 1vw;
    transition: .3s;
    width: 100%
}

.chat__block1--body--input--big {
    background: #fff;
    height: 95px
}

.chat__block1--body--input--btn {
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    cursor: pointer;
    height: 1.2vw;
    position: absolute;
    right: 2%;
    transition: transform .2s,box-shadow .2s;
    width: 1.2vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--input--btn {
        height:50px;
        width: 50px
    }
}

.chat__block1--body--input--btn:hover {
    transform: translateY(-2px)
}

.chat__block1--body--input--suggestions {
    max-height: 150px;
    overflow-y: auto
}

.chat__block1--body--input--suggestions::-webkit-scrollbar {
    width: 1em
}

.chat__block1--body--input--suggestions::-webkit-scrollbar-track {
    background: #cec5b8;
    border: 2px solid #b7b0a4
}

.chat__block1--body--input--suggestions::-webkit-scrollbar-thumb {
    background-color: #dcd4c6;
    border: 2px solid #b7b0a4
}

.chat__block1--body--logBtl {
    margin-left: .5vw;
    position: absolute;
    top: .1vw;
    width: 1.4vw
}

@media only screen and (min-width: 3840px) {
    .chat__block1--body--logBtl {
        margin-left:10px;
        top: 4px;
        width: 50px
    }
}

.chat__block2 {
    flex: 4 1;
    overflow: hidden;
    padding: 0 2% 20px 0
}

.chat__block2--box {
    align-content: baseline;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    scroll-snap-type: y mandatory
}

.chat__block2--box::-webkit-scrollbar {
    width: 1em
}

.chat__block2--box::-webkit-scrollbar-track {
    background: #cec5b8;
    border: 2px solid #b7b0a4
}

.chat__block2--box::-webkit-scrollbar-thumb {
    background-color: #dcd4c6;
    border: 2px solid #b7b0a4
}

.chat__block2--box--item {
    grid-gap: .5vw;
    align-items: center;
    display: flex;
    height: 1vw;
    margin: .1vw;
    padding: .1vw;
    position: relative;
    scroll-snap-align: start;
    width: 90%
}

.chat__block2--box--item img {
    cursor: pointer;
    padding-top: 2px;
    width: 14px
}

@media only screen and (min-width: 3840px) {
    .chat__block2--box--item img {
        width:44px
    }
}

.chat__block2--box--item:hover .chat__block2--box--item--attack {
    opacity: .6
}

.chat__block2--box--item:hover .chat__block2--box--item--attack:hover {
    opacity: 1
}

.chat__block2--box--item--olink {
    height: .4vw;
    width: .4vw
}

.chat__block2--box--item--lvl {
    align-items: center;
    background: #d4c9bb;
    border: 2px solid #a19c94;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    font-size: .9vw;
    height: 1vw;
    justify-content: center;
    line-height: 0;
    min-width: 1vw;
    width: 1vw
}

.chat__block2--box--item--lvlLog {
    align-content: center;
    background: #d4c9bb;
    border: 1px solid #a19c94;
    border-radius: 2px;
    cursor: pointer!important;
    display: flex;
    font-size: 10px;
    height: 12px;
    justify-content: center;
    width: 12px
}

.chat__block2--box--item--user {
    align-items: center;
    color: #4c3f31;
    cursor: pointer;
    display: flex;
    font-size: .9vw;
    height: 100%;
    justify-content: center
}

@media only screen and (max-width: 1365px) {
    .chat__block2--box--item--user {
        font-size:11px
    }
}

@media only screen and (min-width: 3840px) {
    .chat__block2--box--item--user {
        font-size:40px
    }
}

.chat__block2--box--item--user--aura {
    color: #c41818;
    font-size: .8vw
}

@media only screen and (min-width: 3840px) {
    .chat__block2--box--item--user--aura {
        font-size:40px
    }
}

.chat__block2--box--item--pantheon {
    align-items: center;
    display: flex;
    justify-content: center
}

.chat__block2--box--item--pantheon img {
    height: auto;
    pointer-events: none;
    width: 1vw
}

.chat__block2--box--item--chat {
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: .6
}

.chat__block2--box--item--chat img {
    height: auto;
    width: 1vw
}

.chat__block2--box--item--chat:hover {
    opacity: 1
}

.chat__block2--box--item--chat--disabled {
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: .3;
    pointer-events: none
}

.chat__block2--box--item--chat--disabled img {
    height: auto;
    width: 1vw
}

.chat__block2--box--item--attack {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-width: 1vw;
    opacity: 0;
    transition: opacity .15s ease;
    width: 1vw
}

.chat__block2--box--item--attack img {
    width: 1vw
}

.battle-end-link,.battle-start-link {
    color: #777;
    cursor: pointer;
    text-decoration: underline
}

.battle-start-link {
    margin-left: 2px;
    white-space: nowrap
}

.chat__block1--head--tabs--item[unread=true]:before {
    background-color: red;
    border-radius: 50%;
    content: "";
    height: .3vw;
    position: absolute;
    right: 0;
    top: 0;
    width: .3vw
}

.windowCh_bl1 {
    min-height: 400px;
    overflow: auto
}

.windowCh_bl2 {
    flex: 3 1;
    width: 200px
}

.abil_templ {
    color: #5a4632;
    display: inline-flex!important;
    gap: 4px
}

.powerAttack {
    color: #e69138;
    font-weight: 700;
    text-transform: uppercase
}

.toChat_text {
    color: #5a4632
}

.toChat_text.teml_4 {
    color: red;
    font-weight: 700;
    text-transform: uppercase
}

.blockBroke {
    color: #000;
    font-weight: 700
}

.elix_templ {
    color: #72675a
}

.attack_block_chat {
    display: flex;
    flex-direction: column
}

.chat__block1--body--message,.chat__block1--body--message *,.chat__block1--body--message--item,.chat__block1--body--message--item *,.chat__block1--body--message--item--text,.chat__block1--body--message--item--text *,.chat__block1--body--message--item--text--battleLink,.chat__block1--body--message--item--text--battleLink *,.chat__block1--body--message--item--text--blue,.chat__block1--body--message--item--text--blue *,.chat__block1--body--message--item--text--comboStrong,.chat__block1--body--message--item--text--comboStrong *,.chat__block1--body--message--item--text--contr,.chat__block1--body--message--item--text--contr *,.chat__block1--body--message--item--text--crit,.chat__block1--body--message--item--text--crit *,.chat__block1--body--message--item--text--critAdj,.chat__block1--body--message--item--text--critAdj *,.chat__block1--body--message--item--text--did,.chat__block1--body--message--item--text--did *,.chat__block1--body--message--item--text--dodge,.chat__block1--body--message--item--text--dodge *,.chat__block1--body--message--item--text--emotion,.chat__block1--body--message--item--text--emotion *,.chat__block1--body--message--item--text--hill,.chat__block1--body--message--item--text--hill *,.chat__block1--body--message--item--text--hp,.chat__block1--body--message--item--text--hp *,.chat__block1--body--message--item--text--invis,.chat__block1--body--message--item--text--invis *,.chat__block1--body--message--item--text--item,.chat__block1--body--message--item--text--item *,.chat__block1--body--message--item--text--link,.chat__block1--body--message--item--text--link *,.chat__block1--body--message--item--text--magic,.chat__block1--body--message--item--text--magic *,.chat__block1--body--message--item--text--name,.chat__block1--body--message--item--text--name *,.chat__block1--body--message--item--text--power,.chat__block1--body--message--item--text--power *,.chat__block1--body--message--item--text--red,.chat__block1--body--message--item--text--red *,.chat__block1--body--message--item--text--skillAction,.chat__block1--body--message--item--text--skillAction *,.chat__block1--body--message--item--text--strong,.chat__block1--body--message--item--text--strong *,.chat__block1--body--message--item--time,.chat__block1--body--message--item--time * {
    cursor: text!important;
    -webkit-user-select: text!important;
    user-select: text!important
}

.chat__block1--body--message--item--text--to-group-wrapper:has(.chat__block1--body--message--item--text--to-group-at:hover) {
    background: #00000014;
    border-radius: 2px;
    margin: 0 -2px;
    padding: 0 2px
}

.chat__block1--body--message--item--text--to-group-at {
    cursor: pointer!important;
    padding: 0 1px
}

.chat__block1--body--message--item--text--private {
    color: #579fca;
    display: block
}

.chat__block1--body--message div,.chat__block1--body--message p,.chat__block1--body--message span {
    cursor: text!important;
    -webkit-user-select: text!important;
    user-select: text!important
}

@media only screen and (max-width: 1365px) {
    .chat__block1--body--message div,.chat__block1--body--message p,.chat__block1--body--message span {
        font-size:11px
    }
}

.toChat_text {
    display: inline-block!important;
    overflow-wrap: break-word!important;
    white-space: nowrap!important;
    word-break: keep-all!important;
    word-spacing: 0!important
}

.toChat_parry {
    color: #5a4632
}

.toChat_parry:first-child {
    color: #6fa8dc;
    font-weight: 700
}

.chat__block1--body--message--item--text--system {
    color: #9a1c03
}

.battle-table {
    background-color: #faefd8;
    color: #333;
    font-family: Arial,sans-serif;
    font-size: 13px;
    max-width: 600px
}

.battle-table table {
    border-collapse: collapse;
    width: 100%
}

.battle-table th {
    background-color: #fff9eb;
    border: 3px solid #faefd8;
    color: #555;
    font-size: 12px;
    padding: .2vw;
    text-align: left
}

.battle-table th:first-child {
    padding: .5vw .2vw
}

.battle-table td {
    padding: 4px;
    text-align: center
}

.battle-table td:first-child {
    padding: .5vw .2vw;
    text-align: left
}

.hero-cell {
    align-items: center;
    display: flex;
    gap: 6px
}

.hero-level {
    border-radius: 3px;
    color: #fff;
    cursor: pointer!important;
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    min-width: 14px;
    padding: 2px 5px;
    text-align: center
}

.hero-level.red {
    background-color: #c33
}

.hero-level.blue {
    background-color: #334d99
}

.hero-name {
    font-weight: 500
}

.hero-tag {
    color: #c33;
    font-weight: 700;
    margin-left: 3px
}

.hp-cell {
    width: 60px
}

.hp-bar {
    background-color: #555;
    border-radius: 2px;
    height: 14px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 50px
}

.hp-fill {
    height: 100%
}

.hp-text {
    bottom: 0;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    left: 0;
    line-height: 14px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0
}

.text-gray {
    color: #888;
    font-size: inherit!important
}

.noChat {
    pointer-events: none
}

.Dropdown_root__070X\+ {
    background: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) no-repeat 50%/100% 100%;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    display: flex;
    flex-direction: column;
    gap: 2px;
    left: 0;
    opacity: 0;
    padding: 16px;
    position: absolute;
    top: 20px;
    transition: opacity .1s ease;
    z-index: 2
}

.Dropdown_show__KeS3i {
    opacity: 1
}

.battle {
    display: flex;
    width: 100%
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .battle {
        height:100%
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .battle {
        height:100%
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .battle {
        height:100%
    }
}

@media only screen and (min-width: 3840px) {
    .battle {
        max-width:3840px
    }
}

.battle__center {
    width: 100%
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .battle__center {
        width:60%
    }
}

.battle__center .playingFieldFooter {
    max-width: 57%
}

@media only screen and (min-width: 1000px)and (max-width:1200px) {
    .battle__center .playingFieldFooter {
        max-width:61%
    }
}

@media only screen and (min-width: 1200px)and (max-width:1366px) {
    .battle__center .playingFieldFooter {
        max-width:61%
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .battle__center .playingFieldFooter {
        max-width:60%
    }
}

@media only screen and (min-height: 800px)and (max-height:900px)and (min-width:1440px)and (max-width:1440px) {
    .battle__center .playingFieldFooter {
        max-width:41vw
    }
}

.battle__center__box {
    height: 35vw
}

@media only screen and (min-height: 665px)and (max-height:1000px)and (min-width:1440px)and (max-width:1600px) {
    .battle__center__box {
        height:36vw
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .battle__center__box {
        height:39vw
    }
}

.battle__antagonist {
    background: url(/static/media/newBgCharacter.15bd62fdb26b92b6add0.jpg) no-repeat 50%;
    background-color: #292929;
    background-position: -17vw -9vw;
    background-size: cover;
    background-size: 65vw;
    display: flex;
    height: 100vh;
    max-width: 43%;
    position: relative;
    width: 100%
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .battle__antagonist {
        background-position:-232px -123px;
        background-size: 888px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .battle__antagonist {
        background-position:-17vw -10vw;
        background-size: 65vw;
        max-width: 30%;
        position: fixed;
        right: 0
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .battle__antagonist {
        height:100%
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .battle__antagonist {
        height:100%
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .battle__antagonist {
        height:100%
    }
}

@media only screen and (min-width: 3840px) {
    .battle__antagonist {
        background-position:top;
        background-size: 2100px
    }
}

.battle__antagonist--container {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    padding: 2vw
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .battle__antagonist--container {
        padding:.5vw 2vw
    }
}

@media only screen and (min-height: 800px)and (max-height:1080px) {
    .battle__antagonist--container {
        padding:.5vw 2vw
    }
}

@media only screen and (min-width: 3840px) {
    .battle__antagonist--container {
        padding:28px
    }
}

.battle__antagonist--container .game--container__left--chain {
    left: 0;
    top: 0;
    z-index: 2
}

.battle__antagonist--container .game--container__left--block__head--flag {
    left: -2vw
}

@media only screen and (min-width: 3840px) {
    .battle__antagonist--container .game--container__left--block__head--flag {
        left:-28px
    }
}

@media only screen and (max-height: 850px)and (min-width:1000px)and (max-width:1440px) {
    .battle__antagonist--container .character--inventory {
        align-items:center
    }
}

.battle__antagonist--container .character--inventory:first-child {
    z-index: 9
}

.battle__antagonist--container .character--inventory:nth-child(3) {
    z-index: 8
}

.battle__antagonist--container--bigBox {
    display: flex;
    flex-direction: column
}

.battle--list--title {
    grid-gap: 10px;
    color: #c8c8c8;
    display: flex;
    font-size: .8vw;
    font-weight: 700;
    margin: 30px 0 5px
}

@media only screen and (min-width: 3840px) {
    .battle--list--title {
        font-size:40px
    }
}

.battle--list--title>div {
    color: #787878;
    font-weight: 400
}

.battle--list--box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 28vh;
    overflow-x: hidden;
    overflow-y: auto
}

.battle--list--box--item {
    grid-gap: 2px;
    color: #b2b2b2;
    display: flex;
    flex-direction: column;
    padding: 7px
}

@keyframes checkP {
    0% {
        color: #fff
    }

    20% {
        color: red
    }

    40% {
        color: #fff
    }

    60% {
        color: red
    }

    80% {
        color: #fff
    }

    to {
        color: #fb2222
    }
}

@keyframes checkTurn {
    0% {
        color: #7c7c7c
    }

    20% {
        color: red
    }

    40% {
        color: #7c7c7c
    }

    60% {
        color: red
    }

    80% {
        color: #7c7c7c
    }

    to {
        color: #fb2222
    }
}

.battle--list--box--item--num {
    background: #545454;
    border: 2px solid #4a4a4a;
    border-radius: 2px
}

.battle--list--box--item--num,.battle--list--box--item--num--current {
    align-items: center;
    color: #b9b9b9;
    display: flex;
    font-size: 12px;
    height: 14px;
    justify-content: center;
    text-align: center;
    width: 22px
}

.battle--list--box--item--num--current {
    background: red;
    border: 2px solid red;
    border-radius: 2px
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--num {
        font-size:22px;
        height: 24px;
        width: 42px
    }
}

.battle--list--box--item--info {
    grid-gap: 4px;
    display: flex;
    flex-direction: row;
    margin: 4px;
    width: 100%
}

.battle--list--box--item--info--name {
    align-items: flex-end;
    display: flex;
    font-size: 14px;
    height: 18px;
    line-height: 1
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--info--name {
        font-size:34px;
        height: 1.5vh
    }
}

.battle--list--box--item--info--name--disabled {
    align-items: flex-end;
    color: #606060;
    display: flex;
    font-size: 14px;
    height: 18px;
    line-height: 1;
    pointer-events: none
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--info--name--disabled {
        font-size:34px
    }
}

.battle--list--box--item--info--line {
    background: #4c4b4b;
    border-radius: 100px;
    height: 4px;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--info--line {
        height:10px;
        margin-bottom: 1vh
    }
}

.battle--list--box--item--info--line--active {
    border-radius: 100px;
    height: 4px;
    position: absolute;
    transition: .3s;
    width: 20%
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--info--line--active {
        height:10px
    }
}

.battle--list--box--item--info--line--quickSilver {
    background: #1f1f1f;
    border-radius: 100px;
    height: 4px;
    position: relative;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle--list--box--item--info--line--quickSilver {
        height:10px;
        margin-bottom: 1vh
    }
}

.battle--list--waitList {
    grid-gap: 2px;
    color: #c8c8c8;
    display: flex;
    flex-wrap: wrap;
    font-size: .8vw;
    margin: .7vh 0;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle--list--waitList {
        margin:1.5vh 0
    }
}

.battle--list--waitList--item {
    align-items: flex-end;
    color: #fb2222;
    display: flex;
    height: 15px;
    line-height: 1
}

.battle--list--waitList--item--break {
    color: #7c7c7c
}

.battle--list--waitList--text {
    align-items: flex-end;
    color: #7c7c7c;
    display: flex;
    height: 15px;
    line-height: 1;
    margin-left: 2px
}

.battle__init {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    top: -4.5vh;
    width: 100%
}

.battle__init__bg {
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%
}

.battle__init__bg--item,.battle__init__bg--item2 {
    animation: spin 30s linear infinite;
    position: absolute;
    width: 100%
}

.battle__init__bg--item2 {
    animation-direction: reverse
}

.battle__init--search {
    background: url(/static/media/btldecor.1721033e4b4e78cb8ecb.png) no-repeat 50%;
    background-size: contain;
    bottom: 0;
    color: #747474;
    font-size: 28px;
    height: 100px;
    position: absolute;
    width: 100%
}

.battle__init--search,.battle__init--search--box {
    align-items: center;
    display: flex;
    justify-content: center
}

.battle__init--search--box {
    background: url(/static/media/btlload.52495188746afa93d9cd.png) no-repeat 50%;
    background-size: contain;
    flex-direction: column;
    height: 60px;
    margin-bottom: 14px;
    width: 60px
}

.battle__init--search--box>div {
    -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(#be9153cc,#44371f);
    -webkit-background-clip: text;
    color: #4d4d4d;
    font-size: 20px;
    font-weight: 700
}

.battle__init--search--box>.lds-spinner {
    margin-bottom: 16px;
    scale: .6
}

.battle__init--search--box>.lds-spinner div:after {
    background: #000
}

.battle__init--start {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1
}

.battle__init--start--bg {
    background: url(/static/media/btlBg.9c1d8fb1bcd8dcd8883c.png) no-repeat top;
    background-size: contain;
    height: 100%;
    max-width: 100%;
    pointer-events: none;
    position: absolute;
    top: -2.5vh;
    transform: scaleY(.97);
    width: 100%;
    z-index: 1
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--bg {
        top:-80px;
        transform: scaleY(.9)
    }
}

.battle__init--start--anim1 {
    animation: asdj23 5s steps(4) infinite;
    background-image: url(/static/media/SwordLightSheet2_512x512.6c3611ebfe9d91e57c48.png);
    height: 160px;
    left: calc(50% - 151px);
    pointer-events: none;
    position: absolute;
    top: 46%;
    width: 303px;
    z-index: 2
}

@keyframes asdj23 {
    0% {
        background-position: 0;
        opacity: 1
    }

    10% {
        background-position: -1212px;
        opacity: 1
    }

    12% {
        background-position: -1212px;
        opacity: 0
    }

    to {
        background-position: -1212px;
        opacity: 0
    }
}

.battle__init--start--anim2 {
    animation: asdj24 4s steps(60) infinite;
    background-image: url(/static/media/MainSword_512x512.55e508b593e0acb74a16.png);
    height: 275px;
    left: calc(50% - 28px);
    pointer-events: none;
    position: absolute;
    top: 23%;
    width: 56px;
    z-index: 2
}

@keyframes asdj24 {
    0% {
        background-position: 0;
        opacity: 0
    }

    2% {
        background-position: 0;
        opacity: 1
    }

    50% {
        background-position: -3322px;
        opacity: 1
    }

    51% {
        background-position: -3322px;
        opacity: 0
    }

    to {
        background-position: -3322px;
        opacity: 0
    }
}

.battle__init--start--head {
    -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(#be9153cc,#44371f);
    -webkit-background-clip: text;
    color: #4d4d4d;
    display: flex;
    font-size: 1.5vw;
    font-weight: 700;
    justify-content: center;
    margin: .2vw 0 0;
    position: relative;
    z-index: 2
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--head {
        font-size:54px
    }
}

.battle__init--start--head>div {
    margin-left: .25vw
}

.battle__init--start--mini {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    width: 100%;
    z-index: 3
}

.battle__init--start--mini--top {
    margin-top: .5vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--top {
        margin-top:100px
    }
}

.battle__init--start--mini--other {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    width: 100%;
    z-index: 2
}

.battle__init--start--mini--title {
    color: #2d2104;
    font-size: .8vw;
    font-weight: 600;
    margin-bottom: 5px
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--title {
        font-size:30px
    }
}

.battle__init--start--mini--list {
    grid-gap: 5px;
    align-items: center;
    display: flex;
    height: 3vw;
    justify-content: flex-start;
    z-index: 4
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--list {
        height:130px
    }
}

.battle__init--start--mini--list--top {
    background: url(data:image/png;base64,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Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAFlUExURQAAAP///+nfzaKWhsa8qszCsMvBr8rArsi+rNLIttDGtM/Fs9nPvdjOvNfNu9bMutXLudTKuNPJt9/Vw97Uwt3TwdzSwNvRv9rQvufdy+bcyuXbyeTayOPZx+LYxuHXxeDWxOjezKabiqqfjqidjK2ikayhkKugj7esm7armrWqmbSpmLyxoLuwn7qvnrmunbitnMG2pcC1pL+0o76zor2yoce8q8a7qsW6qcS5qMO4p8K3psvAr8q/rsm+rci9rNLHttHGtdDFtM/Es83CsdnOvdjNvNfMu9bLutXKudTJuNPIt9/Uw97Twt3SwdzRwNvQv9rPvuXayePYx+HWxeDVxKaaiqWZiaSYiKOXh6qejqmdjaicjKebi66ikq2hkaygkKufj7Onl7KmlrGlla+jk7erm7aqmrWpmbSomLywoLuvn7qunrmtnbisnMG1pcC0pL+zo76yor2xocW5qcO3p////6SBL6MAAAB3dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AqZ+kZQAAAAlwSFlzAAAOxAAADsQBlSsOGwAACelJREFUeJztnTtz29gVx//n8iUvNUmRJik8SZE28ezYAgjSimzLm/QpVDjbJz05+RTQTKp8guzujPIBdjJ+yJZGBAj5ESdtiuy4TKqNXnzdk0IkRVEACIIieSmdX6GRSDwu7v3h3AfuheiPEIRZkF10AqZke9EJuKAal5rqvBMam5rBRtshKRvsWZ0uBbS8Ucsgq24L1X6mJ7FOzTQpM2bK20qYlP7dnCjjl7pClLg1d6rbie/nJY5aErMWQfJcX+ao9UwroIsuI98iLmgioBvYhPqDPB2UNbVBxPx2DSAmAACDQSBNBCZwhjjTRAFN4kKz0M0cVIL7XSJmgHQexGhz4aCkqAkU36+1/TW06LAMr3JGwDsHnGu3iHShBWIuqDqtURuHlYMK63yXD7sOt/m9le8ePACBgXyOO9xW/TMTEzFAGii0GETMKDC/fdBwuEUg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) no-repeat top;
    background-size: contain
}

.battle__init--start--mini--list--item {
    background: hsla(41,25%,67%,.302);
    border: 1px solid #6e706a;
    border-radius: 3px;
    height: 1.8vw;
    min-width: 1.8vw;
    position: relative;
    width: 1.8vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--list--item {
        height:80px;
        width: 80px
    }
}

.battle__init--start--mini--list--item--anim {
    height: 34px;
    left: -.25vw;
    position: absolute;
    top: -.25vw;
    width: 34px
}

.battle__init--start--mini--list--item--anim2 {
    animation: s1sd2 .8s steps(60) infinite;
    background-image: url(/static/media/image_019_0000_00000_60x1.251fcc599b0b3dc45b35.png);
    height: 34px;
    left: -5px;
    position: absolute;
    top: -5px;
    width: 34px
}

@keyframes s1sd2 {
    0% {
        background-position: 0
    }

    to {
        background-position: -2030px
    }
}

.battle__init--start--mini--list--item--active {
    border: 1px solid #000;
    scale: 1.2
}

.battle__init--start--mini--list--item img {
    width: 1.8vw
}

.battle__init--start--mini--list--item .mm {
    height: 2.3vw;
    width: 2.3vw
}

.battle__init--start--mini--list--item--menu {
    align-items: center;
    background: #1e1e1e;
    border: 2px solid #464646;
    border-radius: 6px;
    color: #747171;
    display: flex;
    flex-direction: column;
    opacity: 1;
    padding: 10px 2px;
    pointer-events: auto;
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
    visibility: visible;
    z-index: 3
}

.battle__init--start--mini--list--item--menu--use {
    cursor: pointer;
    padding: 0 10px
}

.battle__init--start--mini--list--item--menu--use:hover {
    background: #262626;
    color: #fff
}

.battle__init--start--mini--list--item--menu--use--disabled {
    color: inherit;
    cursor: default
}

.battle__init--start--mini--list--item--menu--use--disabled:hover {
    background: inherit;
    color: inherit
}

.battle__init--start--mini--list--item--menu i {
    height: 24px;
    left: -12px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 12px
}

.battle__init--start--mini--list--item--menu i:after {
    background-color: #1e1e1e;
    box-shadow: 0 0 0 2px #464646;
    content: "";
    height: 20px;
    left: 50%;
    position: absolute;
    top: 13px;
    top: 50%;
    transform: translate(10%,-50%) rotate(-135deg);
    width: 20px;
    z-index: 0
}

.battle__init--start--mini--list--item--menu .off {
    color: #3d3c3c;
    pointer-events: none
}

.battle__init--start--mini--list .noEsta {
    filter: grayscale(1) brightness(.9)
}

.battle__init--start--mini--esta {
    grid-gap: .2vw;
    display: flex
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--esta {
        grid-gap:12px
    }
}

.battle__init--start--mini--esta--bin {
    height: 1vw;
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--mini--esta--bin {
        height:40px;
        width: 40px
    }
}

.battle__init--start--mini--esta--bin--no {
    opacity: .5
}

.battle__init--start--three {
    display: flex;
    height: 18vw;
    justify-content: space-between;
    max-height: 18vw;
    max-width: 70%;
    min-height: 18vw;
    width: 100%;
    z-index: 2
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three {
        height:600px;
        max-height: 600px;
        min-height: 600px
    }
}

.battle__init--start--three--box {
    grid-gap: 3px;
    align-items: center;
    background: url(/static/media/btlBody.4902b54821cbe17c0ffe.png) no-repeat 50%;
    background-position: 0 -.05vw;
    background-size: 100% 95%;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 38%
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box {
        height:600px
    }
}

.battle__init--start--three--box--item {
    background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: 100% 100%;
    cursor: pointer;
    font-size: .9vw;
    height: clamp(1vw,13%,2.5vw);
    position: relative;
    text-align: center;
    width: 9vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--item {
        font-size:32px;
        height: 80px;
        width: 350px
    }
}

.battle__init--start--three--box--item--text {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%)
}

.battle__init--start--three--box--item--ain {
    animation: sprite-icon0 .8s steps(60) infinite;
    background-image: url(/static/media/HeadRdSheet_256_512.c13243168075dd213bbb.png);
    height: 50px;
    left: -4px;
    pointer-events: none;
    position: absolute;
    top: -18px;
    width: 127px
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--item--ain {
        left:113px;
        scale: 2.84;
        top: 4px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .battle__init--start--three--box--item--ain {
        left:113px;
        scale: 2.84;
        top: 4px
    }
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .battle__init--start--three--box--item--ain {
        left:54px;
        scale: 1.94;
        top: -9px
    }
}

@media only screen and (min-width: 1440px)and (max-width:1920px) {
    .battle__init--start--three--box--item--ain {
        left:25px;
        scale: 1.44;
        top: -13px
    }
}

@media only screen and (min-width: 1366px)and (max-width:1440px) {
    .battle__init--start--three--box--item--ain {
        left:0;
        scale: 1.14;
        top: -16px
    }
}

@keyframes sprite-icon0 {
    0% {
        background-position: 0
    }

    to {
        background-position: -7442px
    }
}

.battle__init--start--three--box--item--ain1 {
    animation: sprite-icon01 .8s steps(60) infinite;
    bottom: 6px;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    transform: scaleY(1.3) scaleX(1.05);
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--item--ain1 {
        bottom:14px
    }
}

@keyframes sprite-icon01 {
    0% {
        background-position: 0
    }

    to {
        background-position: -7442px
    }
}

.battle__init--start--three--box--item--nav {
    height: 1.2vw;
    left: 1vw;
    position: absolute;
    top: calc(50% - .7vw);
    width: 1vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--item--nav {
        height:46px;
        left: 42px;
        top: 16px;
        width: 36px
    }
}

.battle__init--start--three--box--item--bl_lg,.battle__init--start--three--box--item--ch_bl,.battle__init--start--three--box--item--hd_ch {
    align-items: center;
    display: flex;
    height: 0;
    justify-content: center;
    pointer-events: none;
    position: relative;
    width: 9vw
}

.battle__init--start--three--box--item--bl_lg>img,.battle__init--start--three--box--item--ch_bl>img,.battle__init--start--three--box--item--hd_ch>img {
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--item--bl_lg,.battle__init--start--three--box--item--ch_bl,.battle__init--start--three--box--item--hd_ch {
        width:350px
    }
}

.battle__init--start--three--box .active {
    background: url(/static/media/btlActive.9655889d76fef931d05f.png) no-repeat 50%;
    background-size: 100% 100%;
    color: #fff;
    position: relative
}

.battle__init--start--three--box--img {
    margin-top: 3px;
    position: relative
}

.battle__init--start--three--box--img img {
    width: 5vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--three--box--img img {
        width:200px
    }
}

.battle__init--start--three--box--img--ain {
    animation: sprite-icon .8s steps(60) infinite alternate;
    background-image: url(/static/media/ShieldSheet_512x512.c2370ab59131e5964024.png);
    height: 76px;
    left: 10px;
    position: absolute;
    top: 0;
    width: 62px
}

@keyframes sprite-icon {
    0% {
        background-position: 0
    }

    to {
        background-position: -3921px
    }
}

.battle__init--start--three--box--img--ain2 {
    animation: sprite-icon2 .8s steps(60) infinite alternate;
    background-image: url(/static/media/CrossSwSheet_512x512.f5a498a513a23032b828.png);
    height: 76px;
    position: absolute;
    top: 10px;
    width: 85px
}

@keyframes sprite-icon2 {
    0% {
        background-position: 0
    }

    to {
        background-position: -4926px
    }
}

.battle__init--start--buttons {
    grid-gap: 14px;
    align-items: center;
    display: flex;
    max-width: 70%;
    width: 100%;
    z-index: 2
}

.battle__init--start--buttons--one {
    filter: drop-shadow(0 0 0 black)!important;
    flex: 1 1;
    font-size: 1vw
}

@media only screen and (min-width: 3840px) {
    .battle__init--start--buttons--one {
        font-size:30px
    }
}

.battle__init--start--buttons--one--anim {
    border-radius: 12px;
    box-shadow: 0 0 0 4px lime
}

@keyframes se2njd {
    0% {
        box-shadow: 0 0 0 4px lime
    }

    to {
        box-shadow: 0 0 0 4px #a3ffa3
    }
}

.battle--result {
    display: flex;
    flex-direction: column;
    gap: .4vw;
    pointer-events: none;
    position: absolute;
    right: -9vw;
    top: 12vh;
    width: 10vw;
    z-index: 20
}

@media only screen and (min-width: 3840px) {
    .battle--result {
        gap:20px;
        width: 500px
    }
}

.battle--result--box {
    animation: sddbox 7s cubic-bezier(0,1.11,1,1) forwards;
    background: rgba(45,45,43,.922);
    border: 1px solid #8d8d8d;
    border-radius: .5vw;
    font-size: .6vw;
    opacity: 0;
    pointer-events: none;
    width: 100%
}

@media only screen and (min-width: 3840px) {
    .battle--result--box {
        font-size:22px
    }
}

@keyframes sddbox {
    0% {
        display: block;
        opacity: 1;
        pointer-events: all;
        transform: translateY(100vh)
    }

    5% {
        display: block;
        opacity: 1;
        pointer-events: all;
        transform: translateY(0)
    }

    90% {
        display: block;
        opacity: 1;
        pointer-events: all;
        transform: translateY(0)
    }
}

.battle--result--box:hover {
    animation-play-state: paused
}

.battle--result--box--head {
    display: flex;
    gap: .6vw;
    padding: .5vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head {
        gap:10px;
        padding: 20px
    }
}

.battle--result--box--head img {
    background: rgba(58,19,90,.561);
    border: 1px solid #656565;
    height: 2.2vw;
    width: 2.2vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head img {
        height:80px;
        width: 80px
    }
}

.battle--result--box--head--hr {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    max-width: calc(100% - 3.1vw);
    overflow: hidden
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head--hr {
        max-width:100%
    }
}

.battle--result--box--head--hr .active-bar--one {
    height: .2vw;
    margin-top: .4vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head--hr .active-bar--one {
        height:12px;
        margin-top: 12px
    }
}

.battle--result--box--head--hr .active-bar--one--active {
    height: .2vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head--hr .active-bar--one--active {
        height:12px
    }
}

.battle--result--box--head--hr--name {
    color: #fff;
    font-size: .7vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--head--hr--name {
        font-size:30px
    }
}

.battle--result--box--body {
    color: #9e9e9e;
    padding: .5vw .5vw .5vw 1.6vw;
    position: relative
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--body {
        padding:20px 20px 20px 60px
    }
}

.battle--result--box--body .chat__block1--body--message--item {
    flex-direction: column
}

.battle--result--box--body .chat__block1--body--message--item--time {
    display: none
}

.battle--result--box--body .chat__block1--body--message--item--attack--container {
    border: 0 solid;
    gap: .1vw
}

.battle--result--box--body .chat__block1--body--message--item--attack--container--target {
    background: #4b4b4b;
    border-radius: .2vw
}

.battle--result--box--body .chat__block1--body--message--item--attack--container--target__defence {
    background: #787878
}

.battle--result--box--body .chat__block1--body--message--item--attack--container--target__defence .chat__block1--body--message--item--attack--container--target--attack {
    background: #fff
}

.battle--result--box--body--info {
    display: flex;
    flex-wrap: wrap;
    gap: .1vw;
    position: relative
}

.battle--result--box--body--info img {
    left: -2.6vw;
    position: absolute;
    top: -.5vw;
    width: 2.2vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box--body--info img {
        left:-99px;
        top: -24px;
        width: 100px
    }
}

.battle--result--box--body--damage {
    color: #fff;
    display: contents
}

.battle--result--box--body--damage--crit {
    color: red;
    font-weight: 700
}

.battle--result--box--body--text {
    display: contents;
    margin-left: .1vw
}

.battle--result--box__stat {
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: .2vw;
    justify-content: left;
    padding: 0 1vw .5vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box__stat {
        padding:0 40px 20px
    }
}

.battle--result--box__stat--one {
    align-items: center;
    border-radius: .25vw;
    display: flex;
    flex: 1 1;
    gap: .2vw;
    text-align: left
}

.battle--result--box__stat--one b {
    font-size: 1vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box__stat--one b {
        font-size:48px
    }
}

.battle--result--box__stat--two {
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.battle--result--box__stat--two img {
    width: .9vw
}

@media only screen and (min-width: 3840px) {
    .battle--result--box__stat--two img {
        width:40px
    }
}

.battle--result--box__stat--two--left {
    align-items: center;
    display: flex;
    gap: .2vw;
    padding: .3vw .6vw;
    text-align: center
}

@media only screen and (min-width: 3840px) {
    .battle--result--box__stat--two--left {
        gap:10px;
        padding: 10px 15px
    }
}

.battle--result--box__stat--two--right {
    align-items: center;
    display: flex;
    gap: .2vw;
    padding: .3vw .6vw;
    text-align: center
}

@media only screen and (min-width: 3840px) {
    .battle--result--box__stat--two--right {
        gap:10px;
        padding: 10px 15px
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.anto_name {
    left: -5vw;
    position: relative
}

.modal_stamina {
    align-items: center;
    background: #00000094;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99
}

.modal_stamina--container {
    border-radius: 6px;
    height: 30%;
    position: relative;
    width: 30%
}

.modal_stamina--container--border {
    align-items: center;
    background: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 18px;
    display: flex;
    flex-direction: column;
    gap: 30%;
    height: 80%;
    justify-content: center;
    position: relative;
    width: 100%
}

.modal_stamina--container--msg {
    align-items: center;
    color: #e0dfdf;
    display: flex;
    font-size: .7vw;
    height: 10%;
    justify-content: center;
    text-align: center
}

.current {
    background-color: #303030;
    border: 1px solid #505050;
    border-radius: 8px
}

.checkPair,.current {
    grid-gap: 2px;
    display: flex;
    flex-direction: column;
    padding: 7px
}

.checkPair {
    animation: checkTurn 1s forwards
}

.checkPair--current {
    grid-gap: 2px;
    background-color: #303030;
    border: 1px solid #505050;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 7px
}

.timeout {
    grid-gap: 10px;
    animation: checkP 2s infinite;
    display: flex
}

.battle_list_spell--menu {
    align-items: baseline;
    background: #1e1e1e;
    border: 2px solid #464646;
    border-radius: 6px;
    color: #747171;
    display: flex;
    flex-direction: column;
    gap: .2vw;
    min-height: 7vh;
    opacity: 1;
    padding: 4px;
    pointer-events: auto;
    position: absolute;
    top: 80%;
    visibility: visible;
    width: 16vw;
    z-index: 99
}

@media only screen and (min-width: 3840px) {
    .battle_list_spell--menu {
        font-size:40px;
        padding: 20px 10px
    }
}

.battle_list_spell--menu.is-hidden {
    opacity: 0;
    visibility: hidden
}

.battle_list_spell--menu--use {
    align-items: center;
    background-color: rgba(62,62,62,.196);
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: .5vw;
    padding: 10px 25px
}

.battle_list_spell--menu--use:hover {
    background-color: rgba(83,83,83,.412);
    color: #fff
}

.battle_list_spell--menu--use--disabled {
    color: inherit;
    cursor: default
}

.battle_list_spell--menu--use--disabled:hover {
    background: inherit;
    color: inherit
}

.battle_list_spell--menu--use--left {
    align-items: center;
    border: 1px solid gray;
    border-radius: 4px;
    display: flex;
    height: 2.2vw;
    justify-content: center;
    overflow: hidden;
    width: 2.2vw
}

.battle_list_spell--menu--use--left>img {
    height: 2.2vw;
    width: 2.2vw
}

.battle_list_spell--menu--use--right {
    display: flex;
    flex-direction: column;
    width: 10vw
}

.battle_list_spell--menu--use--right--title {
    color: #e9e9e9;
    font-size: .7vw
}

.battle_list_spell--menu--use--right--desc {
    font-size: .5vw
}

.battle_list_spell--menu.pos-right i {
    height: 24px;
    left: -12px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 12px
}

.battle_list_spell--menu.pos-right i:after {
    background-color: #1e1e1e;
    box-shadow: 0 0 0 2px #464646;
    content: "";
    height: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(10%,-50%) rotate(-135deg);
    width: 20px;
    z-index: 0
}

.battle_list_spell--menu.pos-left i {
    height: 24px;
    overflow: hidden;
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px
}

.battle_list_spell--menu.pos-left i:after {
    background-color: #1e1e1e;
    box-shadow: 0 0 0 2px #464646;
    content: "";
    height: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-110%,-50%) rotate(45deg);
    width: 20px;
    z-index: 0
}

.battle_list_spell--menu .off {
    color: #3d3c3c;
    pointer-events: none
}

.battle_list_spell--tooltip {
    background-color: #eee;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000080;
    box-sizing: border-box;
    color: #444;
    display: none;
    font-size: 13px;
    font-weight: 400;
    left: 100%;
    min-width: 200px;
    padding: 10px 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99999999
}

.battle_list_spell--tooltip i {
    height: 24px;
    margin-top: -12px;
    overflow: hidden;
    position: absolute;
    right: 100%;
    top: 50%;
    width: 12px
}

.battle_list_spell--tooltip i:after {
    background-color: #eee;
    box-shadow: 0 1px 8px #00000080;
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(50%,-50%) rotate(-45deg);
    width: 12px
}

.mob_level {
    left: 66%;
    position: absolute;
    top: 5%;
    z-index: 4
}

.mob_level>img {
    width: 2vw
}

.mob_level>span {
    color: #c08b4d;
    font-family: RunicFontBold;
    font-size: 1.2vw;
    font-weight: 700;
    left: 0;
    position: absolute;
    text-align: center;
    top: 17%;
    width: 2vw
}

.list__ui {
    position: relative;
    width: 50%
}

.list__ui--current {
    border-radius: 4px
}

.list__ui--current,.list__ui--dropdown {
    align-items: center;
    background-color: #fff;
    display: flex;
    justify-content: center
}

.list__ui--dropdown {
    border-radius: 0 0 4px 4px;
    border-top: none;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;
    width: auto;
    z-index: 99
}

.list__ui--dropdown>div {
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 12px;
    text-align: center;
    width: 100%
}

.list__ui--dropdown>div:hover {
    background-color: #eee;
    width: 85%
}

.preWindow {
    align-items: flex-start;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1
}

.window {
    height: 80vh;
    margin-top: 8vh;
    outline: none;
    pointer-events: auto;
    width: 80%
}

.window__container {
    background-color: #181614;
    background-size: cover;
    border-image: url(/static/media/ui-window.0578c1bb5fa6ed5491ce.png) 30 30 30 30 stretch stretch;
    border-style: inset;
    border-width: 10px;
    display: flex;
    height: 65vh;
    position: relative
}

.window__container--close {
    align-items: center;
    background: #272421;
    background: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 0 0 0 #656b6e82;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 1.8vw;
    justify-content: center;
    padding: .3vw;
    position: absolute;
    right: 2vw;
    top: -3vh;
    width: 1.8vw;
    z-index: 10
}

.window__container--close img {
    height: 1vw;
    width: 1vw
}

.application {
    flex: 1 1;
    padding: 10px 20px
}

.application,.application__desc {
    display: flex;
    flex-direction: column
}

.application__desc {
    align-items: flex-start;
    color: #a8a099;
    justify-content: flex-start;
    padding-bottom: 10px;
    width: 100%
}

.application__desc>p:first-letter {
    color: #c52020;
    font-size: 1.5vw;
    font-weight: 700
}

.application__desc>p {
    font-size: .85vw;
    font-weight: 400;
    line-height: 1.6;
    margin: 20px 0;
    max-width: 100%;
    overflow-wrap: break-word;
    white-space: normal
}

@media only screen and (min-width: 3840px) {
    .application__desc>p {
        font-size:36px
    }
}

.application__two {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 16px 0 8px
}

.application__two--box {
    align-items: center;
    display: flex;
    gap: 16px
}

.application__two--box--load img {
    width: 24px
}

.application__two--box--text--title {
    color: #fff;
    font-size: .9vw
}

.application--body {
    grid-gap: 8px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 6px;
    width: 100%
}

.application--body::-webkit-scrollbar {
    width: 6px
}

.application--body::-webkit-scrollbar-track {
    background: #0000
}

.application--body::-webkit-scrollbar-thumb {
    background: #4a4a4a;
    border-radius: 3px
}

.application--body--item {
    align-items: center;
    background-color: #1a1a1ad1;
    border: 1px solid #232928;
    border-radius: 6px;
    cursor: default;
    display: flex;
    gap: 10px;
    margin-left: 0;
    min-height: 4.2vw;
    padding: 1vw;
    transition: border-color .2s,background-color .2s
}

.application--body--item:hover {
    background-image: url(data:image/png;base64,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AAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACgwCbJ3PcQAAAAAADA67VJ8mhdH+xzEAAAAAAA4MztnhT0wybJgySZUxAAAAAAAIDfkzlzuC5PNknurX++sK+BAAAAAACA12G+vS7ubZJ8kyRz5uL+BgIAAAAAAM7aqbP/u5skd5J8m+Rwznm8v7EAAAAAAICzsp75H2ZpAHd2LxO4tVzM5fUiAAAAAADw5jpcz/yTtQHsgsDXSW4neWu7nVeTvLWH4QAAAAAAgF/v9Fn/7SwN4GkQSJKbWW4bONpu55/nzB/Of0YAAAAAAOBVzbmc8Sc5ynLmf3N37XQQ2Cb5LMndLO8TuLbdzvfnzNG5TgsAAAAAAPwic+ZwzvnenPNallcD3M1y5r/d7Tl45n/+l+QfST5M8kGS4znn8Zx5nOThGHl8PqMDAAAAAAAvMebMQZa7AU6/H/jfST5/dvOzQWDnn0m+SPKXJJeSXExyPOfZTgoAAAAAAJyJkyyPCPoyyf3nbXhREEiSB0n+ta7fSfJukgtnOR0AAAAAAPDKnmR58s/3eUEEOO3/HiW2/t77hz4AAAAASUVORK5CYII=);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

.application--body--item--two {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    gap: 2px;
    min-width: 0
}

.application--body--item--two--top {
    align-items: baseline;
    display: flex;
    font-size: .9vw;
    gap: 1vw
}

.application--body--item--two--top--name {
    color: #fff;
    font-family: RunicFont,serif;
    font-weight: 700;
    text-transform: uppercase
}

.application--body--item--two--top--time {
    color: #b0b0b0;
    font-size: .75vw;
    white-space: nowrap
}

.application--body--item--two--bottom {
    color: #6e6e6e;
    display: flex;
    font-size: .75vw
}

.application--body--item--two--bottom--count {
    margin-right: 4px
}

.application--body--item--three {
    display: flex;
    flex-shrink: 0;
    justify-content: flex-end;
    margin-left: auto;
    padding-left: .5vw
}

.application--button {
    align-items: center;
    background: #3f3f3f;
    border: 1px solid #525253;
    border-radius: .4vw;
    color: #d2d2d2;
    cursor: pointer;
    display: flex;
    font-size: 1vw;
    height: 2vw;
    justify-content: center;
    margin-left: 20px;
    text-align: center;
    width: 56%
}

.application--button:hover {
    background: #444
}

.application__forModal {
    grid-gap: 30px;
    color: #a3a3a3;
    display: flex;
    flex-direction: column;
    font-size: 10px
}

@media only screen and (min-width: 3840px) {
    .application__forModal {
        grid-gap:80px
    }
}

.application__forModal b {
    color: #a4764c;
    margin: 0 4px;
    text-decoration: underline
}

.application__forModal--load {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    position: relative;
    width: 100%
}

.application__forModal--load--time {
    color: #b4b4b4;
    font-size: 18px;
    left: calc(50% - 11px);
    position: absolute;
    text-align: center;
    top: calc(50% - 11px);
    width: 22px
}

.application__forModal .lds-spinner {
    height: 112px;
    width: 80px
}

.application__forModal .lds-spinner div {
    transform-origin: 40px 56px
}

.application__forModal .lds-spinner div:after {
    background: #7e7e7e;
    height: 30px;
    width: 6px
}

.application__forModal--box {
    grid-gap: 14px;
    display: flex;
    flex-direction: column;
    max-width: 100%
}

.application__forModal--box--one {
    justify-content: space-between
}

.application__forModal--box--one,.application__forModal--box--one--item {
    grid-gap: 10px;
    align-items: center;
    display: flex
}

.application__forModal--box--one--item--text {
    font-size: 10px
}

.application__forModal--box--one input {
    border: 0 solid;
    border-radius: 6px;
    max-width: 115px;
    outline: none;
    padding: 4px;
    width: 100%
}

.application--badge {
    align-items: center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-shrink: 0;
    height: 3.8vw;
    justify-content: center;
    margin: 0 .4vw;
    min-height: 52px;
    min-width: 48px;
    width: 3.5vw
}

.application--badge--gold {
    background-image: url(/static/media/levelBgTransparentGold.d3dd0d76387e55861a23.png)
}

.application--badge--grey {
    background-image: url(/static/media/levelBgTransparent.fd56611d868875fb6720.png)
}

.application--badge--num {
    color: #fff;
    font-size: .9vw;
    font-weight: 700;
    padding-bottom: 6px;
    text-shadow: 0 2px 3px rgba(0,0,0,.431)
}

@media only screen and (min-width: 3840px) {
    .battleEnd--box {
        font-size:35px;
        padding: 0 40px
    }

    .battleEnd--box--prize--item {
        font-size: 34px!important
    }

    .battleEnd--box--prize--item img {
        height: 50px!important;
        width: 50px!important
    }

    .modal-end-head--back {
        height: 600px!important;
        width: 600px!important
    }
}

.modal-end-head .winfalse {
    filter: invert(37%) sepia(10%) saturate(4465%) hue-rotate(201deg) brightness(92%) contrast(117%)
}

@media only screen and (min-width: 3840px) {
    .modal-end-head--top {
        transform:translateY(-124px)!important;
        width: 850px!important
    }

    .modal-end-head--left,.modal-end-head--right {
        width: 228px!important
    }
}

.battleEnd--box {
    line-height: 1.6
}

.battleEnd--box--time {
    grid-gap: 5px;
    display: flex
}

.battleEnd--box--prize {
    grid-gap: 14px;
    display: flex;
    flex-direction: column
}

.battleEnd--box--prize--item {
    grid-gap: 10px;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center
}

.battleEnd--box--prize--item>div {
    width: 18px
}

.battleEnd--box--prize--item img {
    height: 22px;
    object-fit: contain;
    width: 22px
}

.battleEnd--box--bonus {
    font-size: 14px;
    margin-top: 14px
}

.battleEnd--box--bonus img {
    height: 16px;
    margin-left: 5px;
    object-fit: contain;
    transform: translateY(5px);
    width: 16px
}

.battleEnd--box--bonus b {
    color: #d8d8d8;
    margin: 0 4px 0 0;
    text-decoration: none
}

.modal-end-head {
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    position: relative;
    width: 100%
}

.modal-end-head--back {
    height: 236px;
    overflow: hidden;
    position: absolute;
    transform: translateY(-188px);
    width: 460px;
    z-index: 2
}

.modal-end-head--back img {
    width: 100%
}

.modal-end-head .wintrue {
    filter: invert(0) sepia(94%) saturate(5878%) hue-rotate(333deg) brightness(101%) contrast(105%)
}

.modal-end-head--top {
    position: absolute;
    transform: translateY(-64px);
    width: 460px;
    z-index: 2
}

.modal-end-head--left {
    left: -112px
}

.modal-end-head--left,.modal-end-head--right {
    position: absolute;
    top: -55px;
    width: 128px;
    z-index: 1
}

.modal-end-head--right {
    right: -112px
}

.modal_resp_background {
    background-color: gray;
    height: 100%;
    opacity: .5;
    position: absolute;
    width: 100%;
    z-index: 12
}

.modal_resp_background--cult {
    height: 10%;
    left: 21%;
    opacity: 1;
    position: absolute;
    top: 25%;
    width: 7%;
    z-index: 9999
}

.modal_resp {
    align-items: center;
    background: url(/static/media/backImg.438cdb0e530497b6b036.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 999
}

.modal_resp--rewards {
    display: flex;
    gap: 10px;
    width: 100%
}

.modal_resp--border {
    align-items: center;
    background: #d4cebd;
    background-size: cover;
    border: 1.3px solid #000;
    border-radius: .5vw;
    box-shadow: 0 0 25px #000c;
    display: flex;
    flex-direction: column;
    height: 31vh;
    justify-content: space-around;
    left: 34.5vw;
    padding: 1vw 2vw;
    position: absolute;
    top: 37vh;
    width: 31vw;
    z-index: 2
}

.modal_resp--border:before {
    background: #d4cebd;
    -webkit-clip-path: polygon(85% 0,100% 50%,50% 50%,0 50%);
    clip-path: polygon(85% 0,100% 50%,50% 50%,0 50%);
    content: "";
    filter: drop-shadow(-40px 0 6px rgba(0,0,0,.2));
    height: 6vh;
    position: absolute;
    right: 2vw;
    top: -1.3vw;
    width: 3vw
}

.modal_resp--img {
    height: 90vh;
    position: absolute;
    right: 13.9vw;
    top: 3.2vw;
    width: 30vw;
    z-index: 1
}

.modal_resp--msg {
    align-items: flex-start;
    color: #2f2a25;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 10px;
    width: 100%
}

.modal_resp--msg>p:first-letter {
    color: brown;
    font-size: 1.5vw;
    font-weight: 700
}

.modal_resp--msg>p {
    font-size: .9vw;
    font-weight: 400;
    margin: 0;
    max-width: 100%;
    overflow-wrap: break-word;
    white-space: normal
}

.modal_resp .respawn__btn {
    filter: none;
    font-size: 1.2vw;
    height: 4vh!important;
    width: 11vw!important
}

.shop__container__market {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 54vh;
    width: 99%
}

.shop__container__market--header {
    align-items: flex-end;
    display: flex;
    height: 3vw;
    justify-content: space-between;
    margin-bottom: 2vh;
    padding: 0 2.5vw 0 0
}

.shop__container__market--header--title {
    color: #fff;
    font-size: 1.7vw
}

.shop__container__market--body {
    color: #898989;
    display: flex;
    flex-direction: column;
    font-size: 1vw;
    gap: 1vw;
    padding: 1vw
}

.shop__container__market--buyer--header {
    align-items: flex-end;
    border-bottom: 1px solid #282828;
    display: flex;
    height: 2.5vw;
    justify-content: flex-start;
    margin-bottom: 2vh;
    min-width: 98%;
    width: 98%
}

.shop__container__market--buyer--header--tab {
    color: #555
}

.shop__container__market--buyer--header--tab,.shop__container__market--buyer--header--tab--active {
    align-items: center;
    border-radius: 4px 4px 0 0;
    display: flex;
    font-size: .8vw;
    height: 4vh;
    justify-content: center;
    padding: 0 1vw;
    white-space: nowrap;
    width: auto
}

.shop__container__market--buyer--header--tab--active {
    background-color: #272727;
    color: #b1b1b1
}

.shop__container__market--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.show {
    height: 1.5vw;
    width: 10.1vw
}

.shop__container__marketAdd {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 5px;
    width: 99%
}

.shop__container__marketAdd--left {
    height: 54vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 10px;
    padding-right: 10px;
    width: 40%
}

.shop__container__marketAdd--left::-webkit-scrollbar {
    width: 7px
}

.shop__container__marketAdd--left::-webkit-scrollbar-track {
    background: #000
}

.shop__container__marketAdd--left::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop__container__marketAdd--left::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 4px;
    min-height: 20px
}

.shop__container__marketAdd--left::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__marketAdd--left::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop__container__marketAdd--right {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    height: 100%;
    margin-left: 2vw;
    width: 60%
}

.shop__container__marketAdd--right--header {
    display: flex;
    flex-direction: column;
    gap: .2vw
}

.shop__container__marketAdd--right--header--title {
    color: #fff;
    font-size: 1.5vw
}

.shop__container__marketAdd--right--header--title>p {
    margin: 0
}

.shop__container__marketAdd--right--header--desc {
    color: #b4b4b4;
    font-size: .8vw
}

.shop__container__marketAdd--right--button {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: 1vw
}

.shop__container__marketAdd--right--denyTxt {
    color: #b4b4b4;
    font-size: .8vw
}

.shop__container__marketAdd--right--section {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around
}

.shop__container__market--right--header--title,.shop__container__marketAdd--right--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.shop__container__marketAdd--right--itemCell--box--left {
    display: flex;
    flex-direction: row;
    gap: 1.5vw
}

.shop__container__marketAdd--right--itemCell--box--left--info {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: .5vh;
    justify-content: flex-start;
    width: 100%
}

.shop__container__marketAdd--right--itemCell--box--left--info--title {
    color: #fff;
    font-size: 1.1vw
}

.shop__container__marketAdd--right--itemCell--box--left--info--desc {
    width: 100%
}

.shop__container__marketAdd--right--itemCell--box--left--info--desc--name {
    color: #b4b4b4;
    font-size: .8vw;
    margin-top: .5vh
}

.shop__container__marketAdd--right--itemCell--box--left--info--desc--num {
    margin-left: 2px
}

.sale,.sale:hover {
    border: 2px solid #fff
}

.noSale {
    filter: grayscale(1) brightness(.9)
}

.itemChose {
    background: radial-gradient(circle,#3c3b3b94 28%,#222020 108%)
}

.item__tier {
    bottom: .5vh;
    color: #f3ce8f;
    font-size: 14px;
    position: absolute;
    right: .5vw;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.item__price {
    background-color: #463d2d;
    border: 2px solid #c5a671;
    border-radius: 4px;
    bottom: .3vw;
    color: #e3d1b5;
    font-size: .8vw;
    height: 1vw;
    left: -.6vw;
    line-height: 1;
    position: absolute;
    width: 3vw
}

.item__price,.market_price_btn {
    align-items: center;
    display: flex;
    justify-content: center
}

.market_price_btn {
    font-size: .8vw!important;
    font-weight: 600!important;
    gap: 0;
    height: 1.5vw!important;
    width: 10vw!important
}

.market_price_btn>img {
    height: 1.1vw;
    width: 1.2vw
}

.market__price__container {
    align-items: flex-start;
    color: #fff;
    display: flex;
    font-family: sans-serif;
    gap: 1vw
}

.market__price__container--comission,.market__price__container--price {
    display: flex;
    flex-direction: column;
    width: 6vw
}

.market__price__container--comission--title,.market__price__container--price span {
    color: #bfbfbf;
    font-size: .8vw;
    margin-bottom: 4px
}

.market__price__container--price--input {
    background: #2e2e2e;
    border: 1px solid #4d4d4d;
    border-radius: 6px;
    color: #f3ce8f;
    font-size: .8vw;
    font-weight: 600;
    outline: none;
    padding: 5px;
    text-align: left;
    transition: border .2s ease
}

.market__price__container--price--input:focus {
    border-color: #f3ce8f
}

.market__price__container--comission--num {
    background: #2e2e2e;
    border: 1px solid #4d4d4d;
    border-radius: 6px;
    color: #f3ce8f;
    font-size: .8vw;
    font-weight: 600;
    padding: 5px
}

.market__price__container--comission--slider,.market__price__container--price--slider {
    -webkit-appearance: none;
    background: #0000;
    margin-bottom: .7vw;
    margin-top: .2vw;
    width: 100%
}

.market__price__container--comission--slider::-webkit-slider-runnable-track,.market__price__container--price--slider::-webkit-slider-runnable-track {
    background: #9990;
    border-radius: 3px;
    height: 4px
}

.market__price__container--comission--slider::-webkit-slider-thumb,.market__price__container--price--slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #d9d9d9;
    -webkit-clip-path: polygon(50% 0,100% 40%,100% 100%,0 100%,0 40%);
    clip-path: polygon(50% 0,100% 40%,100% 100%,0 100%,0 40%);
    cursor: pointer;
    height: 14px;
    margin-top: -5px;
    width: 14px
}

.market__price__container--comission--slider::-moz-range-track,.market__price__container--price--slider::-moz-range-track {
    background: #9990;
    border-radius: 3px;
    height: 4px
}

.market__price__container--comission--slider::-moz-range-thumb,.market__price__container--price--slider::-moz-range-thumb {
    background: #d9d9d9;
    border-radius: 3px;
    cursor: pointer;
    height: 14px;
    width: 14px
}

.shop-container {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    max-height: 43vh;
    min-height: 40vh;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 1vw 0 0;
    scroll-snap-type: y mandatory;
    width: 96%
}

@media only screen and (min-width: 3840px) {
    .shop-container {
        max-height:50vh;
        min-height: 40vh
    }
}

.shop-container::-webkit-scrollbar {
    width: .6vw
}

.shop-container::-webkit-scrollbar-track {
    background: #000;
    border-radius: .21vw
}

.shop-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop-container::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: .21vw;
    min-height: 20px
}

.shop-container::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop-container::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop-container--marketItems {
    height: 80vh;
    outline: none;
    width: 100%
}

.shop-container--marketItems--item {
    align-items: center;
    background-color: #1a1a1ad1;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #232928;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 12.1vh;
    justify-content: center;
    margin-bottom: 2vh;
    object-fit: cover;
    position: -webkit-sticky;
    position: sticky;
    width: 101%
}

.shop-container--marketItems--item:hover {
    background-image: url(data:image/png;base64,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AAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACgwCbJ3PcQAAAAAADA67VJ8mhdH+xzEAAAAAAA4MztnhT0wybJgySZUxAAAAAAAIDfkzlzuC5PNknurX++sK+BAAAAAACA12G+vS7ubZJ8kyRz5uL+BgIAAAAAAM7aqbP/u5skd5J8m+Rwznm8v7EAAAAAAICzsp75H2ZpAHd2LxO4tVzM5fUiAAAAAADw5jpcz/yTtQHsgsDXSW4neWu7nVeTvLWH4QAAAAAAgF/v9Fn/7SwN4GkQSJKbWW4bONpu55/nzB/Of0YAAAAAAOBVzbmc8Sc5ynLmf3N37XQQ2Cb5LMndLO8TuLbdzvfnzNG5TgsAAAAAAPwic+ZwzvnenPNallcD3M1y5r/d7Tl45n/+l+QfST5M8kGS4znn8Zx5nOThGHl8PqMDAAAAAAAvMebMQZa7AU6/H/jfST5/dvOzQWDnn0m+SPKXJJeSXExyPOfZTgoAAAAAAJyJkyyPCPoyyf3nbXhREEiSB0n+ta7fSfJukgtnOR0AAAAAAPDKnmR58s/3eUEEOO3/HiW2/t77hz4AAAAASUVORK5CYII=)
}

.shop.ui-button-one.buy {
    font-size: 1vw;
    height: 25%;
    width: 10.1vw
}

.shop.ui-button-one.buy>div {
    scale: .5
}

.shop--item {
    display: flex;
    gap: 1.4vw;
    height: 100%;
    scroll-snap-align: start;
    width: 100%
}

.shop--item--left {
    align-items: center;
    display: flex;
    gap: 30px;
    height: 100%;
    width: 70%
}

.shop--item--left--inner {
    align-items: center;
    display: flex;
    height: 7vh;
    justify-content: center;
    padding-left: 2vh;
    width: 7vh
}

.shop--item--left--inner--info {
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 60%
}

.shop--item--left--inner--image {
    align-items: center;
    border: 2px solid #393e3e;
    border-radius: 8px;
    display: flex;
    height: 6.7vh;
    justify-content: center;
    object-fit: cover;
    padding: .8vh;
    position: -webkit-sticky;
    position: sticky;
    top: 5%;
    width: 6.7vh
}

.shop--item--left--inner--image>img {
    height: 3.7vw;
    width: 3.7vw
}

.shop--item--right {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding-right: .8vw
}

@media only screen and (min-width: 1920px)and (max-width:2560px) {
    .item_title {
        font-size:18px
    }
}

@media only screen and (min-width: 2560px)and (max-width:3840px) {
    .item_title {
        font-size:24px
    }
}

@media only screen and (min-width: 3840px) {
    .item_title {
        font-size:30px
    }
}

.market_desc_container {
    align-items: center;
    display: flex;
    gap: 1vw;
    justify-content: flex-start;
    padding-top: 1vh;
    width: 100%
}

.shop__container--header--item {
    align-items: center;
    color: #6e6e6e;
    display: flex;
    font-family: Helvetica,Arial,sans-serif;
    font-size: .8vw;
    gap: .3vw;
    white-space: nowrap
}

.shop__container--header--item--num {
    color: #acacac;
    font-size: .8vw
}

.shop__container--header--item>img {
    height: 1.6vw
}

.weapon_desc_container {
    align-items: center;
    display: flex;
    flex-wrap: wrap
}

.item_text,.weapon_desc_container {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis
}

.item_text {
    display: block;
    flex-shrink: 1;
    min-width: 0;
    white-space: nowrap
}

.item_text:not(:last-child) {
    margin-right: 4px
}

.item_title {
    color: #acacac;
    font-family: Helvetica,Arial,sans-serif;
    font-size: .8vw;
    font-weight: 700
}

.item_text {
    color: #5f5a54;
    font-size: .7vw;
    margin: 0
}

.shop.ui-button-one {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch
}

.shop.ui-button-one:hover {
    background: url(/static/media/ui-button.c728b870986576f3f34c.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button.c728b870986576f3f34c.png) 12 12 12 12 stretch stretch
}

.shop.ui-button-one[disabled] {
    cursor: not-allowed;
    filter: drop-shadow(2px 4px 6px black);
    opacity: .5;
    transform: translateY(0)
}

.shop.ui-button-one[disabled]:hover {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch;
    filter: drop-shadow(2px 4px 6px black);
    transform: none
}

.shop.ui-button-one.buy,.shop.ui-button-one.sell {
    font-size: 1vw;
    height: 25%;
    width: 10.1vw
}

.shop.ui-button-one.buy>div,.shop.ui-button-one.sell>div {
    scale: .5
}

.shop.ui-button-one.buy>img,.shop.ui-button-one.sell>img {
    width: 1.2vw
}

.shop--item--left--inner--info--market {
    color: #fff;
    display: flex;
    flex-direction: column;
    left: 15%;
    position: absolute;
    top: 15%;
    width: 50%
}

@keyframes buttonFill {
    0% {
        width: 0
    }

    to {
        width: 11vw
    }
}

.shop--fill {
    position: relative
}

.shop--fill.ui-button-one {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch
}

.shop--fill.ui-button-one:hover {
    background: url(/static/media/ui-button.c728b870986576f3f34c.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button.c728b870986576f3f34c.png) 12 12 12 12 stretch stretch
}

.shop--fill.ui-button-one[disabled] {
    cursor: not-allowed;
    filter: drop-shadow(2px 4px 6px black);
    opacity: .5;
    transform: translateY(0)
}

.shop--fill.ui-button-one[disabled]:hover {
    background: url(/static/media/ui-button-d.e096e46335da84c746b1.png) round;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 180% auto;
    border-image: url(/static/media/ui-button-d.e096e46335da84c746b1.png) 12 12 12 12 stretch stretch;
    filter: drop-shadow(2px 4px 6px black);
    transform: none
}

.shop--fill.ui-button-one.buy,.shop--fill.ui-button-one.sell {
    font-size: 1vw;
    height: 25%;
    width: 10.1vw
}

.shop--fill.ui-button-one.buy>div,.shop--fill.ui-button-one.sell>div {
    scale: .5
}

.shop--fill.ui-button-one.buy>img,.shop--fill.ui-button-one.sell>img {
    width: 1.2vw
}

.shop--fill:before {
    animation: buttonFill 1s ease-out forwards;
    background: #fff3;
    border-radius: 14px;
    content: "";
    height: 2.1vw;
    left: -.5vw;
    position: absolute;
    top: -.4vw;
    width: 8vw
}

.shop__container__auc {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 5px;
    max-height: 54vh;
    width: 99%
}

.shop__container__auc--header {
    align-items: flex-end;
    display: flex;
    height: 3vw;
    justify-content: space-between;
    min-width: 100%
}

.shop__container__auc--header--title {
    color: #fff;
    font-size: 1.7vw;
    padding-left: .7vw
}

.shop__container__auc--header--btn {
    margin-right: 2vw
}

.shop__container__auc--body {
    color: #898989;
    font-size: .8vw;
    padding: .5vw 1vw
}

.shop__container__auc--buyer--header {
    align-items: flex-end;
    border-bottom: 1px solid #282828;
    display: flex;
    height: 2.5vw;
    justify-content: flex-start;
    margin-bottom: 2vh;
    min-width: 98%;
    width: 98%
}

.shop__container__auc--buyer--header--tab {
    color: #555
}

.shop__container__auc--buyer--header--tab,.shop__container__auc--buyer--header--tab--active {
    align-items: center;
    border-radius: 4px 4px 0 0;
    display: flex;
    font-size: .8vw;
    height: 4vh;
    justify-content: center;
    padding: 0 1vw;
    white-space: nowrap;
    width: auto
}

.shop__container__auc--buyer--header--tab--active {
    background-color: #272727;
    color: #b1b1b1
}

.shop__container__auc--header--title>p:first-letter {
    color: brown;
    font-family: RunicFont,serif;
    font-size: 2.5vw;
    font-weight: 700
}

.shop__container--auc {
    max-height: 30vh;
    min-height: 30vh;
    overflow-x: hidden;
    overflow-y: hidden
}

.shop-containerAuc {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    max-height: 37vh;
    min-height: 37vh;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0 1vw;
    scroll-snap-type: y mandatory;
    width: 94%
}

@media only screen and (min-width: 3840px) {
    .shop-containerAuc {
        max-height:50vh;
        min-height: 40vh
    }
}

.shop-containerAuc::-webkit-scrollbar {
    width: .6vw
}

.shop-containerAuc::-webkit-scrollbar-track {
    background: #000;
    border-radius: .21vw
}

.shop-containerAuc::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#3d3d3d 0,#2a2a2a calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: 8px;
    min-height: 20px
}

.shop-containerAuc::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(180deg,#0000 0,#0000 2px,#333 0,#333 calc(100% - 2px),#0000 calc(100% - 2px),#0000);
    border-radius: .21vw;
    min-height: 20px
}

.shop-containerAuc::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVQokY3QUUsCURDF8d9db6CV+KCgIFkbGIjQNwvCj9pr0JfoSUu2hx1h2W7pwMDlMP85c2562b0qVI1nJLzhoz9QFaAbrDCLXmF8CVhjiW98xbs+B07xiBGO0UM8hHsRvMIGExw6+iG0Tcz8Au8wxwBNR29Cm+O+Dw7xpP2EYz9PaLdY4/oEpjhjFtubAnjSpzFbVVhow+c/3LquOWYXGVtt+BRZ/qsUcbY5bt6fcevWAKOM99iSlPP1HRt8/gDm8h1gH+laGQAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop-containerAuc::-webkit-scrollbar-button:single-button:vertical:increment {
    background: #000;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQokY3Qy0oDURAE0HNnrtkEUfIPLvw4QfKvIaBgXggJJAvJE4zRxfTAaF726lJddauq01P3+RG3SPh2eWrOMuMBbXxdEdVTYp2xQSd+O1wRFeE4z+hF1Lt/uCYs0SswxRD7iHEp4j6409q6j3n8mM44JSyCeyhiscNLxDjlWmKFV9VNFI3lBDNVz6ZrCmyGUQ02hZ8R4wOtBt4KrB+cI6Ho8IZtxCujxlB1A+eEMMA7Mm7iPfhLyieEa4xxH/3GqqP9mh9tvjcMyC7+UQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    border-radius: 8px;
    box-shadow: inset 0 0 6px #0000004d;
    height: 6px
}

.shop-containerAuc--aucItems {
    height: 80vh;
    outline: none;
    width: 100%
}

.shop-containerAuc--aucItems--item {
    align-items: center;
    background-color: #1a1a1ad1;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #232928;
    border-radius: .4vw;
    box-shadow: inset 0 0 0 1px #ffffff1c;
    display: flex;
    height: 10.5vh;
    justify-content: center;
    margin-bottom: 2vh;
    object-fit: cover;
    position: -webkit-sticky;
    position: sticky;
    width: 101%
}

.shop-containerAuc--aucItems--item:hover {
    background-image: url(data:image/png;base64,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AAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACggCAAAAAAAAAFBAEAAAAAACggCAAAAAAAQAFBAAAAAAAACggCAAAAAABQQBAAAAAAAIACggAAAAAAABQQBAAAAAAAoIAgAAAAAAAABQQBAAAAAAAoIAgAAAAAAEABQQAAAAAAAAoIAgAAAAAAUEAQAAAAAACAAoIAAAAAAAAUEAQAAAAAAKCAIAAAAAAAAAUEAQAAAAAAKCAIAAAAAABAAUEAAAAAAAAKCAIAAAAAAFBAEAAAAAAAgAKCAAAAAAAAFBAEAAAAAACgwCbJ3PcQAAAAAADA67VJ8mhdH+xzEAAAAAAA4MztnhT0wybJgySZUxAAAAAAAIDfkzlzuC5PNknurX++sK+BAAAAAACA12G+vS7ubZJ8kyRz5uL+BgIAAAAAAM7aqbP/u5skd5J8m+Rwznm8v7EAAAAAAICzsp75H2ZpAHd2LxO4tVzM5fUiAAAAAADw5jpcz/yTtQHsgsDXSW4neWu7nVeTvLWH4QAAAAAAgF/v9Fn/7SwN4GkQSJKbWW4bONpu55/nzB/Of0YAAAAAAOBVzbmc8Sc5ynLmf3N37XQQ2Cb5LMndLO8TuLbdzvfnzNG5TgsAAAAAAPwic+ZwzvnenPNallcD3M1y5r/d7Tl45n/+l+QfST5M8kGS4znn8Zx5nOThGHl8PqMDAAAAAAAvMebMQZa7AU6/H/jfST5/dvOzQWDnn0m+SPKXJJeSXExyPOfZTgoAAAAAAJyJkyyPCPoyyf3nbXhREEiSB0n+ta7fSfJukgtnOR0AAAAAAPDKnmR58s/3eUEEOO3/HiW2/t77hz4AAAAASUVORK5CYII=)
}

.battleLog {
    background: url(/static/media/bgBig.e24ec9ec201e15c92877.jpg) repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    min-height: 100vh;
    overflow: auto;
    -webkit-user-select: text!important;
    user-select: text!important
}

.battleLog,.battleLog *,.battleLog .chat__block1--body--message *,.battleLog .chat__block1--body--message div,.battleLog .chat__block1--body--message p,.battleLog .chat__block1--body--message span {
    cursor: text!important;
    -webkit-user-select: text!important;
    user-select: text!important
}

.battleLog .log__crit__color {
    color: red
}

.battleLog__header {
    align-items: center;
    background: #2f2f2f;
    display: flex;
    height: 100px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10
}

.battleLog__header--logo {
    margin-left: 300px
}

.battleLog__header--logo img {
    height: 80px
}

.battleLog__header--button {
    margin-right: 300px
}

.battleLog__header--type {
    color: #fff
}

.battleLog__back {
    max-height: 85vh;
    opacity: .05;
    overflow: clip;
    pointer-events: none;
    position: absolute;
    top: 100px;
    z-index: 0
}

.battleLog__back img {
    mask-image: linear-gradient(0deg,#0000 20%,#000 60%);
    -webkit-mask-image: linear-gradient(0deg,#0000 20%,#000 60%);
    width: 100%
}

.battleLog__body {
    display: flex;
    flex-direction: column;
    padding: 150px 300px;
    z-index: 1
}

.battleLog__body .chat__block1--body--message {
    flex: auto
}

.battleLog__body .protective__action,.battleLog__body .toChat_text {
    color: #5a4632
}

.battleLog__body .toChat_text.teml_4 {
    color: red;
    font-weight: 700;
    text-transform: uppercase
}

.battleLog__toLoad {
    bottom: 0;
    filter: invert(.6);
    left: 9%;
    position: fixed;
    top: calc(50% + 40px)
}

.battleLog__toLoad .lds-ellipsis {
    transform: rotate(270deg)
}

.chooseCharacter {
    display: flex;
    flex-direction: column;
    height: 100vh
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .chooseCharacter {
        min-height:768px
    }
}

.chooseCharacter__header {
    align-items: center;
    background: #292929;
    display: flex;
    height: 4vw;
    justify-content: space-between;
    padding: 0 6vw
}

.chooseCharacter__header--left {
    align-items: center;
    color: #d6d5d5;
    display: flex;
    font-size: 1vw
}

.chooseCharacter__header--left b {
    color: #5f6161;
    margin-right: .3vw
}

.chooseCharacter__header--left img {
    margin-right: 1vw;
    width: 2.5vw
}

.chooseCharacter__header--right {
    color: #5f6161;
    display: flex;
    font-size: 1vw;
    gap: 1vw
}

.chooseCharacter__header--right div {
    cursor: pointer
}

.chooseCharacter--toModal {
    display: flex;
    flex-direction: column;
    gap: .4vw;
    margin: .2vw 0 1.2vw
}

.chooseCharacter__body {
    background: url(/static/media/sacralium_character_screen_FIN_17_04_2023.045560d861613af19520.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;
    height: 100%;
    padding: 2vw 4vw
}

@media only screen and (max-width: 1367px)and (max-height:769px) {
    .chooseCharacter__body {
        padding:4vw
    }
}

.chooseCharacter__body__container {
    display: flex;
    flex: 1 1;
    height: 100%
}

@media only screen and (min-width: 1437px)and (max-width:1497px)and (min-height:932px)and (max-height:992px) {
    .chooseCharacter__body__container {
        align-items:center
    }
}

.chooseCharacter__body__container__box {
    height: 100%;
    margin: 1vw 2vw 0;
    position: relative;
    width: 26vw
}

.chooseCharacter__body__container__box--mini {
    align-items: center;
    background: #000;
    border: .15vw solid hsla(0,0%,80%,.471);
    border-radius: .3vw;
    cursor: pointer;
    display: flex;
    height: 2vw;
    justify-content: center;
    position: absolute;
    right: 1.2vw;
    top: -.8vw;
    width: 2vw;
    z-index: 2
}

.chooseCharacter__body__container__box--mini img {
    filter: opacity(.6);
    width: 55%
}

.chooseCharacter__body__container__box--mini:hover img {
    filter: opacity(1)
}

.chooseCharacter__body__container__box--iner {
    align-items: center;
    background: #000000b5;
    border: .2vw solid hsla(0,0%,80%,.471);
    border-radius: .8vw;
    display: flex;
    filter: grayscale(1);
    flex-direction: column;
    gap: 2vh;
    height: 96%;
    min-width: 350px;
    overflow: hidden;
    position: relative
}

.chooseCharacter__body__container__box--iner:hover {
    filter: grayscale(0)
}

@media only screen and (min-width: 1437px)and (max-width:1497px)and (min-height:932px)and (max-height:992px) {
    .chooseCharacter__body__container__box--iner {
        max-height:610px;
        padding-bottom: 10px
    }
}

.chooseCharacter__body__container__box .noIn {
    align-items: center;
    color: hsla(0,0%,100%,.459);
    cursor: pointer;
    font-size: 12vw;
    justify-content: center
}

.chooseCharacter__body__container__box .noIn:hover {
    color: #ffffffb3
}

.chooseCharacter__body__container__box .noIn div {
    font-size: 1.3vw
}

.chooseCharacter__body__container__box__modal {
    display: flex;
    flex-direction: column;
    gap: 1vw
}

.chooseCharacter__body__container__box__modal--info {
    color: hsla(0,0%,100%,.459);
    font-size: .7vw;
    white-space: pre-line
}

.chooseCharacter__body__container__box__modal__points {
    display: flex;
    gap: 2.6vw
}

.chooseCharacter__body__container__box__modal__points--box {
    align-items: center;
    display: flex;
    gap: .6vw
}

.chooseCharacter__body__container__box__modal input {
    background: #fff;
    border: 0 solid;
    color: #000;
    font-size: .7vw
}

.chooseCharacter__body__container__box__modal img {
    height: auto;
    width: 1vw
}

.chooseCharacter__body__container__box__modal h4 {
    color: #fff;
    font-weight: 400
}

.chooseCharacter__body__container__box__modal--shareCode {
    align-items: center;
    display: flex;
    gap: 2.6vw;
    max-width: 50%
}

.chooseCharacter__body__container__box__modal--shareCode--box {
    align-items: center;
    display: flex;
    gap: .6vw
}

.chooseCharacter__body__container__box__modal--send {
    display: flex;
    gap: 1vw;
    justify-content: space-between
}

.chooseCharacter__body__container__box__modal--send--box {
    align-items: center;
    color: hsla(0,0%,100%,.459);
    display: flex;
    font-size: .7vw;
    gap: .6vw
}

.chooseCharacter__body__container__box__modal--send--box--code {
    color: #fff;
    font-size: 2vw
}

.swiper-button-next {
    right: 1.3vw
}

.disChose {
    pointer-events: none
}

.new-characterInit-back {
    background: #252422;
    overflow: hidden
}

.new-characterInit,.new-characterInit-back {
    align-items: center;
    display: flex;
    height: 100vh
}

.new-characterInit {
    background: url(/static/media/%D0%B1%D1%8D%D0%BA%204.52b04b24973066f0ac95.png) no-repeat 50%;
    background-size: cover;
    justify-content: center;
    position: relative;
    width: 100%
}

.new-characterInit p {
    color: #fff
}

.new-characterInit--button {
    border-radius: 10px;
    cursor: pointer;
    filter: blur(100px);
    height: 40px;
    position: absolute;
    transition: .3s;
    width: 100px
}

.new-characterInit--button:hover {
    background: hsla(0,0%,100%,.051)
}

.new-characterInit--button--one {
    height: 100%;
    left: 0;
    top: 0;
    width: 27%
}

.new-characterInit--button--two {
    height: 50%;
    right: 0;
    top: 0;
    width: 27%
}

.new-characterInit--button--three {
    bottom: 0;
    height: 50%;
    right: 0;
    width: 27%
}

.new-character-profile-container {
    align-items: center;
    background: url(/static/media/Book.a4d4918827e322f16007.png) no-repeat 50%;
    background-size: cover;
    display: flex;
    height: 515px;
    justify-content: center;
    margin-top: 70px;
    padding: 50px;
    padding: 50px 0 100px 100px;
    scale: 1.4;
    width: 800px
}

.new-character {
    grid-gap: 10px;
    align-items: flex-end;
    display: flex;
    position: relative
}

.new-character--pre {
    flex-direction: column;
    left: -22%;
    position: absolute
}

.new-character--pre,.new-character--tooltip {
    align-items: center;
    display: flex;
    justify-content: center
}

.new-character--tooltip {
    height: 100%
}

.new-character--tooltip__cont {
    border-radius: 12px;
    position: relative
}

.new-character--tooltip__cont--invis {
    border-radius: 12px;
    mask-composite: intersect;
    -webkit-mask-composite: destination-in;
    mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    -webkit-mask-image: linear-gradient(0deg,#0000,#000 1%),linear-gradient(180deg,#0000,#000 4%),linear-gradient(270deg,#0000,#000 4%),linear-gradient(90deg,#0000,#000 3%);
    padding: 12px;
    position: relative;
    width: 270px
}

.new-character--tooltip__cont--invis:before {
    background: linear-gradient(180deg,#0000,#0000),url(/static/media/invisBgCharacter.815e5bda8dad647dc1d9.png) no-repeat 50%;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1
}

.new-character--tooltip .game--container__left--block__head {
    margin: 0;
    padding: 0 0 12px
}

.new-character--tooltip .new-character {
    margin-bottom: 24px;
    min-height: auto
}

.new-character--tooltip .new-character--bottom-bg {
    bottom: 0;
    left: 0
}

.new-character--tooltip .new-character--center {
    bottom: -14px;
    height: 272px;
    max-width: 180px;
    min-width: 168px;
    position: relative
}

.new-character--tooltip .new-character--center--isMob img {
    width: 197px
}

.new-character--tooltip .new-character--center img {
    bottom: -60px;
    left: -62px;
    position: absolute;
    width: 330px
}

.new-character--bottom-bg {
    bottom: -36px;
    opacity: .3;
    position: absolute;
    width: 100%;
    z-index: 1
}

.new-character--inventory {
    grid-gap: 2px;
    align-items: center;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.new-character--inventory--mini-slots {
    display: flex;
    flex-wrap: wrap;
    gap: .5vw;
    justify-content: center;
    margin: 10px 0 0
}

.new-character--inventory--mini-slots--item {
    align-items: center;
    background: rgba(0,0,0,.502);
    border: 2px solid #ffffff4a;
    border-radius: 10px;
    display: flex;
    height: 40px;
    justify-content: center;
    overflow: hidden;
    width: 40px
}

.new-character--inventory--mini-slots--item img {
    width: 100%
}

.new-character--inventory--mini-slots--nav {
    align-items: center;
    display: flex
}

.new-character--inventory--mini-slots--nav img {
    width: 15px
}

.new-character--inventory:first-child {
    z-index: 12
}

.new-character--inventory:nth-child(3) {
    z-index: 11
}

.new-character--inventory .undefined {
    position: relative
}

.new-character--inventory--full {
    display: none;
    height: 83px;
    left: -17px;
    position: absolute;
    top: -20px;
    width: 83px;
    z-index: -1
}

.new-character--inventory--full--yes {
    display: block
}

.new-character--inventory--item {
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1.5vh;
    border-style: inset;
    border-width: 3px;
    height: 40px;
    max-height: 54px;
    max-width: 54px;
    min-height: 40px;
    min-width: 40px;
    position: relative;
    width: 40px
}

.new-character--inventory--item--level {
    bottom: .5vh;
    color: #fff;
    right: 4px
}

.new-character--inventory--item--level,.new-character--inventory--item--level--info {
    font-size: 9px;
    position: absolute;
    text-shadow: -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000
}

.new-character--inventory--item--level--info {
    bottom: .3vh;
    color: #f3ce8f;
    right: 3px;
    text-align: right;
    white-space: nowrap
}

.new-character--inventory--item img {
    filter: none;
    height: 39px;
    object-fit: contain;
    pointer-events: none;
    width: 39px
}

.new-character--center {
    align-items: flex-end;
    display: flex;
    flex: 3 1;
    height: 110%;
    justify-content: center;
    position: relative;
    z-index: 2
}

.new-character--center>div {
    bottom: -9px;
    max-width: 315px;
    min-width: 252px;
    position: absolute
}

@media only screen and (max-width: 1365px)and (max-height:767px) {
    .new-character--center>div {
        min-width:auto;
        position: static
    }
}

.new-character--center img {
    width: 110%
}

.new-character--center--mob {
    bottom: -9px;
    max-width: 315px;
    min-width: 207px;
    z-index: 2
}

.new-character--center--mob img {
    width: 100%
}

.new-character__bufs {
    grid-gap: 5px;
    display: flex;
    flex-direction: column;
    left: 95%;
    position: absolute;
    top: 123px;
    width: 30px;
    z-index: 11
}

.new-character__bufs--item {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative
}

.new-character__bufs--item,.new-character__bufs--item img {
    border-radius: 7px;
    height: 27px;
    width: 27px
}

.new-character__bufs--item--ant {
    background-color: darkred;
    left: -62px;
    top: -40vh;
    z-index: 10
}

.new-character__bufs--item--many {
    align-items: center;
    border-radius: 100px;
    color: #fff;
    display: flex;
    font-size: 9px;
    height: 12px;
    justify-content: center;
    left: -6px;
    padding-bottom: 1px;
    position: absolute;
    top: -6px;
    width: 13px
}

.new-character__bufs .positive {
    border: 1px solid #01630c;
    box-shadow: inset 0 0 30px 10px #00a613
}

.new-character__bufs .positive .new-character__bufs--item--many {
    background: #005309;
    border: 1px solid #00a613
}

.new-character__bufs .negative {
    border: 1px solid #630102;
    box-shadow: inset 0 0 30px 10px #bc0000
}

.new-character__bufs .negative .new-character__bufs--item--many {
    background: #790000;
    border: 1px solid #d60701
}

.small--resize img {
    width: 110%
}

@keyframes moveCir {
    0% {
        opacity: .5;
        transform: rotate(0deg) scale(.95)
    }

    50% {
        opacity: 1;
        transform: rotate(-180deg) scale(1)
    }

    to {
        opacity: .5;
        transform: rotate(-1turn) scale(.95)
    }
}

@keyframes moveCir2 {
    0% {
        opacity: .5;
        transform: rotate(0deg) scale(.95)
    }

    50% {
        filter: drop-shadow(0 0 4px rgba(255,255,255,.6784313725));
        opacity: 1;
        transform: rotate(180deg) scale(1.1)
    }

    to {
        opacity: .5;
        transform: rotate(1turn) scale(.95)
    }
}

@keyframes moveCir3 {
    0% {
        transform: rotate(0deg) scale(.95)
    }

    50% {
        filter: drop-shadow(0 0 4px #ff2a2a);
        transform: rotate(-180deg) scale(1)
    }

    to {
        transform: rotate(-1turn) scale(.95)
    }
}

@keyframes moveCir4 {
    0% {
        transform: rotate(0deg) scale(1.2)
    }

    50% {
        filter: drop-shadow(0 0 4px red);
        transform: rotate(-180deg) scale(1)
    }

    to {
        transform: rotate(-1turn) scale(1.2)
    }
}

@keyframes moveCir5 {
    0% {
        transform: rotate(0deg)
    }

    50% {
        transform: rotate(-180deg)
    }

    to {
        transform: rotate(-1turn)
    }
}

.new-character-info-zodiak {
    display: flex;
    flex-direction: column;
    font-size: 7px;
    gap: 12px;
    padding: 24px 0;
    width: 270px
}

.new-character-info-zodiak--profile {
    grid-gap: 6px;
    display: grid;
    gap: 6px;
    position: relative
}

.new-character-info-zodiak--one {
    display: flex;
    height: 147px;
    margin-bottom: 50px;
    margin-right: 40px;
    pointer-events: none;
    position: relative
}

.new-character-info-zodiak--one--circles {
    position: relative
}

.new-character-info-zodiak--one--circles img {
    height: 160px;
    left: calc(100% + 81px);
    position: absolute
}

.new-character-info-zodiak--one--circles img:first-child {
    animation: moveCir4 4s linear infinite
}

.new-character-info-zodiak--one--circles img:nth-child(2),.new-character-info-zodiak--one--circles img:nth-child(3) {
    animation: moveCir3 10s linear infinite
}

.new-character-info-zodiak--one--circles img:nth-child(4) {
    animation: moveCir3 20s linear infinite
}

.new-character-info-zodiak--one--circles img:nth-child(5) {
    animation: moveCir 15s linear infinite
}

.new-character-info-zodiak--one--circles img:nth-child(6) {
    animation: moveCir2 10s linear infinite
}

.new-character-info-zodiak--one--pento {
    left: calc(50% - 40px);
    position: absolute;
    top: 17%
}

.new-character-info-zodiak--one--pento img {
    width: 98px
}

.new-character-info-zodiak--one--pento--circl {
    animation: moveCir5 10s linear infinite;
    left: calc(52% - 40px);
    position: absolute;
    top: 23%
}

.new-character-info-zodiak--one--pento--circl img {
    width: 90px
}

.new-character-info-zodiak--one--zodiak {
    left: calc(50% - 16px);
    position: absolute;
    top: 40%
}

.new-character-info-zodiak--one--zodiak img {
    width: 49px
}

.new-character-info-zodiak--one--stars {
    position: absolute
}

.new-character-info-zodiak--one--stars img {
    width: 24px
}

.new-character-info-zodiak--one--house {
    left: calc(39% - 16px);
    position: absolute;
    top: 17%
}

.new-character-info-zodiak--one--house img {
    width: 104px
}

.new-character-info-zodiak--two {
    display: flex
}

.new-character-info-zodiak--two--left {
    display: flex;
    height: 36px;
    justify-content: center;
    width: 49px
}

.new-character-info-zodiak--two--left--profile {
    display: flex;
    height: 24px;
    justify-content: center;
    width: 49px
}

.new-character-info-zodiak--two--left img {
    height: 75%;
    width: auto
}

.new-character-info-zodiak--two--right {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    gap: 1px;
    justify-content: center
}

.new-character-info-zodiak--two--right--one {
    color: #b4b4b4
}

.new-character-info-zodiak--two--right--two {
    color: #888
}

.new-character-info-zodiak--two--right--two--profile {
    color: #888;
    width: 295px
}

.new-character-info-zodiak--two--right--three {
    color: #ce8d45
}

@keyframes blink-red-damage {
    0%,to {
        box-shadow: 0 0 0 0 #0000
    }

    50% {
        box-shadow: 0 0 12px 7px #a00
    }
}

@keyframes blink-red-damage2 {
    0% {
        background: #aa000094
    }

    to {
        background: #0000
    }
}

.slot-hit-animation {
    position: relative;
    z-index: 10
}

.slot-hit-animation:after {
    animation: blink-red-damage2 1s linear;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1
}

.magic {
    box-shadow: inset 0 0 0 2px #2ea8ff
}

.magic:after {
    background: #0096ff80;
    content: "";
    inset: 0;
    mix-blend-mode: color;
    pointer-events: none;
    position: absolute
}

.noMagic {
    filter: grayscale(1) brightness(.9)
}

.magicN {
    background: rgba(0,0,0,.788)
}

.magicN>img {
    filter: brightness(0) saturate(100%);
    filter: brightness(1) saturate(50%) invert(10%) sepia(90%) saturate(250%) hue-rotate(160deg) brightness(90%) contrast(100%)
}

.mob_level_tlp {
    left: 39px;
    position: absolute;
    top: .5vh;
    z-index: 4
}

.mob_level_tlp>img {
    width: 24px
}

.mob_level_tlp>span {
    color: #c08b4d;
    font-family: RunicFontBold;
    font-size: 14px;
    font-weight: 700;
    left: 35%;
    position: absolute;
    top: 18%
}

.dmg__tlp {
    flex-direction: column;
    justify-content: center
}

.dmg__tlp,.dmg__tlp--title {
    color: #d3d3d3;
    display: flex;
    font-weight: 400
}

.dmg__tlp--title {
    align-items: baseline;
    flex-direction: row;
    gap: 2px
}

.dmg__tlp--title>h3 {
    color: #d3d3d3;
    font-weight: 400
}

.dmg__tlp--desc {
    align-items: baseline;
    display: flex;
    gap: 2px;
    margin-left: 12px
}

.dmg__tlp--desc>h5 {
    color: #b4b4b4;
    font-weight: 400
}

.new-game {
    background: #292929;
    height: auto;
    justify-content: center
}

.new-game,.new-game--container {
    display: flex;
    min-width: 1229px;
    width: 100%
}

.new-game--container {
    min-height: 691px
}

.new-game--container__left {
    background: url(/static/media/newBgCharacter.15bd62fdb26b92b6add0.jpg) no-repeat 50%;
    background-color: #292929;
    background-size: cover
}

.new-game--container__left,.new-game--container__left--invis {
    display: flex;
    max-width: 30%;
    position: relative;
    width: 100%;
    z-index: 11
}

.new-game--container__left--invis {
    background: url(/static/media/invisBgCharacter.815e5bda8dad647dc1d9.png) no-repeat 50%;
    background-color: #292929;
    background-size: cover;
    height: 100vh
}

.new-game--container__left--infoid {
    background: rgba(0,0,0,.102);
    bottom: 0;
    color: #ffffff7d;
    font-size: 8px;
    left: 0;
    line-height: 2;
    padding: 5px 10px;
    position: absolute;
    -webkit-user-select: text;
    user-select: text;
    width: auto;
    z-index: 5
}

.new-game--container__left--chain {
    background: url(data:image/png;base64,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);
    background-size: contain;
    height: 100%;
    opacity: .6;
    position: absolute;
    right: 0;
    width: 8px
}

.new-game--container__left--block {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px
}

.new-game--container__left--block__head {
    grid-gap: 6px;
    display: flex;
    left: 0;
    padding: 0 18px;
    position: absolute;
    top: -40px
}

.new-game--container__left--block__head--flag {
    height: 92px;
    left: -26px;
    position: absolute;
    top: 0;
    width: calc(100% + 100px);
    z-index: 1
}

.new-game--container__left--block__head--flag--noOnline {
    filter: grayscale(1)
}

.new-game--container__left--block__head--level {
    align-items: center;
    background: url(/static/media/levelBg.45710cf683cd4636e7e9.png) no-repeat;
    background-size: contain;
    display: flex;
    height: 67px;
    justify-content: center;
    position: relative;
    width: 61px;
    z-index: 2
}

.new-game--container__left--block__head--level--num {
    -webkit-text-fill-color: hsla(35,61%,72%,.451);
    background: -webkit-linear-gradient(#fff,#ff9500);
    -webkit-background-clip: text;
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    padding-bottom: 10px;
    text-shadow: 0 3px 2px rgba(0,0,0,.431)
}

.new-game--container__left--block__head--info {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    z-index: 2
}

.new-game--container__left--block__head--info--name {
    color: #fff;
    font-family: RunicFont,serif;
    font-size: 16px;
    padding-top: 6px
}

.new-game--container__left--block__head--info--name--anto {
    color: #fff;
    font-family: RunicFont,serif;
    font-size: 16px;
    left: 61px;
    padding-top: 14px;
    position: relative
}

.new-game--container__left--block__head--info--stat {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 171px
}

.new-game--container__left--block__head--info--stat .active-bar--bg,.new-game--container__left--block__head--info--stat .active-bar--bg .active-bar--bg--active {
    height: 8px
}

.new-game--container__left--block__head--info--stat .active-bar--numHp {
    font-size: 8px;
    top: 0
}

.new-game--container__left--block__head--info--stat--bar-bg {
    background: #5a0912;
    border: 1px solid #b13604;
    border-radius: 5px;
    height: 12px;
    width: 100%
}

.new-game--container__left--block__head--info--stat--bar-bg--active {
    background: #8e0406;
    border: 1px solid #c95903;
    border-radius: 5px;
    height: 12px;
    max-width: 100%;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 0;
    z-index: 1
}

.new-game--container__left--block__head--info--stat--bar-bg--active--level {
    color: #e7d5ac;
    font-size: 9px;
    left: 5px;
    position: absolute;
    top: 1px;
    z-index: 2
}

.new-game--container__left--block__head--info--stat--bar-bg--active--exp {
    color: #e7d5ac;
    font-size: 9px;
    left: calc(50% - 43px);
    max-width: 86px;
    position: absolute;
    text-align: center;
    top: 1px;
    white-space: nowrap;
    width: 100%;
    z-index: 2
}

.new-game--container__left--block__head__inventory {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: 2px;
    cursor: pointer;
    display: flex;
    height: 27px;
    justify-content: center;
    position: absolute;
    right: -13px;
    top: 2vh;
    width: 27px;
    z-index: 11
}

.new-game--container__left--block__head__inventory img {
    height: 26px;
    width: 26px
}

.new-game--container__left--block__head__inventory--open {
    display: none
}

.new-game--container__left--block__head__iconMap {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: 2px;
    cursor: pointer;
    display: flex;
    height: 27px;
    justify-content: center;
    position: absolute;
    right: -37px;
    top: 8vh;
    width: 27px;
    z-index: 11
}

.new-game--container__left--block__head__iconMap img {
    height: 26px;
    width: 26px
}

.new-game--container__left--block__head__dung {
    align-items: center;
    background: rgba(0,0,0,.788);
    background-size: cover;
    border-image: url(/static/media/ui-bg-items.40f86d389c0a4d7aabb1.png) 12 12 12 12 stretch stretch;
    border-radius: 1vh;
    border-style: inset;
    border-width: 2px;
    cursor: pointer;
    display: flex;
    height: 27px;
    justify-content: center;
    position: absolute;
    right: -37px;
    top: 22vh;
    width: 27px;
    z-index: 11
}

.new-game--container__left--block__head__dung img {
    height: 26px;
    width: 26px
}

.new-game--container__left--block__characteristics {
    display: flex;
    flex-direction: column;
    margin: 4vh 0 1vh
}

.new-game--container__left--block__characteristics--mini {
    display: flex;
    justify-content: center;
    margin-bottom: 10px
}

.new-game--container__left--block__characteristics--mini--box {
    grid-gap: 18px;
    display: flex
}

.new-game--container__left--block__characteristics--mini--box--item {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 9px
}

.new-game--container__left--block__characteristics--mini--box--item img {
    margin-right: 3px;
    width: 12px
}

.new-game--container__left--block__characteristics--mini-slots {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-top: 12px
}

.new-game--container__left--block__characteristics--mini-slots--item {
    align-items: center;
    background: rgba(0,0,0,.502);
    border: 2px solid #ffffff4a;
    border-radius: 6px;
    display: flex;
    height: 17px;
    justify-content: center;
    width: 17px
}

.new-game--container__left--block__characteristics--mini-slots--item>div {
    align-items: center;
    display: flex;
    justify-content: center
}

.new-game--container__left--block__characteristics--mini-slots--item img {
    width: 17px
}

.new-game--container__left--block__characteristics--mini-slots--item__closed img {
    width: 14px
}

.new-game--container__left--block__info {
    display: flex;
    width: 80%
}

.new-game--container__left--block__info--box {
    grid-gap: 5px;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.new-game--container__left--block__info--box__tooltip {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 378px
}

.new-game--container__left--block__info--box__tooltip h2 {
    color: #d3d3d3;
    font-weight: 400
}

.new-game--container__left--block__info--box__tooltip h5 {
    color: #b4b4b4;
    font-weight: 400
}

.new-game--container__left--block__info--box__tooltip--list {
    color: #b4b4b4;
    display: flex;
    flex-direction: column;
    gap: 2px
}

.new-game--container__left--block__info--box__tooltip--list--item {
    align-items: center;
    display: flex;
    font-size: 9px;
    gap: 2px
}

.new-game--container__left--block__info--box__tooltip--list--item--img {
    align-items: center;
    border: 1px solid hsla(0,0%,100%,.129);
    border-radius: 3px;
    display: flex;
    height: 18px;
    justify-content: center;
    width: 18px
}

.new-game--container__left--block__info--box__tooltip--list--item--img img {
    max-height: 14px;
    max-width: 14px
}

.new-game--container__left--block__info--box__block {
    grid-gap: 5px;
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.new-game--container__left--block__info--box__block2 {
    grid-gap: 5px;
    align-items: flex-end;
    display: flex;
    flex: 1 1;
    flex-direction: row;
    padding-bottom: 2px
}

.new-game--container__left--block__info--box--item {
    grid-gap: 9px;
    align-items: flex-start;
    display: flex
}

.new-game--container__left--block__info--box--item--name {
    color: #b4b4b4;
    font-size: 9px;
    width: 59px
}

.new-game--container__left--block__info--box--item--name-mini {
    color: #b4b4b4;
    font-size: 9px;
    width: 51px
}

.new-game--container__left--block__info--box--item--name-miniT {
    color: #b4b4b4;
    font-size: 9px;
    min-width: 76px;
    width: 76px
}

.new-game--container__left--block__info--box--item .auto {
    width: auto
}

.new-game--container__left--block__info--box--item--boost {
    align-items: center;
    background: #2d763c;
    border-radius: 3px;
    color: #56ff52;
    cursor: pointer;
    display: flex;
    font-size: 9px;
    font-weight: 600;
    height: 12px;
    justify-content: center;
    padding-bottom: 1px;
    width: 13px
}

.new-game--container__left--block__info--box--item--val {
    color: #fff;
    font-size: 9px
}

.new-game--container__left--block__info--box--item--plus {
    color: #75d580;
    display: flex;
    font-size: 9px
}

.new-game--container__left--block__info--box--item--stat {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 9px
}

.new-game--container__left--block__info--box--item--stat--spec {
    color: #fcce52;
    font-size: 9px
}

.new-game--container__left--block__info--box--item--stat img {
    margin-right: 3px;
    width: 12px
}

.new-game--container__left--block__notify {
    color: #fff;
    font-size: 9px;
    margin-top: 1.5vh
}

.new-game--container__left--block__notify b {
    color: #56ff52
}

.new-game--container__right {
    flex: 5 1;
    position: relative
}

.load {
    align-items: center;
    background: #000;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    min-width: 1229px;
    pointer-events: auto;
    position: absolute;
    top: 0;
    transition: .3s;
    visibility: visible;
    width: 100%;
    z-index: 10000
}

.load--hide {
    opacity: 0;
    pointer-events: none;
    visibility: hidden
}

.load img {
    width: 15%
}

.lds-ellipsis {
    display: inline-block;
    height: 72px;
    position: relative;
    width: 72px
}

.lds-ellipsis div {
    animation-timing-function: cubic-bezier(0,1,1,0);
    background: #fff;
    border-radius: 50%;
    height: 11px;
    position: absolute;
    top: 0;
    width: 11px
}

.lds-ellipsis div:first-child {
    animation: lds-ellipsis1 .6s infinite;
    left: 7px
}

.lds-ellipsis div:nth-child(2) {
    animation: lds-ellipsis2 .6s infinite;
    left: 7px
}

.lds-ellipsis div:nth-child(3) {
    animation: lds-ellipsis2 .6s infinite;
    left: 28px
}

.lds-ellipsis div:nth-child(4) {
    animation: lds-ellipsis3 .6s infinite;
    left: 50px
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0)
    }

    to {
        transform: scale(1)
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1)
    }

    to {
        transform: scale(0)
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0)
    }

    to {
        transform: translate(21px)
    }
}

.left-panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: space-between;
    position: relative;
    width: 350px
}

.right-panel {
    height: 538px;
    width: 350px
}

.new-character-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 20px 0
}

.new-character-info--head {
    display: flex;
    gap: 10px;
    opacity: 0
}

.new-character-info--head--name {
    color: red;
    font-family: RunicFont,serif
}

.new-character-info--head--info {
    display: flex;
    flex-direction: column;
    font-size: 10px
}

.new-character-info--head--info--title {
    color: #fff;
    display: flex;
    gap: 5px
}

.new-character-info--head--info--cast,.new-character-info--head--info--title--desc {
    color: #858585
}

.new-character-info--big {
    color: #858585;
    font-size: 10px;
    height: 106px;
    width: 95%
}

.rrI-2 {
    background: radial-gradient(circle,#1a1a1ad1 5%,rgba(117,182,229,.502) 200%)!important
}

.rrI-3 {
    background: radial-gradient(circle,#1a1a1ad1 5%,rgba(240,158,59,.459) 200%)!important
}

.rrI-4 {
    background: radial-gradient(circle,#1a1a1ad1 5%,#9800ff38 108%)!important
}

.rrI-5 {
    background: radial-gradient(circle,#1a1a1ad1 5%,rgba(255,0,8,.498) 200%)!important
}

.rrC-1 {
    color: #7c7eac!important
}

.rrC-2 {
    color: #3d85c6!important
}

.rrC-3 {
    color: #e69138!important
}

.rrC-4 {
    color: #674ea7!important
}

.rrC-5 {
    color: #c00!important
}

.character--slot4-tooltips {
    align-items: flex-start;
    display: flex;
    gap: 14px
}

.character--slot4-tooltips-item {
    background: linear-gradient(90deg,#252525,#2e2e2e);
    border: 1px solid #434242;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.278);
    box-sizing: border-box;
    color: #444;
    padding: 10px 20px
}

.containerTech {
    align-items: center;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100%
}

.form-message__footer {
    position: relative;
    text-align: center;
    z-index: 11
}

.form-message__link {
    color: #9cabac;
    display: inline-block;
    font-size: 90%;
    text-decoration: none;
    transition: color .25s ease-in
}

@media(any-hover: hover) {
    .form-message__link:hover {
        color:#fff
    }
}

.adm_panel {
    align-items: center;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 5vw;
    top: 0
}

.adm_panel>button {
    border-radius: 14px;
    height: 1.5vw;
    opacity: .5;
    width: 2.5vw
}

.adm_panel>input {
    height: 80%;
    width: 50%
}

.adm_stats {
    background: #181614;
    background-size: cover;
    border-image: url(http://localhost:3000/static/media/ui-window.850134f%E2%80%A6.png) 60 60 60 60 stretch stretch;
    display: flex;
    flex-direction: column;
    height: 50vh;
    left: -53vw;
    position: absolute;
    top: 10vh;
    width: 50vw;
    z-index: 9999
}

.adm_stats--inner {
    color: #fff;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    width: 100%
}

.adm_stats--inner--p1,.adm_stats--inner--p2 {
    align-items: flex-start;
    border-left: 2px solid #fff;
    display: flex;
    flex-direction: column;
    font-size: 1.5vh;
    justify-content: flex-start;
    overflow: auto;
    width: 50%
}

.adm_stats--close {
    align-items: center;
    background: #272421;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 0 0 0 #656b6e82;
    height: 2vw;
    justify-content: center;
    padding: .3vw;
    position: absolute;
    right: 2vw;
    top: -2vh;
    width: 2vw;
    z-index: 10
}

.adm_stats--close,.adm_stats--msg {
    color: #fff;
    cursor: pointer;
    display: flex
}

.adm_stats--msg {
    align-items: flex-start;
    background: #181614;
    background-size: cover;
    border-image: url(http://localhost:3000/static/media/ui-window.850134f%E2%80%A6.png) 60 60 60 60 stretch stretch;
    border-top: 2px solid #fff;
    flex-direction: column;
    font-size: 1.5vh;
    justify-content: flex-start;
    max-height: 20vh;
    min-height: 20vh;
    min-width: 100%;
    overflow: auto;
    width: 50%
}

/*# sourceMappingURL=main.d45035b6.css.map*/
