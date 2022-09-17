import React from 'react';
import { useParams } from 'react-router-dom';
import { IStudentRouteParams } from 'src/router';

const Student: React.FC = () => {
  const { studentId } = useParams<IStudentRouteParams>();
  return <div>`Student ${studentId}`</div>;
};

export default Student;
