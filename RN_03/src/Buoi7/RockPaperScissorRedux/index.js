import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {background, computer, paper, player, rock, scissor} from '../images';
import {userSelect} from '../redux/actions/gameAction';
import Button from './Button';
import ButtonContent from './ButtonContent';
import PlayItem from './PlayItem';
import SelectContent from './SelectContent';

class RockPaperScissorRedux extends Component {
  onPlayPress = () => {
    if (this.state.times <= 0) {
      Alert.alert('Game Alert', 'Game Over !!!', [
        {text: 'cancel', onPress: () => Alert.alert('Cancel Pressed')},
      ]);
    } else {
      // const computerSelect = this.state.listSelect[2];
      let computerSelect;
      const randomBotSelect = setInterval(() => {
        // computerSelect = this.state.listSelect[Math.floor(Math.random() * 3)];
        computerSelect = this.state.listSelect[1];
        this.setState({computerSelect}, () => {
          console.log(computerSelect);
        });
      }, 200);

      setTimeout(() => {
        clearInterval(randomBotSelect);
        this.calResult();
      }, 2000);
    }
  };

  calResult = () => {
    const {playerSelect, computerSelect, times, scores} = this.state;
    let timesResult = times;
    let scoresResult = scores;
    // if (playerSelect.id === 'scissor' && computerSelect.id === 'rock') {
    //   console.log(
    //     playerSelect.id === 'scissor' && computerSelect.id === 'rock',
    //   );
    //   timesResult = timesResult - 1;
    // } else if (playerSelect.id === 'scissor' && computerSelect.id === 'paper') {
    //   scoresResult = scoresResult + 1;
    //   timesResult = timesResult + 1;
    // }
    switch (playerSelect.id) {
      case 'rock':
        switch (computerSelect.id) {
          case 'scissor':
            scoresResult = scoresResult + 1;
            timesResult = timesResult + 1;
            break;
          case 'paper':
            timesResult = timesResult - 1;
            break;
          default:
            break;
        }
        break;
      case 'paper':
        switch (computerSelect.id) {
          case 'rock':
            scoresResult = scoresResult + 1;
            timesResult = timesResult + 1;
            break;
          case 'scissor':
            timesResult = timesResult - 1;
            break;
          default:
            break;
        }
        break;
      default:
        switch (computerSelect.id) {
          case 'paper':
            scoresResult = scoresResult + 1;
            timesResult = timesResult + 1;
            break;
          case 'rock':
            timesResult = timesResult - 1;
            break;
          default:
            break;
        }
        break;
    }

    this.setState({times: timesResult, scores: scoresResult});
  };

  render() {
    const {playerSelect, computerSelect, times, scores} = this.props;
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={playerSelect.image} playerImage={player} />
            <PlayItem
              selectImage={computerSelect.image}
              playerImage={computer}
            />
          </View>
          <View style={styles.selectContainer}>
            <SelectContent />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Scores: {scores}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <ButtonContent />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeAreaView: {
    flex: 1,
  },
  playContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  selectContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0fc',
  },
});

const mapStateToProps = state => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    computerSelect: state.gameReducer.computerSelect,
    times: state.gameReducer.times,
    scores: state.gameReducer.scores,
  };
};

export default connect(mapStateToProps)(RockPaperScissorRedux);
