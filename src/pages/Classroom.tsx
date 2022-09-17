import React from 'react';
import { useSelector } from 'react-redux';
import { selectStudents } from 'src/reducers/students';

const Classroom: React.FC = () => {
  const students = useSelector(selectStudents);

  return (
    <div>
      <h1>Class room</h1>
      {students.map((student) => (
        <div key={student.id}>{`${student.firstname} ${student.lastname}`}</div>
      ))}
    </div>
  );
};

export default Classroom;
