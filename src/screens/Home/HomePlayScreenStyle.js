import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  homePlayScreenActiveContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flatListContainerHome: {
    marginBottom: 5,
    marginTop: 5,
  },
  btnSchedule: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ED7635',
    padding: 7,
    marginLeft: 'auto',
  },
  btnScheduleText: {
    color: '#ED7635',
  },
  btnScheduleIcon: {
    marginRight: 5,
  },
  boxPowerBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '23%',
    maxWidth: '23%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1, // для Android
  },
  boxPowerBtnBox: {
    width: 130,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 15,
    marginRight: 15,
  },
  boxPowerBtnText: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.374,
    color: '#212121',
  },
  titleText: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.374,
    color: '#111111',
    marginBottom: 4,
  },
  boxPowerBtnTextName: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.374,
    color: '#787880',
    marginBottom: 6,
  },
  boxFunctionDevices: {
    width: 130,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 5,
  },
  functionDevicesBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxPowerTextName: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 0.374,
    color: '#FFFFFF',
  },
  boxHomeDeviceFunctions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  boxHomeDeviceFunctionsItem: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  boxDeviceFunctionsItemName: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 0.374,
    color: '#FFFFFF',
  },
  boxDeviceFunctionsItemText: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    letterSpacing: 0.374,
    color: '#FFFFFF',
  },
  disabledContainer: {
    display: 'none',
  },

});
