import React from "react";
import {Strings} from "../assets/string";

const pagelinks = [
    {
        title:'Institute',
        links:[
            {
                title:'Home',
                url:'/'
            },
            {
                title:'About',
                url:'/about'
            },


        ]
    },
    {
        title:'Admission',
        links:[
            {
                title:'Courses',
                url:'/programs'
            },
            {
                title:'Apply Now',
                url:'/contact'
            }
        ]
    },
    {
        title:'Campus',
        links:[
            {
                title:'Facilities',
                url:'/facilities'
            },
            {
                title:'Rules',
                url:'/rules'
            }
        ]


    },
    {
        title:'Quick Links',
        links:[
            {
                title:'Contact Us',
                url:'/contact'
            }
        ]
    }
]
function BottomBar() {
    const logo = require('../assets/images/TrainRex.png');

    return (
      <footer className="bg-gray-800">
          <div className="container sm:mx-auto md:flex md:justify-between h-1/4 px-8 md:px-0">
              {/* Third Column: Contact info */}
              <div className={'text-white py-4 w-full md:w-1/4 text-left'}>
                  <h3 className="text-lg font-semibold">Contact Info</h3>
                  <p className={'pb-2'}>{Strings.Address}</p>
                  <p>Email: {Strings.Email}</p>
                  <p className={'mb-2'}>Phone: {Strings.Phone}</p>
              </div>
              <div className="flex flex-wrap py-4 w-full md:w-1/2  text-left text-white justify-between">
                  {pagelinks.map((page, index) => (
                      <div key={index} className="w-full md:w-1/4 mb-4 md:mb-0">
                          <h3 className="text-lg font-semibold mb-0 md:mb-2">{page.title}</h3>
                          <ul>
                              {page.links.map((link, index) => (
                                  <li key={index}>
                                      <a href={link.url}>{link.title}</a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>


          </div>
          <div className="container mx-auto px-4 text-left text-gray-300">
              <p>All Rights Reserved.&copy; 2024 Accorp Partner INC.</p>
          </div>

      </footer>
    );
}

export default BottomBar;