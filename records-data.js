// 역대 후보생 데이터 편집 위치. 이름·기수·날짜는 제작용 초기 설정입니다.
// image: 각 인물의 주석 위치에 외부 이미지 직접 HTTPS URL을 넣으세요. GIF/WebP/PNG/JPG 지원.
// 예: image: 'https://your-domain.com/seo-yoon.gif' (공유 페이지가 아닌 이미지 파일 주소)
// image가 비어 있거나 파일을 불러오지 못하면 회색 실루엣으로 표시됩니다.
// 사망 X 표시는 사진과 별도 레이어이므로 사진을 교체해도 유지됩니다.
// type: 'dead' = 사망, 'changed' = 변질. 변질 사유는 reason에만 작성합니다.
// dateLabel은 '사망일', '처분일', '격리 조치일' 중 사건에 맞게 사용합니다.
window.GUIDE_SUBJECTS = [
  {id:'G01-001',name:'서윤하',cohort:1,type:'dead',reason:'',dateLabel:'사망일',date:'2022.04.19',current:'사망처리',note:'사망 확인 후 교육 명부에서 제외. 원기록 영구 보존.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%84%9C%EC%9C%A4%ED%95%98.png' // [서윤하 사진 교체 위치]
  },
  {id:'G01-003',name:'백시온',cohort:1,type:'dead',reason:'',dateLabel:'사망일',date:'2022.06.03',current:'사망처리',note:'결합 경과 기록 종결. 관련 자료 보존실 이관.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EB%B0%B1%EC%8B%9C%EC%98%A8.png' // [백시온 사진 교체 위치]
  },
  {id:'G01-007',name:'이해린',cohort:1,type:'changed',reason:'사지 형태 변형',dateLabel:'격리 조치일',date:'2022.07.26',current:'격리조치',note:'격리동 A-03 수용. 형태 변화로 표준 관찰 및 훈련 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%9D%B4%ED%95%B4%EB%A6%B0.png' // [이해린 사진 교체 위치]
  },
  {id:'G02-002',name:'차유리',cohort:2,type:'dead',reason:'',dateLabel:'사망일',date:'2023.02.11',current:'사망처리',note:'최종 상태 확인 완료. 개인 물품 별도 봉인 보관.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%B0%A8%EC%9C%A0%EB%A6%AC.png' // [차유리 사진 교체 위치]
  },
  {id:'G02-005',name:'문서하',cohort:2,type:'changed',reason:'신체 경계 불안정',dateLabel:'격리 조치일',date:'2023.03.29',current:'격리조치',note:'격리동 B-01 수용. 신체 윤곽 유지 불가로 접근 관찰 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EB%AC%B8%EC%84%9C%ED%95%98.png' // [문서하 사진 교체 위치]
  },
  {id:'G02-009',name:'한채린',cohort:2,type:'dead',reason:'',dateLabel:'처분일',date:'2023.05.08',current:'사망처리',note:'처분 후 사망 확인 완료. 대상자 기록 종결.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%ED%95%9C%EC%B1%84%EB%A6%B0.png' // [한채린 사진 교체 위치]
  },
  {id:'G03-001',name:'유소은',cohort:3,type:'changed',reason:'외피 결정화',dateLabel:'격리 조치일',date:'2024.01.17',current:'격리조치',note:'격리동 A-06 수용. 관절 가동 불가로 모든 교육 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%9C%A0%EC%86%8C%EC%9D%80.png' // [유소은 사진 교체 위치]
  },
  {id:'G03-004',name:'권나린',cohort:3,type:'dead',reason:'',dateLabel:'사망일',date:'2024.03.04',current:'사망처리',note:'결합 유지 실패 이후 사망 확인. 담당 조 배정 해제.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EA%B6%8C%EB%82%98%EB%A6%B0.png' // [권나린 사진 교체 위치]
  },
  {id:'G03-008',name:'오하연',cohort:3,type:'dead',reason:'',dateLabel:'사망일',date:'2024.06.22',current:'사망처리',note:'생체 반응 소실 확인. 마지막 평가 기록 보존.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%98%A4%ED%95%98%EC%97%B0.png' // [오하연 사진 교체 위치]
  },
  {id:'G04-002',name:'신이솔',cohort:4,type:'changed',reason:'음성 반응의 비인격화',dateLabel:'격리 조치일',date:'2025.02.13',current:'격리조치',note:'격리동 C-02 수용. 본인 의사 확인 불가로 대면 교육 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%8B%A0%EC%9D%B4%EC%86%94.png' // [신이솔 사진 교체 위치]
  },
  {id:'G04-006',name:'정다원',cohort:4,type:'dead',reason:'',dateLabel:'처분일',date:'2025.04.30',current:'사망처리',note:'처분 결과 확인 완료. 일반 업무망의 이관 기록 유지.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%A0%95%EB%8B%A4%EC%9B%90.png' // [정다원 사진 교체 위치]
  },
  {id:'G04-011',name:'임세아',cohort:4,type:'changed',reason:'비정상 신체 증식',dateLabel:'격리 조치일',date:'2025.08.09',current:'격리조치',note:'격리동 B-04 수용. 수용 규격 초과로 기존 측정 절차 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%9E%84%EC%84%B8%EC%95%84.png' // [임세아 사진 교체 위치]
  },
  {id:'G05-001',name:'남예린',cohort:5,type:'dead',reason:'',dateLabel:'사망일',date:'2026.02.06',current:'사망처리',note:'회복 반응 미확인. 사망 기록 승인 및 보존 완료.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EB%82%A8%EC%98%88%EB%A6%B0.png' // [남예린 사진 교체 위치]
  },
  {id:'G05-004',name:'강루아',cohort:5,type:'changed',reason:'개체와의 신체 분리 불가',dateLabel:'격리 조치일',date:'2026.05.21',current:'격리조치',note:'격리동 C-07 수용. 숙주 구분 불가로 개별 관찰 및 훈련 중단.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EA%B0%95%EB%A3%A8%EC%95%84.png' // [강루아 사진 교체 위치]
  },
  {id:'G05-008',name:'윤소하',cohort:5,type:'dead',reason:'',dateLabel:'사망일',date:'2026.09.02',current:'사망처리',note:'최종 생체 기록 봉인. 교육운영부에 종료 통보 완료.',
    image:'https://pub-ea583730072d437db7db3801624b8b65.r2.dev/%EC%9C%A4%EC%86%8C%ED%95%98.png' // [윤소하 사진 교체 위치]
  }
];
