"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "unternehmen",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log(formState)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Angepasst mit zusätzlichem Padding-Top */}
      <section className="relative min-h-[50vh] flex items-center pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block glass-button px-6 py-2 text-sm font-medium mb-8">Kontakt</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sprechen Sie mit <span className="gradient-text">uns</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns noch
              heute.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rest der Seite bleibt unverändert */}
      {/* Contact Section */}
      <section className="section-padding bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">Kontaktinformationen</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">E-Mail</h3>
                    <p className="text-white/70">info@getexperts.de</p>
                    <p className="text-white/70">bewerbung@getexperts.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Telefon</h3>
                    <p className="text-white/70">+49 (0) 123 456 789</p>
                    <p className="text-white/70">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Adresse</h3>
                    <p className="text-white/70">
                      GetExperts GmbH
                      <br />
                      Expertstraße 123
                      <br />
                      10115 Berlin
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">Standorte</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Berlin", "München", "Hamburg"].map((city, index) => (
                    <div key={index} className="glass-card p-4 text-center">
                      <p className="font-medium">{city}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-xl">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Kontaktformular</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="inquiryType">Art der Anfrage</Label>
                        <RadioGroup
                          value={formState.inquiryType}
                          onValueChange={handleRadioChange}
                          className="flex space-x-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="unternehmen" id="unternehmen" />
                            <Label htmlFor="unternehmen">Unternehmen</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="experte" id="experte" />
                            <Label htmlFor="experte">Experte/Bewerber</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sonstiges" id="sonstiges" />
                            <Label htmlFor="sonstiges">Sonstiges</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="bg-black/50 border-white/20 mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="bg-black/50 border-white/20 mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="bg-black/50 border-white/20 mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Unternehmen</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="bg-black/50 border-white/20 mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Nachricht *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="bg-black/50 border-white/20 mt-1"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="primary-button w-full">
                      Nachricht senden <Send className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-white/60 text-center">
                      Mit dem Absenden des Formulars stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full p-4">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Vielen Dank!</h2>
                  <p className="text-white/80 mb-8">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="glass-button">
                    Neues Formular
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-black/90 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card p-1 rounded-xl overflow-hidden">
            <div className="aspect-video w-full bg-black/50 flex items-center justify-center">
              <p className="text-white/60">Hier würde eine interaktive Karte mit dem Standort angezeigt werden.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
