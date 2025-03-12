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
          content:            
            'Migrated data from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Indexing migrated data and implemented partitioning for statistical data.' }
          ],
        },
        {
          content:
            'Optimized queries from TIBERO to MariaDB.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Implemented hierarchical queries and sorting using WITH RECURSIVE and SORT_PATH.' },
            { content: 'Refactored high-cost statistical queries, improving performance (873.231ms → 214.245ms).' },                                    
          ]
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
          content:
            'Set up and managed project configurations and operations.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Configured Spring Security with custom filters and authenticators, implemented LDAP-based login.' },
            { content: 'Resolved DataSource TLS compatibility issue with SQL Server 2005.' },                        
            { content: 'Fixed incompatibility between the latest Spring Batch version and SQL Server 2005 sequences.' },                                                         
            { content: 'Established certificates and domains, set up reverse proxy routing for development and production servers using NGINX.' },
            { content: 'Deployed and managed Tomcat on Windows Server, resolved symbolic link-related network drive permission issues.' },
            { content: 'Configured Tomcat JVM memory and implemented redundancy for production and development servers.' },
            { content: 'Handled penetration testing issues, including XSS, CSRF, and sensitive data masking.' },
            { content: "Utilized SQL Server's Linked Server to remotely call stored procedures from different locations." },
          ],         
        },    
        {
          content:
            'Research Paper Metadata Production System Development',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Developed a PDF splitting algorithm using PDFBox, ensuring differentiation between logical and physical pages in pdf.' },
            { content: 'Integrated ERP and DCM services using Spring Batch, implemented business logic based on Job / Step.' },                        
            { content: 'Developed a temporary storage system for research papers to periodically save input data.' },                                                         
            { content: 'Implemented an email-based research paper author search feature using Elasticsearch.' },
          ],         
        },  
        {
          content:
            'Efficiency Improvements & Service Optimization',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Revamped the research paper production system, reducing metadata processing time (30 min → 15 min for 50 papers).' },
            { content: 'Optimized batch processing, cutting publication time (3 days → 1 day).' },                        
          ],         
        },  
      ],
    },
    {
      title: 'ASD 선별 AI 통합 플랫폼 시스템 기능 개발',
      startedAt: '2023-10',
      endedAt: '2024-02',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content:
            'SurveyJS 활용 조건부 분기 설문지 구현',
        },
        {
          content:
            'websocket 활용 비디오, 음성 데이터 전송 - AI 추론 서버와 실시간 통신',
        },
        {
          content:
            'ApexChart, d3.js 활용 추론 결과 실시간 시각화',
        },
        {
          content:
            'Docker 활용 시스템 실행 환경 구축 및 이미지 배포',
        },
        {
          content:
            'FastAPI 기반 JWT 인증 및 피실험자, 검사 결과 CRUD 기능 개발',
        },
        {
          content:
            'Vue 기반 프론트엔드 구축 및 화면 개발',
        },
      ],
    },
    {
      title: 'ETRI 스쿨 홈페이지 기능 개선',
      startedAt: '2023-08',
      endedAt: '2023-10',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content:
            '회원으로 가입하지 않은 학생, 교수 데이터를 하나의 테이블으로 통합',
        },
        {
          content:
            'Vue Quasar 활용 게시판 Pagination 및 단계별 회원가입 기능 구현',
        },
        {
          content:
            'Spring Boot, JPA 기반 백오피스 개발 및 ETRI 스쿨 서비스와 연동',
        },
        {
          content:
            'ETRI 내 서버 컴퓨터에 Docker 기반 시스템 배포 및 운영',
        },
      ],
    },
    {
      title: '드론 임무 데이터 관리 시스템 기능 개발',
      startedAt: '2023-05',
      endedAt: '2023-10',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content:
            '드론 데이터 저장 배치 비즈니스 로직 개발',
          weight: 'MEDIUM',
            descriptions: [
              { content: 'dfs 방식으로 디렉토리 탐색 및 이미지 메타데이터 저장' },
              { content: '프로젝트 단위로 변화 감지, 변화가 있는 경우만 업데이트' },
              { content: 'AtomicBoolean 활용 한 번에 하나의 스케쥴러만 실행될 수 있도록 제한' },
              { content: 'CompletableFuture 활용 스케쥴러 작업 비동기 처리' },
              { content: 'JVM 웜업 고려 성능 벤치마킹 테스트 진행' },
            ]
        },
        {
          content:
            'React 활용 이미지 데이터 지도 위 시각화',
        },
        {
          content:
            'docker-compose 활용 Frontend, Backend, Database를 하나로 묶어서 배포',
        },
      ],
    },
    {
      title: '국가슈퍼컴퓨팅센터 홈페이지 기능 개선',
      startedAt: '2023-03',
      endedAt: '2023-05',
      where: '카이런소프트 (CHIRON SOFT)',
      descriptions: [
        {
          content:
            '메인 페이지 리뉴얼 및 백오피스 개발',
        },
        {
          content:
            '회원 가입 시 이메일 인증 단계 추가 - 인증 코드 유효기간 설정 및 보안 처리',
        },
        {
          content:
            'd3.js 활용 슈퍼컴퓨터 사용량 통계 시각화 및 쿼리 튜닝 (6.376s -> 0.430s)',
        },
        {
          content:
            'websocket 활용 접속한 사용자 대상 브로드캐스트 기능 구현',
        },
      ],
    },

    
  ],
};

export default project;
