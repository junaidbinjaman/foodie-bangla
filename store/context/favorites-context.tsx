import { createContext, ReactNode, useState } from "react";

type FavoriteContextType = {
    ids: number[];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

type FavoriteContextProviderProps = {
    children: ReactNode;
};

function FavoriteContextProvider({ children }: FavoriteContextProviderProps) {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    const addFavorite = (id: number) => {
        setFavoriteIds((current) => [...current, id]);
    };

    const removeFavorite = (id: number) => {
        setFavoriteIds((current) => current.filter((favoriteId) => favoriteId !== id));
    };

    const value: FavoriteContextType = {
        ids: favoriteIds,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContextProvider;
