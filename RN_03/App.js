import React from 'react';
import {Provider} from 'react-redux';
// import ExerciseStyleSheet from './src/Lec01/ExerciseStyleSheet';
// import DemoStyleSheet from './src/Lec02/DemoStyleSheet';
// import DemoFlex from './src/Lec02/DemoFlex';
// import DemoImage from './src/Lec02/DemoImage';
// import DemoTextInput from './src/Lec02/DemoTextInput';
// import BindingData from './src/Lec03/BindingData';
// import ExerciseUI from './src/Lec03/ExerciseUI';
// import RenderList from './src/Lec03/RenderList';
// import BTLec06 from './src/Lec03/RN03_BTBuoi6_Binding_VuMinhThu';
// import ExRender from './src/Lec04/ExRender';
// import DemoScrollView from './src/Lec04/DemoScrollView';
// import DemoFlatList from './src/Lec04/DemoFlatList';
// import DemoSectionList from './src/Lec04/DemoSectionList';
// import BTLec04 from './src/Lec04/RN03_BaiTap_Zalo_VuMinhThu';
// import DemoCallAPI from './src/Buoi8/DemoCallAPI/index';
// import DemoLifecycle from './src/Buoi8/DemoLifecycle/index';
// import DemoAxios from './src/Buoi9/DemoAxios';
import rootStore from './src/Buoi7/redux/store';
import RockPaperScissorRedux from './src/Buoi7/RockPaperScissorRedux';
// import ListProductScreen from './src/Buoi9/ListProductScreen';
// import OnboardScreen from './src/Buoi10/OnboardScreen/index';
import RootScreen from './src/Buoi10';

const App = () => {
  return (
    <Provider store={rootStore}>
      <RootScreen />
    </Provider>
  );
};

export default App;
