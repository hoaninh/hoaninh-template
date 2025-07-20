import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const FacebookIcon = ({ width = 22, height = 22, color = 'black' }) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 18 18">
    <Defs>
      <ClipPath id="clip0_2340_34081">
        <Path d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_2340_34081)">
      <Path d="M9 0a9 9 0 0 0-1.405 17.891v-6.288H5.308V9h2.287V7.018c0-2.256 1.342-3.502 3.399-3.502.985 0 2.014.176 2.014.176v2.214h-1.134c-1.119 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.29A9 9 0 0 0 18 9a9 9 0 0 0-9-9" />
    </G>
  </Svg>
);

export default FacebookIcon;
