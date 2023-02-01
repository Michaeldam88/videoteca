import { useState } from 'react';
import { UserStructure } from '../types/userStructure';



export type UseUser = {
    user: Partial<UserStructure> | null;
    setUser: React.Dispatch<
        React.SetStateAction<null | Partial<UserStructure>>
    >;
};

export function useUser(): UseUser {
    const [user, setUser] = useState<null | Partial<UserStructure>>(null);

    return {
        setUser,
        user,
    };
}
