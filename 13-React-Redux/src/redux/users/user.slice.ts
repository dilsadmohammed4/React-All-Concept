import {IUsers} from "../../models/IUsers";
import {createSlice, isRejectedWithValue, SerializedError} from "@reduxjs/toolkit";
import * as userActions from "../users/user.actions"

export const userFeature = "userFeature";

export interface IniatialState {
    loading: boolean,
    users: IUsers[],
    errorMessage: SerializedError
}

const initialState: IniatialState = {
    loading: false,
    users: [] as IUsers[],
    errorMessage: {} as SerializedError
}

// reducer:if we're dealing with internal/local state.
// extra reducer:if we're dealing with external state like server connection and all.
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userActions.getAllUsersAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getAllUsersAction.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false
        }).addCase(userActions.getAllUsersAction.rejected, (state, action) => {
            state.loading = false;
            if (isRejectedWithValue(action)) {
                console.log(action.payload)
            }
        })
    }
})