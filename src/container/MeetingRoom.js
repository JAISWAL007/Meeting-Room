import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { constants } from "../utils/Constants";
import { colors } from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const arrayOfMeetingRoom = [
  { id: 0, room: "Meeting Room 1", available: true },
  { id: 1, room: "Meeting Room 2", available: false },
  { id: 2, room: "Meeting Room 3", available: true },
  { id: 3, room: "Meeting Room 4", available: false },
  { id: 4, room: "Meeting Room 5", available: true },
  { id: 5, room: "Conference Room 1", available: true },
  { id: 6, room: "Conference Room 2", available: false },
  { id: 7, room: "Conference Room 3", available: false }
];

class MeetingRoom extends Component {
  static navigationOptions = {
    title: constants.MEETING_ROOM
  };
  state = {};

  _keyExtractor = (item, index) => item.id;

  renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SelectSlot')}
        style={[
          styles.slotTouchable,
          { borderColor: item.available ? colors.GREEN : colors.YELLOW }
        ]}
      >
        <Icon
          name={item.available ? "home-city-outline" : "home-alert"}
          size={50}
          color={item.available ? colors.GREEN : colors.THEME_COLOR}
        />
        <Text style={[styles.bufferText, { fontWeight: "700" }]}>
          {item.room}
        </Text>
        <Text style={[styles.bufferText, { color: colors.GRAY }]}>
          {item.available ? constants.BOOK_ROOM : constants.SOME_ROOM_AVAILABLE}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={arrayOfMeetingRoom}
          extraData={this.state}
          horizontal={false}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    padding: "3%"
  },
  bufferText: {
    color: colors.BLACK,
    fontSize: 14,
    textAlign: "center"
  },
  slotTouchable: {
    borderWidth: 1,
    width: "45%",
    height: 150,
    padding: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: colors.THEME_COLOR,
    borderRadius: 15
  }
};

export default MeetingRoom;
