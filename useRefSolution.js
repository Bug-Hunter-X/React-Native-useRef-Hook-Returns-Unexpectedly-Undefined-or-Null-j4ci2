```javascript
import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Access the ref after the component has mounted
    if (myRef.current) {
      console.log('Ref value:', myRef.current);
      // Perform operations using myRef.current
    }
  }, []);

  return (
    <View>
      <Text ref={myRef}>Hello, useRef!</Text>
    </View>
  );
};

export default MyComponent;
```