import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/buttons';
import { Link } from 'src/components/links';
import { H1, H3 } from 'src/components/texts';
import { selectStudents } from 'src/reducers/students';
import { NEW_STUDENT } from './Student';

const Classroom: React.FC = () => {
  const navigate = useNavigate();
  const students = useSelector(selectStudents);

  const handleAddStudent = () => navigate(`/students/${NEW_STUDENT}`);

  return (
    <div>
      <H1>Ma classe</H1>
      <Button onClick={handleAddStudent}>Ajouter un élève</Button>
      {students.map((student) => (
        <Link to={`/students/${student.id}`} key={student.id}>
          <H3>{`${student.firstname} ${student.lastname}`}</H3>
        </Link>
      ))}
    </div>
  );
};

export default Classroom;
