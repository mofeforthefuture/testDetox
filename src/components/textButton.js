import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

import {FONTS, COLORS} from '../constants';

const TextButton = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? COLORS.gray : COLORS.textPrimary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.white,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;