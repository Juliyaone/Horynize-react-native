import React, {
  createContext, useState, useEffect, useMemo, useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [unitId, setUnitId] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [allControllers, setAllControllers] = useState();
  const [emailAuthContext, setEmailAuthContext] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const signIn = async (data) => {
    try {
      const { token, controllerId, userId, controllers, email, userName } = data;
      await AsyncStorage.setItem('userTokenAsyncStorage', token);
      await AsyncStorage.setItem('idControllerAsyncStorage', controllerId);
      await AsyncStorage.setItem('userIdAsyncStorage', userId);
      await AsyncStorage.setItem('controllersAsyncStorage', JSON.stringify(controllers));
      await AsyncStorage.setItem('emailAsyncStorage', email);
      await AsyncStorage.setItem('userNameAsyncStorage', userName);

      setUserName(userName);
      setUserToken(token);
      setUnitId(controllerId);
      setAllControllers(controllers);
      console.log('Записали новый токен в AsyncStorage', token);
    } catch (error) {
      console.log(`Не удалось сохранить токен в AsyncStorage: ${error}`);
    }
  };

  const getUserToken = async () => {
    try {
      const userTokenData = await AsyncStorage.getItem('userTokenAsyncStorage');
      setUserToken(userTokenData);
      return userTokenData;
    } catch (err) {
      console.log(`Токен не получен ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserUnitId = async () => {
    try {
      const id = await AsyncStorage.getItem('idControllerAsyncStorage');
      setUnitId(id);
      console.log('текущий id установки', id);
      return id;
    } catch (err) {
      console.log(`текущий id установки не получен ${err}`);
    }
  };

  const getUserId = async () => {
    try {
      const id = await AsyncStorage.getItem('userIdAsyncStorage');
      setUserId(id);
      console.log('текущий id юзера', id);
      return id;
    } catch (err) {
      console.log(`текущий id юзера не получен ${err}`);
    }
  };

  const getAllControllers = async () => {
    try {
      let allControllersData = await AsyncStorage.getItem('controllersAsyncStorage');
      console.log('allControllersData', allControllersData);
      if (allControllersData !== null) {
        allControllersData = JSON.parse(allControllersData);
        setAllControllers(allControllersData);
        console.log('allControllersData', allControllersData);
        return allControllersData;
      }
      return allControllersData;
    } catch (err) {
      console.log(`Все контроллеры не получены ${err}`);
    }
  };

  const getEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('emailAsyncStorage');
      setEmailAuthContext(email);
      console.log('email', email);
      return email;
    } catch (err) {
      console.log(`email не получен ${err}`);
    }
  };

  const getUserName = useCallback(async () => {
    try {
      const userNameData = await AsyncStorage.getItem('userNameAsyncStorage');
      setUserName(userNameData);
      // console.log('userNameAuthContext', userName);
      return userNameData;
    } catch (err) {
      console.log(`логин пользльзователя не получен ${err}`);
    }
  }, [userName]);

  useEffect(() => {
    getUserToken();
    getUserUnitId();
    getUserId();
    getAllControllers();
    getEmail();
    getUserName();
  }, [getUserName]);

  const clearStoredCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync('username');
      await SecureStore.deleteItemAsync('password');
    } catch (error) {
      console.error('Could not clear credentials', error);
    }
  };

  const signOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('idControllerAsyncStorage');
      await AsyncStorage.removeItem('userIdAsyncStorage');
      await AsyncStorage.removeItem('controllersAsyncStorage');
      await AsyncStorage.removeItem('emailAsyncStorage');
      await AsyncStorage.removeItem('userNameAsyncStorage');

      await clearStoredCredentials();

      setUserId(null);
      setUnitId(null);
      setUserToken(null);
      setAllControllers(null);
      setEmailAuthContext(null);
      setIsLoading(false);
      setUserName(null);
      console.log(`токен удален, UserId удален,  UserName удален, 
      UnitId удален,controllers удален, email удален, SecureStore очищен`);
    } catch (error) {
      console.log(`Не удалось удалить токен или UserId или UnitId: ${error}`);
    }
  }, []);

  const value = useMemo(() => ({
    userToken,
    isLoading,
    signIn,
    signOut,
    unitId,
    userId,
    allControllers,
    emailAuthContext,
    userName,
  }), [allControllers, emailAuthContext, isLoading, signOut, unitId, userId, userName, userToken]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
