import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export function useSwipe(
  onSwipeUp?: any,
  // onSwipeDown?: any,
  rangeOffset = 4
) {
  let firstTouch = 0;

  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageY;
  }

  function onTouchEnd(e: any) {
    const positionY = e.nativeEvent.pageY;
    const range = windowHeight / rangeOffset;
    if (firstTouch - positionY > range) {
      onSwipeUp && onSwipeUp();
    }
    //  else if (positionY - firstTouch > range) {
    //     onSwipeDown && onSwipeDown();
    //   }
  }

  return { onTouchStart, onTouchEnd };
}
