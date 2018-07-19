import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export default class extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A nested details screen')
        }
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'No ID');
        const otherParam = navigation.getParam('otherParam', 'default param')
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>Item ID: {JSON.stringify(itemId)}</Text>
                <Text>Other params: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Got to Details again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100)
                    })}
                />
                <Button
                    title="Go Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated title' })}
                />
            </View>
        );
    }
}
