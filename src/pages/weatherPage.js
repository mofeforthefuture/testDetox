import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {SearchableModal, FormInput, TextButton} from '../components';
import {SIZES, COLORS} from '../constants';
import axios from 'axios';

export default function WeatherPage() {
  const [weatherModal, setWeatherModal] = useState(false);
  const [input, setInput] = useState('');
  const fetchWeather = async () => {
    const response = await fetch(
      'https://www.metaweather.com/api/location/search/?query=san',
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <Text testID="title">Hello there</Text>

      <TextInput
        testID="input"
        placeholder="name"
        value={input}
        onChangeText={setInput}
        style={{width: 130, height: 40, borderColor: '#000', borderWidth: 2}}
      />

      <TextButton
        testId={'button'}
        onPress={() => Alert.alert(input)}
        label="Get Started"
        buttonContainerStyle={{
          backgroundColor: COLORS.textPrimary,
          height: 50,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
        }}
        // onPress={() => setWeatherModal(!weatherModal)}
      />

      <SearchableModal
        showModal={weatherModal}
        label="Search Tenant"
        onBackdropPress={() => setWeatherModal(false)}
        searchInput={
          <FormInput
            placeholder="Type here to search"
            clearButtonMode="always"
            keyboardType="default"
            onChange={text => fetchWeather()}
          />
        }
        // data={
        //   <>
        //     {tenants && tenants.length > 0 && (
        //       <ScrollView>
        //         {tenants.map((tenant, index) => (
        //           <TouchableOpacity
        //             style={{margin: SIZES.margin / 2}}
        //             key={index}
        //             onPress={() => {
        //               setSelectedTenant(tenant);
        //               setTenantModal(!tenantModal);
        //             }}>
        //             <Text style={{...FONTS.h3, textTransform: 'capitalize'}}>
        //               {' '}
        //               {tenant.companyName}{' '}
        //             </Text>
        //           </TouchableOpacity>
        //         ))}
        //       </ScrollView>
        //     )}
        //   </>
        // }
        // noData={tenants.length >= 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
