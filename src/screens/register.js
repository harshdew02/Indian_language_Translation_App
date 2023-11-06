import React, {useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GoogleSVG from '../../assets/images_copy/misc/google.svg';
import FacebookSVG from '../../assets/images_copy/misc/facebook.svg';
import CustomButton from '../components/CustomButton';
import LottieView from "lottie-react-native";

const statesdata = [
  { label: 'Andhra Pradesh', value: '1' },
  { label: 'Arunachal Pradesh	', value: '2' },
  { label: 'Assam', value: '3' },
  { label: 'Bihar', value: '4' },
  { label: 'Chhattisgarh', value: '5' },
  { label: 'Goa', value: '6' },
  { label: 'Gujarat', value: '7' },
  { label: 'Haryana', value: '8' },
  { label: 'Himachal Pradesh', value: '9' },
  { label: 'Jharkhand', value: '10' },
  { label: 'Karnataka', value: '11' },
  { label: 'Kerala', value: '12' },
  { label: 'Madhya Pradesh', value: '13' },
  { label: 'Maharashtra', value: '14' },
  { label: 'Manipur', value: '15' },
  { label: 'Meghalaya', value: '16' },
  { label: 'Mizoram', value: '17' },
  { label: 'Nagaland', value: '18' },
  { label: 'Odisha', value: '19' },
  { label: 'Punjab', value: '20' },
  { label: 'Rajasthan', value: '21' },
  { label: 'Sikkim', value: '22' },
  { label: 'Tamil Nadu', value: '23' },
  { label: 'Telangana', value: '24' },
  { label: 'Tripura', value: '25' },
  { label: 'Uttar Pradesh	', value: '26' },
  { label: 'Uttarakhand	', value: '27' },
  { label: 'West Bengal', value: '28'},
];
const languagesdata = [
  { label: 'English', value: '1' },
  { label: 'Hindi', value: '2' },
  { label: 'Gujrati', value: '3' },
];

const RegisterScreen = ({navigation}) => {
  const [states, setStates] = useState(null);
  const [languages, setLanguages] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25,paddingTop:40}}>

        <View style={{alignItems: 'center'}}>
        <Image source={require('../../assets/images_copy/misc/logo.png')} 
          style={{width:wp(30),height:wp(30),borderRadius:100,  marginTop:wp(6)}}
        />
        <Text
          className={`font-roboto`}
          style={{
            // fontFamily: 'Roboto_Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 20,
            marginTop:30
          }}>
          Register
        </Text>
        </View>


        {/* <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        /> */}
        <View style={styles.searchSection}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
          />
        </View>

        <Dropdown
        style={styles. dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={statesdata}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select State"
        searchPlaceholder="Search..."
        value={states}
        onChange={item => {
          setStates(item.value);
        }}
        renderLeftIcon={() => (
          <Ionicons
            name="home-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
        )}
        />

<Dropdown
        style={styles. dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={languagesdata}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Language"
        searchPlaceholder="Search..."
        value={languages}
        onChange={item => {
          setLanguages(item.value);
        }}
        renderLeftIcon={() => (
          <Ionicons
            name="language-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
        )}
        />

        {/* <View style={styles.searchSection}>
          <Ionicons
            name="home-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
          />
        </View> */}

        {/* <View style={styles.searchSection}>
          <Ionicons
            name="language-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="Preferred Language"
          />
        </View> */}

        <View style={styles.searchSection}>
          <Ionicons
            name="at-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
        </View>

        <View style={styles.searchSection}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.searchSection}>
          <Ionicons
            name="call-outline"
            size={20}
            color="#2776ff"
            style={{marginRight: 5}}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType='numeric'
          />
        </View>       

        <CustomButton label={'Register'} onPress={() => navigation.navigate("Login")} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, register with email ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 60,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color: '#2776ff', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop:10,
    paddingRight: 10,
    paddingBottom:5,
    paddingLeft: 0,
    color: '#424242',
  },
  dropdown: {
    margin: 0,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom:20,
  },
  icon: {
    marginRight: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize:14,
    color:'#424242'
  },
  selectedTextStyle: {
    fontSize: 14,
    color:'#424242'
  },
  placeholderStyle: {
    fontSize: 14,
    color:'#424242'
  },
});
export default RegisterScreen;
