import React from 'react';

import Layout from '@common/Layout';
import Header from '@common/Header';
import Courses from '@components/Courses';

import student from '@settings/student.yml';

const CoursesPage = () => (
  <Layout>
    <Header data={student} />
    <Courses data={student} />
  </Layout>
);

export default CoursesPage;
