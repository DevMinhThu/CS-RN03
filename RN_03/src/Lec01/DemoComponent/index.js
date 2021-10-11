import React from 'react';
import {Text, View} from 'react-native';

const DemoComponent = () => {
  return (
    <View>
      <Text>DemoComponent</Text>
    </View>
  );
};

export default DemoComponent;

/* NOTE
    - nếu export default: khi import comp có thể rename component.
        - Vd: export default DemoComponent
        - (Khi import sử dụng: import DemoComponentA from './DemoComponent')
    - nếu export:
        - khi import comp phải import đúng tên component đã đặt trong comp đó.
        - đồng thời sử dụng destructuring để gọi tên comp.
        - Vd: export DemoComponent (Khi import sử dụng: import {DemoComponent} from './DemoComponent')
*/
