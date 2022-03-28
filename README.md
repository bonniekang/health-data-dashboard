## 미리보기

<img width="1305" alt="Screenshot 2022-03-28 at 23 42 24" src="https://user-images.githubusercontent.com/61943384/160423546-862eb3c1-3110-4ade-9379-55984c71d60c.png">


### 환자 상세정보 보여주기
<img width="1305" alt="Screenshot 2022-03-28 at 23 42 54" src="https://user-images.githubusercontent.com/61943384/160423666-d3da4386-2c4d-4b76-9c72-a21c0ab92327.png">

### 구현절차
- 컴포넌트는 데이터 보드, 검색필터, 그래프 섹션, 테이블 섹션, 환자 리스트로 나누기
- 전체 환자 리스트 가져오기
- 개별 환자 리스트 클릭시 환자 id prop을 통해 추가 디테일 가져오기
- 검색필터 목록 가져오기
- 필터 클릭시 테이블 데이터 보드 컴포넌트의 states 업데이트를 통한 새로운 환자 리스트 생성
- 필터 클릭시 전체 데이터의 성별, 인종별, 민족별 환자 수 비율로 구현된 그래프를 필터 조건을 추가하여 업데이트
- 라이브러리는 axios, react-chartjs 사용

### 미구현목록
- 검색 필터 수정에 따른 성별+인종, 성별+민족 그래프 : 두가지 조건 중 한가지 조건 이상이 업데이트될 시 state update
- 테이블 목록 헤더
- 페이지 당 row 갯수 선택 및 페이지 이동 버튼 : react-paginate 패키지 이용하기



# 실행
```
$ npm install
$ npm start
```
확인하기 [http://localhost:3000](http://localhost:3000) 
