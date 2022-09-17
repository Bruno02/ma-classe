import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

const NAME = 'students';

export interface IStudent {
  id?: number;
  firstname: string;
  lastname: string;
  address: string;
}

export interface IState {
  students: IStudent[];
  editingStudent?: IStudent;
}

const initialState: IState = {
  students: [],
};

export const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    createStudent: (state, action: PayloadAction<IStudent>) => {
      const student = action.payload;
      state.students = [
        ...state.students,
        {
          id: Date.now(),
          ...student,
        },
      ];
    },
    updateStudent: (state, action: PayloadAction<IStudent>) => {
      const student = action.payload;
      state.students = state.students.map((std) =>
        std.id === student.id ? student : std
      );
    },
    deleteStudent: (state, action: PayloadAction<IStudent>) => {
      const student = action.payload;
      state.students = state.students.filter((std) => std.id !== student.id);
    },
    editStudent: (state, action: PayloadAction<number>) => {
      const studentId = action.payload;
      state.editingStudent = state.students.find((std) => std.id === studentId);
    },
  },
});

export const { createStudent } = slice.actions;

export const selectStudents = (state: RootState) => state.students.students;
export const selectEditingStudent = (state: RootState) =>
  state.students.editingStudent;

export default slice.reducer;
