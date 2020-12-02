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

  state = {
    Switch_2: true,
    CheckBox_3: true,
    CheckBox_4: true,
    Switch_6: true,
    CheckBox_7: true,
    CheckBox_8: true
  }

  render = () => (
    <View>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_2}
        value={this.state.Switch_2}
        onValueChange={nextChecked => this.setState({ Switch_2: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_3}
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_4}
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <Icon name="star" />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_7}
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_8}
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
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
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {},
  CheckBox_4: {},
  Icon_5: {},
  Switch_6: { alignSelf: "flex-start" },
  CheckBox_7: {},
  CheckBox_8: {},
  Icon_9: {},
  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  CheckBox_4: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Icon_5: {},
  Switch_6: { alignSelf: "flex-start" },
  CheckBox_7: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  CheckBox_8: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Icon_9: {}
})
