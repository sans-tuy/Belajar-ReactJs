/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// bermaksud membuat struktur aplikasi seperti di appName dan screen yang petama kali ditampilkan App
AppRegistry.registerComponent(appName, () => App);
