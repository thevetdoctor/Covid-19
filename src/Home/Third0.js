
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu,  Icon, Button, Popover, Badge } from 'antd';
import Header from './Header';
import React, { Component } from 'react';
import  { useState } from 'react';
import "antd/dist/antd.css";

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

const Third = ({ setForm, formData, navigation }) => {
const {
    title,
  zip,
  address,
  description,
  supply,
  phone,
  email
} = formData;

     this.ref = firebase.firestore().collection('requests');







      const   handleSubmit = (e) => {

          alert('ldld');
            e.preventDefault();

            const { title, email, address, lat ,author, long , zip ,description, supply } = formData;

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

const { Option } = Select;
const options = [{ value: 'Gloves' }, { value: 'Masks' }, { value: 'Food' }, { value: 'Respirator' }]

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

        <Form.Item label="First Name">
          <Input placeholder="input placeholder" style={{width:"25%"}}
           value={this.state.title}
        onChange={(e) => this.setState({title: e.target.value})}
             />
        </Form.Item>
        <Form.Item label="Last Name">


          <Input label="Last Name" style={{width:"25%"}}
     onChange={(e) => this.setState({zip: e.target.value})}
         value={this.state.zip}
           />
        </Form.Item>
        <Form.Item label="Email">


          <Input label="Email" style={{width:"25%"}}
     onChange={(e) => this.setState({zip: e.target.email})}
         value={this.state.email}
           />
        </Form.Item >
          <Form.Item label="Supply needed">
        <Select
           mode="multiple"
           style={{ width: '25%' }}
           placeholder="select one country"
           defaultValue={['china']}
    onChange={(value) => this.setState({supply: value})}
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
};



export default Third;
