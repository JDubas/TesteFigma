import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 405 405' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={202.5} cy={202.5} r={202.5} fill='url(#paint0_linear_202_3)' />
    <defs>
      <linearGradient
        id='paint0_linear_202_3'
        x1={296}
        y1={-133}
        x2={202.368}
        y2={344.846}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBFBFB' />
        <stop offset={1} stopColor='#09A3FB' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
