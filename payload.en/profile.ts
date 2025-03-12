import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import profileImage from '../asset/profile.jpg';

const profile: IProfile.Payload = {

  image: profileImage,
  name: {
    title: 'Joonmo Jeong',
    small: '(13months)',
  },
  contact: [
    {
      title: 'jeongjoonmo.dev@gmail.com',
      link: 'mailto:jeongjoonmo.dev@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '+82) 010-9947-1018',
      icon: faPhone      
    },
    {
      link: 'https://github.com/i3months',
      icon: faGithub,
    },
    {
      title: '(Korean Blog) https://13months.tistory.com',
      link: 'https://13months.tistory.com',
      icon: faBloggerB,
    },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
