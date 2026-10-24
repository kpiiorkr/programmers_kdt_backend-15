import React from 'react';
import { GOOGLE_FORM_URL } from '../utils/constants';

const navItems = [
  { name: '데브코스 소개', targetId: 'section-main-visual' },
  { name: '커리큘럼', targetId: 'section-curriculum' },
  { name: '프로젝트', targetId: 'section-project' },
  { name: '혜택', targetId: 'section-benefits' },
  { name: '지원 절차', targetId: 'section-process' },
  { name: '자주 묻는 질문', targetId: 'section-faq' },
];

export const StickyNav: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 60;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky-navigation-main">
      <div
        className="list"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* 중앙 메뉴 탭 (가운데 정렬 고정) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <button key={item.targetId} type="button" onClick={() => scrollTo(item.targetId)}>
              <p>{item.name}</p>
            </button>
          ))}
        </div>

        {/* 오른쪽 끝으로 밀어낸 주황색 수업 신청 버튼 */}
        <div
          className="sticky-nav-cta-wrap"
          style={{
            position: 'absolute',
            right: '24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#ff6e42',
              color: '#ffffff',
              border: '1px solid #ff6e42',
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '6px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(255, 110, 66, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e55a30';
              e.currentTarget.style.borderColor = '#e55a30';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6e42';
              e.currentTarget.style.borderColor = '#ff6e42';
            }}
          >
            수업 신청
          </a>
        </div>
      </div>
    </div>
  );
};
