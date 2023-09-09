import { memo, SVGProps } from 'react';

const RafaelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 132 132'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={66} cy={66} r={66} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_202_13' transform='translate(0 -0.010582) scale(0.000881834)' />
      </pattern>
      <image
        id='image0_202_13'
        width={1134}
        height={1158}
      />
    </defs>
  </svg>
);
const Memo = memo(RafaelIcon);
export { Memo as RafaelIcon };