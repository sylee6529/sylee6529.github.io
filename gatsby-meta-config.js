module.exports = {
  title: `sylee6529`,
  description: `아무래도 개발`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sylee6529.gihub.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `sylee6529/sylee6529.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-F73PXRC2KH', // Google Analytics Tracking ID
  author: {
    name: `이서연`,
    bio: {
      role: `개발자`,
      description: ['이것저것 관심이 많은', '집요함을 가진', '배움의 자세를 가진'],
      thumbnail: '230909-thumb.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/sylee6529`,
      linkedIn: `https://www.linkedin.com/in/seoyeon-lee-075514206`,
      email: `sylee6529@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.07 ~2021.08',
        activity: 'AI양재허브 AI 실무 개발자 양성 교육 수료',
      },
      {
        date: '2021.08',
        activity: 'AI 기반 지하철 혼잡도 제공 웹서비스 개발',
        links: {
          demo: 'https://www.codepresso.kr/ai/2',
        },
      },
      {
        date: '2021.09 ~ 2022.02',
        activity: '에듀테크 스타트업 웹개발팀 인턴 근무',
      },
      {
        date: '2022.12 ~ 2023.01',
        activity: '인생을 포트폴리오로, Lifolio 개발',
        links: {
          github: 'https://github.com/Lifolio',
        },
      },
      {
        date: '2023.05 ~ 2023.06',
        activity: 'MBTI 성격유형 테스트 여행지편 개발',
        links: {
          github: 'https://github.com/Team-MBTI/backend',
        },
      },
      {
        date: '2023.08',
        activity: '그림 일기를 그려주는 AI 서비스, GGOOMI 개발',
        links: {
          github: 'https://github.com/prompter-day-2023',
        },
      },

      {
        date: '2020.06~',
        activity: '여행 블로그 TRIP IN WOLRD 개발 중',
        links: {
          github: 'https://github.com/WAGGLE-TEAM',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '에듀테크 스타트업 웹개발팀 인턴 근무',
        description:
          '주 업무는 Amazon Rekognition에서 받아온 json 데이터를 기반하여 동영상 처리 관련 로직을 작성하고, 사내Admin 페이지 개발하였고, 외부 사업(외주) 백엔드 개발을 맡았습니다. Agile 개발 프로세스 중 하나인 Scrum 방식으로 개발을 진행하며, 백로그를 적절히 정하고 회고를 통해 매 주 팀 모두가 개선할 수 있도록 노력하는 과정에 익숙해질 수 있었습니다. 그리고 처음 접하는 언어와 프레임워크여도, 단기간에 학습하고 적용하는 능력을 키울 수 있었습니다. 또한, 외부사업 개발을 맡으면서, 클라이언트와 요구 사항을 정리하고 최초의 프로젝트를 설계하는 과정부터 참여하며 실제 프로덕트가 개발되는 과정과 구조, 팀원과 협업하는 방법에 대한 이해도를 높일 수 있었습니다.',
        techStack: ['FastAPI', 'Vue.js', 'Typescript', 'Python'],
        thumbnailUrl: 'intern_stack.png',
      },
      {
        title: 'MBTI 성격유형테스트 여행지편 개발',
        description:
          '지정된 12가지의 문항의 선택지를 선택하면, MBTI 성격 분류에 따라 여행지와 여행 스타일 결과를 알려주는 성격 유형 테스트 개발을 진행하였습니다. 4년차 현직자이신 백엔드 팀원분과 함께 하면서, VPC 피어링, Docker compose 사용법 등 인프라와 CI/CD에 대한 것을 새롭게 알게 되었고 헥사고날 아키텍처와 DDD 구현을 하며 아키텍처에 대한 공부와 고민을 할 수 있었던 값진 시간이었습니다.',
        techStack: ['NextJS', 'typescript', 'Naver Cloud', 'Docker'],
        thumbnailUrl: 'mbti_test.png',
      },
      {
        title: '그림일기를 그려주는 AI 서비스, 꾸미(GGOOMI) 개발',
        description:
          'SK텔레콤과 OpenAI가 개최한 Generative AI 해커톤인 Prompter Day Seoul 2023 참가를 위해 개발한 서비스입니다. GPT turbo 3.5, Dall-E, Deepl API를 사용하여 일기 내용을 요약하고 텍스트를 추출하여 그림일기를 생성한 후, 라인드로잉으로 변환하여 최종적으로 컬러링 도안을 저장하고 출력할 수 있는 결과물을 제공합니다. 백엔드 개발과 프롬프팅 개선에 주로 기여하였습니다. 2주도 안 되는 짧은 시간동안 아이디어 기획부터 MVC 구현까지 무사히 마쳤습니다.',
        techStack: ['Flask', 'Docker', 'GitHub Action', 'Prompting'],
        thumbnailUrl: 'ggoomi_draw.jpg',
        links: {
        },
      },
    ],
  },
};
