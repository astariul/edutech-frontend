## Release
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