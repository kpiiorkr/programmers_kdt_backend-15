import React from 'react';

export const MentorsAndLectures: React.FC = () => {
  return (
    <>
      {/* 현직자 멘토링 */}
      <section className="section-mentor ics-scroll-trigger ics-scroll-trigger-active">
        <div className="lp-mentor-content ics-scroll-trigger-fade-in">
          <h2 className="lp-mentor-title">
            완성도 높은 프로젝트를 위한<br />
            현직 개발자의 1:1 멘토링
          </h2>

          <div className="lp-mentor-support">
            <picture className="lp-mentor-preview">
              <source
                media="(max-width: 860px)"
                srcSet="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-preview-mobile.webp"
                width={350}
                height={168}
              />
              <img
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-preview-pc.webp"
                alt="현직 개발자가 프로젝트 코드와 구현 내용에 제공한 멘토링 피드백 예시"
                loading="lazy"
                width={404}
                height={334}
              />
            </picture>
            <ul className="lp-mentor-support-list">
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-feedback-icon.webp"
                  alt=""
                  loading="lazy"
                  width={22}
                  height={22}
                />
                <p>
                  개인별 코딩 스타일과<br />
                  <strong>실력에 맞춘 세심한 피드백</strong>
                </p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-project-icon.webp"
                  alt=""
                  loading="lazy"
                  width={22}
                  height={22}
                />
                <p>
                  프로젝트 기획부터 배포까지<br />
                  <strong>전 과정에 대한 멘토링</strong>
                </p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-question-icon.webp"
                  alt=""
                  loading="lazy"
                  width={22}
                  height={22}
                />
                <p>
                  질문 즉시 해결!<br />
                  교육 시간 <strong>풀타임 밀착 멘토링</strong>
                </p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-coffeechat-icon.webp"
                  alt=""
                  loading="lazy"
                  width={22}
                  height={22}
                />
                <p>
                  <strong>인사이트 공유</strong>를 위한 커피챗
                </p>
              </li>
            </ul>
          </div>

          <div className="lp-mentor-team">
            <div className="lp-mentor-team-description">
              <h3>데브코스는 검증된<br />현직 멘토진과 함께합니다</h3>
              <div className="lp-mentor-team-notes">
                <p>*이전 기수 멘토링에 참여해 주신<br />실제 현직자 멘토진의 프로필입니다.</p>
                <p>이번 기수 역시 동일 수준의<br />엄선된 현직 멘토진으로 구성됩니다.</p>
              </div>
            </div>
            <ul className="lp-mentor-profile-list">
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-profile.webp"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
                <p>O2O 서비스 분야<br /><strong>8년 차 개발자</strong></p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-profile.webp"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
                <p>전 대기업&amp;현 스타트업<br /><strong>6년 차 개발자</strong></p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-profile.webp"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
                <p>매출·정산 도메인<br /><strong>6년 차 개발자</strong></p>
              </li>
              <li>
                <img
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/section-mentor-profile.webp"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
                <p>이커머스·콘텐츠<br /><strong>5년 차 개발자</strong></p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 실무 특강 */}
      <section className="section-practical-lectures ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="lecture-title">
            실무 역량을 끌어올리는<br />
            현업 개발자의 기술 &amp; 실무 특강
          </h2>
          <ul className="lecture-list" style={{ listStyle: 'none', padding: 0 }}>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>백엔드 개발자 필수 툴 Git &amp; GitHub</h3>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>올바르게 백엔드 내 지식으로 만들기</h3>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>점진적으로 프레임워크 교체하기</h3>
                <p>*Spring → Kotlin 마이그레이션</p>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>개발자 글쓰기 방법</h3>
                <p>*기술 블로그, 회고록</p>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>개발자 취업을 위한 알고리즘</h3>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>AWS 핵심 서비스와 실무 활용 노하우</h3>
              </div>
            </li>
            <li className="lecture-card">
              <img
                loading="lazy"
                src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/class-icon.webp"
                alt=""
                width={25}
                height={25}
              />
              <div>
                <h3>개발자 취업 역량 강화</h3>
              </div>
            </li>
          </ul>
          <a
            className="lecture-link"
            href="https://www.youtube.com/watch?v=3ltL4ov0RQg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="rolling-text">
              <span>실무 특강 체험해보기</span>
              <span aria-hidden="true">실무 특강 체험해보기</span>
            </span>
          </a>
        </div>
      </section>

      {/* 혜택 섹션 */}
      <section id="section-benefits" className="section-student-benefits ics-scroll-trigger ics-scroll-trigger-active">
        <div className="student-benefits-inner">
          <h2 className="student-benefits-title">
            <span>데브코스 수강생이라면</span>
            <span>누구나 누릴 수 있는 혜택</span>
          </h2>

          <div className="student-benefits-grid">
            <ul className="student-benefits-small-list" style={{ listStyle: 'none', padding: 0 }}>
              <li className="student-benefit-card student-benefit-card-small student-benefit-card-1">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-tuition-support.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 01</span>
                  <p className="student-benefit-name">
                    <strong>1,500만원</strong> 상당<br className="student-benefit-mobile-br" />
                    교육 국비 지원
                  </p>
                  <p className="student-benefit-note">*자부담금 50만원</p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-small student-benefit-card-2">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-training-incentive.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 02</span>
                  <p className="student-benefit-name">
                    매월 <strong>최대 30만원</strong><br />훈련 장려금 지급
                  </p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-small student-benefit-card-3">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-brand-kit.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 03</span>
                  <p className="student-benefit-name">
                    데브코스<br className="student-benefit-mobile-br" />
                    브랜드 키트 제공
                  </p>
                  <p className="student-benefit-note">*브랜드 키트 예시 이미지</p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-small student-benefit-card-4">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-learning-tools.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 04</span>
                  <p className="student-benefit-name">학습에 필요한 도서<br />&amp; 필수 툴 제공</p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-small student-benefit-card-5">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-sprint-assessment.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 05</span>
                  <p className="student-benefit-name">
                    스프린트별<br className="student-benefit-mobile-br" />
                    <strong>역량 진단 평가</strong> 제공
                  </p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-small student-benefit-card-6">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-career-support.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 06</span>
                  <p className="student-benefit-name">
                    수료 후에도<br className="student-benefit-mobile-br" />
                    <strong>무제한 취업 지원</strong>
                  </p>
                </div>
              </li>
            </ul>

            <div className="student-benefits-divider"></div>

            <ul className="student-benefits-wide-list" style={{ listStyle: 'none', padding: 0 }}>
              <li className="student-benefit-card student-benefit-card-wide student-benefit-card-7">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-offline-classroom.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 07</span>
                  <p className="student-benefit-name"><strong>넓고 쾌적한 오프라인 강의장</strong> 제공</p>
                  <p className="student-benefit-description">프로그래머스 서초 강의장</p>
                  <p className="student-benefit-note">*최종 프로젝트 중 이용 가능</p>
                </div>
              </li>

              <li className="student-benefit-card student-benefit-card-wide student-benefit-card-8">
                <div className="student-benefit-visual">
                  <img
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/07/sectionBenefit-ai-tool-support.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="student-benefit-content">
                  <span className="student-benefit-label">혜택 08</span>
                  <p className="student-benefit-name">수료 후에도, <strong>AI 개발 툴 추가 지원</strong></p>
                  <p className="student-benefit-description">Claude 유료 구독 계정 6개월 추가 지원</p>
                  <p className="student-benefit-note">*API 사용료 제외</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="student-benefits-extra">
            <h3 className="student-benefits-extra-title">프로그래머스라서 가능한 추가 혜택</h3>

            <ul className="student-benefits-extra-list" style={{ listStyle: 'none', padding: 0 }}>
              <li className="student-benefits-extra-item">
                <div className="student-benefits-extra-content">
                  <span className="student-benefits-extra-label">추가 혜택 01</span>
                  <p className="student-benefits-extra-name">
                    프로그래머스 고객사<br /><strong>2,000개 기업 매칭 추천</strong>
                  </p>
                  <p className="student-benefits-extra-description">
                    국내 대기업부터 금융사, 중견기업, IT 스타트업까지<br />
                    프로그래머스 고객사와의 맞춤 채용 추천을 제공합니다.
                  </p>
                </div>
                <img
                  className="student-benefits-extra-image student-benefits-extra-image-company"
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-company-matching.webp"
                  alt=""
                  loading="lazy"
                />
              </li>

              <li className="student-benefits-extra-item">
                <div className="student-benefits-extra-content">
                  <span className="student-benefits-extra-label">추가 혜택 02</span>
                  <p className="student-benefits-extra-name">
                    <strong>프로그래머스 자격증</strong><br />취득 100% 지원
                  </p>
                  <p className="student-benefits-extra-description">
                    국내 유일 IT 실무 중심 자격증으로<br />
                    채용 우대, 코딩테스트 면제 등 취업 혜택을 누려보세요.
                  </p>
                </div>
                <img
                  className="student-benefits-extra-image student-benefits-extra-image-certificate"
                  src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/30/deepbe9/sectionBenefit-certification-support.webp"
                  alt=""
                  loading="lazy"
                />
              </li>

              <li className="student-benefits-extra-item student-benefits-extra-item-aidept">
                <div className="student-benefits-aidept-top">
                  <div className="student-benefits-aidept-heading">
                    <span className="student-benefits-extra-label">추가 혜택 03</span>
                    <p className="student-benefits-extra-name">
                      취업 경쟁력을 높여줄<br />
                      <strong>AI 역량평가 자격증<br className="student-benefits-aidept-mobile-br" /> 응시권 제공</strong>
                    </p>
                  </div>
                  <img
                    className="student-benefits-aidept-image"
                    src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/10/14/be15/benefit-261021.webp"
                    alt=""
                    width={206}
                    height={146}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="student-benefits-extra-description student-benefits-aidept-description">
                  기업에서 실제 활용하는 평가를 기반으로 만든<br />
                  AI 역량평가 자격증으로 AI 활용 역량을 증명하세요
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 비전공자 지원 */}
      <section className="section-beginner-support ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="lp-section-title changeTitle">
            비전공자, 입문자도<br />완주 가능한 백엔드 부트캠프
          </h2>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/beginer-pc.webp"
              alt="입문자 완주 지원"
              width={940}
              height={360}
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/beginer-mob.webp"
              alt="입문자 완주 지원"
              width={350}
              height={548}
            />
          </div>
          <div className="interview-wrap">
            <div className="video-column">
              <p className="video-label">
                <svg
                  className="youtube-icon"
                  width="24"
                  height="17"
                  viewBox="0 0 24 16.5517"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g>
                    <path
                      d="M11.9874 16.5517C11.9874 16.5517 19.5058 16.5517 21.3707 16.0552C22.4207 15.7738 23.2104 14.9628 23.4876 13.9614C24 12.1242 24 8.25932 24 8.25932C24 8.25932 24 4.41932 23.4876 2.59863C23.2104 1.57243 22.4207 0.777944 21.3707 0.50484C19.5058 1.28746e-05 11.9874 1.28746e-05 11.9874 1.28746e-05C11.9874 1.28746e-05 4.48582 1.28746e-05 2.62933 0.50484C1.59608 0.777944 0.78964 1.57243 0.495625 2.59863C0 4.41932 0 8.25932 0 8.25932C0 8.25932 0 12.1242 0.495625 13.9614C0.78964 14.9628 1.59608 15.7738 2.62933 16.0552C4.48582 16.5517 11.9874 16.5517 11.9874 16.5517Z"
                      fill="#FF0033"
                    ></path>
                    <path d="M15.7241 8.27588L9.51724 4.75863V11.7931L15.7241 8.27588Z" fill="white"></path>
                  </g>
                </svg>
                YouTube 수강생 인터뷰
              </p>
              <div className="video-frame">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-u71GyH5cGY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="interview-copy">
              <h3>코딩을 잘 몰랐던 비전공자도<br />백엔드 개발자로 성장했습니다</h3>
              <p className="interview-desc">
                비전공자로 시작해 혼자 앱을 만들고,<br />AI 솔루션 기업과 협업 프로젝트에<br />참여하는
                경험까지 이어졌어요.
              </p>
              <p className="interview-author">백엔드 데브코스 6기 수료 백상현 님</p>
              <a
                className="interview-link"
                href="https://www.youtube.com/watch?v=-u71GyH5cGY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="play-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g>
                    <circle cx="10" cy="10" r="10" fill="#FF6F43"></circle>
                    <path
                      d="M14.5 9.13397C15.1667 9.51888 15.1667 10.4811 14.5 10.866L8.5 14.3301C7.83333 14.715 7 14.2339 7 13.4641L7 6.5359C7 5.7661 7.83333 5.28497 8.5 5.66987L14.5 9.13397Z"
                      fill="#222222"
                    ></path>
                  </g>
                </svg>
                <span className="rolling-text">
                  <span>인터뷰 영상 보기</span>
                  <span aria-hidden="true">인터뷰 영상 보기</span>
                </span>
                <svg
                  className="arrow-icon"
                  width="21"
                  height="8"
                  viewBox="0 0 20.5 7.36396"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M20.3536 4.03553C20.5488 3.84027 20.5488 3.52369 20.3536 3.32843L17.1716 0.146447C16.9763 -0.0488155 16.6597 -0.0488155 16.4645 0.146447C16.2692 0.341709 16.2692 0.658291 16.4645 0.853554L19.2929 3.68198L16.4645 6.51041C16.2692 6.70567 16.2692 7.02225 16.4645 7.21751C16.6597 7.41278 16.9763 7.41278 17.1716 7.21751L20.3536 4.03553ZM0 3.68198V4.18198H20V3.68198V3.18198H0V3.68198Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 수강생 후기 */}
      <section className="section-student-satisfaction ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <h2 className="lp-section-title">
            수강 중에도, 수료 후에도<br />
            <span>만족도가 높을 수 밖에 없는 이유</span>
          </h2>
          <p className="section-desc">
            95.4점의 수강생 만족도가 증명하는 백엔드 데브코스<br />
            수료 후에도 애프터 채널에서 함께 성장합니다.
          </p>
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/dev-review-pc.webp"
              alt="수강생 만족도"
              width={1152}
              height={516}
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/dev-review-mob.webp"
              alt="수강생 만족도"
              width={350}
              height={358}
            />
          </div>
        </div>
      </section>

      {/* 애프터 채널 */}
      <section className="section-after-channel ics-scroll-trigger ics-scroll-trigger-active">
        <div className="content-wrap ics-scroll-trigger-fade-in">
          <div className="main-obj">
            <img
              loading="lazy"
              className="only-pc"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/afterclass-pc.webp"
              alt="수료 후에도 계속되는 성장"
              width={860}
              height={335}
            />
            <img
              loading="lazy"
              className="only-mob"
              src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/publish/2026/09/05/be14/afterclass-mob.webp"
              alt="수료 후에도 계속되는 성장"
              width={350}
              height={475}
            />
          </div>
        </div>
      </section>
    </>
  );
};
