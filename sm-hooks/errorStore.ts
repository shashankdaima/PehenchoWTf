import { create } from 'zustand'

export const errorStore = create((set) => ({
    error: undefined,
    setError: (errorMessage: string) => set((_) => ({ error: errorMessage })),
}))