import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { useLinkProps } from '@react-navigation/native';

const LinkButton = ({
  to,
  action,
  children,
  containerStyles,
  textStyles,
  ...rest
}) => {
  const { onPress, ...props } = useLinkProps({ to, action });

  const [isHovered, setIsHovered] = React.useState(false);

  if (Platform.OS === 'web') {
    return (
      <View
        onClick={onPress}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={[
          styles.container,
          containerStyles,
          { opacity: isHovered ? 0.5 : 1 },
        ]}
        {...props}
        {...rest}
      >
        <Text style={textStyles}>{children}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
      {...props}
      {...rest}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    transitionDuration: '150ms',
  },
});

export default LinkButton;
