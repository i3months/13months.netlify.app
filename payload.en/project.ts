import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Developed features for the Chemical Information Platform Service',
      startedAt: '2025-01',
      endedAt: '2025-03',
      where: 'IWAZ (South Korea)',
      descriptions: [
        {
          content: 'Migrated data from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Indexing migrated data and implemented partitioning for statistical data.',
            },
          ],
        },
        {
          content: 'Optimized queries from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Implemented hierarchical queries and sorting using WITH RECURSIVE and SORT_PATH.',
            },
            {
              content:
                'Refactored high-cost statistical queries, improving performance (873.231ms → 214.245ms).',
            },
          ],
        },
        {
          content:
            'Visualized statistical data using ApexChart and implemented favorites and table search features.',
        },
      ],
    },
    {
      title: 'Enhanced functionalities of the DBpia service',
      startedAt: '2024-04',
      endedAt: '2024-12',
      where: 'IWAZ (South Korea)',
      descriptions: [
        {
          content:
            'Integrated Redis for floating banners and developed APIs to connect the back office with the DBpia service.',
        },
        {
          content:
            'Modified Elasticsearch queries and existing mappings for the unified search feature, restructured the research paper index.',
        },
        {
          content:
            'Analyzed execution plans, reindexed data, and optimized high-cost queries (4481.926ms → 1111.281ms).',
        },
        {
          content:
            'Maintained DBpia service operations – Fixed Excel download bugs, managed the PDF download server, and handled long-term inactive users.',
        },
      ],
    },
    {
      title: 'Developed DBpia Content Maker (DCM)',
      startedAt: '2024-02',
      endedAt: '2024-12',
      where: 'IWAZ (South Korea)',
      descriptions: [
        {
          content:
            'Analyzed legacy source code written in C# and C++ and designed a new web-based system.',
        },
        {
          content:
            'Utilized Git Flow strategy for seamless collaboration, analyzed user requirements and system processes.',
        },
        {
          content: 'Set up and managed project configurations and operations.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Configured Spring Security with custom filters and authenticators, implemented LDAP-based login.',
            },
            { content: 'Resolved DataSource TLS compatibility issue with SQL Server 2005.' },
            {
              content:
                'Fixed incompatibility between the latest Spring Batch version and SQL Server 2005 sequences.',
            },
            {
              content:
                'Established certificates and domains, set up reverse proxy routing for development and production servers using NGINX.',
            },
            {
              content:
                'Deployed and managed Tomcat on Windows Server, resolved symbolic link-related network drive permission issues.',
            },
            {
              content:
                'Configured Tomcat JVM memory and implemented redundancy for production and development servers.',
            },
            {
              content:
                'Handled penetration testing issues, including XSS, CSRF, and sensitive data masking.',
            },
            {
              content:
                "Utilized SQL Server's Linked Server to remotely call stored procedures from different locations.",
            },
          ],
        },
        {
          content: 'Research Paper Metadata Production System Development',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Developed a PDF splitting algorithm using PDFBox, ensuring differentiation between logical and physical pages in pdf.',
            },
            {
              content:
                'Integrated ERP and DCM services using Spring Batch, implemented business logic based on Job / Step.',
            },
            {
              content:
                'Developed a temporary storage system for research papers to periodically save input data.',
            },
            {
              content:
                'Implemented an email-based research paper author search feature using Elasticsearch.',
            },
          ],
        },
        {
          content: 'Efficiency Improvements & Service Optimization',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Revamped the research paper production system, reducing metadata processing time (30 min → 15 min for 50 papers).',
            },
            { content: 'Optimized batch processing, cutting publication time (3 days → 1 day).' },
          ],
        },
      ],
    },
    {
      title: 'Developed the ASD Screening AI Integrated Platform System',
      startedAt: '2023-10',
      endedAt: '2024-02',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Implemented conditional branching surveys using SurveyJS.',
        },
        {
          content:
            'Transmitted video and audio data via WebSocket for real-time communication with the AI inference server.',
        },
        {
          content: 'Visualized inference results in real-time using ApexCharts and D3.js.',
        },
        {
          content: 'Set up system execution environment and deployed images using Docker.',
        },
        {
          content:
            'Developed JWT authentication and CRUD functionality for participants and test results using FastAPI.',
        },
        {
          content: 'Built and developed the frontend using Vue.',
        },
      ],
    },
    {
      title: 'Enhanced functionalities of the ETRI School website',
      startedAt: '2023-08',
      endedAt: '2023-10',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Unified non-registered student and faculty data into a single table.',
        },
        {
          content:
            'Implemented bulletin board pagination and step-by-step registration using Vue Quasar.',
        },
        {
          content:
            'Developed a Spring Boot and JPA-based back-office system and integrated with the ETRI School service.',
        },
        {
          content: "Deployed and managed the system on ETRI's internal servers using Docker.",
        },
      ],
    },
    {
      title: 'Developed the Drone Mission Data Management System',
      startedAt: '2023-05',
      endedAt: '2023-10',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Developed batch business logic for drone data storage.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Traversed directories using DFS and stored image metadata.' },
            { content: 'Detected changes at the project level and updated only modified data.' },
            { content: 'Used AtomicBoolean api to ensure only one scheduler runs at a time.' },
            { content: 'Handled scheduler tasks asynchronously with CompletableFuture api.' },
            { content: 'Conducted performance benchmarking tests considering JVM warm-up.' },
          ],
        },
        {
          content: 'Visualized image data on a map using React.',
        },
        {
          content:
            'Deployed Frontend, Backend, and Database as a unified system using docker-compose.',
        },
      ],
    },
    {
      title: 'Enhanced functionalities of the National Supercomputing Center website',
      startedAt: '2023-03',
      endedAt: '2023-05',
      where: 'CHIRON SOFT (South Korea)',
      descriptions: [
        {
          content: 'Redesigned the main page and developed the back-office system.',
        },
        {
          content:
            'Added an email verification step for user registration, including security measures and expiration settings for verification codes.',
        },
        {
          content:
            'Visualized supercomputer usage statistics using D3.js and optimized queries (6.376s → 0.430s).',
        },
        {
          content: 'Implemented a WebSocket-based broadcast feature for connected users.',
        },
      ],
    },
  ],
};

export default project;
