import React from 'react';

import Layout from '@common/Layout';
import Header from '@common/Header';
import Resume from '@components/Resume';

import student from '@settings/student.yml';
import resume from '@settings/resume.yml';

const ResumePage = () => (
  <Layout>
    <Header data={student} />
    <Resume data={resume} student={student} />
  </Layout>
);

export default ResumePage;
