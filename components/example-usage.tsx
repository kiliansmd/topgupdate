"use client"
import { Button } from "@/components/ui/button"
import { DetailModal } from "@/components/ui/detail-modal"
import { useModal } from "@/hooks/use-modal"

export function ExampleUsage() {
  const { isOpen, modalData, openModal, closeModal } = useModal()

  const openExampleModal = () => {
    openModal({
      title: "Beispiel-Modal",
      content: "Dies ist ein Beispielinhalt für das Modal.",
    })
  }

  return (
    <div>
      <Button onClick={openExampleModal}>Modal öffnen</Button>

      <DetailModal isOpen={isOpen} onClose={closeModal} title={modalData?.title}>
        <div className="p-4">
          <p>{modalData?.content}</p>
        </div>
      </DetailModal>
    </div>
  )
}
