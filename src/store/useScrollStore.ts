import create from 'zustand'

interface Scroll {
  isScrolling: boolean
  scrollY: number
  scrollToTop: () => void
  setScrollY: (value: number) => void
}

const useScrollStore = create<Scroll>(set => ({
  isScrolling: false,
  scrollY: 0,
  setScrollY: value => set(() => ({ scrollY: value })),
  scrollToTop: () => {
    set(() => ({ isScrolling: true }))
    setTimeout(() => set(() => ({ isScrolling: false })), 1000)
  },
}))

export default useScrollStore
