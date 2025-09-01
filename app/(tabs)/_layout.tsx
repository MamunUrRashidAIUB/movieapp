import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const TabIcon=({focused,icon,title}:any) => {
  return (
     <ImageBackground
              source={images.highlight}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 rounded-full overflow-hidden mt-4 justify-center items-center"
            >
              <Image source={icon}/>
         <Text className="text-secondary text-base font-semibold ml-2">{title} </Text>
            </ImageBackground>
  )
}


const _layout = () => {
  return (
    <Tabs>
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
