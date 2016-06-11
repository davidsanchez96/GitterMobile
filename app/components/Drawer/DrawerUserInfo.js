import React, {
  PropTypes,
  TouchableNativeFeedback,
  Image,
  View,
  Text
} from 'react-native'
import s from '../../styles/screens/Drawer/DrawerUserInfoStyles'
import Avatar from '../Avatar'
import SearchField from './SearchField'

import {THEMES} from '../../constants'
const {colors} = THEMES.gitterDefault

import Icon from 'react-native-vector-icons/MaterialIcons'

const DrawerUserInfo = ({username, displayName, avatarUrlMedium, onSettingsPress, onSearchPress}) => {
  return (
    <View style={[s.container, {
      backgroundColor: colors.raspberry,
      borderBottomColor: colors.darkRed
    }]}>
      <View style={s.topContainer}>
        <Avatar src={avatarUrlMedium} />

          <View style={s.info}>
            <Text style={[s.displayName, {color: 'white'}]}>{displayName}</Text>
            <Text style={[s.username, {color: 'white'}]}>@{username}</Text>
          </View>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            onPress={onSettingsPress}>
            <View style={s.buttonStyle}>
              <Icon name="settings" size={30} color="white" />
            </View>
          </TouchableNativeFeedback>

      </View>

      <SearchField
        onPress={() => onSearchPress()} />
    </View>
  )
}

DrawerUserInfo.propTypes = {
  username: PropTypes.string,
  displayName: PropTypes.string,
  avatarUrlMedium: PropTypes.string,
  onSettingsPress: PropTypes.func,
  onSearchPress: PropTypes.func
}

export default DrawerUserInfo
