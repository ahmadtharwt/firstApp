import React from 'react';

//import reqwest from 'reqwest';
import {Table} from 'antd';
  

  

class Puppies extends React.Component {
    
    state = {  
      data: [],
      //pagination: {},
      //loading: false,
    };
    /*handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
      this.fetch({
        limit: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    }
  
    fetch = (params = {}) => {
      console.log('params:', params);
      this.setState({ loading: true });
      reqwest({
        url: 'http://localhost:3001/puppies',
        method: 'get',
        data: {
        limit: 10,
          ...params,
        },
        type: 'json',
      }).then((data) => {
        const pagination = { ...this.state.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
      });
    }
  
    componentDidMount() {
      this.fetch();
    }*/
    componentDidMount(){
      fetch('/puppies')
      .then(res =>res.json())
      //.then(function(puppies) { console.log(puppies); });
      .then(data =>this.setState({data}));
      //let keys = object.keys(this.state.puppies);
    }
  
  //  id, firstName, lastName,age
  render() {
      const columns = [{
              title: 'Full Name',
              dataIndex: 'fullName',
              key: 'fullName',
              //sorter: true,
            }, {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              //sorter: true,
              width: '20%',
            }, {
              title: 'Best friend',
              dataIndex: 'bestFriend.fullName',
              key: 'bestFriend.fullName',
            },{
              title: 'Fav Food',
              dataIndex: 'favFoods[0].name',
              key: 'favFoods[0].name',
            }
          ];
    return (
        <div>
            <h2>Puppies</h2>
            <Table dataSource={this.state.data} columns={columns} rowKey="id"/>
            
        </div>
    );
  }
}

export default Puppies;