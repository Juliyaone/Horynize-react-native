import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { AuthContext } from "../../components/providers/AuthContext"
import ApplyIcon from '../../img/icons/apply';

import CustomButton from '../../components/CustomButton';
import GoBackComponent from '../../components/GoBack';

const ServerSchema = yup.object({
  customName: yup.string().required('Custom Name is required'),
  binding: yup.string().required('Binding is required'),
  id: yup.string().required('ID is required'),
  key: yup.string().required('Key is required'),
  id_model: yup.string().required('Model ID is required'),
});

{/* <UserContext.Provider value={{ userId, setUserId, userData, setUserData, setIsConnection, isConnection, currentDayOfWeek, unitId }}> */ }


export default function DevicesAddScreen({ navigation }) {

  const { userId, unitId } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <GoBackComponent navigation={navigation} />

        <Formik
          initialValues={{
            userid: userId,
            controllerid: unitId,
            customName: '',
            binding: '',
            id: '',
            key: '',
            id_model: '',
          }}
          validationSchema={ServerSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            // Здесь отправить значения на сервер
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={styles.container}>
              {Object.keys(props.values).map((key) => (
                (key !== 'userid' && key !== 'controllerid') && (
                  <React.Fragment key={key} >
                    <View style={styles.inputContainer}>
                      <ApplyIcon style={styles.inputIcon} />
                      <TextInput
                        style={styles.input}
                        onChangeText={props.handleChange(key)}
                        value={props.values[key]}
                        onBlur={props.handleBlur(key)}
                        placeholder={key}
                      />
                    </View>
                    <Text style={styles.errorText}>
                      {props.touched[key] && props.errors[key]}
                    </Text>
                  </React.Fragment>
                )
              ))}
              <CustomButton text='Приязать установку' onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    textAlign: "center",
    fontFamily: "SFProDisplay",
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.35,
    color: "#212121",
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    backgroundColor: '#DDDDDD',
    borderRadius: 16,
  },
  lastInputContainer: {
    marginBottom: 30
  },
  input: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: '#DDDDDD',
    borderRadius: 16,
    padding: 15,
    color: '#212121',
    fontSize: 16,
  },
  inputIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginLeft: 10
  },
  errorText: {
    color: '#FF5204',
    padding: 0,
    marginTop: 0,
    marginBottom: 10
  },

});
