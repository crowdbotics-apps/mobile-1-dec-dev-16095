import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_86: "", CheckBox_104: true }

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_86}
        onChangeText={nextValue => this.setState({ TextInput_86: nextValue })}
      />
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_4}>Sample text content</Text>
      <Text style={styles.Text_5}>Sample text content</Text>
      <Icon name="star" />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_104}
        onPress={nextChecked => this.setState({ CheckBox_104: nextChecked })}
      />
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  Image_4: {},
  View_1: {},
  Text_2: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Image_4: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  View_1: {},
  Text_2: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Image_4: {
    borderWidth: 20,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderBottomWidth: 20
  },

  View_1: {},
  Text_2: {
    width: 150,
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  View_1: {},
  Text_2: {
    width: 150,
    alignSelf: "center",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    width: 100,
    alignSelf: "center",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Text_4: {
    width: 150,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },

  View_1: {},
  Text_2: {
    width: 150,
    alignSelf: "center",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    width: 100,
    alignSelf: "center",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Text_4: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },

  View_1: {},
  Text_2: {
    width: 150,
    alignSelf: "center",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    width: 100,
    alignSelf: "center",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Text_4: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },

  Text_5: {
    width: 150,
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },

  View_1: {},
  Text_2: {
    width: 150,
    alignSelf: "center",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Button_3: {
    width: 100,
    alignSelf: "center",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },

  Text_4: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },

  Text_5: {
    width: 150,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },
  View_1: {},
  Text_2: {
    width: 150,
    alignSelf: "center",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  TextInput_86: {},
  Button_3: {
    width: 100,
    alignSelf: "center",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_4: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },
  Text_5: {
    width: 150,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#3c41d3",
    backgroundColor: "#aaeee0",
    borderColor: "#8049b6",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },
  Icon_83: {},
  CheckBox_104: {},
  Icon_216: {}
})
