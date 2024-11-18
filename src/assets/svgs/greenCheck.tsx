import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const GreenCheckSvg = (props: any) => (
  <Svg
    width={17}
    height={18}
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.40077 17.6912C13.0226 17.6912 16.7693 13.9445 16.7693 9.32264C16.7693 4.70082 13.0226 0.954102 8.40077 0.954102C3.77895 0.954102 0.0322266 4.70082 0.0322266 9.32264C0.0322266 13.9445 3.77895 17.6912 8.40077 17.6912Z"
      fill="#0AD19F"
    />
    <Path
      d="M12.3585 6.97168L8.24969 11.0804L6.19531 9.02606"
      stroke="white"
      strokeWidth={1.17393}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default GreenCheckSvg;
