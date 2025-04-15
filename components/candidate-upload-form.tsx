"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, CheckCircle, Clock, FileText, X, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CandidateUploadFormProps {
  variant?: "dark" | "light"
  className?: string
}

export default function CandidateUploadForm({ variant = "dark", className = "" }: CandidateUploadFormProps) {
  const [step, setStep] = useState<number>(1)
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    motivation: "",
    availability: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const bgClass = variant === "light" ? "bg-gray-50" : "bg-[#0a0a12]"
  const textClass = variant === "light" ? "text-gray-900" : "text-white"
  const subtextClass = variant === "light" ? "text-gray-600" : "text-white/70"
  const cardBgClass = variant === "light" ? "bg-white" : "bg-[#12121c]/80"
  const cardBorderClass = variant === "light" ? "border-gray-200" : "border-white/10"
  const inputBgClass = variant === "light" ? "bg-gray-50" : "bg-black/30"
  const inputBorderClass = variant === "light" ? "border-gray-300" : "border-white/10"
  const badgeBgClass = variant === "light" ? "bg-indigo-50 text-indigo-700" : "bg-[#1e1a3a] text-white"

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (validateFile(droppedFile)) {
        setFile(droppedFile)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      if (validateFile(selectedFile)) {
        setFile(selectedFile)
      }
    }
  }

  const validateFile = (file: File): boolean => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!validTypes.includes(file.type)) {
      setErrors({ ...errors, file: "Bitte laden Sie ein PDF oder Word-Dokument hoch." })
      return false
    }

    if (file.size > maxSize) {
      setErrors({ ...errors, file: "Die Datei darf maximal 5MB groß sein." })
      return false
    }

    // Clear file error if it exists
    if (errors.file) {
      const newErrors = { ...errors }
      delete newErrors.file
      setErrors(newErrors)
    }

    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field if it exists
    if (errors[name]) {
      const newErrors = { ...errors }
      delete newErrors[name]
      setErrors(newErrors)
    }
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!file) {
        newErrors.file = "Bitte laden Sie Ihren Lebenslauf hoch."
      }
      if (!formData.name.trim()) {
        newErrors.name = "Bitte geben Sie Ihren Namen ein."
      }
      if (!formData.email.trim()) {
        newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein."
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
      }
      if (!formData.position.trim()) {
        newErrors.position = "Bitte geben Sie Ihre gewünschte Position ein."
      }
    } else if (currentStep === 2) {
      if (!formData.experience.trim()) {
        newErrors.experience = "Bitte beantworten Sie diese Frage."
      }
      if (!formData.motivation.trim()) {
        newErrors.motivation = "Bitte beantworten Sie diese Frage."
      }
      if (!formData.availability.trim()) {
        newErrors.availability = "Bitte beantworten Sie diese Frage."
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateStep(step)) {
      // Here you would normally send the data to your backend
      console.log("Form submitted:", { ...formData, file })

      // Show success message
      setIsSubmitted(true)
    }
  }

  const resetForm = () => {
    setFile(null)
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      motivation: "",
      availability: "",
    })
    setErrors({})
    setStep(1)
    setIsSubmitted(false)
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()

    if (extension === "pdf") {
      return <FileText className="h-6 w-6 text-red-500" />
    } else if (["doc", "docx"].includes(extension || "")) {
      return <FileText className="h-6 w-6 text-blue-500" />
    } else {
      return <FileText className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge
              className={`mb-4 ${variant === "light" ? "bg-primary-50 text-primary-700" : "bg-primary-900/30 text-white"}`}
            >
              Karriere bei GetExperts
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              Starten Sie Ihre{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Karriere
              </span>{" "}
              mit uns
            </h2>
            <p className={`${subtextClass} max-w-2xl mx-auto`}>
              Laden Sie Ihren Lebenslauf hoch und beantworten Sie drei kurze Fragen. Wir melden uns innerhalb von 24
              Stunden bei Ihnen!
            </p>
          </div>

          <div
            className={`${cardBgClass} backdrop-blur-sm border ${cardBorderClass} rounded-xl overflow-hidden shadow-lg`}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-100/10 border border-green-300/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${textClass}`}>Vielen Dank für Ihre Bewerbung!</h3>
                  <p className={`${subtextClass} mb-6`}>
                    Wir haben Ihre Unterlagen erhalten und werden uns innerhalb von 24 Stunden mit Ihnen in Verbindung
                    setzen.
                  </p>
                  <div className="flex items-center justify-center bg-indigo-50/10 p-4 rounded-lg mb-6">
                    <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                    <p className={`${subtextClass} text-sm`}>
                      Unser Team prüft Ihre Bewerbung und meldet sich in Kürze bei Ihnen.
                    </p>
                  </div>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                  >
                    Neue Bewerbung starten
                  </Button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="p-8">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                        >
                          1
                        </div>
                        <div className={`h-1 w-12 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                        >
                          2
                        </div>
                        <div className={`h-1 w-12 ${step >= 3 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"}`}
                        >
                          3
                        </div>
                      </div>
                      <div className={`text-sm ${subtextClass}`}>Schritt {step} von 3</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className={`text-xl font-bold mb-6 ${textClass}`}>Persönliche Informationen</h3>

                            {/* CV Upload */}
                            <div className="mb-6">
                              <Label htmlFor="cv" className={`block mb-2 ${textClass}`}>
                                Lebenslauf hochladen <span className="text-red-500">*</span>
                              </Label>
                              <div
                                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${
                                  isDragging
                                    ? "border-primary-500 bg-primary-500/5"
                                    : file
                                      ? "border-green-500 bg-green-500/5"
                                      : `${inputBorderClass} ${inputBgClass}`
                                }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                              >
                                <input
                                  type="file"
                                  id="cv"
                                  ref={fileInputRef}
                                  className="hidden"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                />

                                {file ? (
                                  <div className="flex items-center justify-center">
                                    <div className="flex items-center bg-green-50/10 p-3 rounded-lg">
                                      {getFileIcon(file.name)}
                                      <div className="ml-3 text-left">
                                        <p className={`font-medium ${textClass}`}>{file.name}</p>
                                        <p className={`text-xs ${subtextClass}`}>
                                          {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                      </div>
                                      <button
                                        type="button"
                                        className="ml-4 p-1 rounded-full hover:bg-gray-200/20"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setFile(null)
                                        }}
                                      >
                                        <X className="h-5 w-5 text-gray-500" />
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <Upload className={`h-12 w-12 mx-auto mb-2 ${subtextClass}`} />
                                    <p className={`${textClass} font-medium mb-1`}>
                                      Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie zum Hochladen
                                    </p>
                                    <p className={`text-sm ${subtextClass}`}>PDF oder Word-Dokument (max. 5MB)</p>
                                  </>
                                )}
                              </div>
                              {errors.file && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                  <AlertCircle className="h-4 w-4 mr-1" />
                                  {errors.file}
                                </p>
                              )}
                            </div>

                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <Label htmlFor="name" className={`block mb-2 ${textClass}`}>
                                  Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className={`w-full ${inputBgClass} ${inputBorderClass}`}
                                  placeholder="Ihr vollständiger Name"
                                />
                                {errors.name && (
                                  <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.name}
                                  </p>
                                )}
                              </div>
                              <div>
                                <Label htmlFor="email" className={`block mb-2 ${textClass}`}>
                                  E-Mail <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className={`w-full ${inputBgClass} ${inputBorderClass}`}
                                  placeholder="ihre.email@beispiel.de"
                                />
                                {errors.email && (
                                  <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.email}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <Label htmlFor="phone" className={`block mb-2 ${textClass}`}>
                                  Telefon <span className="text-gray-400">(optional)</span>
                                </Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className={`w-full ${inputBgClass} ${inputBorderClass}`}
                                  placeholder="+49 123 4567890"
                                />
                              </div>
                              <div>
                                <Label htmlFor="position" className={`block mb-2 ${textClass}`}>
                                  Gewünschte Position <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="position"
                                  name="position"
                                  value={formData.position}
                                  onChange={handleInputChange}
                                  className={`w-full ${inputBgClass} ${inputBorderClass}`}
                                  placeholder="z.B. Senior Frontend Developer"
                                />
                                {errors.position && (
                                  <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.position}
                                  </p>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className={`text-xl font-bold mb-6 ${textClass}`}>Kurze Fragen</h3>

                            <div className="mb-6">
                              <Label htmlFor="experience" className={`block mb-2 ${textClass}`}>
                                1. Beschreiben Sie kurz Ihre relevante Berufserfahrung{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Textarea
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                className={`w-full min-h-[100px] ${inputBgClass} ${inputBorderClass}`}
                                placeholder="Beschreiben Sie Ihre wichtigsten beruflichen Stationen und Kompetenzen..."
                              />
                              {errors.experience && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                  <AlertCircle className="h-4 w-4 mr-1" />
                                  {errors.experience}
                                </p>
                              )}
                            </div>

                            <div className="mb-6">
                              <Label htmlFor="motivation" className={`block mb-2 ${textClass}`}>
                                2. Was motiviert Sie, sich bei GetExperts zu bewerben?{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Textarea
                                id="motivation"
                                name="motivation"
                                value={formData.motivation}
                                onChange={handleInputChange}
                                className={`w-full min-h-[100px] ${inputBgClass} ${inputBorderClass}`}
                                placeholder="Erläutern Sie Ihre Motivation und warum Sie zu uns passen..."
                              />
                              {errors.motivation && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                  <AlertCircle className="h-4 w-4 mr-1" />
                                  {errors.motivation}
                                </p>
                              )}
                            </div>

                            <div className="mb-6">
                              <Label htmlFor="availability" className={`block mb-2 ${textClass}`}>
                                3. Wann könnten Sie frühestens beginnen? <span className="text-red-500">*</span>
                              </Label>
                              <Textarea
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleInputChange}
                                className={`w-full min-h-[100px] ${inputBgClass} ${inputBorderClass}`}
                                placeholder="Geben Sie Ihre frühestmögliche Verfügbarkeit an..."
                              />
                              {errors.availability && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                  <AlertCircle className="h-4 w-4 mr-1" />
                                  {errors.availability}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className={`text-xl font-bold mb-6 ${textClass}`}>Überprüfen und Absenden</h3>

                            <div className={`p-6 rounded-lg mb-6 ${inputBgClass}`}>
                              <h4 className={`font-bold mb-4 ${textClass}`}>Zusammenfassung Ihrer Bewerbung</h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className={`text-sm font-medium ${textClass}`}>Name</p>
                                  <p className={`text-sm ${subtextClass}`}>{formData.name}</p>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium ${textClass}`}>E-Mail</p>
                                  <p className={`text-sm ${subtextClass}`}>{formData.email}</p>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium ${textClass}`}>Telefon</p>
                                  <p className={`text-sm ${subtextClass}`}>{formData.phone || "Nicht angegeben"}</p>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium ${textClass}`}>Gewünschte Position</p>
                                  <p className={`text-sm ${subtextClass}`}>{formData.position}</p>
                                </div>
                              </div>

                              <div className="mb-4">
                                <p className={`text-sm font-medium ${textClass}`}>Lebenslauf</p>
                                <div className="flex items-center mt-1">
                                  {file && (
                                    <>
                                      {getFileIcon(file.name)}
                                      <span className={`ml-2 text-sm ${subtextClass}`}>{file.name}</span>
                                    </>
                                  )}
                                </div>
                              </div>

                              <div className="mb-4">
                                <p className={`text-sm font-medium ${textClass}`}>Berufserfahrung</p>
                                <p className={`text-sm ${subtextClass} mt-1`}>{formData.experience}</p>
                              </div>

                              <div className="mb-4">
                                <p className={`text-sm font-medium ${textClass}`}>Motivation</p>
                                <p className={`text-sm ${subtextClass} mt-1`}>{formData.motivation}</p>
                              </div>

                              <div>
                                <p className={`text-sm font-medium ${textClass}`}>Verfügbarkeit</p>
                                <p className={`text-sm ${subtextClass} mt-1`}>{formData.availability}</p>
                              </div>
                            </div>

                            <div className={`p-4 rounded-lg mb-6 bg-indigo-50/10 border ${cardBorderClass}`}>
                              <div className="flex items-start">
                                <Clock className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                <p className={`text-sm ${subtextClass}`}>
                                  Nach dem Absenden Ihrer Bewerbung wird sich unser Team innerhalb von 24 Stunden mit
                                  Ihnen in Verbindung setzen, um die nächsten Schritte zu besprechen.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex justify-between mt-8">
                        {step > 1 ? (
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className={`border-indigo-200 text-indigo-600 hover:bg-indigo-50/10`}
                          >
                            Zurück
                          </Button>
                        ) : (
                          <div></div> // Empty div to maintain flex spacing
                        )}

                        {step < 3 ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300"
                          >
                            Weiter <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                          >
                            Bewerbung absenden
                          </Button>
                        )}
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
