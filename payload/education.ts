import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '강남 쌍용교육센터',
      subTitle: 'Java 기반 멀티 플랫폼 응용 SW개발자 양성 과정',
      startedAt: '2020-04',
      endedAt: '2020-09',
    },
    {
      title: 'KG ITBANK',
      subTitle: '네트워크 기초',
      startedAt: '2019-03',
      endedAt: '2019-04',
    },
    {
      title: '가톨릭대학교',
      subTitle: '정보통신전자공학부',
      startedAt: '2016-03',
      endedAt: '2020-02',
    },
    {
      title: '잠실여자고등학교',
      subTitle: '자연계열',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
