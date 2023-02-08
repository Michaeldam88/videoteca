export function firebaseReducer(
    state: Array<PlaceStructure>,
    action: FirebaseAction
): Array<PlaceStructure> {
    switch (action.type) {
        case firebaseActionTypes.delete:
            const finalId = action.payload as PlaceStructure['id'];
            return state.filter((item) => item.id !== finalId);
        default:
            return [...state];
    }
}
