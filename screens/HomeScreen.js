import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <SafeAreaView style={ tw`android:pt-5 bg-white h-full`}>
            <View style={tw`p-4`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }} 
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    // onPress={(data, details = null) => {
                    //     // 'details' is provided when fetchDetails = true
                    //     console.log(data, details);
                    // }}
                    query={{
                        key: GOOGLE_MAP_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    onFail={error => console.error(error)}
                />

                <NavOptions />
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    // AndroidSafeArea: {
    //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // },
})
