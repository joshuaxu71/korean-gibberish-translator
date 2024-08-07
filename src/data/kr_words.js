const koreanCommonWords = new Set(["로",
    "나는",
    "그의",
    "그",
    "그",
    "했다",
    "에 대한",
    "에",
    "아르",
    "와",
    "그들",
    "있다",
    "에",
    "일",
    "이",
    "이",
    "부터",
    "에 의해",
    "뜨거운",
    "단어",
    "하지만",
    "무엇",
    "다소",
    "이다",
    "그",
    "당신",
    "또는",
    "했다",
    "에",
    "의",
    "에",
    "과",
    "이",
    "에",
    "우리",
    "수",
    "아웃",
    "다른",
    "했다",
    "하는",
    "할",
    "자신의",
    "시간",
    "면",
    "것",
    "방법",
    "말했다",
    "이",
    "각",
    "이야기",
    "하지",
    "세트",
    "세",
    "필요",
    "공기",
    "잘",
    "또한",
    "재생",
    "작은",
    "끝",
    "넣어",
    "홈",
    "읽기",
    "손",
    "포트",
    "큰",
    "철자",
    "추가",
    "도",
    "땅",
    "여기",
    "해야",
    "큰",
    "높은",
    "이러한",
    "따라",
    "행위",
    "이유",
    "문의",
    "남자",
    "변경",
    "갔다",
    "빛",
    "종류",
    "오프",
    "필요가있다",
    "집",
    "사진",
    "시험",
    "우리",
    "다시",
    "동물",
    "포인트",
    "어머니",
    "세계",
    "가까운",
    "구축",
    "자기",
    "지구",
    "아버지",
    "모든",
    "새로운",
    "일",
    "일부",
    "소요",
    "도착",
    "장소",
    "만든",
    "살고있다",
    "어디에",
    "후",
    "다시",
    "작은",
    "만",
    "둥근",
    "사람",
    "년",
    "온",
    "쇼",
    "모든",
    "좋은",
    "나를",
    "제공",
    "우리의",
    "아래의",
    "이름",
    "대단히",
    "를 통해",
    "단지",
    "양식",
    "문장",
    "큰",
    "생각",
    "말",
    "도움",
    "낮은",
    "온라인",
    "차이",
    "회전",
    "원인",
    "많은",
    "의미",
    "이전",
    "움직임",
    "바로",
    "소년",
    "늙은",
    "너무",
    "동일",
    "그녀",
    "모든",
    "그곳에",
    "때",
    "올라",
    "사용",
    "당신의",
    "방법",
    "에 대한",
    "많은",
    "다음",
    "그",
    "쓰기",
    "것",
    "같은",
    "그래서",
    "이들",
    "그녀의",
    "긴",
    "확인",
    "일",
    "참조",
    "그",
    "두",
    "이",
    "봐",
    "더",
    "일",
    "수",
    "이동",
    "올",
    "한",
    "수",
    "소리",
    "없음",
    "가장",
    "사람들",
    "내",
    "이상",
    "알고",
    "물",
    "보다",
    "통화",
    "첫째",
    "사람",
    "수도",
    "아래로",
    "측면",
    "하고",
    "지금",
    "발견",
    "머리",
    "서",
    "자신의",
    "페이지",
    "해야",
    "국가",
    "발견",
    "답변",
    "학교",
    "성장",
    "연구",
    "여전히",
    "학습",
    "공장",
    "덮개",
    "음식",
    "일",
    "네",
    "사이",
    "상태",
    "유지",
    "눈",
    "결코",
    "마지막",
    "하자",
    "생각",
    "도시",
    "트리",
    "교차",
    "농장",
    "단단한",
    "시작",
    "수도",
    "이야기",
    "톱",
    "까지",
    "바다",
    "그리",
    "왼쪽",
    "후반",
    "실행",
    "하지",
    "반면",
    "키를 누릅니다",
    "가까이",
    "밤",
    "실제",
    "생활",
    "조금",
    "북",
    "책",
    "수행",
    "했다",
    "과학",
    "식사",
    "방",
    "친구",
    "시작",
    "아이디어",
    "물고기",
    "산",
    "중지",
    "한 번",
    "기본",
    "듣다",
    "말",
    "컷",
    "확실한",
    "손목 시계",
    "색",
    "얼굴",
    "나무",
    "주",
    "오픈",
    "것",
    "함께",
    "다음",
    "흰색",
    "어린이",
    "시작",
    "있어",
    "도보",
    "예",
    "완화",
    "종이",
    "그룹",
    "항상",
    "음악",
    "그",
    "모두",
    "마르크",
    "자주",
    "편지",
    "까지",
    "마일",
    "강",
    "자동차",
    "피트",
    "주의",
    "초",
    "충분히",
    "일반",
    "소녀",
    "보통",
    "젊은",
    "준비된",
    "위",
    "지금까지",
    "빨간색",
    "표",
    "그래도",
    "느낌",
    "이야기",
    "조류",
    "곧",
    "몸",
    "개",
    "가족",
    "직접",
    "포즈",
    "떠나",
    "노래",
    "측정",
    "문",
    "제품",
    "블랙",
    "짧은",
    "숫자",
    "클래스",
    "바람",
    "질문",
    "일",
    "완료",
    "배",
    "지역",
    "반",
    "바위",
    "주문",
    "화재",
    "남쪽",
    "문제",
    "조각",
    "이야기",
    "알고",
    "통과",
    "이후",
    "최고",
    "전체",
    "왕",
    "거리",
    "인치",
    "곱",
    "아무것도",
    "물론",
    "유지",
    "휠",
    "전체",
    "힘",
    "푸른",
    "객체",
    "결정",
    "표면",
    "깊은",
    "달",
    "섬",
    "발",
    "시스템",
    "바쁜",
    "테스트",
    "기록",
    "보트",
    "공통의",
    "금",
    "가능한",
    "비행기",
    "대신",
    "건조",
    "궁금",
    "웃음",
    "천",
    "전",
    "실행",
    "확인",
    "게임",
    "모양",
    "동일시",
    "뜨거운",
    "미스",
    "가져",
    "열",
    "눈",
    "타이어",
    "가져",
    "예",
    "먼",
    "입력",
    "동쪽",
    "페인트",
    "언어",
    "중",
    "단위",
    "힘",
    "마을",
    "잘",
    "어떤",
    "비행",
    "가을",
    "지도",
    "울음 소리",
    "어두운",
    "기계",
    "주의",
    "대기",
    "계획",
    "그림",
    "스타",
    "상자",
    "명사",
    "필드",
    "나머지",
    "정확한",
    "수",
    "파운드",
    "완료",
    "아름다움",
    "드라이브",
    "서",
    "포함",
    "앞",
    "가르쳐",
    "주",
    "최종",
    "준",
    "녹색",
    "오",
    "빨리",
    "개발",
    "대양",
    "따뜻한",
    "무료",
    "분",
    "강한",
    "특수",
    "마음",
    "뒤에",
    "명확한",
    "꼬리",
    "생산",
    "사실",
    "공간",
    "들어",
    "가장",
    "시간",
    "더",
    "사실",
    "중",
    "백",
    "오",
    "기억",
    "단계",
    "초기",
    "개최",
    "서쪽",
    "지상",
    "관심",
    "범위",
    "빠른",
    "동사",
    "노래",
    "청취",
    "육",
    "나타난",
    "여행",
    "이하",
    "아침",
    "열",
    "간단한",
    "여러",
    "모음",
    "방향",
    "전쟁",
    "누워",
    "에 대하여",
    "패턴",
    "느린",
    "센터",
    "사랑",
    "사람",
    "돈",
    "봉사",
    "표시",
    "도로",
    "지도",
    "비",
    "규칙",
    "적용",
    "당겨",
    "감기",
    "예고",
    "음성",
    "에너지",
    "사냥",
    "가능성",
    "침대",
    "형제",
    "계란",
    "타고",
    "셀",
    "생각",
    "어쩌면",
    "선택",
    "갑자기",
    "계산",
    "광장",
    "이유",
    "길이",
    "대표",
    "예술",
    "주제",
    "지역",
    "크기",
    "다양",
    "정착",
    "이야기",
    "무게",
    "일반",
    "얼음",
    "문제",
    "원",
    "쌍",
    "포함",
    "분할",
    "음절",
    "느낌",
    "그랜드",
    "공",
    "아직",
    "파",
    "드롭",
    "마음",
    "어디로",
    "현재",
    "무거운",
    "댄스",
    "엔진",
    "위치",
    "팔",
    "폭",
    "항해",
    "재료",
    "분수",
    "숲",
    "앉아",
    "레이스",
    "창",
    "상점",
    "여름",
    "기차",
    "잠",
    "증명",
    "고독한",
    "다리",
    "운동",
    "벽",
    "캐치",
    "마운트",
    "소원",
    "하늘",
    "판",
    "즐거움",
    "겨울",
    "토",
    "기록",
    "야생",
    "악기",
    "유지",
    "유리",
    "잔디",
    "소",
    "작업",
    "에지",
    "로그인",
    "방문",
    "지난",
    "소프트",
    "재미",
    "밝은",
    "가스",
    "날씨",
    "개월",
    "만",
    "곰",
    "끝",
    "행복",
    "기대",
    "꽃",
    "의복을 걸치다",
    "기이 한",
    "사라",
    "무역",
    "멜로디",
    "여행",
    "사무실",
    "수신",
    "행",
    "입",
    "정확한",
    "기호",
    "죽다",
    "이상",
    "수고",
    "소리",
    "제외",
    "썼다",
    "씨앗",
    "톤",
    "가입",
    "제안",
    "청소",
    "단절",
    "아가씨",
    "야드",
    "상승",
    "나쁜",
    "타격",
    "기름",
    "피",
    "터치",
    "성장",
    "센트",
    "혼합",
    "팀",
    "와이어",
    "비용",
    "손실",
    "갈색",
    "착용",
    "정원",
    "동일",
    "전송",
    "선택",
    "하락",
    "적합",
    "흐름",
    "박람회",
    "은행",
    "수집",
    "저장",
    "제어",
    "소수점",
    "귀",
    "다른",
    "아주",
    "파산",
    "경우",
    "중간",
    "죽",
    "아들",
    "호수",
    "순간",
    "규모",
    "큰 소리로",
    "봄",
    "관찰",
    "아이",
    "직선",
    "자음",
    "국민",
    "사전",
    "우유",
    "속도",
    "방법",
    "기관",
    "지불",
    "연령",
    "섹션",
    "드레스",
    "구름",
    "놀람",
    "조용한",
    "돌",
    "작은",
    "등반",
    "멋진",
    "디자인",
    "가난한",
    "많은",
    "실험",
    "바닥",
    "키",
    "철",
    "단일",
    "스틱",
    "플랫",
    "스물",
    "피부",
    "미소",
    "주름",
    "구멍",
    "점프",
    "아가",
    "팔",
    "마을",
    "대회",
    "루트",
    "사기",
    "인상",
    "해결",
    "금속",
    "여부",
    "푸시",
    "일곱",
    "단락",
    "세번째",
    "하여야한다",
    "개최",
    "머리",
    "설명",
    "요리",
    "바닥",
    "중",
    "결과",
    "구울",
    "언덕",
    "안전한",
    "고양이",
    "세기",
    "고려",
    "유형",
    "법",
    "비트",
    "해안",
    "복사",
    "문구",
    "침묵",
    "키",
    "모래",
    "토양",
    "롤",
    "온도",
    "손가락",
    "산업",
    "값",
    "싸움",
    "거짓말",
    "이길",
    "흥분",
    "자연",
    "보기",
    "의미",
    "자본",
    "하지 않습니다",
    "의자",
    "위험",
    "과일",
    "풍부한",
    "두께",
    "군인",
    "과정",
    "운영",
    "연습",
    "별도의",
    "어려운",
    "의사",
    "제발",
    "보호",
    "정오",
    "작물",
    "현대",
    "요소",
    "히트",
    "학생",
    "코너",
    "파티",
    "공급",
    "누구의",
    "위치",
    "링",
    "문자",
    "곤충",
    "적발",
    "기간",
    "표시",
    "라디오",
    "이야기",
    "원자",
    "인간",
    "역사",
    "효과",
    "전기",
    "기대",
    "골",
    "레일",
    "상상",
    "제공",
    "동의",
    "따라서",
    "부드러운",
    "여성",
    "주장",
    "추측",
    "필요",
    "날카로운",
    "날개",
    "작성",
    "이웃",
    "세척",
    "박쥐",
    "오히려",
    "군중",
    "옥수수",
    "비교",
    "시",
    "문자열",
    "벨",
    "따라",
    "고기",
    "문지",
    "튜브",
    "유명한",
    "달러",
    "스트림",
    "무서움",
    "시력",
    "얇은",
    "삼각형",
    "행성",
    "서둘러",
    "장",
    "식민지",
    "시계",
    "내",
    "넥타이",
    "입력",
    "주요",
    "신선한",
    "검색",
    "보내",
    "노란색",
    "총",
    "수",
    "인쇄",
    "죽은",
    "자리",
    "사막",
    "정장",
    "현재",
    "리프트",
    "장미",
    "도착",
    "마스터",
    "트랙",
    "부모",
    "해안",
    "부문",
    "시트",
    "물질",
    "호의",
    "연결",
    "포스트",
    "지출",
    "코드",
    "지방",
    "다행",
    "원래",
    "주",
    "역",
    "아빠",
    "빵",
    "충전",
    "적절한",
    "바",
    "제안",
    "세그먼트",
    "슬레이브",
    "오리",
    "인스턴트",
    "시장",
    "도",
    "웁니다",
    "병아리",
    "친애",
    "적",
    "응답",
    "한잔",
    "발생",
    "지원",
    "음성",
    "자연",
    "범위",
    "증기",
    "모션",
    "경로",
    "액체",
    "로그인",
    "의미",
    "지수",
    "치아",
    "쉘",
    "목",
    "산소",
    "설탕",
    "죽음",
    "꽤",
    "기술",
    "여성",
    "시즌",
    "용액",
    "자석",
    "실버",
    "감사",
    "지점",
    "경기",
    "접미사",
    "특히",
    "그림",
    "두려워",
    "거대한",
    "자매",
    "스틸",
    "논의",
    "앞으로",
    "비슷한",
    "가이드",
    "경험",
    "점수",
    "사과",
    "구입",
    "주도",
    "피치",
    "코트",
    "질량",
    "카드",
    "밴드",
    "로프",
    "슬립",
    "승리",
    "꿈",
    "저녁",
    "조건",
    "먹이",
    "도구",
    "총",
    "기본",
    "냄새",
    "계곡",
    "도",
    "더블",
    "좌석",
    "계속",
    "블록",
    "차트",
    "모자",
    "판매",
    "성공",
    "회사",
    "빼기",
    "이벤트",
    "특히",
    "거래",
    "수영",
    "용어",
    "정반대의",
    "아내",
    "신발",
    "어깨",
    "확산",
    "준비",
    "캠프",
    "발명하다",
    "면",
    "태어난",
    "결정",
    "쿼트",
    "구",
    "트럭",
    "잡음",
    "수준",
    "기회",
    "수집",
    "상점",
    "스트레칭",
    "던져",
    "광택",
    "등록",
    "열",
    "분자",
    "선택",
    "나쁜",
    "회색",
    "반복",
    "필요",
    "폭 넓은",
    "준비",
    "소금",
    "코",
    "복수",
    "분노",
    "제",
    "대륙",
]);

module.exports = {
    koreanCommonWords
}