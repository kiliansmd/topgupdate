"use client"

import { useState, useCallback } from "react"

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<any>(null)

  const openModal = useCallback((data?: any) => {
    setModalData(data)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Optional: Clear data after animation completes
    setTimeout(() => setModalData(null), 300)
  }, [])

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  }
}
