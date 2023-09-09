import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 776 776' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M775.5 388.371C775.5 602.382 602.01 775.871 388 775.871C173.99 775.871 0.5 602.382 0.5 388.371C0.5 174.361 173.99 0.871193 388 0.871193C602.01 0.871193 775.5 174.361 775.5 388.371Z'
      fill='url(#paint0_linear_202_2)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_202_2'
        x1={387.748}
        y1={118.261}
        x2={387.748}
        y2={660.761}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#09A3FB' />
        <stop offset={1} stopColor='#2662C8' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
