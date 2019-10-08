import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const SocialChipTwitter = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <rect width={20} height={20} rx={3} ry={3} fill="#00adef" />
      <path
        d="M16.87 5.76a6.18 6.18 0 0 1-1.44 1.49v.37a8 8 0 0 1-.34 2.32 8.26 8.26 0 0 1-1 2.22A8.94 8.94 0 0 1 12.42 14a7.39 7.39 0 0 1-2.31 1.3 8.3 8.3 0 0 1-2.88.49 8 8 0 0 1-4.43-1.3 5 5 0 0 0 .7 0 5.65 5.65 0 0 0 3.58-1.23 2.8 2.8 0 0 1-1.68-.58 2.78 2.78 0 0 1-1-1.42 3.62 3.62 0 0 0 .54 0 2.78 2.78 0 0 0 .76-.1 2.88 2.88 0 0 1-2.33-2.71 2.85 2.85 0 0 0 1.3.36 2.88 2.88 0 0 1-1.28-2.4 2.82 2.82 0 0 1 .39-1.45 8.4 8.4 0 0 0 2.63 2.1 7.92 7.92 0 0 0 3.32.88 3 3 0 0 1-.07-.66 2.81 2.81 0 0 1 .84-2 2.9 2.9 0 0 1 4.15.07 5.51 5.51 0 0 0 1.83-.7 2.75 2.75 0 0 1-1.27 1.55 5.68 5.68 0 0 0 1.66-.44z"
        fill="#fff"
      />
    </svg>
  ),
);