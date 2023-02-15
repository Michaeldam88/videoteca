import { User } from "firebase/auth";
import { UserAction } from "./action.creators";
import { userActionTypes } from "./action.types";

export function userReducer(
    state: Partial<User> | null,
    action: UserAction
): Partial<User> | null {
    switch (action.type) {
        case userActionTypes.addUser:
            return action.payload;
        case userActionTypes.removeUser:
            return action.payload;
        default:
            return state;
    }
}
