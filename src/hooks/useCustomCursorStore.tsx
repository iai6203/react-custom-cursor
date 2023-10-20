import { create } from 'zustand'

type Status = 'default' | 'view'

export type CustomCursorStoreState = {
  status: Status
}
export type CustomCusorStoreAction = {
  setStatus: (status: Status) => void
}

export const useCustomCursorStore = create<
  CustomCursorStoreState & CustomCusorStoreAction
>((set) => ({
  status: 'default',

  setStatus: (status) => set({ status }),
}))
