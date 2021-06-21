// React Native Bottom Action Menu
// https://aboutreact.com/react-native-bottom-action-menu/

// import React in our code
import React, {Component, useRef} from 'react';

// import all the components we are going to use
import {
  StyleSheet,
} from 'react-native';

// import ActionSheet
import ActionSheet from 'react-native-actionsheet';

class PopupChoice extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        Popuped = () => {
            let actionSheet = useRef();
            var optionArray = [
              'Carnivore',
              'Végé',
              'Vegan',
              'Cancel'
            ];
          
            const showActionSheet = () => {
              //To show the Bottom ActionSheet
              actionSheet.current.show();
            };
          
            return (
                  <ActionSheet
                    ref={actionSheet}
                    // Title of the Bottom Sheet
                    title={'Which one do you like ?'}
                    // Options Array to show in bottom sheet
                    options={optionArray}
                    // Define cancel button index in the option array
                    // This will take the cancel option in bottom
                    // and will highlight it
                    cancelButtonIndex={4}
                    // Highlight any specific option
                    destructiveButtonIndex={1}
                    onPress={(index) => {
                      // Clicking on the option will give you alert
                      console.log(optionArray[index]);
                    }}
                  />
            );
        };
    }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#f5821f',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});