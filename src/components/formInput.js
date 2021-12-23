import React from 'react';

import {View, Text, TextInput} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
  placeholder,
  value,
  inputStyle,
  onBlur,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  clearButtonMode,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          borderColor: COLORS.border,
          borderWidth: 1,
          paddingHorizontal: SIZES.padding / 2,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <TextInput
          style={{flex: 1, color: COLORS.gray, ...inputStyle}}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          onBlur={onBlur}
          onChangeText={onChange}
          clearButtonMode={clearButtonMode}
        />
      </View>
    </View>
  );
};

export default FormInput;
