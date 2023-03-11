import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DefaultButton from '../../components/common/DefaultButton';
import Colors from '../../constants/Colors';

const SignUpSchemaBussiness = Yup.object().shape({
  orgName: Yup.string().required('First Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('email is required'),
  password:Yup
  .string()
  .trim()
  .required('Please enter your password')
  .matches(
    /^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){0})(?=.*\d)((?=.*[a-z]){0})((?=.*[A-Z]){0}).*$/,
    'Password must contain at least 4 characters',
  ),
  confirmPassword: Yup.string()
    .trim()
    .required('Please confirm your password')
    .when('password', {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
});

const initialValuesBusiness = {
  email: '',
  orgName: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpBusiness() {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        onSubmit={onSubmit}
        validationSchema={SignUpSchemaBussiness}
        initialValues={initialValuesBusiness}>
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
                value={values['orgName']}
                error={errors['orgName']}
                touched={touched['orgName']}
                onChange={handleChange('orgName')}
                onBlur={() => handleBlur('orgName')}
                setFieldTouched={() => setFieldTouched('orgName')}
                returnKeyType="next"
                title="Bussiness Name"
                placeholder="Enter your bussiness name"
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
