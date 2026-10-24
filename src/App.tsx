/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { TopbarAndSticky } from './components/TopbarAndSticky';
import { MainVisualAndIntro } from './components/MainVisualAndIntro';
import { ReasonsAndDiff } from './components/ReasonsAndDiff';
import { CurriculumAndProject } from './components/CurriculumAndProject';
import { MentorsAndLectures } from './components/MentorsAndLectures';
import { ProcessAndFaq } from './components/ProcessAndFaq';

export default function App() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  return (
    <div className="learn-courses learn-courses-show" data-ns="Learn" data-controller="courses" data-action="show">
      {/* Toast popup */}
      {toast && <div className="toast-notice">{toast}</div>}

      {/* 최상단 GnbHeader 제거 완료 */}

      <div data-edu-component="school">
        <div></div>
      </div>

      <div className="container"></div>

      <div className="main">
        {/* Fullpage Topbar & Sticky Live Countdown Banner */}
        <TopbarAndSticky onShowToast={showToast} />

        <div data-edu-component="course-detail-basic-banner"></div>

        {/* Introduction / Core Landing Page Content */}
        <section id="introduction">
          <div className="markdown github">
            <div id="landingPage" className="be">
              {/* Main Visual, Schedule, Sticky Nav, Claude Max Benefit, Mock Interview, Company Project, Intros */}
              <MainVisualAndIntro />

              {/* Reasons 1-4, Devcourse Comparison, and Message Box */}
              <ReasonsAndDiff />

              {/* Curriculum and Project Section */}
              <CurriculumAndProject />

              {/* Mentoring, Practical Lectures, Student Benefits, Beginner Support, Reviews, After Channel */}
              <MentorsAndLectures />

              {/* Process, Convenience Functions, and FAQ */}
              <ProcessAndFaq />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
