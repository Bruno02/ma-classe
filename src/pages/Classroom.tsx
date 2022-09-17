import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectStudents } from 'src/reducers/students';

const Classroom: React.FC = () => {
  const students = useSelector(selectStudents);

  return (
    <div>
      <h1>Class room</h1>
      {students.map((student) => (
        <Link to={`/students/${student.id}`} key={student.id}>
          <div>{`${student.firstname} ${student.lastname}`}</div>
        </Link>
      ))}
    </div>
  );
};

export default Classroom;
