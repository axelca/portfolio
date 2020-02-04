import React from 'react';

import Layout from '@common/Layout';
import Header from '@common/Header';

import student from '@settings/student.yml';

const NotFoundPage = () => (
  <Layout>
    <Header data={student} />
    <div style={{ textAlign: 'center' }}>404 :(</div>
  </Layout>
);

export default NotFoundPage;
