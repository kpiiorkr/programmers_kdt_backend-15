import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL, COURSE_TITLE, RECRUIT_DEADLINE } from '../utils/constants';
import { calculateTimeRemaining, padZero } from '../utils/countdown';

interface TopbarAndStickyProps {
  onShowToast: (msg: string) => void;
}

export const TopbarAndSticky: React.FC<TopbarAndStickyProps> = ({ onShowToast }) => {
  const [time, setTime] = useState(() => calculateTimeRemaining(new Date(), RECRUIT_DEADLINE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(new Date(), RECRUIT_DEADLINE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dayStr = padZero(time.days);
  const hourStr = padZero(time.hours);
  const minStr = padZero(time.minutes);
  const secStr = padZero(time.seconds);

  return (
    <>
      {/* Fullpage Topbar */}
      <div className="fullpage-topbar-wrapper kdt-common-form-top-banner">
        <div className="fullpage-topbar container">
          <div className="main-area">
            <h3 className="course-title">{COURSE_TITLE}</h3>
            {/* course-tools (알림 신청, 수업 미리보기, 공유하기 버튼 그룹) 제거 완료 */}
          </div>

          <div className="buttons-area">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              수업 신청
            </a>
          </div>
        </div>
      </div>

      {/* Floating Sticky Banner with Live Countdown */}
      <div data-edu-component="floating-banner" className="">
        <div>
          <div className="KdtStickyBannerstyle__KdtStickyBannerStyle-sc-zyngsb-0 enXPzs kdt-common-form-top-sticky-banner">
            <div className="KdtStickyBannerstyle__Content-sc-zyngsb-1 jmNwGa">
              <div className="KdtStickyBannerstyle__Title-sc-zyngsb-2 fjrSpl">
                <span>모집 종료까지</span>
                <strong>
                  <span className="fixed-width-digit">{dayStr[0]}</span>
                  <span className="fixed-width-digit">{dayStr[1] || dayStr[0]}</span>
                  <span>일</span>
                  <span> </span>
                  <span className="fixed-width-digit">{hourStr[0]}</span>
                  <span className="fixed-width-digit">{hourStr[1]}</span>
                  <span>시</span>
                  <span>간</span>
                  <span> </span>
                  <span className="fixed-width-digit">{minStr[0]}</span>
                  <span className="fixed-width-digit">{minStr[1]}</span>
                  <span>분</span>
                  <span> </span>
                  <span className="fixed-width-digit">{secStr[0]}</span>
                  <span className="fixed-width-digit">{secStr[1]}</span>
                  <span>초</span>
                </strong>
              </div>

              <div className="KdtStickyBannerstyle__ButtonArea-sc-zyngsb-3 eUIYDM sticky">
                {/* 스티키 바의 종 모양 알림신청 버튼 제거 후 '수업 신청' 버튼만 배치 */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Buttonstyle__Button-sc-123nygg-0 hFnJXM"
                >
                  수업 신청
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
