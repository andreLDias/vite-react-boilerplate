import '@testing-library/jest-dom'

// Mock para ResizeObserver (necessário para alguns componentes React)
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
})
