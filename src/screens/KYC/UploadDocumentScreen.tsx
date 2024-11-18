/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import Upload from '../../components/Upload';
import Button from '../../components/Button';
import Select from '../../components/Select';
import {fonts} from '../../constants/fonts';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';

const UploadDocumentScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={styles.container}>
      <Back
        text="Upload Documents"
        subText="Please provide a clear pictures of all documents"
      />
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <View style={styles.single}>
            <View style={{gap: 6}}>
              <Text style={styles.title}>Utility Bill</Text>
              <Text style={styles.text}>
                Please provide a utility within 6months
              </Text>
            </View>
            <Upload />
          </View>
          <View style={styles.single}>
            <Text style={styles.title}>Photo of Signature</Text>
            <Upload />
          </View>
          <View style={styles.single}>
            <Text style={styles.title}>Means of ID</Text>
            <Select
              label="Means of Identification"
              data={[]}
              header=""
              search={false}
            />
            <Upload />
          </View>
          <Pressable onPress={() => navigation.navigate('TakeSelfie')}>
            <Text style={styles.title}>Take Selfie</Text>
          </Pressable>
        </View>
        <Button buttonText="Next" action={() => {}} />
      </View>
    </View>
  );
};

export default UploadDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 32,
  },
  body: {
    flex: 2,
    justifyContent: 'space-between',
  },
  bodyContainer: {
    gap: 37,
  },
  single: {
    gap: 12,
  },
  title: {
    fontFamily: fonts.WorkRegular,
    fontSize: 18,
    lineHeight: 18,
    color: '#20463C',
    letterSpacing: 0.09,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.WorkLight,
    color: '#606470',
    lineHeight: 15,
  },
});
