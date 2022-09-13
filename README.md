## Release
- `0.0.25`:
    - 피드 API 연동
    - 강의실 페이지 기능 추가
      - 이어서 수강하기 버튼
    - 강좌 페이지 수정
    - 강의 시청 페이지 레이아웃 컴포넌트 수정
    - 강의 시청 페이지, toogle 추가
    - 코드 로드맵 페이지 레이아웃 컴포넌트 수정
    - 비디오 플레이어 라이브러리 VideoJs에서 react-player로 변경
    - 로그인 정보 유효성 확인 로직 추가(auth/me API 연동)
    - Feed, Auth repository 클래스 추가
    - UserProfile interface IUserProfile로 명칭 변경
    - Overview 페이지 및 컴포넌트 Feed로 명칭 변경
    - 설문 페이지 추가


- `0.0.25`:
    - 코스 로드맵 페이지 추가
    - 강의실 페이지 추가
    - 헤더 수정
    - vertical Bar 구성 항목 변경
    - 비디오 컴포넌트 추가
    - 회원가입 컴포넌트 헤더 컴포넌트에서 제외, 회원가입 기능은 일시 중단
    - user@gamil.com으로 로그인 되도록 수정
    - 비밀번호 6자이상 10자 이하 글자수 제한
    
- `0.0.24`: ServiceFlow Musthave
    - 커리어 관련 컴포넌트 추가
    - 커리어 페이지 추가
    - 개별 코스 페이지 추가
    - 수강중인 코스 페이지 추가
    - UserProfile 객체 필드 변경(firstName, lastName 필드 삭제 => name 추가)
    - Settings 페이지 한글화
    - 결제 버튼, 결제 섹션 컴포넌트 추가
    - 결제 모듈(아임포트) 연동을 위한 jquery, 아임포트 라이브러리 추가
    - 배포환경 405 Error & Mixed content 에러 픽스

- `0.0.23`: 회원가입 기능 구현
    - 백엔드 연동
    - 회원가입 관련 컴포넌트 한글화
    - 회원가입 성공하거나 이미 가입되어 있는 경우 회원가입창에서 로그인 모달창으로 변경

- `0.0.22`: 로그인 기능 구현
    - 백엔드 연동
    - 로그인 관련 컴포넌트 한글화
    - axios, useSWR 라이브러리 추가
    - utils/fetcher.ts 추가