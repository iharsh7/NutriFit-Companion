import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const GetDiet = () => {
    const route = useRoute();
    const {dietData} = route.params;
    const tableData = dietData["macronutrients_table"]["macronutrients-table"];
    const tableData2 = dietData["vitamins_table"]["vitamins-table"];
    const navigation = useNavigation()
    
    return (
        <ImageBackground
            source={{ uri: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/07/21104052/BLOG-7-2.jpg" }}
            style={styles.backgroundImage}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.backk}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("HelpDiet")
        }}>
      <Image
      style={{height:"100%",width:"100%"}}
      source={require("../../assets/arrow.png")}
      />
      </TouchableOpacity>
      </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>YOUR REQUIRMENTS</Text>
                    <Text style={styles.subHeaderText}>STAY <Text style={styles.highlightText}>HEALTHY</Text></Text>
                </View>
                <View style={styles.calorieContainer}>
                    <Text style={styles.calorieText}>YOUR DAILY CALORIE REQUIRMENT: <Text style={styles.calorieValue}>{dietData.BMI_EER["Estimated Daily Caloric Needs"]}</Text></Text>
                </View>
                <View style={styles.tableContainer}>
                    <Text style={styles.tableTitle}>MACRONUTRIENTS TABLE</Text>
                    {tableData.map((ele, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCell}><Text style={styles.cellTitle}>{ele[0]}:</Text> <Text style={styles.cellValue}>{ele[1]}</Text></Text>
                        </View>
                    ))}
                </View>
                <View style={styles.tableContainer}>
                    <Text style={styles.tableTitle}>VITAMIN TABLE</Text>
                    {tableData2.map((ele, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCell}><Text style={styles.cellTitle}>{ele[0]}:</Text> <Text style={styles.cellValue}>{ele[1]} ~ {ele[2]}</Text></Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default GetDiet;

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: hp(20), // Adjust as needed for proper scrolling
    },
     backk:{
        position:"absolute",
        // borderWidth:5,
        width:42,
        height:42,
        borderRadius:21,
        top:hp(8),
        left:hp(2),
        zIndex:5,
  
      },
    headerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: "center",
        padding: hp(7),
    },
    headerText: {
        fontSize: hp(4),
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    subHeaderText: {
        fontSize: hp(4),
        fontWeight: "bold",
        textAlign: "center",
        color: "#C21E56"
    },
    highlightText: {
        color: "#C21E56"
    },
    calorieContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: hp(1),
    },
    calorieText: {
        color: "white",
        fontSize: hp(1.8),
    },
    calorieValue: {
        fontWeight: "bold",
        fontSize: hp(2.2),
    },
    tableContainer: {
        marginTop: hp(1),
        padding: hp(2),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    tableTitle: {
        fontSize: hp(3),
        fontWeight: "bold",
        marginBottom: hp(2),
        color: "white",
        // marginTop:hp(8)
    },
    tableRow: {
        borderWidth: hp(0.1),
        padding: hp(0.7),
    },
    tableCell: {
        color: "white",
        fontSize: hp(1.8),
    },
    cellTitle: {
        fontWeight: "bold",
        paddingHorizontal: wp(5),
        fontSize: hp(2),
    },
    cellValue: {
        paddingHorizontal: wp(5),
    },
    backgroundImage: {
        flex: 1,
        width: wp(100),
        height: hp(110),
        resizeMode: 'cover',
    },
});
