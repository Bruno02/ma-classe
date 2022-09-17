import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'src/components/links';
import { H1, H3 } from 'src/components/texts';
import { selectStudents } from 'src/reducers/students';

const Classroom: React.FC = () => {
  const students = useSelector(selectStudents);

  return (
    <div>
      <H1>Class room</H1>
      {students.map((student) => (
        <Link to={`/students/${student.id}`} key={student.id}>
          <H3>{`${student.firstname} ${student.lastname}`}</H3>
        </Link>
      ))}
    </div>
  );
};

export default Classroom;
