import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {getInitials} from '../utils/helper';
import TrashCanSvg from '../assets/svgs/trashCan';
import {fonts} from '../constants/fonts';

type Props = {
  name: string;
  network: string;
  number: string;
};

const SingleAirtimeBene: FC<Props> = ({name, network, number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{getInitials(name)}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.network}>
            {network}: {number}
          </Text>
        </View>
      </View>
      <TrashCanSvg />
    </View>
  );
};

export default SingleAirtimeBene;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  circle: {
    width: 32.4,
    height: 32.4,
    borderRadius: 16.2,
    backgroundColor: '#CAE1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontFamily: fonts.WorkMedium,
    fontSize: 15,
    lineHeight: 17,
    color: '#1F76EC',
  },
  name: {
    fontFamily: fonts.WorkMedium,
    fontSize: 16,
    lineHeight: 19,
    color: '#394455',
  },
  network: {
    fontSize: 13,
    lineHeight: 16,
    color: '#8D929A',
    fontFamily: fonts.WorkRegular,
  },
});
