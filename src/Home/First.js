
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu,  Icon, Button, Popover, Badge } from 'antd';
import Header from './Header';
import React, { Component } from 'react';
import  { useState } from 'react';
import "antd/dist/antd.css";
import Third  from './Third';
import firebase from './Firebase';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Tag,
  Select,
  Row,
  Col,
  Option,InputNumber,
  Checkbox,

  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const AutoCompleteOption = AutoComplete.Option;


class First extends Component {
  constructor() {
     super();

     this.ref = firebase.firestore().collection('requests');
      this.state = {
    title: 'fff',
    zip: '11',
    supply:[],
    lat:'',
    long:'',
    address:'ff',
    description: '',
    author: '',
    email: ''
  };
   }




   handleChange =  e => {
      this.setState({ supply : e.target.value });
    };
        handleSubmit = (e) => {

          alert('ldld');
            e.preventDefault();

            const { title, email, address, lat ,author, long , zip ,description, supply } = this.state;

            this.ref.add({
              title,
              description,
              author,
              address,
              zip,
              email,
              supply,

            }).then((docRef) => {
              this.setState({
                title: '',
                description: '',
                author: '',
                supply:'',
                zip:'',
                emailL:''
              });
              this.props.history.push("/")
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
          }

  render(){
const { Option } = Select;
   const { values } = this.props;
const options = [{ value: 'Gloves' }, { value: 'Masks' }, { value: 'Food' }, { value: 'Respirator' }]
function handleChange(value) {
  console.log(`selected ${value}`);
}
function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag  closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}


 return(

  <div>

  <Form
       layout="horizontal"

         onSubmit={this.handleSubmit}

      >

        <Form.Item label="First Name">   <Input label="Last Name" name="title" style={{width:"25%"}}
           value={values.title}
              onChange={this.props.handleChange('title')}


             />
        </Form.Item>
        <Form.Item label="Last Name">


          <Input label="Last Name"  name="zip"  style={{width:"25%"}}
 onChange={this.props.handleChange('zip')}
         value={values.zip}
           />
        </Form.Item>
        <Form.Item label="Email">


          <Input label="Email" name="email" style={{width:"25%"}}onChange={this.props.handleChange('email')}
         value={values.email}
           />
        </Form.Item >
          <Form.Item label="Supply needed">
        <Select
           mode="multiple"
            name="supply"
           style={{ width: '25%' }}
           placeholder="select one country"
           defaultValue={['china']}
onChange={this.props.handleChange}
           optionLabelProp="label"
         >
           <Option value="masks" label="  Masks">
             <div className="demo-option-label-item">
               <span role="img" aria-label="China">

               </span>
              Masks
             </div>
           </Option>
           <Option value="  Gloves" label="Gloves">
             <div className="demo-option-label-item">
               <span role="img" aria-label="USA">

               </span>
          Gloves
             </div>
           </Option>
           <Option value="  Respirators" label="    Respirators">
             <div className="demo-option-label-item">
               <span role="img" aria-label="Japan">

               </span>
              Respirators
             </div>
           </Option>
           <Option value="  Other" label="          Other">
             <div className="demo-option-label-item">
               <span role="img" aria-label="Korea">

               </span>
          Other
             </div>
           </Option>
         </Select>
         </Form.Item >
        <Form.Item >
          <Button htmlType="submit" type="primary">Submit</Button>
        </Form.Item>
      </Form>
  </div>



);
}
}




export default First;
