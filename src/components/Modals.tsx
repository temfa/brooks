/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

const Modals = ({
  children,
  visible,
  points,
  setFalse,
}: {
  children: ReactNode;
  visible: boolean | Promise<boolean>;
  points?: string[] | number[];
  setFalse: () => void;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [number, setNumber] = useState(1);

  // variables
  const snapPoints = useMemo(() => points, [points]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index < 1) {
        setNumber(1);
        bottomSheetModalRef.current?.close();
        setFalse();
      }
    },
    [setFalse],
  );

  useEffect(() => {
    if (visible) handlePresentModalPress();
    else bottomSheetModalRef.current?.close();
  }, [visible, handlePresentModalPress]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      enableDynamicSizing={true}
      index={number}
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.6}
        />
      )}
      // style={{elevation: 3}}
      backgroundStyle={{backgroundColor: '#FFFFFF'}}
      // enableDynamicSizing={true}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView style={{paddingBottom: 35}}>
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default Modals;
