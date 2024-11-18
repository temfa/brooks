import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const MyPinSvg = (props: any) => (
  <Svg
    width={34}
    height={35}
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17.5} r={17} fill="#CEE2FC" />
    <Path
      d="M24.8085 18.2589V14.1454C24.8085 13.709 24.6351 13.2905 24.3266 12.9819C24.018 12.6734 23.5995 12.5 23.1631 12.5H11.6454C11.209 12.5 10.7905 12.6734 10.4819 12.9819C10.1734 13.2905 10 13.709 10 14.1454V19.0815C10 19.5179 10.1734 19.9364 10.4819 20.245C10.7905 20.5536 11.209 20.7269 11.6454 20.7269H17.4042"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24.709 21.4812C25.1154 21.7313 25.0899 22.3392 24.6719 22.387L22.5601 22.6264L21.6132 24.5284C21.4256 24.906 20.8456 24.7209 20.7493 24.2536L19.7169 19.222C19.6354 18.8272 19.9908 18.5787 20.3339 18.7901L24.709 21.4812Z"
      stroke="black"
    />
    <Path
      d="M17.4041 16.6214L17.4123 16.6123M20.6948 16.6214L20.7031 16.6123M14.1133 16.6214L14.1215 16.6123"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MyPinSvg;
