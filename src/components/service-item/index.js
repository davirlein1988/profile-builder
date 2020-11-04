import React from 'react';
import { FaNodeJs, FaVuejs } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiMongodb, SiReact } from 'react-icons/si';
import { FiSmartphone } from 'react-icons/fi';
import { Icon } from './styles/service-item';

const ServiceList = [
  {
    icon: <FiSmartphone />,
    title: 'Mobile Development',
    description: 'Development with react-native and a little bit of flutter',
    color: '#f9004d',
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend Development',
    description:
      'Uso of NodeJs with Express, mongo, postgresql, redis and elasticsearch',
    color: '#43853d',
  },
  {
    icon: <SiReact />,
    title: 'Front-End Development',
    description:
      "Building jaw dropping UI's with modern frameworks, material-design, bootstrap",
    color: '#61dafb',
  },
  {
    icon: <SiMongodb />,
    title: 'Database Magement',
    description:
      'Building scalable application with help of non relational databases',
    color: '#13aa52',
  },
  {
    icon: <FaVuejs />,
    title: 'Front-End Development',
    description: 'Building scalables UI`s with Vuex, Vuetify and more',
    color: '#35495e',
  },
  {
    icon: <DiJavascript />,
    title: 'Software Development',
    description:
      'Developing software with modern Js, ES6 ... ESNext, design patterns and best practices',
    color: '#f7a614',
  },
];

export default function ServiceItem({ item, column }) {
  const ContentItems = ServiceList.slice(0, item);
  return (
    <>
      <div className="row">
        {ContentItems.map((val, i) => (
          <div className={`${column}`} key={i}>
            <a href="/service-details">
              <div className="service service__style--2">
                <Icon className={`icon`} color={val.color}>
                  {val.icon}
                </Icon>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
