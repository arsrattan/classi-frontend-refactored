import * as React from 'react';
import {Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {Header} from '_molecules';
import styles from './styles';
import {liveImg, calendarImg} from '_assets';

function Live(props) {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setVisible(true);
    });
    return unsubscribe;
  }, []);
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      {StatusBar.setBarStyle('dark-content', true)}
      <Header {...props} />
      <Modal style={{flex: 1}} isVisible={visible}>
        <View style={styles.liveButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={styles.liveNow}>
            <Image style={{marginRight: 8}} source={liveImg} />
            <Text style={styles.liveText}>Live Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
              props.navigation.navigate('CreateClass');
            }}
            style={styles.liveLatter}>
            <Image style={{marginRight: 8}} source={calendarImg} />
            <Text style={styles.liveText}>Live Later</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
export default Live;
