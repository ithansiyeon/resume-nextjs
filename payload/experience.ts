import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '소만사',
      positions: [
        {
          title: '플랫폼 1팀 / 웹개발자 (주임)',
          startedAt: '2024-04',
          descriptions: [
            '내부 정보 유출 방지 및 개인정보 보호를 주요 사업으로 하는 국내 보안 솔루션 기업 (370명~, 플랫폼1팀 8명)',
            'Mail-i, WebKeeper, DB-i, WSG-VA, WAS-i 웹 기반 보안 솔루션 개발 및 유지보수 담당',
            '정책 UX 개선 및 데이터베이스 할당 결재 및 세션 관련 대시보드 시스템 개발',
            '고객사 환경 및 요구사항에 따른 사이트별 커스터마이징 유지보수 및 기능 개선',
            'Cursor를 활용한 개발 및 수정 작업 효율화',
            '시큐어 코딩 가이드라인을 준수한 안정성 중심 개발 수행',
          ],
          skillKeywords: ['Java', 'Spring', 'Postgres', 'Elasticsearch', 'JSP', 'Jenkins'],
        },
      ],
    },
    {
      title: '아이비김영',
      positions: [
        {
          title: '웹 개발팀 / 웹개발자 (사원)',
          startedAt: '2023-05',
          endedAt: '2024-02',
          descriptions: [
            '대학·대학원·전문대 진학을 위한 입시·편입 전문 교육 서비스 기업 (199명~, 웹개발팀 5명)',
            '유니스터디 PHP 기반 기존 웹 시스템을 Spring Boot 기반 구조로 전환하는 프로젝트에 참여',
            '교육 운영을 위한 관리자 웹 시스템 및 고객센터 화면 개발',
            '공통 기능 모듈화 및 유틸리티 개발, Spring Boot 기반 배치 처리 구성',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JPA',
            'MyBatis',
            'QueryDSL',
            'Aurora DB',
            'Redis',
            'Thymeleaf',
            'EC2',
            'S3',
            'GitLab',
            'Jenkins',
            'Confluence',
          ],
        },
      ],
    },
    {
      title: '이편한정보기술',
      positions: [
        {
          title: '디지털사업팀 / 웹개발자 (사원)',
          startedAt: '2020-11',
          endedAt: '2023-04',
          descriptions: [
            '소프트웨어 개발·공급 및 SI를 기반으로 ERP·CRM 솔루션을 제공하는 기업 (98명~, 개발팀 3~5명)',
            '라이나생명 보험사 프로젝트 QA 시스템 개발팀에 소속되어 웹 개발 및 유지보수 담당',
            '보험 상품 및 업무 처리 이전 단계에서 오류를 사전에 검증하는 선 QA 프로젝트에 참여하여 관련 기능을 개발',
            'QA 응답 정확도 개선을 위한 로직 보완 및 운영 편의를 위한 수동 배치 관리 화면 개발',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'Oracle', 'JSP', 'WebLogic', 'Jenkins', 'NCRM'],
        },
      ],
    },
  ],
};

export default experience;
