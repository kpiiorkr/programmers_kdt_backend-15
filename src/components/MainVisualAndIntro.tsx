import React from 'react';
import { StickyNav } from './StickyNav';

export const MainVisualAndIntro: React.FC = () => {
  return (
    <>
      {/* Main Visual */}
      <section id="section-main-visual" className="section-main-visual ics-scroll-trigger ics-scroll-trigger-active">
        <div className="bg" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 860px)"
              srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-bg-mob.webp"
            />
            <img
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-bg-pc.webp"
              alt=""
              width={1920}
              height={709}
              fetchPriority="high"
            />
          </picture>
        </div>

        <div className="content-wrap ics-scroll-trigger-fade-in">
          <p className="lp-mv-badge">
            <span>Java · Kotlin · AI 확장</span>
          </p>
          <h1 className="lp-mv-title">
            <span>백엔드 개발자 취업을 위한</span>
            <strong>가장 확실한 선택</strong>
          </h1>

          <ul className="lp-mv-benefits" aria-label="백엔드 데브코스 수강 혜택">
            <li className="lp-mv-benefit">
              <picture className="lp-mv-icon">
                <source
                  media="(max-width: 860px)"
                  srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-1-mob.webp"
                />
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-1-pc.webp"
                  alt=""
                  width={64}
                  height={64}
                />
              </picture>
              <p className="lp-mv-benefit-text">
                훈련 장려금<strong>최대 150만원 지원</strong>
              </p>
            </li>
            <li className="lp-mv-benefit">
              <picture className="lp-mv-icon">
                <source
                  media="(max-width: 860px)"
                  srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-2-mob.webp"
                />
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-2-pc.webp"
                  alt=""
                  width={64}
                  height={64}
                />
              </picture>
              <p className="lp-mv-benefit-text">
                현업 개발자<strong>1:1 코드 리뷰</strong>
              </p>
            </li>
            <li className="lp-mv-benefit">
              <picture className="lp-mv-icon">
                <source
                  media="(max-width: 860px)"
                  srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-3-mob.webp"
                />
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-3-pc.webp"
                  alt=""
                  width={64}
                  height={64}
                />
              </picture>
              <p className="lp-mv-benefit-text">
                <strong>스터디 도서 지원</strong>
              </p>
            </li>
            <li className="lp-mv-benefit">
              <picture className="lp-mv-icon">
                <source
                  media="(max-width: 860px)"
                  srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-4-mob.webp"
                />
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-4-pc.webp"
                  alt=""
                  width={64}
                  height={64}
                />
              </picture>
              <p className="lp-mv-benefit-text">
                <strong>유료 개발 인프라 지원</strong>
              </p>
            </li>
            <li className="lp-mv-benefit">
              <picture className="lp-mv-icon">
                <source
                  media="(max-width: 860px)"
                  srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-5-mob.webp"
                />
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-icon-5-pc.webp"
                  alt=""
                  width={64}
                  height={64}
                />
              </picture>
              <p className="lp-mv-benefit-text">
                <strong>무제한 1:1 취업 지원</strong>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="section-course-schedule ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <dl className="lp-schedule-list">
            <div className="lp-schedule-row">
              <dt className="lp-schedule-label">
                <img
                  loading="lazy"
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-detail-icon-1.webp"
                  alt=""
                  width={32}
                  height={32}
                  className="lp-schedule-icon"
                />
                <span>모집 기간</span>
              </dt>
              <dd className="lp-schedule-value">26년 11월 18일(수)까지</dd>
            </div>
            <div className="lp-schedule-row">
              <dt className="lp-schedule-label">
                <img
                  loading="lazy"
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-detail-icon-2.webp"
                  alt=""
                  width={32}
                  height={32}
                  className="lp-schedule-icon"
                />
                <span>수강 기간</span>
              </dt>
              <dd className="lp-schedule-value">26년 11월 20일(금) ~ 27년 4월 30일(금)</dd>
            </div>
            <div className="lp-schedule-row">
              <dt className="lp-schedule-label">
                <img
                  loading="lazy"
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/mv-detail-icon-3.webp"
                  alt=""
                  width={32}
                  height={32}
                  className="lp-schedule-icon"
                />
                <span>교육 시간</span>
              </dt>
              <dd className="lp-schedule-value">
                <span>9시 - 18시</span>
                <span className="lp-schedule-note">+ 교육 시간 외 추가 학습 및 특강</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Sticky Navigation - Placed directly below section-course-schedule (section 2) */}
      <StickyNav />

      {/* 이번 기수 한정 혜택 (Claude Max) */}
      <section className="new-benefit-2 ics-scroll-trigger ics-scroll-trigger-active">
        <img
          className="lp-new-benefit-bg"
          src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/benefit-new-bg.webp"
          width={3840}
          height={599}
          alt=""
          loading="lazy"
        />
        <div className="lp-new-benefit-inner">
          <div className="lp-new-benefit-visual">
            <img
              className="lp-new-benefit-object"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/benefit-new-object.webp"
              width={294}
              height={155}
              alt=""
              loading="lazy"
            />
          </div>
          <p className="lp-new-benefit-label">이번 기수 한정 혜택</p>
          <h2 className="lp-new-benefit-title">Claude Max<br />최대 1년 제공</h2>
          <div className="lp-new-benefit-cards">
            <div className="lp-new-benefit-card">
              <h3>교육 기간 내내</h3>
              <p>Claude Max급 지원</p>
            </div>
            <span className="lp-new-benefit-plus" aria-hidden="true">+</span>
            <div className="lp-new-benefit-card">
              <h3>수료 후 6개월까지</h3>
              <p>Claude Pro급 추가 지원</p>
            </div>
          </div>
          <div className="lp-new-benefit-extra">
            <div className="lp-new-benefit-extra-heading">
              <h3>+ 추가 심화 학습 제공</h3>
              <span className="lp-new-benefit-extra-badge">이번 기수만!</span>
            </div>
            <p>
              수료 후에도 실전 프로젝트를 이어갈 수 있는 심화 학습 기회와 함께 AI 툴, 클라우드 등
              프로젝트에 필요한 서비스를 추가로 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 빅테크 현직자 1:1 모의 직무 면접 */}
      <section className="section-mock-interview ics-scroll-trigger ics-scroll-trigger-active">
        <div className="interview-inner">
          <header className="interview-heading ics-scroll-trigger-fade-up">
            <h2>빅테크 현직자와 함께하는<br />1:1 모의 직무 면접</h2>
            <p>
              국내 주요 빅테크와 유망 IT 스타트업<span className="interview-mobile-break"></span> 현직
              개발자와의<span className="interview-pc-break"></span> 모의 직무 면접 기회 100% 제공
            </p>
          </header>
          <div className="interview-journey ics-scroll-trigger-fade-up">
            <img
              className="interview-connector"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/07/oneoone-connector-pc.webp"
              alt=""
              width={656}
              height={14}
              loading="lazy"
            />
            <ol className="interview-steps">
              <li className="interview-step">
                <div className="interview-object">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/07/oneoone-interview.webp"
                    alt=""
                    width={418}
                    height={418}
                    loading="lazy"
                  />
                </div>
                <span className="interview-number" aria-hidden="true">01</span>
                <div className="interview-description">
                  <h3>1:1 모의 직무 면접</h3>
                  <p>실제 면접처럼 진행되는<br />현직 개발자와의 1:1 면접</p>
                </div>
              </li>
              <li className="interview-step">
                <div className="interview-object">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/07/oneoone-feedback.webp"
                    alt=""
                    width={418}
                    height={418}
                    loading="lazy"
                  />
                </div>
                <span className="interview-number" aria-hidden="true">02</span>
                <div className="interview-description">
                  <h3>현직자의 피드백</h3>
                  <p>답변 방식부터 기술 질문 대응까지<br />보완점들을 구체적으로 확인</p>
                </div>
              </li>
              <li className="interview-step">
                <div className="interview-object">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/07/oneoone-readiness.webp"
                    alt=""
                    width={418}
                    height={418}
                    loading="lazy"
                  />
                </div>
                <span className="interview-number" aria-hidden="true">03</span>
                <div className="interview-description">
                  <h3>취업 준비 점검</h3>
                  <p>지금 어느 수준까지 준비됐는지<br />면접에 필요한 역량을 점검</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 수료 후 진짜 실무 시작! 기업 연계 프로젝트 100% 매칭 */}
      <section className="section-company-project ics-scroll-trigger ics-scroll-trigger-active" aria-labelledby="lp-company-project-title">
        <picture className="lp-company-glow" aria-hidden="true">
          <source
            media="(max-width: 390px)"
            srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-glow-mobile.webp"
          />
          <source
            media="(max-width: 860px)"
            srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-glow-tablet.webp"
          />
          <img
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-glow-pc.webp"
            alt=""
            width={1920}
            height={190}
            loading="lazy"
          />
        </picture>
        <div className="content-wrap lp-company-content ics-scroll-trigger-fade-in">
          <header className="lp-company-heading">
            <h2 id="lp-company-project-title">
              수료 후 진짜 실무 시작!<br />
              <span>기업 연계 프로젝트 100% 매칭</span>
            </h2>
            <p>공장형 포트폴리오와 다릅니다<br />진짜 기업 과제로 포트폴리오의 격을 높여보세요</p>
          </header>

          <ul className="lp-company-benefits" aria-label="기업 연계 프로젝트 혜택">
            <li className="lp-company-card">
              <div className="lp-company-card-heading">
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-icon-matching.webp"
                  alt=""
                  width={84}
                  height={84}
                  loading="lazy"
                />
                <h3>수료 시점에 맞춰<strong>100% 기업 과제 매칭</strong></h3>
              </div>
              <p>
                실제 협력 기업이 제시한 백엔드 프로젝트 주제가 공고되며, 참여 희망자에게 100% 기회가
                제공됩니다.
              </p>
            </li>
            <li className="lp-company-card">
              <div className="lp-company-card-heading">
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-icon-mentoring.webp"
                  alt=""
                  width={84}
                  height={84}
                  loading="lazy"
                />
                <h3>프로젝트 기간 내내<strong>밀착 멘토링</strong></h3>
              </div>
              <p>프로젝트 기간 내내 데브코스 교육팀의 1:1 및 팀 멘토링이 지원됩니다.</p>
            </li>
            <li className="lp-company-card">
              <div className="lp-company-card-heading">
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/22/be14plus/b14-project-icon-certificate.webp"
                  alt=""
                  width={84}
                  height={84}
                  loading="lazy"
                />
                <h3>기업 연계 프로젝트<strong>수료증 발급</strong></h3>
              </div>
              <p>
                포트폴리오에 활용할 수 있도록 프로젝트 완수 시 ‘기업 연계 프로젝트 수료증’을 발급해
                드립니다.
              </p>
            </li>
          </ul>

          <div className="lp-company-process">
            <h3>
              기업 연계 프로젝트,<br className="lp-company-mobile-break" />
              어떻게 진행되나요?
            </h3>
            <ol className="lp-company-steps">
              <li>
                <h4><span>STEP 1.</span> 백엔드 데브코스 과정 이수</h4>
                <p>데브코스 과정을 통해 백엔드 핵심 역량 및 프로젝트 기본기를 완성합니다.</p>
              </li>
              <li>
                <h4><span>STEP 2.</span> 기업 프로젝트 공고 확인 및 지원</h4>
                <p>협력 기업이 출제한 백엔드 과제 공고 확인 후 원하는 프로젝트에 지원합니다.</p>
              </li>
              <li>
                <h4><span>STEP 3.</span> 밀착 멘토링 받으며 기업 연계 프로젝트 수행</h4>
                <p>밀착 멘토링 받으며 실제 현업 스펙 기반 과제를 수행합니다.</p>
              </li>
              <li>
                <h4><span>STEP 4.</span> 결과물 제출 및 추가 혜택 확인</h4>
                <p>과제 제출자 전원 대상으로 수료증이 발급됩니다.</p>
              </li>
            </ol>
          </div>

          <div className="lp-company-closing">
            <p>
              <span>100% 기업 프로젝트 매칭 기회 보장받고,</span><br />차별화 된 실무 이력을 쌓아보세요!
            </p>
          </div>
        </div>
      </section>

      {/* 도입부 1 : AI 시대, 주니어 개발자 채용이 정말 줄어들까요? */}
      <section className="section-intro-1-260908">
        <div className="content-wrap">
          <div className="main-obj">
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-sec-1-pc.webp"
              alt="AI 시대에 필요한 개발자 역량: AI와 협업하며 문제 구조를 설계할 줄 아는 사람."
              className="only-pc2"
            />
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-sec-1-mob.webp"
              alt="AI 시대에 필요한 개발자 역량: AI와 협업하며 문제 구조를 설계할 줄 아는 사람."
              className="only-tablet2"
            />
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-sec-1-mob.webp"
              alt="AI 시대에 필요한 개발자 역량: AI와 협업하며 문제 구조를 설계할 줄 아는 사람."
              className="only-mob2"
            />
          </div>
        </div>
      </section>

      {/* 도입부 2 : 백엔드 데브코스는 지금 기업이 원하는 개발자를 만듭니다 */}
      <section className="section-intro-2-260908">
        <div className="bg">
          <img
            loading="lazy"
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-2-bg-pc.webp"
            alt="bg"
            className="only-pc"
          />
          <img
            loading="lazy"
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-2-bg-mob.webp"
            alt="bg"
            className="only-mob"
          />
        </div>

        <div className="content-wrap">
          <h2 className="title-main changeTitle">
            백엔드 데브코스는<br />지금 기업이 원하는 개발자를 만듭니다
          </h2>
          <div className="object-wrap">
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-2-obj-pc.webp"
              alt="백엔드 데브코스는 지금 기업이 원하는 개발자를 만듭니다"
              className="only-pc"
            />
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/sec-2-obj-mob.webp"
              alt="백엔드 데브코스는 지금 기업이 원하는 개발자를 만듭니다"
              className="only-mob"
            />
          </div>
          <p className="message-2 changeTitle">
            PBL(Project-Based Learning) 기반 실전 프로젝트를 경험하며<br />AI 시대에 꼭 필요한 주니어
            개발자로 성장합니다.
          </p>
        </div>
      </section>

      {/* 5개월 후, 여러분은 이렇게 성장합니다 */}
      <section className="section-afterclass-260824">
        <div className="content-wrap">
          <div className="main-obj">
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-2-obj-pc.webp"
              alt="5개월 후의 성장"
              className="only-pc2"
            />
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-2-obj-tablet.webp"
              alt="5개월 후의 성장"
              className="only-tablet2"
            />
            <img
              loading="lazy"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/temp-2-obj-mob.webp"
              alt="5개월 후의 성장"
              className="only-mob2"
            />
          </div>
        </div>
      </section>
    </>
  );
};
