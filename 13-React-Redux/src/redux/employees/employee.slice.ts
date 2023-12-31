import {createSlice} from "@reduxjs/toolkit";
import {IEmployees} from "../../models/IEmployees";
import {EmployeeService} from "../../services/EmployeeService";
export const employeeFeature = "employeeFeature";

export interface InitialState {
    employees: IEmployees[]
}

const initialState: InitialState = {
    employees: EmployeeService.getAllEmployees()
}
export const employeeSlice = createSlice({
    name: 'employeeSlice',
    initialState: initialState,
    reducers: {
        updateEmployeeSelect: (state, action) => {
            const {empId} = action.payload;
            state.employees = state.employees.map(employee => {
                if (employee.id === empId) {
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                } else return employee;
            });
        }
    }
});
export const {updateEmployeeSelect} = employeeSlice.actions;