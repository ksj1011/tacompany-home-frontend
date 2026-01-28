# TA Company Homepage

티에이컴퍼니 공식 홈페이지 프론트엔드 프로젝트입니다.

## 프로젝트 소개

TA컴퍼니는 일반적인 광고 영상이 아닌 좀 더 창의적이며 스토리가 있는 영상을 만드는 영상 제작 회사입니다.

## 기술 스택

- **React** 16.13.1
- **React Scripts** 5.0.1 (Create React App)
- **styled-components** 5.1.0
- **react-scroll** 1.8.2

## 주요 기능

- 스크롤 기반 애니메이션
  - `useScrollFadeIn`: 스크롤 시 페이드인 효과
  - `useScrollClipPath`: 스크롤 시 클립 패스 애니메이션
  - `useScrollCount`: 스크롤 시 카운팅 애니메이션
- 반응형 디자인
- GitHub Pages 자동 배포

## 시작하기

### 필수 요구사항

- Node.js 16.x

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

`build` 폴더에 최적화된 프로덕션 빌드가 생성됩니다.

### 배포

```bash
npm run deploy
```

GitHub Pages로 자동 배포됩니다.

## 프로젝트 구조

```
src/
├── assets/         # 이미지 및 정적 파일
├── components/     # 공통 컴포넌트
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── hooks/          # 커스텀 훅
│   ├── useScrollFadeIn.jsx
│   ├── useScrollClipPath.jsx
│   └── useScrollCount.jsx
├── pages/          # 페이지 컴포넌트
│   └── Home/
│       ├── components/
│       └── Home.jsx
└── styles/         # 스타일 설정
    ├── theme.js
    └── global.js
```

## 배포 URL

https://ksj1011.github.io/tacompany-home-frontend

## 라이선스

Private
