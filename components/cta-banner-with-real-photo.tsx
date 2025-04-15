import Image from "next/image"

// Beispiel für die Verwendung des tatsächlichen Fotos
// Ersetzen Sie die Platzhalter-Bildpfade mit dem tatsächlichen Bildpfad

export default function CTABannerWithRealPhoto() {
  return (
    <div className="example-wrapper">
      {/* Für mobile Ansicht: */}
      <Image
        src="/images/daniela-sentesch.jpg"
        alt="Daniela Sentesch - Senior Recruiting Consultant"
        width={96}
        height={96}
        className="object-cover"
        priority={false}
        loading="lazy"
      />

      {/* Für Desktop-Ansicht: */}
      <Image
        src="/images/daniela-sentesch.jpg"
        alt="Daniela Sentesch - Senior Recruiting Consultant"
        width={128}
        height={128}
        className="object-cover"
        priority={false}
        loading="lazy"
      />
    </div>
  )
}
