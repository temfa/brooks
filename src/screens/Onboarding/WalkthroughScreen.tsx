/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {fonts} from '../../constants/fonts';
import {onboardingData} from '../../utils/data';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
// import {useGetUserBlogsMutation} from '../../redux/api/mutationApi';

const screenWidth = Dimensions.get('window').width;
const WalkthroughScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [active, setActive] = useState(0);
  const onViewRef = useRef((viewableItems: {viewableItems: string | any[]}) => {
    if (viewableItems.viewableItems.length > 0) {
      setActive(viewableItems.viewableItems[0].index);
    }
  });

  //   setInterval(() => {
  //     if (active !== onboardingData?.length) setActive(viewableItems.viewableItems[0].index)
  //     else setActive(0);
  //   }, 6000);
  // const [blog, {isLoading}] = useGetUserBlogsMutation();

  // useEffect(() => {
  //   blog({page: 1, pageSize: 25, category: 'Artificial Intelligence'})
  //     .unwrap() // Directly handle the response or error
  //     .then(response => {
  //       console.log(response);
  //       // setData(response.data);
  //       // setPagination(response.pagination);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       // toast.error(err.data?.message);
  //     });
  // }, [blog]);

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <View style={styles.pagination}>
          {onboardingData?.map((_, index) => {
            return (
              <View
                style={[
                  styles.dot,
                  index === active && {
                    width: 14,
                    borderRadius: 32,
                  },
                  {
                    backgroundColor: index === active ? '#0557B6' : '#978F8F',
                  },
                ]}
                key={index}
              />
            );
          })}
        </View>
        <FlatList
          data={onboardingData}
          renderItem={({item}) => (
            <View style={styles.carouselContainer}>
              {/* <View style={styles.carouselWrapper}> */}
              <Image
                source={item.image}
                height={item.height}
                width={item.width}
                //   style={styles.carouselImages}
              />
              {/* </View> */}
              <View style={styles.carouselDetails}>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselText}>{item.text}</Text>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled={true}
          snapToAlignment="center"
          snapToInterval={screenWidth}
          decelerationRate={'fast'}
          onViewableItemsChanged={onViewRef.current}
        />
      </View>
      <View style={styles.buttonActions}>
        <TouchableOpacity
          style={styles.openAccount}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.openAccountText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalkthroughScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 28,
    backgroundColor: '#fff',
  },
  swiperContainer: {
    gap: 31,
  },

  carouselContainer: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //   carouselWrapper: {
  //     width: 268,
  //     height: 233,
  //     backgroundColor: '#ffffff',
  //     // paddingTop: spacing.sm,
  //   },

  carouselDetails: {
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    width: '64%',
    gap: 8,
  },
  carouselTitle: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 28,
    fontFamily: fonts.AeonikBold,
    color: '#000000',
  },

  carouselText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.SatoshiRegular,
    color: '#000000',
  },

  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 28,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  buttonActions: {
    gap: 14,
    marginHorizontal: 24,
  },
  openAccount: {
    width: '100%',
    paddingVertical: 16.5,
    borderRadius: 13,
    backgroundColor: '#C40002',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openAccountText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.AeonikBold,
    color: '#fff',
  },
  login: {
    backgroundColor: '#DDDCDC',
    borderRadius: 13.11,
    width: '100%',
    paddingVertical: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.AeonikRegular,
    color: '#455A64',
  },
});
