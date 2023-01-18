import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const EarlyBirdsIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Early Birds</title>
      <path d="M 33 1 C 30 1 28.352766 2.0466562 27.509766 3.5976562 C 26.017766 6.3446562 28.198094 10.217828 29.371094 12.298828 C 29.604094 12.713828 29.798531 13.049437 29.894531 13.273438 C 30.193531 13.962438 30.612547 15.270969 30.060547 16.292969 C 29.599547 17.145969 28.512078 17.725625 26.830078 18.015625 C 16.070078 19.871625 11.041 27.809047 11 42.998047 C 10.999 43.483047 11.346219 43.898375 11.824219 43.984375 C 11.883219 43.994375 11.942 44 12 44 C 12.413 44 12.792453 43.74375 12.939453 43.34375 C 12.954453 43.30175 14.102969 40.198766 16.167969 37.009766 C 16.026969 38.690766 16 40.493 16 42 C 16 42.454 16.304187 42.850797 16.742188 42.966797 C 17.183187 43.083797 17.642187 42.889094 17.867188 42.496094 L 18.080078 42.123047 C 19.849078 39.017047 21.910094 36.309688 26.371094 33.929688 C 33.000094 30.392688 35.474547 25.907828 35.935547 21.048828 C 36.293547 17.277828 34.675219 12.477 31.949219 9 C 30.471219 7.117 31.063234 5.8719062 31.490234 5.5039062 C 31.980126 5.0822393 32.714012 5.0479467 33.076172 5 L 41.5 5 C 41.776 5 42 4.776 42 4.5 C 42 4.224 41.776 4 41.5 4 L 35.974609 3.3496094 C 35.842609 1.4296094 34.569 1 33 1 z M 28.179688 35.199219 C 27.899688 35.369219 27.610547 35.529453 27.310547 35.689453 C 25.500547 36.659453 24.129766 37.669063 23.009766 38.789062 C 23.366304 39.311755 23.697151 39.823681 24 40.3125 L 24 50 L 26 50 L 26 40.197266 C 26.677913 38.709285 27.469636 36.958639 28.179688 35.199219 z"></path>
    </svg>
  );
};

export default EarlyBirdsIcon;
