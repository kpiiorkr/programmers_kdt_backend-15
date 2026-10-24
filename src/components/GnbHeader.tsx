import React, { useState } from 'react';
import { GOOGLE_FORM_URL } from '../utils/constants';

export const GnbHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="main-app-header">
      <div id="notice-banner-slot"></div>
      <header data-testid="main-app-header" className="GlobalHeaderstyle__Header-sc-16dbplc-0 hyHsBD">
        <section className="GlobalHeaderstyle__MainSection-sc-16dbplc-1 hgTgsm">
          <div className="GlobalHeaderstyle__MenuGroup-sc-16dbplc-2 hYkVZT">
            {/* Logo */}
            <a
              href="https://programmers.co.kr?locale=ko"
              aria-label="프로그래머스 로고 링크"
              className="LogoLinkstyle__LogoLink-sc-pnxc3t-0 kcIizC"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="178" height="25" fill="none" viewBox="0 0 178 25">
                <path
                  fill="#202B3D"
                  fillRule="evenodd"
                  d="M30.713 4.845h3.342v1.574h.048q.218-.32.57-.652.35-.332.823-.603a5 5 0 0 1 1.029-.442 4 4 0 0 1 1.186-.173q1.308 0 2.374.455t1.828 1.28q.763.823 1.174 1.955.412 1.132.412 2.485 0 1.255-.375 2.398a6.6 6.6 0 0 1-1.066 2.03 5.2 5.2 0 0 1-1.683 1.414q-.993.53-2.252.53a6.2 6.2 0 0 1-2.119-.357 3.4 3.4 0 0 1-1.61-1.218h-.049v6.888h-3.632zm3.342 5.977q0 1.353.763 2.19.762.836 2.143.836t2.143-.836.763-2.19-.763-2.19q-.763-.835-2.143-.835t-2.143.836q-.763.836-.763 2.19m11.043-5.977h3.632v1.918h.049q.58-1.107 1.38-1.66.8-.554 2.01-.554.315 0 .63.025t.58.098v3.37a4.865 4.865 0 0 0-1.55-.246q-1.04 0-1.646.296a2.2 2.2 0 0 0-.932.824q-.328.529-.424 1.267a13 13 0 0 0-.097 1.623V16.8h-3.632zm8.452 5.977q0-1.426.508-2.583.509-1.155 1.393-1.98a6.1 6.1 0 0 1 2.082-1.267q1.199-.443 2.555-.443t2.555.443 2.082 1.267q.885.825 1.393 1.98t.508 2.583q0 1.428-.508 2.583a5.95 5.95 0 0 1-1.393 1.98q-.883.825-2.082 1.268-1.199.442-2.555.442a7.3 7.3 0 0 1-2.555-.442 6.1 6.1 0 0 1-2.082-1.267 5.95 5.95 0 0 1-1.393-1.98q-.508-1.158-.508-2.584m3.632 0q0 1.353.763 2.19.763.836 2.143.836t2.143-.836.763-2.19-.763-2.19q-.763-.835-2.143-.835t-2.143.836q-.763.836-.763 2.19m23.393 4.97q0 3.394-1.683 5.153-1.683 1.76-5.121 1.76a13.6 13.6 0 0 1-3.1-.358 7 7 0 0 1-2.81-1.39l2.01-3.05a7.6 7.6 0 0 0 1.78 1.132 4.94 4.94 0 0 0 2.047.418q1.67 0 2.458-.824.787-.824.787-2.104v-1.156h-.049q-.63.861-1.562 1.218-.931.357-1.755.357-1.308 0-2.373-.455a5.3 5.3 0 0 1-1.829-1.28 5.7 5.7 0 0 1-1.174-1.955q-.412-1.132-.412-2.485a7.3 7.3 0 0 1 .376-2.312 6.4 6.4 0 0 1 1.065-1.993 5.4 5.4 0 0 1 1.683-1.39q.993-.529 2.252-.529.775 0 1.417.173.642.172 1.15.442.51.27.872.603a3.8 3.8 0 0 1 .581.652h.048V4.845h3.342zm-9.153-5.043a2.9 2.9 0 0 0 .835 2.054q.4.405.92.651t1.15.246q.606 0 1.139-.245.533-.247.932-.652.399-.407.618-.935.217-.53.217-1.12a2.9 2.9 0 0 0-.835-2.054 3.2 3.2 0 0 0-.932-.651 2.7 2.7 0 0 0-1.138-.246q-.63 0-1.15.246a3.2 3.2 0 0 0-.921.651 2.9 2.9 0 0 0-.835 2.054m11.527-5.904h3.632v1.918h.049q.58-1.107 1.38-1.66.8-.554 2.01-.554.315 0 .63.025t.58.098v3.37a4.864 4.864 0 0 0-1.55-.246q-1.04 0-1.646.296a2.2 2.2 0 0 0-.932.824q-.328.529-.424 1.267a13 13 0 0 0-.097 1.623V16.8H82.95zM99.659 15.3h-.049A3.43 3.43 0 0 1 98 16.676a5.5 5.5 0 0 1-2.12.418 5.4 5.4 0 0 1-1.585-.233 4 4 0 0 1-1.344-.701 3.4 3.4 0 0 1-.92-1.157q-.34-.688-.34-1.599 0-1.032.376-1.746t1.017-1.181a5 5 0 0 1 1.465-.726q.823-.259 1.707-.381.885-.123 1.768-.148a59 59 0 0 1 1.635-.024q0-.984-.69-1.562t-1.635-.578a3.5 3.5 0 0 0-1.635.38 4.5 4.5 0 0 0-1.32 1.046l-1.937-2.017a6.65 6.65 0 0 1 2.373-1.439q1.355-.48 2.81-.48 1.597 0 2.627.406 1.028.406 1.647 1.193.617.788.859 1.931.243 1.145.242 2.645V16.8h-3.341zm-.896-3.74q-.412 0-1.03.037a5.1 5.1 0 0 0-1.186.21q-.57.171-.969.516-.4.345-.4.96 0 .663.558.983.555.32 1.162.32.532 0 1.03-.148.496-.147.883-.418.388-.27.617-.688.23-.419.23-.985v-.787zm5.982-6.715h3.487v1.623h.048q.17-.345.484-.689.315-.344.751-.615.436-.27.992-.442a4.1 4.1 0 0 1 1.211-.173q1.236 0 2.192.517t1.441 1.624q.63-1.156 1.525-1.649.897-.492 2.204-.492 1.187 0 1.998.406t1.283 1.107q.473.702.679 1.648a9.6 9.6 0 0 1 .205 2.03v7.06h-3.632V9.838q0-.836-.351-1.439-.351-.602-1.248-.602-.629 0-1.053.209a1.74 1.74 0 0 0-.677.578q-.256.37-.363.86-.11.493-.11 1.034V16.8h-3.632v-6.322q0-.32-.025-.787a3.2 3.2 0 0 0-.169-.886 1.7 1.7 0 0 0-.473-.713q-.326-.295-.955-.295-.703 0-1.139.258a1.75 1.75 0 0 0-.666.689q-.23.43-.303.971a9 9 0 0 0-.072 1.132V16.8h-3.632zm20.535 0h3.487v1.623h.049q.168-.345.484-.689t.751-.615q.436-.27.993-.442a4 4 0 0 1 1.211-.173q1.234 0 2.191.517t1.441 1.624q.629-1.156 1.526-1.649.895-.492 2.203-.492 1.186 0 1.998.406t1.283 1.107a4.7 4.7 0 0 1 .678 1.648q.207.948.206 2.03v7.06h-3.633V9.838q0-.836-.35-1.439-.351-.602-1.247-.602-.63 0-1.054.209a1.75 1.75 0 0 0-.678.578 2.4 2.4 0 0 0-.363.86 4.7 4.7 0 0 0-.109 1.034V16.8h-3.633v-6.322q0-.32-.023-.787a3.2 3.2 0 0 0-.171-.886 1.7 1.7 0 0 0-.471-.713q-.328-.295-.957-.295-.703 0-1.138.258a1.75 1.75 0 0 0-.666.689q-.23.43-.303.971a9 9 0 0 0-.072 1.132V16.8h-3.633zm31.675 9.889a5.8 5.8 0 0 1-2.203 1.746 6.5 6.5 0 0 1-2.761.615 7.3 7.3 0 0 1-2.555-.442 6.1 6.1 0 0 1-2.083-1.267 6 6 0 0 1-1.392-1.98q-.508-1.158-.509-2.584.001-1.426.509-2.583.51-1.155 1.392-1.98a6.1 6.1 0 0 1 2.083-1.267 7.3 7.3 0 0 1 2.555-.443q1.259 0 2.288.443a4.8 4.8 0 0 1 1.744 1.267q.714.825 1.102 1.98.387 1.156.387 2.583v1.157h-8.427q.218 1.057.945 1.685.727.627 1.791.627.897 0 1.514-.406a4.1 4.1 0 0 0 1.077-1.046zm-3.075-5.265a2.15 2.15 0 0 0-.606-1.599q-.629-.663-1.622-.664-.606 0-1.065.197-.46.197-.788.504a2.2 2.2 0 0 0-.509.714q-.181.405-.205.848zm5.304-4.624h3.632v1.918h.048q.582-1.107 1.38-1.66.8-.554 2.01-.554.316 0 .63.025.315.025.581.098v3.37a4.853 4.853 0 0 0-1.549-.246q-1.041 0-1.647.296a2.2 2.2 0 0 0-.932.824q-.327.529-.425 1.267a13 13 0 0 0-.096 1.623V16.8h-3.632zm15.983 3.517q-.8-1.008-2.107-1.008-.46 0-.896.221-.436.222-.436.763 0 .442.449.652.447.209 1.138.369l1.476.344a5.5 5.5 0 0 1 1.478.578q.689.394 1.138 1.07.448.677.448 1.808 0 1.157-.497 1.907-.496.75-1.271 1.205a5.4 5.4 0 0 1-1.744.64q-.969.184-1.912.184a9.1 9.1 0 0 1-2.495-.356 4.65 4.65 0 0 1-2.131-1.267l2.204-2.485q.509.64 1.126.972.618.332 1.44.332.631 0 1.139-.185.508-.184.508-.676 0-.467-.448-.701a4.8 4.8 0 0 0-1.138-.394l-1.477-.344a6 6 0 0 1-1.477-.554 3.1 3.1 0 0 1-1.138-1.045q-.449-.677-.449-1.808 0-1.058.425-1.82a3.75 3.75 0 0 1 1.114-1.255q.69-.492 1.586-.726a7.2 7.2 0 0 1 1.816-.234q1.162 0 2.349.345t2.01 1.23zM2.953 0h17.72c1.63 0 2.952 1.343 2.952 3v18c0 1.657-1.322 3-2.953 3H2.953C1.323 24 0 22.657 0 21V3c0-1.657 1.322-3 2.953-3"
                  clipRule="evenodd"
                ></path>
                <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                  <path fill="#fff" fillRule="evenodd" d="M2.953 0h17.72c1.63 0 2.952 1.343 2.952 3v18c0 1.657-1.322 3-2.953 3H2.953C1.323 24 0 22.657 0 21V3c0-1.657 1.322-3 2.953-3" clipRule="evenodd"></path>
                </mask>
                <g fill="#fff" fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
                  <path d="M14.536 8.598c-.504.067-2.472-1.177-6.24-3.233-3.288-1.794-2.392.754-2.102 1.45.04.099.05.207.024.31-.124.5-.2 2.385 3.63 6.529.152.165.216.331.096.523l-.041.069c-.525.854 5.018-5.963 4.633-5.648" opacity="0.56"></path>
                  <path d="M14.536 8.598c-.484-.106-.63-.218-2.33-4.21-1.272-2.987-2.5-.156-2.47.602a.5.5 0 0 1-.085.298c-.29.422-1.796 2.766.344 8.021.085.21.07.656-.05.867l-.042.07c-.525.854 5.018-5.963 4.633-5.648" opacity="0.32"></path>
                  <path d="M18.851 8c-.541-.051-.97-.968-1.907-.968-.98 0-2.022 1.25-2.408 1.566-.558.354-3.543.38-7.959.694-3.906.278-2.449 1.344-2 1.619.064.038.095.095.087.162-.039.325.48 1.763 5.073 2.715.43.09.166.457.166.457-.525.854-2.27 3.844-2.829 6.484-.113.536.405-.792 2.547-2.642s4.288-1.523 6.2-4.053c1.913-2.53.97-4.29 3.03-4.834L23.576 8s-4.674.005-4.725 0"></path>
                </g>
              </svg>
            </a>

            {/* Desktop Nav Items */}
            <nav className="DesktopGnbMainMenuListstyle__Container-sc-8ebl73-0 gWGJUZ">
              <a href="https://programmers.co.kr/ai-assessment" target="_self" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 TWuLp">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 iPLFAb">
                      <span>AI 역량평가</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://school.programmers.co.kr" target="_self" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 TWuLp">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 iPLFAb">
                      <span>교육</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://school.programmers.co.kr/learn/KDT" target="_self" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 jQFJxb">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 bCNdHk">
                      <span>데브코스</span>
                      <div className="Badgestyle__TopBadge-sc-1nk09fm-1 heVVVe OneDepthNavItemstyle__StyledBadge-sc-4cmp4x-2 egJyUE">
                        부트캠프
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://school.programmers.co.kr/learn/challenges" target="_self" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 TWuLp">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 iPLFAb">
                      <span>코딩테스트</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://certi.programmers.co.kr" target="_blank" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 TWuLp">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 iPLFAb">
                      <span>인증시험</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://lf.programmers.co.kr" target="_blank" rel="noreferrer">
                <div role="menuitem">
                  <div className="OneDepthNavItemstyle__Content-sc-4cmp4x-0 TWuLp">
                    <div className="OneDepthNavItemstyle__Wrapper-sc-4cmp4x-1 iPLFAb">
                      <span>리눅스 자격증</span>
                    </div>
                  </div>
                </div>
              </a>
            </nav>

            {/* Util Menu */}
            <div className="GlobalHeaderstyle__UtilMenu-sc-16dbplc-4 UUzbh">
              <div className="UtilMenustyle__Container-sc-2sjysx-0 UtilMenustyle__GuestMenuContainer-sc-2sjysx-1 jtcKdu kXgZgI">
                <a href="https://community.programmers.co.kr/blog" className="UtilMenustyle__Link-sc-2sjysx-5 ffrNZQ">
                  블로그
                </a>
                <a href="https://business.programmers.co.kr?locale=ko" className="UtilMenustyle__Link-sc-2sjysx-5 ffrNZQ">
                  기업서비스
                </a>
                {/* Replaced '로그인' with '신청하기' CTA as requested */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="UtilMenustyle__Link-sc-2sjysx-5 UtilMenustyle__BorderedLink-sc-2sjysx-6 ffrNZQ gEbXpR"
                  style={{
                    backgroundColor: '#ff6e42',
                    borderColor: '#ff6e42',
                    color: '#ffffff',
                    fontWeight: 700,
                  }}
                >
                  신청하기
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="모바일 메뉴 열기"
                onClick={() => setMobileMenuOpen(true)}
                className="MobileMenuButtonstyle__MobileMenuButton-sc-9nyyno-0 jmaGzy"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#000" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="GlobalHeaderstyle__MobileGnbContainer-sc-16dbplc-3 hnWdAX is-open" style={{ display: 'block', transform: 'translateX(0)' }}>
            <div className="MobileGnbstyle__Container-sc-yi1ct8-0 iptYYY" style={{ width: '85%', maxWidth: 360, height: '100%', background: '#fff', marginLeft: 'auto' }}>
              <div className="MobileGnbstyle__TopBar-sc-yi1ct8-1 fdDawj">
                <a href="https://programmers.co.kr?locale=ko" aria-label="프로그래머스 로고 링크" className="LogoLinkstyle__LogoLink-sc-pnxc3t-0 kcIizC">
                  <span style={{ fontWeight: 800, fontSize: '18px', color: '#202B3D' }}>programmers</span>
                </a>
                <button
                  type="button"
                  aria-label="모바일 메뉴 닫기"
                  onClick={() => setMobileMenuOpen(false)}
                  className="MobileGnbstyle__CloseButton-sc-yi1ct8-2 blrhyJ"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#000" fillRule="evenodd" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>

              <section className="MobileGnbstyle__Content-sc-yi1ct8-3 bEuIDA">
                <div className="MobileGnbstyle__MainMenuGroup-sc-yi1ct8-4 kSfPwG">
                  <div className="MobileGnbstyle__MainMenuGroupInner-sc-yi1ct8-5 olCjs">
                    <a href="https://programmers.co.kr/ai-assessment" className="MobileGnbMainMenuListstyle__NavMenuItem-sc-1i37ssv-1 gTWLVd">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ"><span>AI 역량평가</span></div>
                    </a>
                    <a href="https://school.programmers.co.kr" className="MobileGnbMainMenuListstyle__NavMenuItem-sc-1i37ssv-1 gTWLVd">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ"><span>교육</span></div>
                    </a>
                    <a href="https://school.programmers.co.kr/learn/KDT" className="MobileGnbMainMenuListstyle__NavMenuItem-sc-1i37ssv-1 cvEPbI">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ">
                        <span>데브코스</span>
                        <div className="Badgestyle__TopBadge-sc-1nk09fm-1 heVVVe MobileGnbMainMenuListstyle__StyledBadge-sc-1i37ssv-4 egngmE">부트캠프</div>
                      </div>
                    </a>
                    <a href="https://school.programmers.co.kr/learn/challenges" className="MobileGnbMainMenuListstyle__NavMenuItem-sc-1i37ssv-1 gTWLVd">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ"><span>코딩테스트</span></div>
                    </a>
                    <a href="https://certi.programmers.co.kr" target="_blank" rel="noreferrer" className="MobileGnbMainMenuListstyle__NavMenuItemExternal-sc-1i37ssv-2 iXNetr">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ"><span>인증시험</span></div>
                    </a>
                    <a href="https://lf.programmers.co.kr" target="_blank" rel="noreferrer" className="MobileGnbMainMenuListstyle__NavMenuItemExternal-sc-1i37ssv-2 iXNetr">
                      <div className="MobileGnbMainMenuListstyle__Wrapper-sc-1i37ssv-3 iqEgCZ"><span>리눅스 자격증</span></div>
                    </a>
                    <a href="https://community.programmers.co.kr/blog" className="MobileGnbstyle__MenuItem-sc-yi1ct8-6 MobileGnbstyle__UtilMenuItem-sc-yi1ct8-7 blAKHL hFirbw">
                      블로그
                    </a>
                    <a href="https://business.programmers.co.kr?locale=ko" className="MobileGnbstyle__MenuItem-sc-yi1ct8-6 MobileGnbstyle__UtilMenuItem-sc-yi1ct8-7 blAKHL hFirbw">
                      기업서비스
                    </a>
                  </div>
                  {/* Replaced '로그인' with '신청하기' CTA as requested */}
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="MobileGnbstyle__BorderedLink-sc-yi1ct8-8 elHPCb"
                    style={{
                      backgroundColor: '#ff6e42',
                      borderColor: '#ff6e42',
                      color: '#ffffff',
                      fontWeight: 700,
                      textAlign: 'center',
                      display: 'block',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      marginTop: '24px',
                      textDecoration: 'none',
                      fontSize: '15px',
                    }}
                  >
                    신청하기
                  </a>
                </div>
              </section>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
