import React from "react";
import {Strings} from "../assets/string";

const pagelinks = [
    {
        title:'Company',
        links:[
            {
                title:'About Us',
                url:'/'
            },
            {
                title:'Services',
                url:'/about'
            },
            {
                title:'Blogs',
                url:'/'
            },
            {
                title:'Contact Us',
                url:'/about'
            },
        ]
    },
    {
        title:'Services',
        links:[
            {
                title:'About Us',
                url:'/'
            },
            {
                title:'Services',
                url:'/about'
            },
            {
                title:'Blogs',
                url:'/'
            },
            {
                title:'Contact Us',
                url:'/about'
            },
        ]
    },
    {
        title:'Connect',
        links:[
            {
                title:'About Us',
                url:'/'
            },
            {
                title:'Services',
                url:'/about'
            },
            {
                title:'Blogs',
                url:'/'
            },
            {
                title:'Contact Us',
                url:'/about'
            },
        ]
    }
]
function BottomBar() {
    const logo = require('../assets/images/TrainRex.png');

    return (
      <footer className="bg-white">
          <div className="container sm:mx-auto md:flex md:justify-between h-1/4 px-12">
              {/* Third Column: Contact info */}
              <div className={'text-black py-4 w-full md:w-1/4 text-left'}>
                  <h3 className="text-2xl font-bold">Accorp</h3>
                  <h3 className="text-lg font-semibold">Social Media Links</h3>
              </div>
              <div className="flex flex-wrap py-4 w-full text-left text-black justify-between">
                  {pagelinks.map((page, index) => (
                      <div key={index} className="w-full md:w-1/4 mb-4 md:mb-0">
                          <h3 className="text-2xl mb-0 md:mb-2">{page.title}</h3>
                          <ul>
                              {page.links.map((link, index) => (
                                  <li className="py-2" key={index}>
                                      <a className="py-2" href={link.url}>{link.title}</a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>


          </div>
          <div className="container px-44 text-left text-black pb-8">
              <p>All Rights Reserved.&copy; 2024 Accorp Partner INC.</p>
          </div>

      </footer>
    );
}

export default BottomBar;