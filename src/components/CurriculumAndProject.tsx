import React, { useState } from 'react';
import { NOTION_CURRICULUM_URL } from '../utils/constants';

export const CurriculumAndProject: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeProject, setActiveProject] = useState(1);
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    { id: 'Yz-4HYiL56A', title: '데브코스 최종 프로젝트 영상 1' },
    { id: '1_JbrohdmWM', title: '데브코스 최종 프로젝트 영상 2' },
  ];

  return (
    <>
      {/* 커리큘럼 섹션 */}
      <section
        id="section-curriculum"
        className="section-roadmap part-2 curriculum ics-scroll-trigger section-roadmap-curriculum ics-scroll-trigger-active"
      >
        <div className="white-box">
          <div className="title-wrap ics-scroll-trigger-fade-in-bounce-up">
            <h4 className="title-category">커리큘럼</h4>
            <h2 className="title-main">
              프로그래머스가 만든<br />백엔드 특화 커리큘럼
            </h2>
            <p className="title-text">
              Java, Spring 기본기부터 클라우드·배포까지 학습하며<br />
              취업 시장에서 눈에 띄는 경쟁력을 키웁니다.
            </p>
          </div>

          <div className="content-wrap">
            <div className={`curriculum-wrap active-${activeStep}`}>
              <div className="curriculum-number-wrap">
                <button
                  type="button"
                  className="curriculum-number-button"
                  onClick={() => setActiveStep(1)}
                >
                  <p>STEP 01</p>
                </button>

                <button
                  type="button"
                  className="curriculum-number-button"
                  onClick={() => setActiveStep(2)}
                >
                  <p>STEP 02</p>
                </button>

                <button
                  type="button"
                  className="curriculum-number-button"
                  onClick={() => setActiveStep(3)}
                >
                  <p>STEP 03</p>
                </button>

                <button
                  type="button"
                  className="curriculum-number-button"
                  onClick={() => setActiveStep(4)}
                >
                  <p>STEP 04</p>
                </button>

                <button
                  type="button"
                  className="curriculum-number-button"
                  onClick={() => setActiveStep(5)}
                >
                  <p>FINAL PROJECT</p>
                </button>
              </div>

              <article className="curriculum-detail-wrap">
                {/* STEP 01 - nth-child(1) */}
                <div className="curriculum-box">
                  <h5 className="curriculum-step">STEP 01</h5>
                  <h3 className="curriculum-title">Java 언어 고급 및 기초 협업 능력</h3>

                  <ul className="curriculum-value-wrap" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="color-box">
                      <h4 className="curriculum-title-sub">Java 객체지향 프로그래밍</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">Java 객체지향 개념 및 특성, 문법</p>
                        <p className="curriculum-text">Java 활용 자료 구조/알고리즘 학습</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">데이터베이스 활용 및 최적화</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">백엔드 데이터 베이스 이론과 실습</p>
                        <p className="curriculum-text">SQL, 키의 종류, 정규화 학습</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">실무에 쓰이는 CS 지식 기초</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">컴퓨터 구조와 운영체제</p>
                        <p className="curriculum-text">소프트웨어 공학</p>
                        <p className="curriculum-text">Git/GitHub 기초</p>
                        <p className="curriculum-text">객체지향과 함수형 프로그래밍 실전</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* STEP 02 - nth-child(2) */}
                <div className="curriculum-box">
                  <h5 className="curriculum-step">STEP 02</h5>
                  <h3 className="curriculum-title">Spring 역량 강화 및 Spring Project</h3>

                  <ul className="curriculum-value-wrap" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="color-box">
                      <h4 className="curriculum-title-sub">Spring Boot 기반 백엔드 개발</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">Spring Framework와 Spring Boot 개념</p>
                        <p className="curriculum-text">RESTful API 설계 및 구현</p>
                        <p className="curriculum-text">Spring Boot JPA를 활용한 데이터 처리</p>
                        <p className="curriculum-text">TDD 기초와 코드 커버리지 기반 테스트 품질 측정</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">보안 및 인증 시스템 적용</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">Spring 하위 프레임워크 종류와 Spring Security</p>
                        <p className="curriculum-text">Spring Security 실전 실습</p>
                        <p className="curriculum-text">OAuth2 및 JWT 기반 인증 시스템 구현</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">실전 프로젝트 진행</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">CRUD 프로젝트를 통한 실습</p>
                        <p className="curriculum-text">REST API 구현 실습</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* STEP 03 - nth-child(3) */}
                <div className="curriculum-box">
                  <h5 className="curriculum-step">STEP 03</h5>
                  <h3 className="curriculum-title">Kotlin 프로그래밍과 마이그레이션</h3>

                  <ul className="curriculum-value-wrap" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="color-box">
                      <h4 className="curriculum-title-sub">Kotlin 언어 기본 문법 및 활용</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">Kotlin의 기본 문법</p>
                        <p className="curriculum-text">라이브러리 사용 방법</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">Java 프로젝트에서 Kotlin으로 마이그레이션</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">문서화 방법</p>
                        <p className="curriculum-text">마이그레이션 시 고려할 점</p>
                        <p className="curriculum-text">테스트 케이스 작성</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">개발 협업과 프로젝트 관리</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">
                          Git/Github 고도화를 통한 프로젝트 작업 프로세스 학습
                        </p>
                        <p className="curriculum-text">
                          기획 의도 분석, 요구사항 정의, 일정 계획 등 전반적인 작업 프로세스 학습
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* STEP 04 - nth-child(4) */}
                <div className="curriculum-box">
                  <h5 className="curriculum-step">STEP 04</h5>
                  <h3 className="curriculum-title">클라우드 서비스와 DevOps 학습</h3>

                  <ul className="curriculum-value-wrap" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="color-box">
                      <h4 className="curriculum-title-sub">AWS를 활용한 클라우드 환경</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">리눅스의 이해</p>
                        <p className="curriculum-text">AWS 서버의 기본 구성과 인프라</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">CI/CD 자동화 파이프라인 구축</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">GitHub Actions를 활용한 CI/CD 자동 배포</p>
                        <p className="curriculum-text">Docker-Compose 활용 서비스 구성</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* FINAL PROJECT - nth-child(5) */}
                <div className="curriculum-box">
                  <h5 className="curriculum-step">FINAL PROJECT</h5>
                  <h3 className="curriculum-title">동료와 함께하는 최종 프로젝트</h3>

                  <ul className="curriculum-value-wrap" style={{ listStyle: 'none', padding: 0 }}>
                    <li className="color-box">
                      <h4 className="curriculum-title-sub">실무 환경과 유사하게 프로젝트 진행</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">
                          실제 현업에서 백엔드 프로젝트 진행 방법에 대한 안내
                        </p>
                        <p className="curriculum-text">
                          기획부터 배포까지 실무 환경과 유사하게 프로젝트 진행
                        </p>
                        <p className="curriculum-text">현업에서 사용하고 있는 툴을 활용하는 프로젝트</p>
                        <p className="curriculum-text">기술 능력 향상부터 소프트스킬까지!</p>
                      </div>
                    </li>

                    <li className="color-box">
                      <h4 className="curriculum-title-sub">포트폴리오 강화</h4>
                      <div className="curriculum-text-wrap">
                        <p className="curriculum-text">최종 발표 및 회고 진행</p>
                        <p className="curriculum-text">
                          프로젝트 관리와 개발자 취업을 위한 포트폴리오 작성 특강
                        </p>
                        <p className="curriculum-text">면접 및 이력서&amp;포트폴리오 컨설팅</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <a
              href={NOTION_CURRICULUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="curriculum-link"
            >
              <p>상세 커리큘럼 보러가기</p>
            </a>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section
        id="section-project"
        className="section-about-devcourse part-4 section-about-devcourse-project"
      >
        <div className="title-wrap">
          <div className="about-devcourse-text">
            <h6 className="hashtag">프로젝트</h6>
            <h4 className="text-title">실전 협업을 완성하는 팀 프로젝트</h4>
            <p className="text-detail">
              동료들과 팀을 이루어 기획 → 구현 → 배포까지 <br className="only-mob" />
              전 과정을 직접 경험합니다.<br />
              실무와 똑같은 협업 경험으로 <br className="only-mob" />
              완성도 높은 포트폴리오를 확보하세요.
            </p>
          </div>
        </div>

        <div className="content-wrap">
          <div className={`project-wrap active-project-${activeProject}`}>
            <div className="project-category">
              <button
                type="button"
                className="project-category-button"
                onClick={() => setActiveProject(1)}
              >
                <p>최종 프로젝트</p>
              </button>

              <button
                type="button"
                className="project-category-button"
                onClick={() => setActiveProject(2)}
              >
                <p>프로젝트 1</p>
              </button>

              <button
                type="button"
                className="project-category-button"
                onClick={() => setActiveProject(3)}
              >
                <p>프로젝트 2</p>
              </button>

              <button
                type="button"
                className="project-category-button"
                onClick={() => setActiveProject(4)}
              >
                <p>프로젝트 3</p>
              </button>
            </div>

            <ul className="project-box" style={{ listStyle: 'none', padding: '48px 32px 36px 32px' }}>
              {/* 최종 프로젝트 - nth-child(1) */}
              <li className="dev-project">
                <h6 className="num">최종 프로젝트</h6>
                <h4 className="name">배운 기술을 바탕으로 기획부터 구현까지</h4>
                <p className="detail">
                  진행 과정에서 배운 기술들을 바탕으로 최종 프로젝트를 진행합니다.<br />
                  프로젝트 기획부터 분석, 구현까지 모든 과정을 수강생이 주도적으로 이끌어 갑니다.<br /><br />
                  <span className="comment" style={{ color: '#aaa' }}>
                    *첨부된 영상은 프로그래머스 데브코스에서 진행된 최종 프로젝트 결과물입니다.
                  </span>
                </p>

                <div className="project-type-wrap">
                  <p className="project-type">팀 프로젝트</p>
                  <p className="project-type">최종 프로젝트</p>
                </div>

                <article className="swiper-box" style={{ flexDirection: 'column', gap: 16 }}>
                  <div className="video-wrap" style={{ width: '100%', maxWidth: 560, aspectRatio: '16/9' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                      title={videos[activeVideo].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Selector Dots */}
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
                    {videos.map((_, vIdx) => (
                      <button
                        key={vIdx}
                        type="button"
                        aria-label={`영상 ${vIdx + 1} 보기`}
                        onClick={() => setActiveVideo(vIdx)}
                        style={{
                          width: 24,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: activeVideo === vIdx ? '#fe934b' : 'rgba(255,255,255,0.3)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      />
                    ))}
                  </div>
                </article>
              </li>

              {/* 프로젝트 1 - nth-child(2) */}
              <li className="dev-project">
                <h6 className="num">PROJECT 1</h6>
                <h4 className="name">백엔드 환경 설정과 메뉴관리 CRUD 프로젝트</h4>
                <p className="detail">
                  React로 구현된 프론트엔드 코드를 제공하고 교육생은 <br className="only-pc" />
                  SpringBoot로 커피 메뉴 관리 API를 구현하여 최종 서비스를 완성합니다.
                </p>

                <div className="project-type-wrap">
                  <p className="project-type">팀 프로젝트</p>
                  <p className="project-type">SpringBoot</p>
                </div>
              </li>

              {/* 프로젝트 2 - nth-child(3) */}
              <li className="dev-project">
                <h6 className="num">PROJECT 2</h6>
                <h4 className="name">자율 REST API 구현</h4>
                <p className="detail">
                  API 명세서 작성, 서비스 기능 상세 항목 작성과 구현, 서비스 인터페이스 표준과 인증 방식, <br className="only-pc" />
                  요청 반환에 대한 실무 역량, 데이터 파이프 라인 구축에 대한 이해도 향상을 위한 프로젝트를 진행합니다.
                </p>

                <div className="project-type-wrap">
                  <p className="project-type">팀 프로젝트</p>
                  <p className="project-type">서비스 구현</p>
                </div>
              </li>

              {/* 프로젝트 3 - nth-child(4) */}
              <li className="dev-project">
                <h6 className="num">PROJECT 3</h6>
                <h4 className="name">REST API Kotlin 마이그레이션</h4>
                <p className="detail">
                  기존 Java로 구현한 SpringBoot 프로젝트를 <br className="only-pc" />
                  Kotlin으로 마이그레이션하는 프로젝트를 진행합니다.
                </p>

                <div className="project-type-wrap">
                  <p className="project-type">팀 프로젝트</p>
                  <p className="project-type">Kotlin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
