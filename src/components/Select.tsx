/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import Icon, {Icons} from './Icons';
import Modals from './Modals';
import {fonts} from '../constants/fonts';

type Props = {
  label: string;
  header: string;
  search: boolean;
  data: string[];
};
const Select: FC<Props> = ({label, header, search, data}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <>
      <Pressable
        onPress={() => setVisible(true)}
        style={styles.selectContainer}>
        <Text style={styles.selectText}>
          {selected !== '' ? selected : label}
        </Text>
        <Icon
          type={Icons.Feather}
          name="chevron-down"
          size={20}
          color="#ABADC6"
        />
      </Pressable>
      <Modals
        points={['25%', '50%']}
        visible={visible}
        setFalse={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{header}</Text>
            {search && (
              <View style={styles.searchContainer}>
                <Icon type={Icons.FontAwesome} name="search" color="#9A9EA1" />
                <TextInput
                  placeholder="Search"
                  style={styles.input}
                  placeholderTextColor="#7D7F88"
                />
              </View>
            )}
          </View>
          <View style={styles.modalBody}>
            {data?.map((item, index) => {
              return (
                <Pressable
                  onPress={() => setSelected(item)}
                  style={[
                    {...styles.modalSingle},
                    {
                      backgroundColor: item === selected ? '#0091FC3B' : '#fff',
                    },
                  ]}
                  key={index}>
                  <Text
                    style={[
                      {...styles.modalSingleText},
                      {
                        fontFamily:
                          item === selected
                            ? fonts.WorkMedium
                            : fonts.WorkRegular,
                      },
                    ]}>
                    {item}
                  </Text>
                  {item === selected && (
                    <Icon
                      type={Icons.Octicons}
                      name="check-circle-fill"
                      color="#0261E3"
                      size={15}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      </Modals>
    </>
  );
};

export default Select;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B4B7B9',
    height: 57,
    paddingHorizontal: 14,
  },
  selectText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#585C60',
    letterSpacing: 0.09,
    fontFamily: fonts.SatoshiMedium,
  },
  modalContainer: {
    gap: 20,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  modalHeader: {
    gap: 15,
  },
  modalTitle: {
    fontFamily: fonts.AeonikBold,
    fontSize: 20,
    lineHeight: 18,
    color: '#2B2B2D',
  },
  modalBody: {
    gap: 13,
  },
  modalSingle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 18,
    paddingVertical: 16,
    paddingRight: 16,
    borderColor: '#AEA8A8',
    borderWidth: 0.45,
    borderRadius: 15,
  },
  modalSingleText: {
    fontSize: 16,
    lineHeight: 16,
    color: '#6C6D6F',
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: '#F2F2F3',
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    lineHeight: 15,
    color: '#7D7F88',
    fontFamily: fonts.WorkRegular,
    paddingTop: 15,
  },
});
