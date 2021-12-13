import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {background, computer, paper, player, rock, scissor} from '../images';
import Button from './Button';
import PlayItem from './PlayItem';
import SelectItem from './SelectItem';
import SelectContent from './SelectContent';

export default class RockPaperScissor extends Component {
  state = {
    playerSelect: {id: 'scissor', image: scissor},
    computerSelect: {id: 'rock', image: rock},
    listSelect: [
      {id: 'scissor', image: scissor},
      {id: 'rock', image: rock},
      {id: 'paper', image: paper},
    ],
    scores: 0,
    times: 9,
  };

  onSelect = playerSelect => {
    this.setState({playerSelect});
  };

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
    const {playerSelect, computerSelect, times, scores, listSelect} =
      this.state;
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
            <SelectContent
              playerSelectItem={playerSelect.id}
              listSelect={listSelect}
              onPress={this.onSelect}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Scores: {scores}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Play"
              onPress={this.onPlayPress}
              colors={['#f9f', '#ff0']}
            />
            <Button
              title="Reset"
              backgroundColor="#ff0"
              isLinear={true}
              colors={['#f9f', '#ff0']}
            />
          </View>
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
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
