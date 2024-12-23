import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const DocSvg = (props: any) => (
  <Svg
    width={61}
    height={61}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle opacity={0.2} cx={30.5} cy={30.5} r={30.5} fill="#96D2FF" />
    <Path
      d="M38.5003 45.1663C39.2518 45.1663 39.9724 44.8678 40.5038 44.3365C41.0351 43.8051 41.3337 43.0845 41.3337 42.333V25.333L32.8337 16.833H21.5003C20.7489 16.833 20.0282 17.1315 19.4969 17.6629C18.9655 18.1942 18.667 18.9149 18.667 19.6663V42.333C18.667 43.0845 18.9655 43.8051 19.4969 44.3365C20.0282 44.8678 20.7489 45.1663 21.5003 45.1663H38.5003ZM31.417 19.6663L38.5003 26.7497H31.417V19.6663ZM22.917 25.333H27.167V28.1663H22.917V25.333ZM22.917 30.9997H37.0837V33.833H22.917V30.9997ZM22.917 36.6663H37.0837V39.4997H22.917V36.6663Z"
      fill="#468CF9"
    />
  </Svg>
);
export default DocSvg;
