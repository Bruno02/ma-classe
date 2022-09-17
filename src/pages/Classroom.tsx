import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/buttons';
import { Page } from 'src/components/layout';
import { Link } from 'src/components/links';
import { Row } from 'src/components/list';
import { H1 } from 'src/components/texts';
import { selectStudents } from 'src/reducers/students';
import { NEW_STUDENT } from './Student';

const Classroom: React.FC = () => {
  const navigate = useNavigate();
  const students = useSelector(selectStudents);

  const handleAddStudent = () => navigate(`/students/${NEW_STUDENT}`);

  return (
    <Page>
      <H1>Ma classe</H1>
      <Button onClick={handleAddStudent}>Ajouter un élève</Button>
      {students.map((student) => (
        <Link to={`/students/${student.id}`} key={student.id}>
          <Row animated>{`${student.firstname} ${student.lastname}`}</Row>
        </Link>
      ))}
    </Page>
  );
};

export default Classroom;
