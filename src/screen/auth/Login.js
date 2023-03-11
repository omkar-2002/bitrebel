import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/common/CustomInput';
import LoginImg from '../../assets/images/loginImg.png';
import Colors from '../../constants/Colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {Formik} from 'formik';
import * as Yup from 'yup';
import DefaultButton from '../../components/common/DefaultButton';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login({navigation}) {
  const onSubmit = () => {
    navigation.navigate('SignUp');
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.container}
      extraHeight={100}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <Image source={LoginImg} style={styles.img} />
      <Formik
        onSubmit={onSubmit}
        validationSchema={loginSchema}
        initialValues={{email: ''}}>
        {({
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldTouched,
          isValid,
          dirty,
        }) => {
          return (
            <View style={{padding: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.grey.dark1,
                  marginBottom: 10
                }}>
                Enter your credentials
              </Text>

              <CustomInput
                value={values['email']}
                error={errors['email']}
                touched={touched['email']}
                onChange={handleChange('email')}
                onBlur={() => handleBlur('email')}
                setFieldTouched={() => setFieldTouched('email')}
                returnKeyType="next"
                title="Email"
                placeholder="Enter your mail"
              />
              <CustomInput
                value={values['password']}
                error={errors['password']}
                touched={touched['password']}
                onChange={handleChange('password')}
                onBlur={() => handleBlur('password')}
                setFieldTouched={() => setFieldTouched('password')}
                returnKeyType="next"
                title="Password"
                placeholder="Enter your password"
              />
              <DefaultButton
                isDisabled={!(isValid && dirty)}
                onPress={handleSubmit}
                type="small"
                isFullWidth={true}
                text="Login"
              />
              <TouchableOpacity onPress={()=>navigation.navigate("Category")}><Text style = {{color:Colors.brandPrimary.default,textAlign:"center"}}>Register here if you don't have an account</Text></TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white.default,
  },
  img: {
    width,
    height: height * 0.5,
    resizeMode: 'cover',
    borderBottomLeftRadius: height / 20,
    borderBottomRightRadius: height / 20,
  },
});
