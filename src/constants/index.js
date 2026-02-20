/* about_skill */
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import sassImg from "../assets/img/sass.png";
import jsImg from "../assets/img/js.png";
import jqImg from "../assets/img/jquery.png";
import tsImg from "../assets/img/ts.png";
import reactImg from "../assets/img/react.png";
import nodeImg from "../assets/img/node.png";
import nextImg from "../assets/img/nextjs.png";
import nestImg from "../assets/img/nestjs.png";
import mysqlImg from "../assets/img/mysql.png";
import vscode from "../assets/img/vscode.png";
import jet from "../assets/img/jet.png";
import photoshop from "../assets/img/photoshop.png";
import illustrator from "../assets/img/illustrator.png";
import premiere from "../assets/img/premiere.png";
import figma from "../assets/img/figma.png";
import git from "../assets/img/git.png";
/* Work */
import work01 from "../assets/img/w1.png";
import work02 from "../assets/img/chunjae.svg";
import work03 from "../assets/img/work03.png";
import work04 from "../assets/img/work04.png";
import work05 from "../assets/img/work05.png";
import work06 from "../assets/img/work06.png";
import work07 from "../assets/img/work07.png";
/* Port */
import port01 from "../assets/img/port02.png";
import port02 from "../assets/img/port01.png";
import port03 from "../assets/img/port07.png";
import port04 from "../assets/img/port06.png";
import port05 from "../assets/img/port03.png";
import port06 from "../assets/img/port04.png";
import port07 from "../assets/img/port05.png";

/* export */
export const headerNav = [
  {
    title:"intro",
    url:"#intro"
  },
  {
    title:"about",
    url:"#about"
  },
  {
    title:"work",
    url:"#work"
  },
  {
    title:"portfolio",
    url:"#port"
  }
]

export const aboutText = [
  {
    title: "Name",
    desc: "최유진 "
  },
  {
    title: "Birth",
    desc: "1997.06"
  },
  {
  title: "Education",
  desc: ` 2025.10 ~ 26.02 | React&Node기반 모던 웹 풀스택
          코리아IT아카데미

          2022.12 ~ 2023.03 | 리액트(React.js) 기반 프론트엔드 개발 양성과정
          이젠아카데미컴퓨터학원

          2021.08 ~ 2022.02 | UI/UX 웹디자인 & 웹퍼블리셔
          연희직업전문학교

          2020.10 ~ 2020.12 | 포토샵 & 일러스트
          그린컴퓨터아카데미

          2017.06 ~ 2020.04 | 스페인 어학연수

          2016.03 ~ 2021.08 | 한국관광대학교 졸업 (전문학사)
          관광중국어과 

          2016 | 인천삼산고등학교 졸업
        `
  },
  {
    title: "Experience",
    desc: ` 2022.05 ~ 2022.11 | 트래볼루션 | 웹디자이너&퍼블리셔

            2023.04 ~ 2025.08 | 아이스캔디(어벤저스)| 웹퍼블리셔
          `
  },
  {
    title: "My Skills",
    img: [htmlImg, cssImg, sassImg, jqImg, jsImg, tsImg, reactImg, nodeImg, nextImg, nestImg, mysqlImg]
  },
  {
    title: "Used Tools",
    img: [vscode, jet, photoshop, illustrator, premiere, figma, git]
  }

  
]

export const workText = [
  {
    img: work01,
    title: "증평투어패스",
    period: "2022.06 – 2022.10",
    role: "Web Designer & Publisher",
    contribution: "지역 관광 패스 서비스 초기 홈페이지 디자인 및 퍼블리싱",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://jptourpass.com/ko"
  },
  {
    img: work02,
    title: "천재교육 초등과학 전자저작물",
    period: "2023.04 – 2023.06",
    role: "Web Publisher",
    contribution: "전자저작물 유지보수",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: ""
  },
  {
    img: work03,
    title: "천재교육 초등영어(이동환) 3/4학년 전자저작물",
    period: "2023.07 – 2023.12",
    role: "Web Publisher",
    contribution: "교육용 인터랙티브 콘텐츠 퍼블리싱, 기존 코드 유지보수 및 개선",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_E/TB2022TC1EE_30E_S/resource/include/main/index.html"
  },
  {
    img: work04,
    title: "천재교육 초등영어(이동환) 3/4학년 AIDT",
    period: "2024.01 – 2024.06",
    role: "Web Publisher",
    contribution: "AI 디지털 교과서(AIDT) 교육 콘텐츠 퍼블리싱, 기존 코드 유지보수 및 개선",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://support.aitextbook.co.kr/gallery/book/11?author=3&year=2024&level=ele&grade=3"
  },
  {
    img: work05,
    title: "천재교육 초등영어(이동환) 5/6학년 전자저작물",
    period: "2024.03 – 2025.07",
    role: "Web Publisher",
    contribution: "교육용 인터랙티브 콘텐츠 퍼블리싱, 기존 코드 유지보수 및 개선",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_E/TB2022TC1EE_50E/resource/include/main/index.html"
  },
  {
    img: work06,
    title: "천재교육 중등/고등정보 전자저작물",
    period: "2024.09 – 2025.05",
    role: "Web Publisher",
    contribution: "교육용 인터랙티브 콘텐츠 퍼블리싱, 기존 코드 유지보수 및 개선",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_H/EB2022EC3Etc_10_10K_S/resource/include/main/index.html"
  },
  {
    img: work07,
    title: "천재교육 초등영어(이동환) 5/6학년 AIDT",
    period: "2025.01 – 2025.07",
    role: "Web Publisher",
    contribution: "AI 디지털 교과서(AIDT) 교육 콘텐츠 퍼블리싱, 기존 코드 유지보수 및 개선",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    view: "https://support.aitextbook.co.kr/gallery/book/41?author=3&year=2025&level=ele&grade=5"
  },
];

export const portText = [
  {
    type:"webpage",
    title:"League of Legends",
    desc:"리그 오브 레전드 공식 홈페이지의 메인 UI/UX 구조를 분석하고, 레이아웃과 인터랙션을 웹 환경에서 동일하게 재현하도록 클론 구현하였습니다.",
    img: port07,
    view: "https://eugeniayu99.github.io/portsauce/lol/index.html",
    alt:"최유진 포트폴리오"
  },
  {
    type:"javascript",
    title:"가위바위보",
    desc:"JavaScript를 활용하여 가위바위보 게임 로직과 DOM 제어를 구현한 프로젝트입니다. 사용자의 선택에 따라 컴퓨터의 결과를 확률 기반으로 생성하고, 결과를 실시간으로 화면에 반영하도록 구현했습니다.",
    img: port06,
    view: "https://eugeniayu99.github.io/portsauce/rcpgame/index.html",
    alt:"최유진 포트폴리오"
  },
  {
    type:"javascript",
    title:"대시보드 웹 애플리케이션",
    desc:"JavaScript를 활용해 제작한 개인 맞춤형 대시보드 웹 애플리케이션으로, 실시간 시계 및 날짜 표시, 날씨 API 연동, To-Do List 기능, 사용자 이름 저장, 랜덤 배경 이미지 기능을 구현하였습니다. LocalStorage를 활용해 사용자 데이터를 유지하며, 인터랙티브한 사용자 경험을 제공하도록 개발하였습니다.",
    img: port05,
    view: "https://eugeniayu99.github.io/portsauce/memo/index.html",
    alt:"최유진 포트폴리오"
  },
  {
    type:"javascript",
    title:"미니 블로그 웹 애플리케이션",
    desc:"React.js와 LocalStorage를 활용해 구현한 게시판형 미니 블로그 웹 애플리케이션입니다. 게시글 작성, 수정, 삭제 기능과 작성 시간 표시, 좋아요 기능을 구현하여 동적인 사용자 인터랙션을 제공하였습니다. DOM 조작과 이벤트 처리를 통해 상태 기반 UI 업데이트가 가능하도록 설계하였습니다",
    img: port04,
    view: "http://eugeniaa.woobi.co.kr/miniblog/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"WebPage",
    title:"massimodutti",
    desc:"React 기반으로 구현한 패션 쇼핑몰 웹 페이지로, 컴포넌트 단위 설계와 상태 관리를 통해 유지보수성과 확장성을 고려하여 개발하였습니다. 사용자 중심의 UI 구조와 인터랙션을 적용해 실제 쇼핑몰과 유사한 경험을 제공하도록 구현하였습니다.",
    img: port03,
    view: "http://eugeniaa.woobi.co.kr/massimodutti/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"WebSite",
    title:"울릉항공 홈페이지",
    desc:"가상의 항공사 컨셉의 반응형 웹사이트로, 전체 기획부터 UI 디자인, 퍼블리싱 및 인터랙션 구현까지 전 과정을 단독으로 진행하였습니다. HTML, CSS, JavaScript를 활용하여 서브페이지, 예약/조회/로그인 인터페이스, 다국어 전환 기능을 구현하였으며, 다양한 디바이스 환경에서도 일관된 사용자 경험을 제공하도록 설계하였습니다.",
    img: port02,
    view: "https://eugeniayu99.github.io/portsauce/ulle/index.html",
    alt:"최유진 포트폴리오"
  },
  {
    type:"WebPage",
    title:"LaLiga",
    desc:"라리가를 주제로 제작한 웹 페이지로, 시각적 콘텐츠 구성과 레이아웃 설계를 통해 정보 전달력을 높였습니다. HTML, CSS, JavaScript를 활용하여 구조적인 마크업과 스타일링을 적용하고, 사용자 친화적인 인터페이스와 반응형 디자인을 구현하였습니다.",
    img: port01,
    view: "https://eugeniayu99.github.io/portsauce/laliga26/index.html",
    alt:"최유진 포트폴리오"
  }

]