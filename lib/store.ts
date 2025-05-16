import type { User } from "firebase/auth";
import { atom } from "jotai";

export const userStore = atom<User | null>(null);
