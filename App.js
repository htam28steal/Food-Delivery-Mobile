import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWelcome from './javascript/ScreenWelcome'
import WalkThrough01 from './javascript/ScreenWalkThrough01'
import WalkThrough02 from './javascript/ScreenWalkThrough02'
import WalkThrough03 from './javascript/ScreenWalkThrough03'
import SignIn from './javascript/ScreenSignIn'
import ForgotPassword from './javascript/ForgotPassword'
import ResetEmail from './javascript/ResetEmail'
import SignUp from './javascript/SignUp'
import LoginByPhoneNumber from './javascript/LoginByPhoneNumber'
import HomePage from './javascript/HomePage'
import FeaturedPartners from './javascript/FeaturedPartners'
import SingleRestaurant from './javascript/SingleRestaurant'
import TypeLocation from './javascript/TypeLocation'
import EnterAddress from './javascript/EnterAddress'
import ConfirmPhoneNumber from './javascript/ConfirmPhoneNumber'
import AddToOrder from './javascript/AddToOrder'

import SearchingFood from './javascript/Screen_SearchingFood';
import YourOrder from './javascript/Screen_17YourOrders';
import ScreenPayment from './javascript/Screen_PaymentMethod';
import Screen_Filter from './javascript/Screen_Filter';
import Screen_SearchRes from './javascript/Screen_SearchRes';
import Screen_SearchFood from './javascript/Search_food';
import Screen_YourOder from './javascript/Screen_YourOrder';
import Screen_CofirmOrder from './javascript/ConfirmOrder';
import Screen_OrderComplete from './javascript/OrderComplete'
import Screen_ProfileSetting from './javascript/ProfileSetting'
import Screen_ChangePassword from './javascript/ChangePassword'
import Screen_PaymentMethod from './javascript/PaymentMethod'
import Screen_CardList from './javascript/CardList'
import Screen_Location from './javascript/Location'
import Screen_AddSocialAccount from './javascript/AddSocialAccount'
import Screen_RefertoFirends from './javascript/RefertoFirend'
import Screen_BrowserFoods from './javascript/BroweFood'
import Screen_FindRestaurant from './javascript/FindRestaurant'
import Screen_SearchResult from './javascript/SearchResult'
import Screen_AccountSetting from './javascript/AccountSetting'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenWelcome">
        <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
        <Stack.Screen name="WalkThrough01" component={WalkThrough01} />
        <Stack.Screen name="WalkThrough02" component={WalkThrough02} />
        <Stack.Screen name="WalkThrough03" component={WalkThrough03} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetEmail" component={ResetEmail} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginByPhoneNumber" component={LoginByPhoneNumber} />
        <Stack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
        <Stack.Screen name="EnterAddress" component={EnterAddress} />
        <Stack.Screen name="TypeLocation" component={TypeLocation} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="FeaturedPartners" component={FeaturedPartners} />
        <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
        <Stack.Screen name="AddToOrder" component={AddToOrder} />

        <Stack.Screen name="YourOrder" component={YourOrder} />
        <Stack.Screen name="ScreenPayment" component={ScreenPayment} />
        <Stack.Screen name="Screen_Filter" component={Screen_Filter} />
        <Stack.Screen name="Screen_SearchRes" component={Screen_SearchRes} />
        <Stack.Screen name="Screen_SearchFood" component={Screen_SearchFood} />
        <Stack.Screen name="SearchingFood" component={SearchingFood} />
        <Stack.Screen name="Screen_SearchResult" component={Screen_SearchResult} />
        <Stack.Screen name="Screen_YourOder" component={Screen_YourOder} />
        <Stack.Screen name="Screen_CofirmOrder" component={Screen_CofirmOrder} />
        <Stack.Screen name="Screen_OrderComplete" component={Screen_OrderComplete} />
        <Stack.Screen name="Screen_AccountSetting" component={Screen_AccountSetting} />
        <Stack.Screen name="Screen_ProfileSetting" component={Screen_ProfileSetting} />
        <Stack.Screen name="Screen_ChangePassword" component={Screen_ChangePassword} />
        <Stack.Screen name="Screen_PaymentMethod" component={Screen_PaymentMethod} />
        <Stack.Screen name="Screen_CardList" component={Screen_CardList} />
        <Stack.Screen name="Screen_Location" component={Screen_Location} />
        <Stack.Screen name="Screen_AddSocialAccount" component={Screen_AddSocialAccount} />
        <Stack.Screen name="Screen_RefertoFirends" component={Screen_RefertoFirends} />
        <Stack.Screen name="Screen_BrowserFoods" component={Screen_BrowserFoods} />
        <Stack.Screen name="Screen_FindRestaurant" component={Screen_FindRestaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;