import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'src/components/buttons';
import { Form } from 'src/components/form';
import { Input } from 'src/components/input';
import { Page } from 'src/components/layout';
import { Link } from 'src/components/links';
import { H1, H3 } from 'src/components/texts';
import {
  createStudent,
  editStudent,
  selectEditingStudent,
  updateStudent,
} from 'src/reducers/students';
import { IStudentRouteParams } from 'src/router';

export const NEW_STUDENT = 'new';

const Student: React.FC = () => {
  const { studentId } = useParams<IStudentRouteParams>();
  const creationMode = studentId === NEW_STUDENT;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const student = useSelector(selectEditingStudent);

  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [address, setAddress] = useState<string>();

  const [canValidate, setCanValidate] = useState(false);

  useEffect(() => {
    if (!creationMode && studentId) {
      dispatch(editStudent(studentId));
    }
  }, [studentId]);

  useEffect(() => {
    if (!creationMode && student) {
      setFirstname(student.firstname);
      setLastname(student.lastname);
      setAddress(student.address);
    }
  }, [student]);

  useEffect(() => {
    setCanValidate(!!firstname && !!lastname && !!address);
  }, [firstname, lastname, address]);

  const handleOnChange =
    (action: React.Dispatch<React.SetStateAction<string | undefined>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      action(event.target.value);

  const handleOnValidate = () => {
    if (!firstname || !lastname || !address) {
      return;
    }

    dispatch(
      creationMode
        ? createStudent({
            firstname,
            lastname,
            address,
          })
        : updateStudent({
            id: studentId,
            firstname,
            lastname,
            address,
          })
    );

    navigate('/');
  };

  return (
    <Page>
      <Link to="/">
        <H3>{`← Retour`}</H3>
      </Link>
      <H1>{creationMode ? 'Nouvel élève' : `${firstname} ${lastname}`}</H1>
      <Form>
        <Input
          placeholder="Prénom"
          value={firstname}
          onChange={handleOnChange(setFirstname)}
        />
        <Input
          placeholder="Nom"
          value={lastname}
          onChange={handleOnChange(setLastname)}
        />
        <Input
          placeholder="Adresse"
          value={address}
          onChange={handleOnChange(setAddress)}
        />
        <br />
        <Button onClick={handleOnValidate} isDisabled={!canValidate}>
          {creationMode ? 'Ajouter' : 'Modifier'}
        </Button>
      </Form>
    </Page>
  );
};

export default Student;
