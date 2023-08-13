import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import {UserService} from "../../services/UserService";
import {IUsers} from "../../models/IUsers";

export const getAllUsersAction: any = createAsyncThunk('users/getAllUsersAction', async (data, {rejectWithValue}): Promise<IUsers[] | any> => {
    try {
        const response = await UserService.getAllUsers();
        return response.data
    } catch (error: any) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
});