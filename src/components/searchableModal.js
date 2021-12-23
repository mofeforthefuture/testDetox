import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {FONTS, COLORS, SIZES, images} from '../constants';

export default SearchableModal = ({
  showModal,
  onBackdropPress,
  label,
  onPress,
  data,
  noData,
  searchInput,
}) => {
  return (
    <Modal
      isVisible={showModal}
      animationIn={'slideInUp'}
      backdropColor={'rgba(0, 0, 0, 0.7)'}
      backdropOpacity={1}
      onBackdropPress={onBackdropPress}>
      <View
        style={{
          maxHeight: SIZES.height / 2,
          minHeight: SIZES.height / 2,
          backgroundColor: COLORS.white,
          padding: SIZES.padding * 1.3,
          borderRadius: SIZES.radius,
        }}>
        {searchInput}

        {noData ? (
          <>{data}</>
        ) : (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              height: SIZES.width / 1.2,
              marginTop: SIZES.margin,
            }}>
            <Text>Search For a valid city</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};
