import React, { useState } from 'react';

const companyCards = [
  {
    company: '우아한형제들',
    requirements: [
      '객체지향 기반의 시스템 아키텍처 설계 및 개발 가능',
      'Java/Kotlin 및 Spring Framework 개발에 대한 깊은 지식을 바탕으로 Web Application 개발 경험 보유',
      'JPA, Hibernate, 도메인 모델링 등 ORM 사용 경험',
      'MSA(Micro Service Architecture)의 개념의 이해를 기반으로 개발 및 운영 업무 수행',
      'Test framework를 활용하여 테스트 코드 작성 경험 보유',
    ],
  },
  {
    company: '카카오엔터프라이즈',
    requirements: [
      'Java/Kotlin & Spring Framework에 대한 이해가 있으신 분',
      '웹 서비스의 일반적인 아키텍쳐에 대한 이해 및 RESTful API 설계 및 개발/운영 경험',
      'RDBMS, NoSQL 스키마 설계 및 사용 경험',
      'UNIX(Linux) 기반 개발 경험',
    ],
  },
  {
    company: '카카오페이',
    requirements: [
      'Java/Kotlin/Scala 등의 개발 언어 및 Spring/Akka 등의 프레임워크 경험이 있는 분을 원해요.',
      'RDBMS 기반의 웹 어플리케이션 모델링, 개발, 튜닝 경험이 있는 분을 원해요.',
      '지식을 공유하며 함께 성장하는 문화를 만들어 가고 싶은 분을 원해요.',
      '다양한 직군과 원활하게 협업할 수 있는 분을 원해요.',
    ],
  },
  {
    company: 'SK텔레콤',
    requirements: [
      'Spring 기반 Java/Kotlin을 이용한 서비스 설계/개발/운영 경험',
      'Spring 기반 RESTful API 설계/개발/운영 경험',
      'RDBMS(MySQL), NoSQL(Mongo), Redis, Kafka를 이용한 서비스 개발 경험',
      '코드리뷰에 대한 열린 마음과 신규 도입/적용에 대한 적극적인 자세',
      'Docker, K8S 환경에 대한 이해와 서비스 적용 경험',
    ],
  },
];

const reviewCards = [
  {
    id: 1,
    name: '백엔드 5기 이은주 님',
    url: 'https://community.programmers.co.kr/post/13931',
    img: 'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/review-card-1.webp',
  },
  {
    id: 2,
    name: '백엔드 1기 김민우님',
    url: 'https://community.programmers.co.kr/post/12640',
    img: 'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/review-card-2.webp',
  },
  {
    id: 3,
    name: '프론트엔드 3기 김재영 님',
    url: 'https://community.programmers.co.kr/post/12673',
    img: 'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/review-card-3.webp?2',
  },
];

export const ReasonsAndDiff: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const prevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? reviewCards.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev === reviewCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* 강점 1 : 기업 채용 정보와 백엔드 데브코스 커리큘럼 비교 */}
      <section className="section-reason-1 ics-scroll-trigger ics-scroll-trigger-active">
        <div className="bg" aria-hidden="true">
          <img
            loading="lazy"
            className="only-pc"
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-1-bg-pc.webp"
            alt=""
          />
          <img
            loading="lazy"
            className="only-mob"
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-1-bg-mob.webp"
            alt=""
          />
        </div>
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="reason-title">
            수많은 선택지 중<br />
            <span>백엔드 데브코스가 정답인 이유</span>
          </h2>
          <div className="data-intro">
            <p className="data-count">1,700+</p>
            <p className="data-label">
              기업 채용 데이터를<br />
              기반으로 한 커리큘럼
            </p>
          </div>
          <p className="reason-desc">실제 기업 채용 공고와 데브코스 커리큘럼을 직접 비교해보세요.</p>
          <div className="comparison">
            {/* Recruitment Cards Slider */}
            <div className="recruitment">
              <div className="recruitment-card" style={{ display: 'block' }}>
                <h3 className="company-title">
                  <span>기업 채용 정보</span>
                  <span>{companyCards[activeCompany].company}</span>
                </h3>
                <ul className="requirements" style={{ listStyle: 'none', padding: 0 }}>
                  {companyCards[activeCompany].requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="recruitment-pagination" aria-label="채용 정보 선택" style={{ display: 'flex' }}>
                {companyCards.map((c, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`${c.company} 채용 정보 보기`}
                    aria-current={activeCompany === idx ? 'true' : undefined}
                    onClick={() => setActiveCompany(idx)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Curriculum Comparison */}
            <div className="curriculum">
              <h3 className="curriculum-title">
                <span className="chart-icon" aria-hidden="true">
                  <i></i><i></i><i></i>
                </span>
                백엔드 데브코스 커리큘럼
              </h3>
              <ol className="curriculum-list" style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <span className="step-number">01</span>
                  <div>
                    <h4>Java &amp; CS 기초</h4>
                    <p>Java · 자료구조 · CS · RDBMS(SQL)</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">02</span>
                  <div>
                    <h4>Spring 백엔드</h4>
                    <p>SpringBoot · RESTful API 설계·개발 · JPA(ORM) · Test</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">03</span>
                  <div>
                    <h4>백엔드 실전 프로젝트</h4>
                    <p>도메인 설계 · 계층형 아키텍처 · 인증·보안 · CRUD 서비스 구현</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">04</span>
                  <div>
                    <h4>Kotlin &amp; 클라우드·배포</h4>
                    <p>Kotlin · Docker · AWS · CI/CD</p>
                  </div>
                </li>
              </ol>
              <p className="final-project">
                기획부터 배포까지<br />
                <strong>실무 역량을 완성하는 최종 프로젝트</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 강점 2 : 오프라인보다 더 강력한 몰입 스케쥴 */}
      <section className="section-reason-2 ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="reason-title only-pc">
            오프라인보다 더 강력한 <span>몰입 스케쥴</span>
          </h2>
          <h2 className="reason-title only-mob">
            동료들과 함께<br />
            <span>100% 몰입하는 학습 환경</span>
          </h2>
          <p className="reason-desc only-pc">
            인강만 듣다 끝나는 온라인 수업은 잊으세요<br />
            100% 실시간 라이브와 팀 러닝으로 끝까지 완주합니다.
          </p>
          <p className="reason-desc only-mob">
            100% 온라인 수업으로 이동 시간은 줄이고 현장감은 그대로!<br />
            온라인 공간 안에서 동료들과 함께 소통하며<br />
            학습에 온전히 몰입할 수 있습니다
          </p>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-2-obj-pc.webp"
              alt="09:00–13:00 실시간 강의 및 실습, 13:00–14:00 점심 시간, 14:00–18:00 복습 및 실무 프로젝트"
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-2-obj-mob.webp"
              alt="온라인 채팅과 코드 공유, 실시간 반응을 통해 동료들과 소통하며 함께 학습하는 환경"
            />
          </div>
          <p className="schedule-note only-pc">
            *특강, 평가, 기타 행사 진행에 따라 일부 변경될 수 있습니다.<br />
            *프로젝트 기간에는 오전 시간(09:00~13:00)에도 <br className="only-mob" />
            실시간으로 프로젝트를 진행합니다
          </p>
        </div>
      </section>

      {/* 강점 3 : 스프린트별 맞춤 성장 진단과 프로그래머스 자격 시험 */}
      <section className="section-reason-3 ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="reason-title">
            막힘없이 완주하도록,<br />
            <span>스프린트별 맞춤 성장 진단</span>
          </h2>
          <p className="reason-desc">
            기업 평가 기준으로 성장을 정밀하게 점검하고<br />
            수료 후 프로그래머스 인증시험으로 실력을 증명합니다.
          </p>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-3-obj-pc.webp?3"
              alt="AI 역량 진단 평가 리포트 예시 이미지와 PCCP·PCCE·PCSQL 자격 시험"
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-3-obj-mob.webp?3"
              alt="AI 역량 진단 평가 리포트 예시 이미지와 PCCP·PCCE·PCSQL 자격 시험"
            />
          </div>
        </div>
      </section>

      {/* 강점 4 : 수료 후에도 취업 전문가가 밀착 케어하는 데브패스 */}
      <section className="section-reason-4 ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h3 className="reason-title">
            데브패스<br />
            <span>수료 후에도 취업 전문가가 밀착 케어</span>
          </h3>
          <p className="reason-desc">지원 서류부터 면접까지 여러분의 취업을 끝까지 함께합니다</p>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-4-obj-pc.webp?1"
              alt="취업 목표 수립하기, 나의 강점 분석, 포트폴리오 완성, 실전 취업 대비"
              width={861}
              height={466}
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-reason-4-obj-mob.webp?1"
              alt="취업 목표 수립하기, 나의 강점 분석, 포트폴리오 완성, 실전 취업 대비"
              width={350}
              height={608}
            />
          </div>

          {/* Interactive Review Cards */}
          <div className="review-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              className="review-prev review-nav"
              aria-label="Previous review"
              onClick={prevReview}
            >
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/review-card-arrow-left.webp"
                alt=""
                width={36}
                height={36}
              />
            </button>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {reviewCards.map((card, idx) => {
                const isCurrent = idx === reviewIndex;
                return (
                  <div
                    key={card.id}
                    className="review-card-container"
                    style={{
                      width: 280,
                      opacity: isCurrent ? 1 : 0.65,
                      transform: isCurrent ? 'scale(1.02)' : 'scale(0.98)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <a
                      className="review-card"
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        loading="lazy"
                        src={card.img}
                        alt={`${card.name}의 합격 후기`}
                        width={280}
                        height={320}
                      />
                      <span className="review-overlay" aria-hidden="true">
                        <span className="review-label">합격 후기 보러가기</span>
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="review-next review-nav"
              aria-label="Next review"
              onClick={nextReview}
            >
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/review-card-arrow-right.webp"
                alt=""
                width={36}
                height={36}
              />
            </button>
          </div>

          <a
            className="support-link"
            href="https://school.programmers.co.kr/employment-support/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="rolling-text">
              <span>데브코스만의 무제한 취업 지원 살펴보기</span>
              <span aria-hidden="true">데브코스만의 무제한 취업 지원 살펴보기</span>
            </span>
          </a>
        </div>
      </section>

      {/* 데브코스 비교 : 압도적 차이 */}
      <section className="section-devcourse-diff ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="diff-title">
            압도적 차이,<br />
            <span>데브코스를 선택해야 하는 이유</span>
          </h2>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/intro-devcourse-diff-pc.webp"
              alt="타사 부트캠프와 프로그래머스 데브코스 비교"
              width={732}
              height={713}
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/intro-devcourse-diff-mob.webp"
              alt="타사 부트캠프와 프로그래머스 데브코스 비교"
              width={504}
              height={537}
            />
          </div>
        </div>
      </section>

      {/* 메시지 박스 : 개발자를 가장 잘 아는 프로그래머스가 설계했습니다! */}
      <section className="section-message ics-scroll-trigger ics-scroll-trigger-active">
        <div className="bg"></div>
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M11.115 18H6.885L7.29 11.8968L2.115 15.3022L0 11.7199L5.58 9.02211L0 6.2801L2.115 2.69779L7.29 6.10319L6.885 0H11.115L10.71 6.10319L15.885 2.69779L18 6.2801L12.42 9.02211L18 11.7199L15.885 15.3022L10.71 11.8968L11.115 18Z"
                fill="#F55103"
              ></path>
            </svg>
          </div>

          <h3 className="message-title">
            개발자를 가장 잘 아는 <br className="only-mob" />
            프로그래머스가 설계했습니다!
          </h3>

          <p className="message-text">
            <b>92만 개발자 평가 데이터</b>를 분석해 만든 백엔드 데브코스 커리큘럼,<br className="only-pc" />
            코딩 테스트부터 백엔드 설계, 실무 협업까지 현업에서 필요한 진짜 실력을 완성합니다.
          </p>
        </div>
      </section>
    </>
  );
};
