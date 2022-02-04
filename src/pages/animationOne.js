import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {PanGestureHandler} from 'react-native-gesture-handler';
import {
  diffClamp,
  translate,
  usePanGestureHandler,
  withDecay,
  withOffset,
} from 'react-native-redash';

const {height, width} = Dimensions.get('window');
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 8];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  card: {
    marginVertical: 16,
  },
});

export default function AnimationOne() {
  const [containerHeight, setContainerHeight] = useState(height);
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const visibleCards = Math.floor(containerHeight / CARD_HEIGHT);
  const y = diffClamp(
    withDecay({
      value: translation.y,
      velocity: velocity.y,
      state,
    }),
    -cards.length * CARD_HEIGHT + visibleCards * CARD_HEIGHT,
    0,
  );
  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: {height: h},
        },
      }) => setContainerHeight(h)}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View>
          {cards.map((card, index) => {
            const positionY = add(y, index * CARD_HEIGHT);
            const isDisappearing = -CARD_HEIGHT;
            const isOnTop = 0;
            const isOnBottom = (visibleCards - 1) * CARD_HEIGHT;
            const isAppearing = visibleCards * CARD_HEIGHT;
            const extraTranslationY = interpolate(positionY, {
              inputRange: [isOnBottom, isAppearing],
              outputRange: [0, -CARD_HEIGHT / 4],
              extrapolate: Extrapolate.CLAMP,
            });
            const translateY = add(
              interpolate(y, {
                inputRange: [-CARD_HEIGHT * index, 0],
                outputRange: [-CARD_HEIGHT * index, 0],
                extrapolate: Extrapolate.CLAMP,
              }),
              extraTranslationY,
            );
            const scale = interpolate(positionY, {
              inputRange: [isDisappearing, isOnTop, isOnBottom, isAppearing],
              outputRange: [0.5, 1, 1, 0.5],
              extrapolate: Extrapolate.CLAMP,
            });
            const opacity = interpolate(positionY, {
              inputRange: [isDisappearing, isOnTop, isOnBottom, isAppearing],
              outputRange: [0.5, 1, 1, 0.5],
            });
            return (
              <Animated.View
                key={index}
                style={[
                  styles.card,
                  {opacity, transform: [{translateY}, {scale}]},
                ]}>
                <View
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#000',
                  }}>
                  {card}
                </View>
              </Animated.View>
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
