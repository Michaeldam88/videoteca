import { User } from "firebase/auth";
import { UserAction } from "./action.creators";
import { userActionTypes } from "./action.types";

export function userReducer(
    state: User | null,
    action: UserAction
): User | null {
    switch (action.type) {
        case userActionTypes.addUser:
            return (state = action.payload);
        case userActionTypes.removeUser:
            return (state = action.payload);
        default:
            return state;
    }
}
