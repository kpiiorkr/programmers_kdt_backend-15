import React, { useState } from 'react';
import { GOOGLE_FORM_URL, DEMO_COURSE_URL } from '../utils/constants';

interface FaqItem {
  id: number;
  category: string;
  categoryLabel: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '비전공자, 입문자도 백엔드 데브코스를 신청할 수 있나요?',
    answer: (
      <p>
        백엔드 데브코스는 전공 여부보다 학습 의지와 성장 목표를 더 중요하게 봅니다.<br />
        비전공자, 입문자도 따라올 수 있도록 단계별 학습 자료와 막히는 부분을 바로 질문할 수 있는
        학습 환경을 제공하며, 강사 및 퍼실리테이터가 적극 도와드립니다.
      </p>
    ),
  },
  {
    id: 2,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '자세한 신청 자격을 알고 싶어요.',
    answer: (
      <p>
        1. 국민내일배움카드 소지자<br />
        2. 고용보험에 가입되어 있지 않은 미취업자 (재직자 참여 불가)<br />
        3. 9시부터 18시까지 진행되는 실시간 강의에 참여 가능하신 분 (대학생의 경우 휴학 후 참여
        가능)
      </p>
    ),
  },
  {
    id: 3,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '지금 당장 국민내일배움카드가 없어도 지원할 수 있나요?',
    answer: (
      <p>
        국민내일배움카드가 없어도 지원 가능합니다. 다만, 수강 신청 전까지는 카드 발급이 완료되어야
        합니다.<br />
        카드는 온라인으로 신청 가능하며, 해당 과정은 앱 카드만 있어도 참여 가능합니다.<br />
        실물카드 또는 앱 카드 중 선택하여 발급받으실 수 있으며. 상담 진행 시, “K-디지털
        트레이닝(KDT) 교육 신청을 위해 발급 받는다”고 말씀해주시면 절차가 보다 원활하게 진행될 수
        있습니다.<br /><br />
        실물 카드 발급 시 발급까지 약 7일 소요될 수 있기 때문에 실물 카드가 반드시 필요하지 않다면
        앱 카드 발급을 추천드립니다.
      </p>
    ),
  },
  {
    id: 4,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '내일배움카드 발급 및 HRD-net 수강신청은 어떻게 하나요?',
    answer: (
      <p>
        국민내일배움카드 발급과 수강신청은 아래 순서로 진행됩니다.<br /><br />
        1️⃣ 고용24 회원가입<br />
        <a href="https://www.work24.go.kr/cm/main.do" target="_blank" rel="noopener noreferrer">
          고용24(구 HRD-Net)
        </a>
        에 회원가입을 진행합니다.<br /><br />
        2️⃣ 국민내일배움카드 발급 신청<br />
        고용24를 통해 카드 발급을 신청하며, 관할 고용센터에서 심사가 진행됩니다.<br />
        ※ 빠른 발급을 원하실 경우, 실물카드 대신 &apos;앱카드&apos; 신청을 권장드립니다.<br /><br />
        3️⃣ 직업훈련 안내 영상 수강<br />
        고용노동부 직업훈련 포털에서 필수 안내 영상을 시청합니다.<br /><br />
        4️⃣ 카드 발급 승인<br />
        관할 고용센터에서 자격 요건을 검토 후 승인 여부를 결정합니다.<br /><br />
        5️⃣ 훈련 과정 검색 및 수강신청<br />
        카드 승인 후, 고용노동부 직업훈련 포털에서 해당 훈련 과정을 검색하여 수강신청을
        진행합니다.<br />
        필요 시 구비서류를 준비하여 제출합니다.<br /><br />
        6️⃣ 지원 가능 여부 최종 확인<br />
        관할 고용센터에서 지원 가능 여부를 확인 후 최종 승인합니다.<br /><br />
        7️⃣ 카드 발급 완료<br />
        훈련 시작일 전까지 카드 발급이 완료되어야 합니다.<br />
        실물카드를 선택한 경우에는 개강 전 반드시 수령이 필요하며, 앱카드를 발급받은 경우에는
        빠르게 사용이 가능합니다.
      </p>
    ),
  },
  {
    id: 5,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '내일배움카드를 최대한 빨리 발급받으려면 어떻게 해야 하나요?',
    answer: (
      <p>
        실물카드 대신 앱카드로 발급을 진행해주시면 됩니다.<br />
        실물카드는 배송 기간이 소요되지만, 앱카드는 승인 후 비교적 빠르게 사용이 가능하여 수강신청
        및 등록 절차를 신속하게 진행하실 수 있습니다.<br /><br />
        <a
          href="https://kdt-faq.grepp.co/ko/articles/%EB%82%B4%EC%9D%BC%EB%B0%B0%EC%9B%80%EC%B9%B4%EB%93%9C-%EB%B0%9C%EA%B8%89%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EB%82%98%EC%9A%94-c57e9fcd"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 앱 카드 발급받기 가이드
        </a>
      </p>
    ),
  },
  {
    id: 6,
    category: 'faq-category-1',
    categoryLabel: '지원',
    question: '데브코스 지원 중 주의사항이 있나요?',
    answer: (
      <p>
        본인이 소지한 내일배움카드의 교육 신청 가능 잔여 횟수를 확인해주세요.<br />
        카드 잔액이 0원인 경우 본 과정에 등록할 수 없으며, 심사 단계로 넘어가지 않습니다.<br />
        데브코스에 합격하더라도 HRD-net에서 신청 및 등록이 불가하거나, 자격이 안 된다고 판단될 경우
        최종 탈락됩니다.<br />
        자세한 사항은 가까운 고용지원센터에 직접 문의하시어 참여 가능 유무를 확인해주세요.
      </p>
    ),
  },
  {
    id: 7,
    category: 'faq-category-2',
    categoryLabel: '선발',
    question: '유선 인터뷰 진행은 언제 안내되나요?',
    answer: (
      <p>
        서류 제출 완료 시 유선 인터뷰 대상자에게 인터뷰 일정이 메일로 별도 안내되며, 일정에 따라
        주말에 진행될 수 있습니다.<br /><br />
        메일 안내는 프로그래머스 등록 메일로 발송되며, 등록 메일은 마이페이지에서 확인 가능합니다.<br />
        해외 체류 등으로 인해 유선 인터뷰가 어려울 경우, 참여가 어려운 점 참고 부탁드립니다.<br />
        (국내 010으로 시작하는 전화번호로만 참여 가능 / Zoom 인터뷰 불가)
      </p>
    ),
  },
  {
    id: 8,
    category: 'faq-category-2',
    categoryLabel: '선발',
    question: '유선 인터뷰는 어떤 내용으로 진행되나요?',
    answer: (
      <p>
        지원서 기반의 가벼운 인터뷰입니다.<br />
        유선 인터뷰 전 인터뷰 대상자에 한하여 인터뷰를 진행할 프로그래머스 담당자 전화번호를
        공지합니다.<br />
        총 3회 이상 전화를 받지 않을 경우, 훈련에 참여하지 않는 것으로 간주되오니 참고 부탁드립니다.
      </p>
    ),
  },
  {
    id: 9,
    category: 'faq-category-2',
    categoryLabel: '선발',
    question: '합격 확인은 어떻게 하나요?',
    answer: (
      <p>
        유선 인터뷰 종료 후 영업일 기준 3일 이내 문자와 메일로 안내드립니다.<br />
        불합격하신 분들에게도 안내가 진행됩니다.
      </p>
    ),
  },
  {
    id: 10,
    category: 'faq-category-3',
    categoryLabel: '취업',
    question: '취업과 관련한 지원이 있나요?',
    answer: (
      <p>
        데브코스의 취업 지원 서비스 &apos;데브패스&apos;를 통해 취업 전문가와 함께 취업을 단계적으로
        준비합니다.<br />
        포트폴리오 및 면접 컨설팅, 취업 특강, 현직자 직무 인터뷰, 채용 설명회 및 채용 정보 안내 등이
        제공됩니다.<br />
        수료 후에도 서류·면접 1:1 컨설팅 및 채용정보를 지원합니다.
      </p>
    ),
  },
  {
    id: 11,
    category: 'faq-category-4',
    categoryLabel: '혜택',
    question: '이번 기수 참여 시 제공받는 혜택이 있나요?',
    answer: (
      <p>
        교육 기간 내내 Claude Max급 AI툴이 제공되며, 수료 후에도 Claude Pro급 구독을 6개월 간 추가
        제공합니다.<br />
        과정 수료 후에도 실전 프로젝트를 이어갈 수 있는 심화 학습 기회를 제공하며, AI 툴 및 클라우드
        등 프로젝트에 필요한 다양한 서비스를 제공합니다.
      </p>
    ),
  },
  {
    id: 12,
    category: 'faq-category-4',
    categoryLabel: '혜택',
    question: '개인 PC와 노트북이 없는 경우, 지원 받을 수 있나요?',
    answer: <p>수강 기간동안 사용할 수 있는 학습용 맥북 대여가 가능합니다.</p>,
  },
  {
    id: 13,
    category: 'faq-category-5',
    categoryLabel: '기타',
    question: '수강료는 얼마인가요?',
    answer: (
      <p>
        2026년부터 국비지원 교육 수강 시 수강료의 약 10%에 해당하는 자부담금이 발생합니다.<br />
        과정에 따라 차이가 있을 수 있으며, 최대 60만 원까지 부담하게 됩니다.<br /><br />
        세부 금액 확인은 고용24 홈페이지 → 해당 훈련 검색 → 본인부담액보기 버튼을 클릭하여 확인
        가능합니다.
      </p>
    ),
  },
  {
    id: 14,
    category: 'faq-category-5',
    categoryLabel: '기타',
    question: '교육 시작 전에 미리 공부를 하고 싶은데, 어떤 부분을 공부해야 하나요?',
    answer: (
      <p>
        아래 참고 영상을 한번 보고 오시면 실제 훈련 과정 참여 시 도움이 됩니다.<br /><br />
        <a href="https://school.programmers.co.kr/learn/courses/5" target="_blank" rel="noopener noreferrer">
          - 자바 입문
        </a><br />
        <a href="https://school.programmers.co.kr/learn/courses/9" target="_blank" rel="noopener noreferrer">
          - 자바 중급
        </a><br /><br />
        추가로 HTML, CSS, JS 기초 정도는 알아두면 과정을 이해하기 쉽습니다.<br /><br />
        <a href="https://school.programmers.co.kr/learn/courses/10" target="_blank" rel="noopener noreferrer">
          - 자바스크립트와 웹 프론트엔드
        </a><br />
        <a href="https://school.programmers.co.kr/learn/courses/3" target="_blank" rel="noopener noreferrer">
          - Hello, JavaScript
        </a>
      </p>
    ),
  },
];

export const ProcessAndFaq: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* 지원 절차 */}
      <section id="section-process" className="section-process common-section">
        <div className="content-wrap">
          <div className="title-wrap">
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/28/be11/apply-icon.webp"
              alt="icon"
              className="title-icon"
            />
            <h2 className="title-main">지원 절차</h2>
          </div>

          <ul className="process-list" style={{ listStyle: 'none', padding: 0 }}>
            <li className="process-detail">
              <h5 className="process-title">서류 지원</h5>

              <div className="text-with-icon-wrap">
                <div className="text-with-icon">
                  <div className="icon-wrap">
                    <img
                      loading="lazy"
                      src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/01/AIBE7/process-icon-1.webp"
                      alt="icon"
                    />
                  </div>
                  <p>~ 11월 11일(수)까지</p>
                </div>

                <div className="text-with-icon">
                  <div className="icon-wrap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                      <path
                        d="M0 7.5V6H5.25V7.5H0V7.5M0 4.5V3H8.25V4.5H0V4.5M0 1.5V0H8.25V1.5H0V1.5M6.75 12V9.69375L10.8938 5.56875C11.0063 5.45625 11.1313 5.375 11.2688 5.325C11.4063 5.275 11.5437 5.25 11.6812 5.25C11.8312 5.25 11.975 5.27812 12.1125 5.33437C12.25 5.39062 12.375 5.475 12.4875 5.5875L13.1812 6.28125C13.2812 6.39375 13.3594 6.51875 13.4156 6.65625C13.4719 6.79375 13.5 6.93125 13.5 7.06875C13.5 7.20625 13.475 7.34687 13.425 7.49062C13.375 7.63437 13.2937 7.7625 13.1812 7.875L9.05625 12H6.75V12M12.375 7.06875V7.06875L11.6812 6.375V6.375L12.375 7.06875V7.06875M7.875 10.875H8.5875L10.8562 8.5875L10.5188 8.23125L10.1625 7.89375L7.875 10.1625V10.875V10.875M10.5188 8.23125L10.1625 7.89375V7.89375L10.8562 8.5875V8.5875L10.5188 8.23125V8.23125"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <p>구글 폼을 통해 신청</p>
                </div>
              </div>

              <p className="process-text">
                간단한 객관식 문항으로 1분만에 쉽고 빠르게 신청하실 수 있습니다.
              </p>
            </li>

            <li className="process-detail">
              <h5 className="process-title">유선 인터뷰</h5>

              <div className="text-with-icon-wrap">
                <div className="text-with-icon">
                  <div className="icon-wrap">
                    <img
                      loading="lazy"
                      src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/01/AIBE7/process-icon-1.webp"
                      alt="icon"
                    />
                  </div>
                  <p>개별 일정 안내</p>
                </div>

                <div className="text-with-icon">
                  <div className="icon-wrap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                      <path
                        d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5ZM7.5 6.75L1.5 3V10.5H13.5V3L7.5 6.75ZM7.5 5.25L13.5 1.5H1.5L7.5 5.25ZM1.5 3V1.5V3V10.5V3Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                  <p>대상자 메일 별도 안내</p>
                </div>
              </div>

              <p className="process-text">
                신청 시 작성하신 등록 메일로 자세한 내용을 안내드립니다.
              </p>
            </li>

            <li className="process-detail">
              <h5 className="process-title">최종 합류</h5>

              <div className="text-with-icon-wrap">
                <div className="text-with-icon">
                  <div className="icon-wrap">
                    <img
                      loading="lazy"
                      src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/01/AIBE7/process-icon-1.webp"
                      alt="icon"
                    />
                  </div>
                  <p>개별 일정 안내</p>
                </div>

                <div className="text-with-icon">
                  <div className="icon-wrap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path
                        d="M0 15.375L3.75 4.875L10.5 11.625L0 15.375ZM2.475 12.9L7.7625 11.025L4.35 7.6125L2.475 12.9ZM9.4125 8.2875L8.625 7.5L12.825 3.3C13.225 2.9 13.7063 2.7 14.2688 2.7C14.8313 2.7 15.3125 2.9 15.7125 3.3L16.1625 3.75L15.375 4.5375L14.925 4.0875C14.75 3.9125 14.5312 3.825 14.2688 3.825C14.0063 3.825 13.7875 3.9125 13.6125 4.0875L9.4125 8.2875ZM6.4125 5.2875L5.625 4.5L6.075 4.05C6.25 3.875 6.3375 3.6625 6.3375 3.4125C6.3375 3.1625 6.25 2.95 6.075 2.775L5.5875 2.2875L6.375 1.5L6.8625 1.9875C7.2625 2.3875 7.4625 2.8625 7.4625 3.4125C7.4625 3.9625 7.2625 4.4375 6.8625 4.8375L6.4125 5.2875ZM7.9125 6.7875L7.125 6L9.825 3.3C10 3.125 10.0875 2.90625 10.0875 2.64375C10.0875 2.38125 10 2.1625 9.825 1.9875L8.625 0.7875L9.4125 0L10.6125 1.2C11.0125 1.6 11.2125 2.08125 11.2125 2.64375C11.2125 3.20625 11.0125 3.6875 10.6125 4.0875L7.9125 6.7875ZM10.9125 9.7875L10.125 9L11.325 7.8C11.725 7.4 12.2063 7.2 12.7688 7.2C13.3313 7.2 13.8125 7.4 14.2125 7.8L15.4125 9L14.625 9.7875L13.425 8.5875C13.25 8.4125 13.0312 8.325 12.7688 8.325C12.5063 8.325 12.2875 8.4125 12.1125 8.5875L10.9125 9.7875Z"
                        fill="#FF6E42"
                      ></path>
                    </svg>
                  </div>
                  <p>최종 합격 및 학습 준비</p>
                </div>
              </div>

              <p className="process-text">
                최종 합격자를 메일로 안내드리며, 데브코스와 함께 학습 준비를 시작합니다.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 편의 기능 */}
      <section className="section-function-collection ics-scroll-trigger ics-scroll-trigger-active">
        <div className="title-wrap">
          <h2>편의 기능</h2>
        </div>

        <ul className="function-wrap" style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a
              href={DEMO_COURSE_URL}
              className="func-anchor func-try-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-wrap">
                <div className="img-wrap">
                  <img
                    loading="lazy"
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2025/10/20/func-1.webp"
                    alt="아이콘"
                  />
                </div>
                <div className="text-wrap">
                  <h4 className="func-name">수업 환경을 미리 체험해보세요!</h4>
                  <p className="func-detail">선발 테스트 연습, 수업 미리 체험, 선발 프로세스 안내 등</p>
                </div>
              </div>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                  <path
                    d="M7.68401 8.99665L0.403818 2.19055C-0.134606 1.68679 -0.134606 0.8722 0.403818 0.3738C0.942243 -0.1246 1.81289 -0.1246 2.35131 0.3738L10.5995 8.0856C11.1208 8.57328 11.1322 9.35571 10.6396 9.85947L2.35704 17.6249C2.08783 17.8767 1.7327 18 1.38329 18C1.03389 18 0.678759 17.8767 0.409547 17.6249C-0.128878 17.1211 -0.128878 16.3065 0.409547 15.8081L7.68401 8.99665Z"
                    fill="#DFE2E5"
                  ></path>
                </svg>
              </div>
            </a>
          </li>

          <li>
            <a
              href={GOOGLE_FORM_URL}
              className="func-anchor func-next-noti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-wrap">
                <div className="img-wrap">
                  <img
                    loading="lazy"
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2025/10/20/func-2.webp"
                    alt="아이콘"
                  />
                </div>
                <div className="text-wrap">
                  <div className="func-name-wrap">
                    <h4 className="func-name">이번 기수 참여가 어렵다면?</h4>
                  </div>
                  <p className="func-detail">다음 기수 오픈 알림 신청하고, 빠르게 신청할 수 있어요!</p>
                </div>
              </div>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                  <path
                    d="M7.68401 8.99665L0.403818 2.19055C-0.134606 1.68679 -0.134606 0.8722 0.403818 0.3738C0.942243 -0.1246 1.81289 -0.1246 2.35131 0.3738L10.5995 8.0856C11.1208 8.57328 11.1322 9.35571 10.6396 9.85947L2.35704 17.6249C2.08783 17.8767 1.7327 18 1.38329 18C1.03389 18 0.678759 17.8767 0.409547 17.6249C-0.128878 17.1211 -0.128878 16.3065 0.409547 15.8081L7.68401 8.99665Z"
                    fill="#DFE2E5"
                  ></path>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </section>

      {/* 자주 묻는 질문 (FAQ) */}
      <section id="section-faq" className="section-faq-260401">
        <div className="content-wrap faq-category-all">
          <h2 className="title-main">자주 묻는 질문 (FAQ)</h2>

          <div className="faq-category-wrap">
            <div className="faq-category">
              <button
                type="button"
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                <p>전체보기</p>
              </button>
              <button
                type="button"
                className={selectedCategory === 'faq-category-1' ? 'active' : ''}
                onClick={() => setSelectedCategory('faq-category-1')}
              >
                <p>지원</p>
              </button>
              <button
                type="button"
                className={selectedCategory === 'faq-category-2' ? 'active' : ''}
                onClick={() => setSelectedCategory('faq-category-2')}
              >
                <p>선발</p>
              </button>
              <button
                type="button"
                className={selectedCategory === 'faq-category-3' ? 'active' : ''}
                onClick={() => setSelectedCategory('faq-category-3')}
              >
                <p>취업</p>
              </button>
              <button
                type="button"
                className={selectedCategory === 'faq-category-4' ? 'active' : ''}
                onClick={() => setSelectedCategory('faq-category-4')}
              >
                <p>혜택</p>
              </button>
              <button
                type="button"
                className={selectedCategory === 'faq-category-5' ? 'active' : ''}
                onClick={() => setSelectedCategory('faq-category-5')}
              >
                <p>기타</p>
              </button>
            </div>
          </div>

          <article className="faq-list-wrap">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openFaqs[faq.id];
              return (
                <button
                  key={faq.id}
                  type="button"
                  className={`faq-list ${faq.category} ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                  style={{ display: 'block', textAlign: 'left' }}
                >
                  <div className="default-box">
                    <div className="faq-list-title-wrap">
                      <h4 className="faq-list-title-q">Q.</h4>
                      <h4 className="faq-list-title-name">{faq.question}</h4>
                    </div>
                    <div className="arrow">
                      <img
                        loading="lazy"
                        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/01/AIBE7/faq-arrow.webp"
                        alt="arrow"
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="answer-box">
                      <div className="answer-arrow">
                        <img
                          loading="lazy"
                          src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/04/01/AIBE7/faq-answer-arrow.webp"
                          alt="arrow"
                        />
                      </div>
                      <div className="answer-text">{faq.answer}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </article>
        </div>
      </section>

      <div className="fixed-bottom-aside-margin"></div>
    </>
  );
};
