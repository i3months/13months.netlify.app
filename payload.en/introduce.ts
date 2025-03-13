import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I have been involved in a variety of projects, including research assignments, government agency system development, and backend development for web and mobile applications. I am dedicated to writing clean, maintainable code that anyone can easily understand. At the same time, I strive to build a robust, well-structured architecture that ensures system stability and minimizes potential bugs.',
    'Programming is more than just a job for me. It’s my true calling. I find great fulfillment in solving complex problems and helping others through technology. This passion led me to start a development blog, where I document my learning experiences and share insights on a wide range of IT topics.',
    'I firmly believe that effective communication is the key to successful collaboration. By engaging in proactive and open communication, I strive to become a better developer and a better person every day.',
  ],
  sign: '13months',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
