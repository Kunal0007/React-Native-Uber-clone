import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: 1,
        title: "Get a Ride For Free",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: 2,
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
]

const NavOptions = () => {

    const navigation =  useNavigation();

    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={( item ) => item.id}
            renderItem={ ({ item }) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    style={ tw`bg-gray-200 m-2 p-4 pb-6 w-40`}>
                    <View>
                        <Image 
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full mt-4 w-10`}
                            name='arrowright'
                            color='white' 
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
