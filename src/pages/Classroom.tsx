import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton } from 'src/components/buttons';
import { Page } from 'src/components/layout';
import { Link } from 'src/components/links';
import { List, Row } from 'src/components/list';
import { H1 } from 'src/components/texts';
import { deleteStudent, IStudent, selectStudents } from 'src/reducers/students';
import styled from 'styled-components';
import { NEW_STUDENT } from './Student';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Classroom: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  const handleAddStudent = () => navigate(`/students/${NEW_STUDENT}`);
  const handleDeleteStudent = (student: IStudent) => () =>
    dispatch(deleteStudent(student));

  return (
    <Page>
      <H1>Ma Classe</H1>
      <Button onClick={handleAddStudent}>Ajouter un élève</Button>
      {students.map((student) => (
        <Item key={student.id}>
          <Link to={`/students/${student.id}`} fullWidth>
            <Row animated>{`${student.firstname} ${student.lastname}`}</Row>
          </Link>
          <IconButton
            onClick={handleDeleteStudent(student)}
            title="Supprimer"
          >{`╳`}</IconButton>
        </Item>
      ))}
    </Page>
  );
};

export default Classroom;
