import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const FlagFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M19.5,2.1c-1.3,0.7-3.5,1.6-4.3,1.6c-0.5,0-1.5-0.4-2.3-0.8c-1.1-0.5-2.1-1-3.1-1
	C8.8,2,7.2,2.6,6,3.2V3.1c0-0.5-0.4-1-1-1s-1,0.4-1,1v1.7V13v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-7.4c1.2-0.6,2.9-1.4,3.8-1.4
	c0.7,0,1.4,0.4,2.3,0.8c1,0.5,2,1,3.1,1c2,0,5-1.7,5.3-1.9c0.3-0.2,0.5-0.5,0.5-0.9V3c0-0.3-0.2-0.7-0.5-0.9S19.8,2,19.5,2.1z"
      />
    </svg>
  )
);