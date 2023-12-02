"use client"

import React, { useState, createContext, type ReactNode } from "react";

// コンテキストの型を定義
interface LikeJobContextType {
    likedJobIds: string[];
    setLikedJobIds: (likedJobIds: string[]) => void;
}

// デフォルト値を持つコンテキストを作成
export const LikeJobContext = createContext<LikeJobContextType>({
    likedJobIds: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLikedJobIds: () => { },
});

// LikeJobProvider の Props の型を定義
interface LikeJobProviderProps {
    children: ReactNode;
}

export const LikeJobProvider: React.FC<LikeJobProviderProps> = ({ children }) => {
    const [likedJobIds, setLikedJobIds] = useState<string[]>([]);

    return (
        <LikeJobContext.Provider value={{ likedJobIds, setLikedJobIds }}>
            {children}
        </LikeJobContext.Provider>
    );
};
