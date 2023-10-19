import { create } from 'zustand'

export type SidebarNavigationStoreState = {
  open: boolean
}
export type SidebarNavigationStoreAction = {
  openSidebarNavigation: () => void
  closeSidebarNavigation: () => void
}

export const useSidebarNavigationStore = create<
  SidebarNavigationStoreState & SidebarNavigationStoreAction
>((set) => ({
  open: false,

  openSidebarNavigation: () => set({ open: true }),
  closeSidebarNavigation: () => set({ open: false }),
}))
