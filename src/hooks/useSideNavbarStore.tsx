import { create } from 'zustand'

type SideNavbarStoreState = {
  open: boolean
}
type SideNavbarStoreAction = {
  openNavbar: () => void
  closeNavbar: () => void
}

export const useSideNavbarStore = create<
  SideNavbarStoreState & SideNavbarStoreAction
>((set) => ({
  open: false,

  openNavbar: () => set({ open: true }),
  closeNavbar: () => set({ open: false }),
}))
