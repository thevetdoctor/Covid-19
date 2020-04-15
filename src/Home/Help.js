import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu,  Icon, Button, Popover, Badge } from 'antd';
import Header from './Header';
import First from './First';
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
import Second from "./Second";
import Third from "./Third";
import { QuestionCircleOutlined } from '@ant-design/icons';

import { Steps,  message } from "antd";
const Step = Steps.Step;




const AutoCompleteOption = AutoComplete.Option;




class Help extends Component {

  constructor(props) {
      super(props);
         this.ref = firebase.firestore().collection('requests');
      this.state = {
        current: 0,
        title: 'fff',
        zip: '11',
        supply:[],
        lat:'',
        long:'',
        address:'ff',
        description: '',
        author: '',
        email: '',
        value:''

      };

    }


    handleSubmit = (e) => {

      alert('ldld');
        e.preventDefault();

        const { title, email, address, lat ,author, long , zip ,description, supply } = this.state;

        this.ref.add({
          title:title,

          zip:zip,
          email:email,
          supply:supply,

        }).then((docRef) => {
          this.setState({
            title: '',
            description: '',
            author: '',
            supply:[],
            zip:'',
            emailL:''
          });
          this.props.history.push("/")
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    handleChange = input => event => {
          this.setState({ [input] : event.target.value })

          console.log(event.target.value );
      }


      handleChange2 =  e => {
         this.setState({ supply : e.target.value });
       };
          next() {
             const current = this.state.current + 1;
             // console.log(current)
             this.setState({ current });
           }
           prev() {
             const current = this.state.current - 1;
             // console.log(current)
             this.setState({ current });
           }
           render() {

             const  { title, zip, email, address, lat, supply}=this.state;
             const values = { title, zip, email, address, lat, supply}
             const { current } = this.state;

             const steps = [
               {
                 title: "",
                 content: <First  values={values}    handleChange2 = {this.handleChange2} handleChange = {this.handleChange}/>
               },
               {
                 title: "",
                 content: <Second values={values}    handleChange2 = {this.handleChange2} handleChange = {this.handleChange}/>
               },
               {
                 title: "",
                 content: <Third  values={values}handleChange2 = {this.handleChange2} handleChange = {this.handleChange}/>
               }
             ];
             console.log(current);
             return (
               <div>

                 <Header isMobile={this.state.isMobile} />
                 <br/>
                 <Steps current={current}>
                   {steps.map(item => <Step key={item.title} title={item.title} />)}
                 </Steps>
                 <div className="steps-content">{steps[this.state.current].content}</div>
                 <div className="steps-action">
                   {this.state.current < steps.length - 1 && (
                     <Button type="primary" onClick={() => this.next()}>
                       Next
                     </Button>
                   )}
                   {this.state.current === steps.length - 1 && (
                     <Button
                       type="primary"
                        htmlType="submit"
                       onClick={(e) =>this.handleSubmit(e)}
                     >
                       Done
                     </Button>
                   )}
                   {this.state.current > 0 && (
                     <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                       Previous
                     </Button>
                   )}
                 </div>
               </div>
             );
           }
         }







export default Help;
