export const animationWobble = (): string => {
	return (`
    animation: wobble-hor-bottom 0.8s both;
    @keyframes wobble-hor-bottom {
      0%,100% {
            transform-origin: 50% 50%;
      }
      15% {
            transform: rotate(-6deg);
      }
      30% {
            transform: rotate(6deg);
      }
      45% {
            transform: rotate(-3.6deg);
      }
      60% {
            transform: rotate(2.4deg);
      }
      75% {
            transform: rotate(-1.2deg);
      }
    }
`)
}