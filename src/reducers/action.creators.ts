export type MovieAction = {
    type: string;
    payload: Array<PlaceStructure> | PlaceStructure | PlaceStructure['id'];
};

export type FirebaseAction = {
    type: string;
    payload: Array<PlaceStructure> | PlaceStructure | PlaceStructure['id'];
};

export const placeLoadCreator = (
    payload: Array<PlaceStructure>
): PlaceAction => ({
    type: placeActionTypes.load,
    payload,
});

