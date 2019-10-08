import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const PlayFilled = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <polygon
        points="18,12 6,19 6,5 "
        className="st0"
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 2,
          fill: '#1A2E3B',
          stroke: '#1A2E3B',
        }}
      />
    </svg>
  ),
);