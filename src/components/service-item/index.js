import React from 'react';
import { FaNodeJs, FaVuejs } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiMongodb, SiReact } from 'react-icons/si';
import { FiSmartphone } from 'react-icons/fi';

const ServiceList = [
  {
    icon: <FiSmartphone />,
    title: 'Business Stratagy',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Website Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <SiReact />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <SiMongodb />,
    title: 'Mobile App Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FaVuejs />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <DiJavascript />,
    title: 'Mobile App Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];

export default function ServiceItem({ item, column }) {
  console.log(column, item);
  const ContentItems = ServiceList.slice(0, item);
  return (
    <>
      <div className="row">
        {ContentItems.map((val, i) => (
          <div className={`${column}`} key={i}>
            <a href="/service-details">
              <div className="service service__style--2">
                <div className="icon">{val.icon}</div>
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
