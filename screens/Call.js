import {
  GROUP_VIDEO_CALL_CONFIG,
  ZegoUIKitPrebuiltCall,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

export default function CallPage({route, navigation}) {
  const {name, id} = route.params;
  const [callIDs, setCallIDs] = useState([id]);

  const handleJoinCall = callID => {
    setCallIDs([...callIDs, callID]);
  };

  const handleLeaveCall = callID => {
    setCallIDs(callIDs.filter(id => id !== callID));
  };

  useEffect(() => {
    handleJoinCall(id);
  }, []);

  return (
    <View style={styles.container}>
      {callIDs.length > 0 &&
        callIDs.map((callID, index) => (
          <ZegoUIKitPrebuiltCall
            key={index}
            appID={82066232}
            appSign={
              '9d93cf5d29dc9e92b64ef646af825344dd588151a4636f0fd1f784a8707b07c1'
            }
            userID={name}
            userName={name}
            callID={callID}
            config={{
              ...GROUP_VIDEO_CALL_CONFIG,
              onHangUp: () => {
                handleLeaveCall(callID);
                if (callIDs.length === 1) {
                  navigation.navigate('Home');
                }
              },
            }}
          />
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
