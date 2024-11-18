import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const TrashCanSvg = (props: any) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_985_2482)">
      <Path
        d="M18.25 5.375H15.25V3.5C15.25 2.67266 14.5773 2 13.75 2H6.25C5.42266 2 4.75 2.67266 4.75 3.5V5.375H1.75C1.33516 5.375 1 5.71016 1 6.125V6.875C1 6.97813 1.08437 7.0625 1.1875 7.0625H2.60312L3.18203 19.3203C3.21953 20.1195 3.88047 20.75 4.67969 20.75H15.3203C16.1219 20.75 16.7805 20.1219 16.818 19.3203L17.3969 7.0625H18.8125C18.9156 7.0625 19 6.97813 19 6.875V6.125C19 5.71016 18.6648 5.375 18.25 5.375ZM6.4375 3.6875H13.5625V5.375H6.4375V3.6875ZM15.1398 19.0625H4.86016L4.29297 7.0625H15.707L15.1398 19.0625Z"
        fill="#A79D9D"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_985_2482">
        <Rect
          width={20.2051}
          height={20.2051}
          fill="white"
          transform="translate(0.216797 0.692383)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TrashCanSvg;
