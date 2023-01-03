import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from 'react-native-animatable';
import { Button, Icon } from "@rneui/themed";



export function SignInScreens() {

    const [textInput2Focussed, setTextInput2Focussed] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);


    return (
        <View>
        {/* <View style = {styles.container}> */}

            <Header title="MY ACCOUNT" type="arrow-left"/>

            <View style = {{marginLeft: 20, marginTop: 10}}>
                <Text style = {title}>Sign-In</Text>
            </View>

            <View style = {{alignItems:"center", marginTop: 10}}>
                <Text style = {styles.text1}>Please enter the email and password</Text>
                <Text style = {styles.text1}>registered with your account</Text>
            </View>

            <View style = {{marginTop: 20}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder = "Email"
                        ref={textInput1}
                    />
                </View>
                <View style = {styles.TextInput2}>
                    <Animatable.View animation={textInput2Focussed ? "":"fadeInLeft"} duration = {400}>
                        <Icon 
                            name="lock"
                            iconStyle={{color: colors.grey3}}

                        />
                    </Animatable.View>
                    <TextInput 
                        style={{width:"80%"}}
                        placeholder="Password"
                        ref={textInput2}
                        onFocus = {() => {
                            setTextInput2Focussed(false);
                        }}
                        onBlur={() => {
                            setTextInput2Focussed(true);
                        }}
                    />
                    <Animatable.View animation={textInput2Focussed ? "":"fadeInLeft"} duration = {400}>
                        <Icon 
                            name="visibility-off"
                            iconStyle={{color: colors.grey3}}
                            style={{marginRight:10}}
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style = {{marginHorizontal:20, marginVertical:30}}>
                <Button 
                    title="SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                />
            </View>

            <View>
                <Text style = {{...styles.text1}}>Forgot Password ?</Text>
                {/* <Text style = {styles.text1}>Forgot Password ?</Text> */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grey3,
        // color: "red",
        fontSize: 16,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,

    },
})

