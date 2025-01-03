import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  headerTextSettings: {
    flexGrow: 1,
    fontFamily: 'SFProDisplayBold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.38,
    color: '#222222',
    marginBottom: 25,
  },
  cardUserDataHeaderText: {
    fontFamily: 'SFProDisplayBold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    alignItems: 'center',
    letterSpacing: 0.38,
    color: '#222222',
    marginBottom: 15,
  },
  cardUserBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 15,
  },
  cardUserNumberOfDevicesBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  cardUserBtnBox: {
    width: '100%',
    marginTop: 25,
  },
  cardUserName: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    alignItems: 'center',
    letterSpacing: 0.35,
    color: '#212121',
    marginBottom: 12,
  },
  cardUserOrganization: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    alignItems: 'center',
    letterSpacing: 0.35,
    color: '#212121',
    marginBottom: 8,
  },
  cardUserNumberOfDevicesText: {
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    alignItems: 'center',
    letterSpacing: 0.35,
    color: '#212121',
  },
  cardUserDataBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

});
