import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Instructional = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="instructionals_32">
        <path
          d="M16.785,20.839C16.544,20.942,16.279,21,16,21s-0.544-0.058-0.785-0.161h-0.002L7,17.319V24
			c0,0.824,0.499,1.532,1.212,1.838l0.001,0.002l0.009,0.004c0,0,0,0,0,0l6.991,2.996h0.002C15.456,28.942,15.721,29,16,29
			s0.544-0.058,0.785-0.161h0.002l6.991-2.996c0,0,0,0,0,0l0.009-0.004l0.001-0.002C24.501,25.532,25,24.824,25,24v-6.681
			l-8.213,3.52H16.785z"
        />
        <path
          d="M30.778,12.843C30.779,12.843,30.779,12.843,30.778,12.843l0.009-0.004v-0.001C31.5,12.532,32,11.825,32,11
			s-0.5-1.532-1.213-1.838V9.161l-0.009-0.004c0,0,0,0,0,0L16.787,3.161h-0.002C16.544,3.058,16.279,3,16,3s-0.544,0.058-0.785,0.161
			h-0.002L1.222,9.157c0,0,0,0,0,0L1.213,9.161v0.001C0.5,9.468,0,10.175,0,11s0.5,1.532,1.213,1.838v0.001l0.009,0.004c0,0,0,0,0,0
			l13.991,5.996h0.002C15.456,18.942,15.721,19,16,19s0.544-0.058,0.785-0.161h0.002L28,14.034v6.244c-0.595,0.346-1,0.984-1,1.723v6
			c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-6c0-0.738-0.405-1.376-1-1.723v-7.101L30.778,12.843z M16,11c-1.105,0-2-0.448-2-1
			c0-0.552,0.895-1,2-1s2,0.448,2,1C18,10.552,17.105,11,16,11z"
        />
      </g>
    </svg>
  )
);