import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editStudent, selectEditingStudent } from 'src/reducers/students';
import { IStudentRouteParams } from 'src/router';

const Student: React.FC = () => {
  const { studentId } = useParams<IStudentRouteParams>();

  const dispatch = useDispatch();
  const student = useSelector(selectEditingStudent);

  useEffect(() => {
    if (studentId) {
      dispatch(editStudent(studentId));
    }
  }, [studentId]);

  return (
    <div>
      <Link to="/">Retour</Link>
      <div>{`Student: ${student?.firstname} ${student?.lastname}`}</div>
    </div>
  );
};

export default Student;
