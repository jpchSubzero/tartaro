import * as React from "react";
// import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import { PostList, PostEdit, PostCreate } from './posts';
// import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import customDataProvider from './customDataProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const dataProvider = jsonServerProvider('https://restcountries.eu/rest/v2');

// const App = () => < Admin dataProvider = { dataProvider } />;
const App = () => ( 
    // <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Admin dashboard={Dashboard} dataProvider={customDataProvider} authProvider={authProvider}>
        <Resource icon={PostIcon} name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource icon={UserIcon} name = "users" list = { UserList } /> 
    </Admin>

    // <Admin dataProvider = { dataProvider }>
    //     {/* <Resource name="posts" list={ListGuesser} /> */}
    //     {/* <Resource name="posts" list={ PostList } /> */}
    //     {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
    //     <Resource icon={PostIcon} name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    //     <Resource icon={UserIcon} name = "users" list = { UserList } /> 
    //     {/* <Resource name = "users" list = { ListGuesser } />  */}
    //     {/* <Resource name = "all" list = { ListGuesser } />  */}
    // </Admin>
);

export default App;