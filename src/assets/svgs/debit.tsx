import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Debit = (props: any) => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={16.2016}
      cy={16.2016}
      r={16.2016}
      transform="matrix(-1 8.74228e-08 8.74228e-08 1 32.4032 0.333984)"
      fill="#FFDFED"
    />
    <Path
      d="M12.9233 19.8127L19.4811 13.2549"
      stroke="#ED405C"
      strokeWidth={1.85161}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9233 13.2549L19.4811 13.2549L19.4811 19.8127"
      stroke="#ED405C"
      strokeWidth={1.85161}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Debit;
