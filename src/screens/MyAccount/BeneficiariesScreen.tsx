import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import AirtimeSingle from '../../components/AirtimeSingle';
import MoreTransSvg from '../../assets/svgs/moreTrans';
import PaymentBene from '../../assets/svgs/paymentBene';

const BeneficiariesScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Beneficiaries" />
      <View style={styles.body}>
        <AirtimeSingle
          icon={<MoreTransSvg />}
          title="Transfers"
          link="TransferBene"
        />
        <AirtimeSingle
          icon={<PaymentBene />}
          title="Payments"
          link="PaymentBene"
        />
      </View>
    </View>
  );
};

export default BeneficiariesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 35,
  },
  body: {
    gap: 19,
  },
});
