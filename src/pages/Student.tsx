import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'src/components/buttons';
import { Input } from 'src/components/input';
import { Link } from 'src/components/links';
import { H3 } from 'src/components/texts';
import {
  editStudent,
  selectEditingStudent,
  updateStudent,
} from 'src/reducers/students';
import { IStudentRouteParams } from 'src/router';

const Student: React.FC = () => {
  const { studentId } = useParams<IStudentRouteParams>();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const student = useSelector(selectEditingStudent);

  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [address, setAddress] = useState<string>();

  const [canValidate, setCanValidate] = useState(false);

  useEffect(() => {
    if (studentId) {
      dispatch(editStudent(studentId));
    }
  }, [studentId]);

  useEffect(() => {
    if (student) {
      setFirstname(student.firstname);
      setLastname(student.lastname);
      setAddress(student.address);
    }
  }, [student]);

  useEffect(() => {
    setCanValidate(!!firstname && !!lastname);
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
      updateStudent({
        id: studentId,
        firstname,
        lastname,
        address,
      })
    );

    navigate('/');
  };

  return (
    <div>
      <Link to="/">
        <H3>Retour</H3>
      </Link>
      <H3>{`Student: ${student?.firstname} ${student?.lastname}`}</H3>
      <div>
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
      </div>
      <Button onClick={handleOnValidate} isDisabled={!canValidate}>
        Valider
      </Button>
    </div>
  );
};

export default Student;
