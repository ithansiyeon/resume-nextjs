import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [{ title: 'Java' }, { title: 'JavaScript' }, { title: 'Python' }],
};

const persistence: ISkill.Skill = {
  category: 'Data Access',
  items: [{ title: 'JPA' }, { title: 'MyBatis' }, { title: 'QueryDSL' }],
};

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Spring Boot' },
    { title: 'Spring' },
    { title: 'Spring Batch' },
    { title: 'Quartz Scheduler' },
    { title: 'Servlet' },
    { title: 'Django' },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    { title: 'JSP' },
    { title: 'Thymeleaf' },
    { title: 'jQuery' },
    { title: 'HTML' },
    { title: 'CSS' },
  ],
};

const databases: ISkill.Skill = {
  category: 'Database & Search',
  items: [
    { title: 'PostgreSQL' },
    { title: 'Oracle' },
    { title: 'MySQL' },
    { title: 'Elasticsearch' },
    { title: 'MariaDB' },
  ],
};

const toolsAndIDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Jenkins' },
    { title: 'Git' },
    { title: 'IntelliJ IDEA' },
    { title: 'Confluence' },
    { title: 'VS Code' },
    { title: 'GitHub' },
    { title: 'Eclipse' },
    { title: 'Linux' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, backend, persistence, databases, frontend, toolsAndIDEs],
};

export default skill;
