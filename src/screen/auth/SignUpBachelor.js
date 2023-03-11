import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DefaultButton from '../../components/common/DefaultButton';
import Colors from '../../constants/Colors';

const SignUpSchemaBachelor = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('email is required'),
  password: Yup.string()
    .trim()
    .required('Please enter your password')
    .matches(
      /^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){0})(?=.*\d)((?=.*[a-z]){0})((?=.*[A-Z]){0}).*$/,
      'Password must contain at least 4 characters and a number',
    ),
  confirmPassword: Yup.string()
    .trim()
    .required('Please confirm your password')
    .when('password', {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
});

const initialValuesBachelor = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpBachelor({route}) {
  const category = route?.params?.category;

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        onSubmit={onSubmit}
        validationSchema={
          category == 'bachelor' ? SignUpSchemaBachelor : SignUpSchemaBussiness
        }
        initialValues={
          category == 'bachelor' ? initialValuesBachelor : initialValuesBusiness
        }>
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
              <Text style={styles.txt}>Enter your credentials</Text>

              <CustomInput
                value={values['firstName']}
                error={errors['firstName']}
                touched={touched['firstName']}
                onChange={handleChange('firstName')}
                onBlur={() => handleBlur('firstName')}
                setFieldTouched={() => setFieldTouched('firstName')}
                returnKeyType="next"
                title="FirstName"
                placeholder="Enter your first name"
              />
              <CustomInput
                value={values['lastName']}
                error={errors['lastName']}
                touched={touched['lastName']}
                onChange={handleChange('lastName')}
                onBlur={() => handleBlur('lastName')}
                setFieldTouched={() => setFieldTouched('lastName')}
                returnKeyType="next"
                title="lastName"
                placeholder="Enter your last name"
              />
              <CustomInput
                value={values['email']}
                error={errors['email']}
                touched={touched['email']}
                onChange={handleChange('email')}
                onBlur={() => handleBlur('email')}
                setFieldTouched={() => setFieldTouched('email')}
                returnKeyType="next"
                title="Email"
                placeholder="Enter your email"
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
              <CustomInput
                value={values['confirmPassword']}
                error={errors['confirmPassword']}
                touched={touched['confirmPassword']}
                onChange={handleChange('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
                setFieldTouched={() => setFieldTouched('confirmPassword')}
                returnKeyType="next"
                title="Confirm Password"
                placeholder="Confirm Password"
              />

              <DefaultButton
                isDisabled={!(isValid && dirty)}
                onPress={handleSubmit}
                type="small"
                isFullWidth={true}
                text="Register"
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white.default,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.grey.dark1,
    marginBottom: 10,
    textAlign: 'center',
  },
});
