/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import BigBellSvg from '../../assets/svgs/BigBellSvg';
import {notifcationData} from '../../utils/data';

const NotificationScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#000000"
          />
        </Pressable>
        <Text style={styles.notificationTitle}>Notification</Text>
      </View>
      {notifcationData.length === 0 ? (
        <View style={styles.containerBody}>
          <BigBellSvg />
          <Text style={styles.no}>
            Oops! You don’t have any notifications yet
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifcationData}
          renderItem={({item}) => (
            <View style={styles.containerSingle}>
              <View
                style={[
                  {...styles.containerSignal},
                  {
                    backgroundColor:
                      item.type === 'Debit' ? '#F26A30' : '#4CD964',
                  },
                ]}
              />
              <View>
                <Text style={styles.containerTexts}>
                  {item.name}{' '}
                  <Text
                    style={{
                      color: item.type === 'Debit' ? '#C40002' : '#0F8414',
                    }}>
                    {item.amount}
                  </Text>
                </Text>
                <Text style={styles.containerTexts}>
                  {item.account} Transaction ID: {item.transId}
                </Text>
                <Text style={styles.containerDate}>Date: {item.date}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginBottom: 31,
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 28,
    paddingTop: 15,
    paddingBottom: 77,
    gap: 21,
  },
  containerHeader: {
    gap: 16,
  },
  notificationTitle: {
    fontSize: 24,
    lineHeight: 30.19,
    color: '#242424',
    fontFamily: fonts.AeonikBold,
  },
  containerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  no: {
    fontSize: 16,
    lineHeight: 21,
    color: '#969DAE',
    fontFamily: fonts.SatoshiMedium,
  },
  containerSingle: {
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 7,
    borderBottomColor: '#C8C3C3',
  },
  containerSignal: {
    width: 21.15,
    height: 21.15,
    borderRadius: 10.575,
  },
  containerTexts: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: fonts.SatoshiBold,
    color: '#000000',
  },
  containerDate: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.SatoshiMedium,
    color: '#6A6B70',
  },
});
