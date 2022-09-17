import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'src/components/links';
import { H3 } from 'src/components/texts';
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
      <Link to="/">
        <H3>Retour</H3>
      </Link>
      <H3>{`Student: ${student?.firstname} ${student?.lastname}`}</H3>
    </div>
  );
};

export default Student;
