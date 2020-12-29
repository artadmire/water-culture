import chooseArea from '../pages/choose-area';
import departList from '../pages/depart-list';
import Login from '../pages/login/login';
import Index from '../pages/index'
import AddPlants from '../pages/addPlants'
import { TabNav } from './TabNav'
import React from 'react'

export default {
    home: {
        screen: Index,
        navigationOptions: {
            header: null,
            title: 'waterCulture',
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
            title: '',

        }
    },
    addPlants: {
        screen: AddPlants,
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
            title: ''
        }
    }
};