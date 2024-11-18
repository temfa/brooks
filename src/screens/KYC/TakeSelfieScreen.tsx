import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon, {Icons} from '../../components/Icons';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {
  Camera,
  CameraDevice,
  useCameraDevice,
} from 'react-native-vision-camera';
import {Alert} from 'react-native';
import Button from '../../components/Button';

const TakeSelfieScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [hasPermission, setHasPermission] = useState(false);
  // const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
  //   'front',
  // );
  const device = useCameraDevice('front');
  const cameraRef = useRef<Camera>(null);

  // Request camera permissions
  useEffect(() => {
    const requestPermissions = async () => {
      const status = await Camera.requestCameraPermission();
      console.log(status);
      if (status === 'granted') {
        setHasPermission(true);
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera permissions are required to use this feature.',
        );
      }
    };
    requestPermissions();
  }, []);
  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({
          flash: 'off',
        });
        console.log('Photo Path:', photo.path);
        Alert.alert('Photo Taken', `Saved at: ${photo.path}`);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Unable to take photo. Please try again.');
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          type={Icons.AntDesign}
          name="arrowleft"
          size={24}
          color="#000000"
        />
      </Pressable>
      <View style={styles.cameraBody}>
        <Text>Center Yourself</Text>
        {!device || !hasPermission ? (
          <Text>Loading Camera</Text>
        ) : (
          <Camera
            style={styles.camera}
            device={device as CameraDevice}
            isActive={true}
            photo={true} // Enable photo mode
            ref={cameraRef}
          />
        )}
      </View>
      <Button buttonText="Continue" action={takePhoto} />
    </View>
  );
};

export default TakeSelfieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    justifyContent: 'space-between',
  },
  cameraBody: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  camera: {
    width: 310,
    height: 310,
  },
});
