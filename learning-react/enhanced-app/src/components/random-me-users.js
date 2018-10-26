//import React from 'react';
import PeopleList from './people-list';
import DataComponent from './data-component';

const RandomMeUsers = DataComponent(PeopleList, 'https://randomuser.me/api');
export default RandomMeUsers;