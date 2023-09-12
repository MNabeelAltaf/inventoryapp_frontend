import React from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Screens/Home";
import Footer from './Screens/Footer';
import CreatePurchase from './Screens/CreatePurchase';
import CreateNewPurchaseOrder from './Screens/CreateNewPurchaseOrder';
import SelectVendorManually from './Screens/SelectVendorManually';
import Add_Products from './Screens/Add_Products';
import Search_Products from './Screens/Search_Products';
import Vendors from './Screens/Vedors';
import BlissErp from './Screens/BlissErp';
import PurchaseOrders from './Screens/PurchaseOrders';
import VendorBills from './Screens/VendorBills';
import VendorReceipt from './Screens/VendorReceipt';
import PurchaseOrderReceipt from './Screens/PurchaseOrderReceipt';
import VendorBillReceipt from './Screens/VendorBillReceipt';
import VendorReceiptDetails from './Screens/VendorReceiptDetails';
import WarehouseOperations from './Screens/WarehouseOperations';
import ReceiptDubai from './Screens/ReceiptDubai';
import ReceiptDubaiDetail from './Screens/ReceiptDubaiDetail';
import ScanProduct from './Screens/ScanProduct';





const Stack = createNativeStackNavigator();


function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="CreatePurchase" component={CreatePurchase}

          options={{
            title: 'Purchased Order',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="CreateNewPurchaseOrder" component={CreateNewPurchaseOrder}

          options={{
            title: 'Create New Purchase Order',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="SelectVendorManually" component={SelectVendorManually}

          options={{
            title: 'Select Vendor Manually',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="Add_Products" component={Add_Products}

          options={{
            title: 'Add Product',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="Search_Products" component={Search_Products}

          options={{
            title: 'Search Products',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="Vendors" component={Vendors}

          options={{
            title: 'Vendors',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="BlissErp" component={BlissErp}

          options={{
            title: 'BLISS ERP',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="PurchaseOrders" component={PurchaseOrders}

          options={{
            title: 'Purchase Orders',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="VendorBills" component={VendorBills}

          options={{
            title: 'Vendor Bills',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="VendorReceipt" component={VendorReceipt}

          options={{
            title: 'Vendor Receipts',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="PurchaseOrderReceipt" component={PurchaseOrderReceipt}

          options={{
            title: 'PO0001',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <TouchableOpacity>
                <Text
                  style={{
                    backgroundColor: '#68fc7f',
                    fontSize: 11,
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    paddingVertical: 25,
                    marginRight: 0,
                    borderRadius: 10,
                    width: 90,
                  }}
                >
                  Confirmed
                </Text>
              </TouchableOpacity>
            ),
          }}

        />
        <Stack.Screen name="VendorBillReceipt" component={VendorBillReceipt}

          options={{
            title: 'BILL/2023/08/0001',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <TouchableOpacity>
                <Text
                  style={{
                    backgroundColor: '#68fc7f',
                    fontSize: 11,
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    paddingVertical: 25,
                    marginRight: 0,
                    borderRadius: 10,
                    width: 90,
                  }}
                >
                  Posted
                </Text>
              </TouchableOpacity>
            ),
          }}

        />
        <Stack.Screen name="VendorReceiptDetails" component={VendorReceiptDetails}

          options={{
            title: 'WH/IN/00007',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <TouchableOpacity>
                <Text
                  style={{
                    backgroundColor: '#68fc7f',
                    fontSize: 11,
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    paddingVertical: 25,
                    marginRight: 0,
                    borderRadius: 10,
                    width: 90,
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            ),
          }}

        />


        <Stack.Screen name="WarehouseOperations" component={WarehouseOperations}

          options={{
            title: 'Warehouse Operations',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="ReceiptDubai" component={ReceiptDubai}

          options={{
            title: 'Receipt Dubai',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="ReceiptDubaiDetail" component={ReceiptDubaiDetail}

          options={{
            title: 'PO00001',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />
        <Stack.Screen name="ScanProduct" component={ScanProduct}

          options={{
            title: 'PO0001',
            headerStyle: {
              backgroundColor: '#242733',
            },
            headerTintColor: 'white',
          }}

        />



      </Stack.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
