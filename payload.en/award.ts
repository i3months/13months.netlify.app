import { IAward } from '../component/award/IAward';

const presentation: IAward.Payload = {
  disable: false,

  list: [
    {
        title: '11th NTIS Information Utilization Competition',
        subTitle: 'Grand Prize (Minister of Science and ICT Award)',
        at: '2023-12',
        descriptions: [
            {
                content: 'Developed "NTIS STUDIO" a scientific document editor using Vue and FastAPI.'
            }
        ]
    },
    {
        title: 'K-Digital Challenge: 2023 MyData Idea Competition',
        subTitle: 'Excellence Prize (Korea Data Agency President’s Award)',
        at: '2023-08',
        descriptions: [
            {
                content: 'Developed "Trippy" a personalized travel app using Flutter.',
            }
        ]
    },
    {
        title: '2023 Environmental Data Utilization and Analysis Competition',
        subTitle: 'Grand Prize (Minister of Environment Award)',
        at: '2023-06',
        descriptions: [
            {
                content: 'Planned "CEAP" a platform for analyzing company-specific carbon emissions using greenhouse gas data.',
            }
        ]
    },
    {
        title: 'Chungnam National University Algorithm Competition – DevDay',
        subTitle: 'Bronze Prize',
        at: '2022-11',
        descriptions: [
            {
                content: 'University-wide algorithm competition held every spring and fall.',
            }
        ]
    },
    {
        title: 'Chungnam National University Algorithm Competition – DevDay',
        subTitle: 'Encouragement Prize',
        at: '2022-06',
        descriptions: [
            {
                content: 'University-wide algorithm competition held every spring and fall.',
            }
        ]
    },
    {
        title: 'Chungnam National University Junior Creative Works Competition',
        subTitle: 'Encouragement Prize',
        at: '2021-11',
        descriptions: [
            {
                content: 'Developed a refrigerator management service using deep learning-based image recognition.',
            }
        ]
    },
  ],
};

export default presentation;
