import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const PaymentBene = (props: any) => (
  <Svg
    width={34}
    height={35}
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17.5} r={17} fill="#CEE2FC" />
    <Path
      d="M11.166 15.958H17.8743M13.4993 20.6247H14.666M16.1243 20.6247H18.4577"
      stroke="black"
      strokeWidth={0.875}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.8327 17.4345V20.3978C22.8327 22.4453 22.3135 22.9587 20.2427 22.9587H13.756C11.6852 22.9587 11.166 22.4453 11.166 20.3978V15.6028C11.166 13.5553 11.6852 13.042 13.756 13.042H17.8743"
      stroke="black"
      strokeWidth={0.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.625 14.5003L20.5 15.3753L22.8333 13.042"
      stroke="black"
      strokeWidth={0.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PaymentBene;
