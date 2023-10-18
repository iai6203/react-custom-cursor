import { create } from 'zustand'

type Status = 'default' | 'navbar' | 'highlight'
export type CustomCursorStoreState = {
  status: Status
}
export type CustomCursorStoreAction = {
  setStatus: (status: Status) => void
}

export const useCustomCursorStore = create<
  CustomCursorStoreState & CustomCursorStoreAction
>((set) => ({
  status: 'default',

  setStatus: (status) => set({ status }),
}))
