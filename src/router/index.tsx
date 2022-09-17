import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Classroom from 'src/pages/Classroom';
import Student from 'src/pages/Student';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Classroom />,
  },
  {
    path: '/student/:studentId',
    element: <Student />,
  },
]);

export type IStudentRouteParams = {
  studentId: string;
};
