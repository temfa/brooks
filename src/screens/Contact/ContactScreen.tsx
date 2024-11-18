import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeArea from '../../components/SafeArea';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import CallSvg from '../../assets/svgs/call';
import EmailSvg from '../../assets/svgs/email';

const ContactScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <SafeArea>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#000000"
          />
        </Pressable>
        <View style={styles.heading}>
          <Text style={styles.headingTitle}>Need Help? </Text>
          <Text style={styles.headingText}>
            Let us know how we can help you
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.single}>
          <Text style={styles.name}>
            Temitope Esther <Text>( Account Officer )</Text>
          </Text>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.number}>+234 8100096530</Text>
              <CallSvg
                onPress={() => {
                  const url = 'tel:08100096530';
                  Linking.openURL(url).catch(err =>
                    console.error('Failed to open phone dialer:', err),
                  );
                }}
              />
            </View>
            <Text style={styles.averageResponse}>
              Average Response time 2mins
            </Text>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.name}>Support Team</Text>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.number}>support@brooks.com</Text>
              <EmailSvg
                onPress={() => {
                  const url = `mailto:support@brooks.com<?subject=${encodeURIComponent(
                    'Make Enquiries',
                  )}&body=${encodeURIComponent(
                    'I would like to make some enquiries',
                  )}`;
                  Linking.openURL(url).catch(err =>
                    console.error('Failed to open email composer:', err),
                  );
                }}
              />
            </View>
            <Text style={styles.averageResponse}>
              Average Response time 30mins
            </Text>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  header: {
    height: 146,
    backgroundColor: '#D0E4FF',
    paddingHorizontal: 24,
    paddingTop: 13,
    paddingBottom: 22,
    gap: 36,
  },
  heading: {
    gap: 2,
  },
  headingTitle: {
    fontSize: 24,
    lineHeight: 30,
    color: '#242424',
    fontFamily: fonts.WorkSemiBold,
  },
  headingText: {
    fontSize: 14,
    lineHeight: 19,
    color: '#394455',
    fontFamily: fonts.WorkRegular,
  },
  body: {
    gap: 62,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  single: {
    gap: 8,
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    color: '#4E5156',
    fontFamily: fonts.WorkRegular,
  },
  info: {
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: '#CEE2FC',
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  number: {
    fontFamily: fonts.WorkMedium,
    fontSize: 15,
    lineHeight: 18,
    color: '#111212',
  },
  averageResponse: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: '#376FBB',
    backgroundColor: '#CEE2FC',
    fontSize: 13,
    lineHeight: 15,
    fontFamily: fonts.WorkRegular,
    width: 230,
  },
});
