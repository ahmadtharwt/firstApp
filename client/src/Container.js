import React from 'react';

//import reqwest from 'reqwest';
import { Table} from 'antd';
  
import Puppies from './Puppies';
  

class Container extends React.Component {
    
    
  render() {
      
    return (
        <div>
            <Puppies />
            
        </div>
    );
  }
}

export default Container;