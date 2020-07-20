/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
/*This is an example of CountDown Timer*/
import React, {Component} from 'react';
//import React in our project
import {ImageBackground, View} from 'react-native';
//import all the component we need in our project
import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer
import moment from 'moment';
//import moment to help you play with date and time

class App extends Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      totalDuration: 0,
    };
  }
  UNSAFE_componentWillMount() {
    let that = this;
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    let date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    let expirydate = '2021-06-12 04:00:45'; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    let diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    let hours = parseInt(diffr.asHours());
    let minutes = parseInt(diffr.minutes());
    let seconds = parseInt(diffr.seconds());
    let d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    that.setState({totalDuration: d});
    //Settign up the duration of countdown in seconds to re-render
  }
  render() {
    const imageURL = {
      uri:
        'https://www.visitlevanto.it/app/uploads/2018/10/Un-week-end-a-Levanto-15-1.jpg',
    };
    console.log('hey' + this.state.totalDuration);
    return (
      <ImageBackground
        source={imageURL}
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          timetoShow={('D', 'H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('Bonjourno! Benvenuto in Italia!')}
          //on Finish call
          onPress={() => alert('Getting closer!')}
          //on Press call
          size={30}
          //style
          style={{top: 100}}
          digitStyle={{
            margin: 'auto',
            backgroundColor: '#fff',
            color: '#1CC625',
            borderColor: '#1CC625',
            borderWidth: 2,
            borderRadius: 5,
          }}
          digitTxtStyle={{
            color: '#1CC625',
          }}
          timeLabelStyle={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            top: 10,
            marginHorizontal: 'auto',
          }}
        />
      </ImageBackground>
    );
  }
}

export default App;
