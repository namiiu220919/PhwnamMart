import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MeatData from '../data/MeatData';
import FishData from '../data/FishData';

export const useStore = create(
    persist(
        (set, get) => ({
            MeatList: MeatData,
            FishList: FishData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: [],
        }), 
        { 
            name: 'phwnammart', 
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);