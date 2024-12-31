import { TiSocialFacebook } from "react-icons/ti";

const footerData = {
    about: {
      text: 'Aone Info Systems is an India-based web designing, Internet marketing, and mobile application development company with a unique approach towards the web.',
      socials: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com',
          icon: <TiSocialFacebook />, 
        },
      ],
    },
    services: [
      {
        name: 'Website Development',
        link: '/services/website-development',
      },
      {
        name: 'Mobile Application Development',
        link: '/services/mobile-app-development',
      },
      {
        name: 'ERP Development',
        link: '/services/erp-development',
      },
      {
        name: 'Digital Marketing',
        link: '/services/digital-marketing',
      },
      {
        name: 'Data Security',
        link: '/services/data-security',
      },
      {
        name: 'Ecommerce Development',
        link: '/services/ecommerce-development',
      },
    ],
    contact: [
      'Ashiyana Homes Basai Noida Sector 70, U.P. 201301',
      '+91 9711292515',
      'info@aoneinfosystems.com',
      'Opening Hours: 24 Hours',
    ],
    copyright: '© 2020 All Rights Reserved. Design & Developed By Aone Infosystems',
  };
  
  export default footerData;
  