import React from 'react';
import { ProjectsTemplate } from '@templates/project';

const ProjectPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <ProjectsTemplate
      title={entry.getIn(['data', 'title'])}
      type={entry.getIn(['data', 'type'])}
      image={data && data.images ? data.images[0] : null}
      content={widgetFor('body')}
    />
  );
};

export default ProjectPreview;
