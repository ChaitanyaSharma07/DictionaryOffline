import * as React from 'react';
import {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textStyle: {
        paddingLeft: 70,
        backgroundColor: "blue",
        fontWeight: 'bold',
        fontSize: 30,
        borderColor: "cyan",
        borderWidth: 4,
        borderRadius: 40
    }
})
export default Header;