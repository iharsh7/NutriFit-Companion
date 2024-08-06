import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const FullExercise = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const { fulldata } = route.params;
    console.log(fulldata);
    return (
        <View style={styles.container}>
            <View style={styles.cont1}>
                <Image
                    style={styles.img}
                    source={{ uri: fulldata.gifUrl }}
                />
                <View style={styles.backk}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={require("../../assets/remove.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cont2}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.cont25}>
                        <Text style={styles.txt1}>{fulldata.name.toUpperCase()}</Text>
                    </View>
                    <View style={styles.cont25}>
                        <Text style={styles.lighttxt}>Equipment: <Text style={styles.boldtxt}>{fulldata.equipment}</Text></Text>
                    </View>
                    <View style={styles.cont25}>
                        <Text style={styles.lighttxt}>Secondary Muscles: <Text style={styles.boldtxt}>{fulldata.secondaryMuscles + " "}</Text></Text>
                    </View>
                    <View style={styles.cont25}>
                        <Text style={styles.lighttxt}>Target: <Text style={styles.boldtxt}>{fulldata.target}</Text></Text>
                    </View>
                    <View style={styles.cont25}>
                        <Text style={styles.instru}>INSTRUCTIONS</Text>
                        {fulldata.instructions.map((ele, indexx) => {
                            return (
                                <Text key={indexx} style={styles.instructionText}>{ele}</Text>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
            <Text>{console.log(fulldata.name)}</Text>
        </View>
    )
}

export default FullExercise

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cont0: {
        flex: 1,
        paddingBottom: hp(9),
    },
    img: {
        height: hp(44),
        width: wp(100),
        borderRadius: hp(50)
    },
    cont1: {
        marginTop: hp(5.1),
        borderBottomRightRadius: hp(4),
        borderBottomLeftRadius: hp(4),
        position: "relative",
        overflow: 'hidden',
        backgroundColor: '#ebedeb',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 15, // For Android shadow
    },
    cont2: {
        flex: 1,
        marginTop: hp(1),
        // marginTop: hp(5.1),
    },
    scrollViewContent: {
        padding: hp(2),
    },
    txt1: {
        fontWeight: "600",
        fontSize: hp(2.9),
        marginLeft: wp(0.8)
    },
    backk: {
        position: "absolute",
        // borderWidth: 5,
        width: 42,
        height: 42,
        borderRadius: 21,
        top: hp(2),
        right: hp(2)
    },
    cont25: {
        // borderWidth: 2,
        marginTop: hp(1.4),
        padding: hp(1),
    },
    boldtxt: {
        fontWeight: "700",
        fontSize: hp(2.1)
    },
    lighttxt: {
        fontSize: hp(1.7),
        fontWeight: "400"
    },
    instru: {
        fontWeight: "bold",
        fontSize: hp(2.2)
    },
    instructionText: {
        marginTop: hp(0.8),
        fontSize: hp(2)
    }
});
