import {StyleSheet, View, Button, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ZegoUIKitPrebuiltCall,
  GROUP_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function CallPage({route, navigation}) {
  const {name, id} = route.params; // Destructuring 'name' and 'id'
  const [callIDs, setCallIDs] = useState([id]); // State to manage multiple call IDs

  const handleJoinCall = callID => {
    setCallIDs([...callIDs, callID]);
  };

  const handleLeaveCall = callID => {
    setCallIDs(callIDs.filter(id => id !== callID));
  };

  return (
    <View style={styles.container}>
      {callIDs.map((callID, index) => (
        <ZegoUIKitPrebuiltCall
          key={index}
          appID={82066232} // Replace with your actual App ID
          appSign={
            '9d93cf5d29dc9e92b64ef646af825344dd588151a4636f0fd1f784a8707b07c1' // Replace with your actual App Sign
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
      <Button
        title="Join New Call"
        onPress={() => handleJoinCall('newCallID')}
      />
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
