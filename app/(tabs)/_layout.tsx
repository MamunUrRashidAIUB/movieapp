import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const TabIcon=({focused,icon,title}:any) => {

if(focused){

 return (
     <ImageBackground
              source={images.highlight}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 rounded-full overflow-hidden mt-4 justify-center items-center"
            >
              <Image source={icon}/>
         <Text className="text-secondary text-base font-semibold ml-2">{title} </Text>
            </ImageBackground>
  )
}

 return(
  <Image source={icon}
  tintColor="A8B5DB" className="size-5"/>
)

}


const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
     tabBarItemStyle:{
      width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center',
     },
      tabBarStyle:{
        backgroundColor:'#0f0d23',
        position:'absolute',
       borderRadius:50,
       marginHorizontal:20,
        height:52,
        overflow:'hidden',
        borderWidth:1,
        marginBottom:36,

        


      }
    }}


    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused ={focused}
             icon={icons.home}
             title="Home"
             />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
            tabBarIcon: ({ focused }) => (
            <TabIcon focused ={focused}
             icon={icons.search}
             title="search"
             />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
             tabBarIcon: ({ focused }) => (
            <TabIcon focused ={focused}
             icon={icons.save}
             title="save"
             />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
            tabBarIcon: ({ focused }) => (
            <TabIcon focused ={focused}
             icon={icons.person}
             title="profile"
             />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
