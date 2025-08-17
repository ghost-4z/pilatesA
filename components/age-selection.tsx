"use client"

import { useState } from "react"
import { ChevronLeft, Check, Target, ChevronRight } from "lucide-react"

interface AgeOption {
  id: string
  label: string
  image: string
}

const ageOptions: AgeOption[] = [
  {
    id: "18-29",
    label: "18 - 29 anos",
    image: "https://i.postimg.cc/157tdkbW/imgi-1-md-3fvj7-orza9ejzxlpxnjgs4k6m.png",
  },
  {
    id: "29-39",
    label: "29 - 39 anos",
    image: "https://i.postimg.cc/g082nnj5/imgi-2-md-3xz74-coz5x0stiysej7mdffmz.png",
  },
  {
    id: "39-49",
    label: "39 - 49 anos",
    image: "https://i.postimg.cc/P5BqXmXY/imgi-3-md-ys4iu-drljzwwxj9nzz0zhiqyb.png",
  },
  {
    id: "50+",
    label: "+ 50 anos",
    image: "https://i.postimg.cc/x1kCVs29/imgi-4-md-bpkdq-fwwg06glxotv7mzybh9b.png",
  },
]

const goalOptions = [
  { id: "weight-loss", label: "Perder peso" },
  { id: "muscle-strength", label: "Aumentar a força muscular" },
  { id: "flexibility", label: "Desenvolver flexibilidade" },
  { id: "stress-reduction", label: "Reduzir o stress e ansiedade" },
  { id: "posture", label: "Melhorar a postura" },
]

const bodyTypeOptions = [
  {
    id: "slim",
    label: "Magro",
    image: "https://i.postimg.cc/s2Lq26zm/imgi-1-xs-0fqxy-dfh3d8vkcxi2scdctchr-jwean5.png",
  },
  {
    id: "medium",
    label: "Médio",
    image: "https://i.postimg.cc/s2Lq26zm/imgi-1-xs-0fqxy-dfh3d8vkcxi2scdctchr-jwean5.png",
  },
  {
    id: "larger",
    label: "Maior",
    image: "https://i.postimg.cc/C1ftnGLg/imgi-2-xs-coprb-qu4t4934hg6z9mx78jae-kpcs9h.png",
  },
  {
    id: "overweight",
    label: "Com excesso de peso",
    image: "https://i.postimg.cc/C1ftnGLg/imgi-2-xs-coprb-qu4t4934hg6z9mx78jae-kpcs9h.png",
  },
]

const dreamBodyOptions = [
  {
    id: "slim",
    label: "Magro",
    image: "https://i.postimg.cc/s2Lq26zm/imgi-1-xs-0fqxy-dfh3d8vkcxi2scdctchr-jwean5.png",
  },
  {
    id: "defined",
    label: "Definido",
    image: "https://i.postimg.cc/YqkWVtFN/imgi-2-xs-fwu1t-wsxyr6ebsbvwb1ddawei-yq6hqh.png",
  },
  {
    id: "curvy",
    label: "Com curvas",
    image: "https://i.postimg.cc/dtBycgRb/imgi-3-xs-vp0i7-ryht3ejtw0janrhvrule-pg6wpv.png",
  },
  {
    id: "medium",
    label: "Médio",
    image: "https://i.postimg.cc/Hkk7Y3BV/imgi-4-xs-m5bfj-tnw935sn8otuaabmrqt4-etnlon.png",
  },
]

const weightChangeOptions = [
  {
    id: "difficulty-gaining",
    label: "Eu tenho dificuldade para ganhar peso ou músculos",
    emoji: "😔",
  },
  {
    id: "easy-gain-lose",
    label: "Eu ganho e perco peso facilmente",
    emoji: "💪",
  },
  {
    id: "easy-gain-hard-lose",
    label: "Eu ganho peso facilmente mas tenho dificuldade para perder",
    emoji: "😐",
  },
]

const bestPhysicalShapeOptions = [
  {
    id: "less-than-1-year",
    label: "Há menos de 1 ano",
    emoji: "😔",
  },
  {
    id: "1-2-years",
    label: "1 a 2 anos atrás",
    emoji: "😟",
  },
  {
    id: "more-than-3-years",
    label: "Há mais de 3 anos",
    emoji: "👤",
  },
  {
    id: "never",
    label: "Nunca",
    emoji: "❌",
  },
]

const flexibilityOptions = [
  {
    id: "very-flexible",
    label: "Bastante Flexível",
  },
  {
    id: "starting",
    label: "Estou começando",
  },
  {
    id: "not-very",
    label: "Não muito",
  },
  {
    id: "not-sure",
    label: "Não tenho certeza",
  },
]

const focusAreaOptions = [
  {
    id: "belly",
    label: "Barriga",
    image: "https://i.postimg.cc/8zn54GDb/imgi-1-xs-yotxn-ylaaq8bnhfbevf9ymie6-ypjgzd.png",
  },
  {
    id: "glutes",
    label: "Glúteos",
    image: "https://i.postimg.cc/pTKLPnj0/imgi-2-xs-uhasf-kxeahvmyu5w9fydpes85-fgtf4s.png",
  },
  {
    id: "legs",
    label: "Pernas",
    image: "https://i.postimg.cc/Gp8pSfmn/imgi-3-xs-hozwf-m2tfkqkedwzbjdboqnj2-ju1ymp.png",
  },
  {
    id: "chest",
    label: "Peito",
    image: "https://i.postimg.cc/xdwdrPXJ/imgi-4-xs-paxjg-gebmyhlpngwlm9icxy7e-ktblvm.png",
  },
]

const difficultyOptions = [
  {
    id: "sensitive-back",
    label: "Costas sensíveis",
    image: "https://i.postimg.cc/HLwLgyX6/imgi-1-xs-ty5al-gwufpkathxb142og8mfx-vpebrt.png",
  },
  {
    id: "sensitive-knees",
    label: "Joelhos sensíveis",
    image: "https://i.postimg.cc/G2bmhmjd/imgi-2-xs-l7r10-tnepbgfh3c6rodqt8yct-gnne9u.png",
  },
  {
    id: "none-above",
    label: "Nenhum dos itens acima",
    image: "https://i.postimg.cc/tgQgw5Z1/imgi-3-xs-k8qoc-h5suxirrxdgvgudxq4xp-avo3uh.png",
  },
]

export default function AgeSelection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedAge, setSelectedAge] = useState<string | null>(null)
  const [pilatesExperience, setPilatesExperience] = useState<string | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null)
  const [selectedDreamBody, setSelectedDreamBody] = useState<string | null>(null)
  const [selectedWeightChange, setSelectedWeightChange] = useState<string | null>(null)
  const [selectedBestPhysicalShape, setSelectedBestPhysicalShape] = useState<string | null>(null)
  const [selectedFlexibility, setSelectedFlexibility] = useState<string | null>(null)
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [selectedStep14, setSelectedStep14] = useState<string>("")
  const [selectedStep15, setSelectedStep15] = useState<string>("")
  const [selectedStep16, setSelectedStep16] = useState<string>("")
  const [selectedStep17, setSelectedStep17] = useState<string>("")
  const [selectedStep18, setSelectedStep18] = useState<string>("")
  const [selectedStep19, setSelectedStep19] = useState<string>("")
  const [selectedOptions, setSelectedOptions] = useState({ waterIntake: "" })
  const [selectedStep21, setSelectedStep21] = useState<string>("")
  const [selectedStep22, setSelectedStep22] = useState("")
  const [selectedStep23, setSelectedStep23] = useState("")
  const [selectedStep24, setSelectedStep24] = useState("")
  const [selectedStep25, setSelectedStep25] = useState("")
  const [selectedStep26, setSelectedStep26] = useState<string[]>([])
  const [selectedLifeEvents, setSelectedLifeEvents] = useState<string[]>([])
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft">("ft")
  const [heightValue, setHeightValue] = useState(71) // Default to 5'11" (71 inches) or 180cm
  const [weightValue, setWeightValue] = useState(70)
  const [weightUnit, setWeightUnit] = useState<"kg" | "lb">("kg")

  const handleAgeSelect = (ageId: string) => {
    setSelectedAge(ageId)
    setCurrentStep(2)
  }

  const handleBack = () => {
    if (currentStep === 29) {
      setCurrentStep(28)
    } else if (currentStep === 28) {
      setCurrentStep(27)
    } else if (currentStep === 27) {
      setCurrentStep(26)
      setSelectedLifeEvents([])
    } else if (currentStep === 25) {
      setCurrentStep(24)
      setSelectedStep25("")
    } else if (currentStep === 26) {
      setCurrentStep(25)
      setSelectedStep26([])
    } else if (currentStep === 24) {
      setCurrentStep(23)
      setSelectedStep24("")
    } else if (currentStep === 23) {
      setCurrentStep(22)
      setSelectedStep23("")
    } else if (currentStep === 22) {
      setCurrentStep(21)
      setSelectedStep22("")
    } else if (currentStep === 21) {
      setCurrentStep(20)
      setSelectedStep21("")
    } else if (currentStep === 20) {
      setCurrentStep(19)
    } else if (currentStep === 19) {
      setCurrentStep(18)
      setSelectedStep19("")
    } else if (currentStep === 18) {
      setCurrentStep(17)
      setSelectedStep18("")
    } else if (currentStep === 17) {
      setCurrentStep(16)
      setSelectedStep17("")
    } else if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    } else if (currentStep === 4) {
      setCurrentStep(3)
    } else if (currentStep === 5) {
      setCurrentStep(4)
    } else if (currentStep === 6) {
      setCurrentStep(5)
    } else if (currentStep === 7) {
      setCurrentStep(6)
    } else if (currentStep === 8) {
      setCurrentStep(7)
    } else if (currentStep === 9) {
      setCurrentStep(8)
    } else if (currentStep === 10) {
      setCurrentStep(9)
    } else if (currentStep === 11) {
      setCurrentStep(10)
    } else if (currentStep === 12) {
      setCurrentStep(11)
    } else if (currentStep === 13) {
      setCurrentStep(12)
    } else if (currentStep === 14) {
      setCurrentStep(13)
    } else if (currentStep === 15) {
      setCurrentStep(14)
    } else if (currentStep === 16) {
      setCurrentStep(15)
    } else if (currentStep === 17) {
      setCurrentStep(16)
    } else if (currentStep === 19) {
      setCurrentStep(18)
    } else if (currentStep === 21) {
      setCurrentStep(20)
    }
  }

  const handleContinue = () => {
    if (currentStep === 2) {
      setCurrentStep(3)
    } else if (currentStep === 4) {
      setCurrentStep(5)
    }
  }

  const handlePilatesExperienceSelect = (experience: string) => {
    setPilatesExperience(experience)
    setCurrentStep(4)
  }

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId)
    setTimeout(() => {
      setCurrentStep(6)
    }, 500)
  }

  const handleBodyTypeSelect = (bodyTypeId: string) => {
    setSelectedBodyType(bodyTypeId)
    setTimeout(() => {
      setCurrentStep(7)
    }, 500)
  }

  const handleDreamBodySelect = (dreamBodyId: string) => {
    setSelectedDreamBody(dreamBodyId)
    setTimeout(() => {
      setCurrentStep(8)
    }, 500)
  }

  const handleWeightChangeSelect = (weightChangeId: string) => {
    setSelectedWeightChange(weightChangeId)
    setTimeout(() => {
      setCurrentStep(9)
    }, 500)
  }

  const handleBestPhysicalShapeSelect = (shapeId: string) => {
    setSelectedBestPhysicalShape(shapeId)
    setTimeout(() => {
      setCurrentStep(10)
    }, 500)
  }

  const handleFlexibilitySelect = (flexibilityId: string) => {
    setSelectedFlexibility(flexibilityId)
    setTimeout(() => {
      setCurrentStep(11)
    }, 500)
  }

  const handleFocusAreaToggle = (areaId: string) => {
    setSelectedFocusAreas((prev) => {
      if (prev.includes(areaId)) {
        return prev.filter((id) => id !== areaId)
      } else {
        return [...prev, areaId]
      }
    })
  }

  const handleNextStep = () => {
    if (selectedFocusAreas.length > 0) {
      console.log("Selected focus areas:", selectedFocusAreas)
      setCurrentStep(12)
    }
  }

  const handleDifficultyToggle = (difficultyId: string) => {
    setSelectedDifficulties((prev) => {
      if (prev.includes(difficultyId)) {
        return prev.filter((id) => id !== difficultyId)
      } else {
        return [...prev, difficultyId]
      }
    })
  }

  const handleDifficultiesNextStep = () => {
    if (selectedDifficulties.length > 0) {
      console.log("Selected difficulties:", selectedDifficulties)
      setCurrentStep(13)
    }
  }

  const handleStep13Continue = () => {
    setCurrentStep(14)
  }

  const handleStep14Selection = (option: string) => {
    setSelectedStep14(option)
    setTimeout(() => {
      setCurrentStep(15)
    }, 500)
  }

  const handleStep15Selection = (option: string) => {
    setSelectedStep15(option)
    setTimeout(() => {
      setCurrentStep(16)
    }, 500)
  }

  const handleStep16Selection = (option: string) => {
    setSelectedStep16(option)
    setTimeout(() => {
      setCurrentStep(17)
    }, 500)
  }

  const handleStep17Selection = (option: string) => {
    setSelectedStep17(option)
    setTimeout(() => {
      setCurrentStep(18)
    }, 500)
  }

  const handleStep18Selection = (option: string) => {
    setSelectedStep18(option)
    setTimeout(() => {
      setCurrentStep(19)
    }, 500)
  }

  const handleStep19Selection = (option: string) => {
    setSelectedStep19(option)
    setTimeout(() => {
      setCurrentStep(20) // Now navigates to page 20
    }, 500)
  }

  const handleStep20Continue = () => {
    setCurrentStep(21)
  }

  const handleStep21Selection = (option: string) => {
    setSelectedStep21(option)
    setTimeout(() => {
      setCurrentStep(22)
    }, 500)
  }

  const handleStep22Selection = (option: string) => {
    setSelectedStep22(option)
    setTimeout(() => {
      setCurrentStep(23)
    }, 500)
  }

  const handleStep25Selection = (option: string) => {
    setSelectedStep25(option)
    setTimeout(() => {
      setCurrentStep(26)
    }, 500)
  }

  const handleStep24Selection = (option: string) => {
    setSelectedStep24(option)
    setTimeout(() => {
      setCurrentStep(25)
    }, 500)
  }

  const handleStep23Selection = (option: string) => {
    setSelectedStep23(option)
    setTimeout(() => {
      setCurrentStep(24)
    }, 500)
  }

  const handleStep26Selection = (option: string) => {
    setSelectedStep26((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option)
      } else {
        return [...prev, option]
      }
    })
  }

  const handleLifeEventsSelection = (option: string) => {
    setSelectedLifeEvents((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option)
      } else {
        return [...prev, option]
      }
    })
  }

  const handleHeightChange = (value: number) => {
    setHeightValue(value)
  }

  const handleUnitToggle = (unit: "cm" | "ft") => {
    if (unit !== heightUnit) {
      setHeightUnit(unit)
      // Convert height when switching units
      if (unit === "cm") {
        setHeightValue(Math.round(heightValue * 2.54))
      } else {
        setHeightValue(Math.round(heightValue / 2.54))
      }
    }
  }

  const formatHeight = () => {
    if (heightUnit === "ft") {
      const feet = Math.floor(heightValue / 12)
      const inches = heightValue % 12
      return `${feet}'${inches}"`
    } else {
      return `${heightValue}cm`
    }
  }

  const getHeightRange = () => {
    if (heightUnit === "ft") {
      return { min: 60, max: 84, step: 1 } // 5'0" to 7'0"
    } else {
      return { min: 150, max: 210, step: 1 } // 150cm to 210cm
    }
  }

  const getSliderMarks = () => {
    if (heightUnit === "ft") {
      return [
        { value: 67, label: "5'7\"" },
        { value: 71, label: "5'11\"" },
        { value: 75, label: "6'3\"" },
      ]
    } else {
      return [
        { value: 170, label: "170" },
        { value: 180, label: "180" },
        { value: 190, label: "190" },
      ]
    }
  }

  const handleWeightChange = (value: number) => {
    setWeightValue(value)
  }

  const handleWeightUnitToggle = (unit: "kg" | "lb") => {
    if (unit !== weightUnit) {
      setWeightUnit(unit)
      if (unit === "lb") {
        // Convert kg to lb
        setWeightValue(Math.round(weightValue * 2.20462))
      } else {
        // Convert lb to kg
        setWeightValue(Math.round(weightValue / 2.20462))
      }
    }
  }

  const getWeightRange = () => {
    if (weightUnit === "kg") {
      return { min: 25, max: 300, step: 1 }
    } else {
      return { min: 55, max: 660, step: 1 }
    }
  }

  const getWeightSliderMarks = () => {
    if (weightUnit === "kg") {
      const currentValue = weightValue
      const marks = []

      // Create marks around current value
      const baseValue = Math.floor(currentValue / 10) * 10
      marks.push({ value: Math.max(25, baseValue - 10), label: `${Math.max(25, baseValue - 10)}` })
      marks.push({ value: currentValue, label: `${currentValue}` })
      marks.push({ value: Math.min(300, baseValue + 20), label: `${Math.min(300, baseValue + 20)}` })

      return marks
    } else {
      const currentValue = weightValue
      const marks = []

      // Create marks around current value
      const baseValue = Math.floor(currentValue / 20) * 20
      marks.push({ value: Math.max(55, baseValue - 20), label: `${Math.max(55, baseValue - 20)}` })
      marks.push({ value: currentValue, label: `${currentValue}` })
      marks.push({ value: Math.min(660, baseValue + 40), label: `${Math.min(660, baseValue + 40)}` })

      return marks
    }
  }

  const formatWeight = () => {
    return `${weightValue}${weightUnit}`
  }

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mb-8">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[2.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Qual sua idade?</h1>
          <p className="text-gray-600 text-lg">Clique em alguma opção para avançar</p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg w-full mb-8">
          {ageOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAgeSelect(option.id)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 border border-pink-200"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={`Mulher representando faixa etária ${option.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-pink-500 text-white py-3 px-3">
                <span className="text-base font-semibold">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center max-w-md">
          <p className="text-sm text-gray-500 leading-relaxed">
            Ao escolher sua idade e continuar, você concorda com nossos{" "}
            <button className="text-pink-500 hover:text-pink-600 underline">Termos de Serviço</button> |{" "}
            <button className="text-pink-500 hover:text-pink-600 underline">Política de Privacidade</button>
          </p>
        </div>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-pink-500 mb-4">Mais de 500,000 mulheres</h1>
            <p className="text-gray-600 text-lg">
              em seus 20 anos já experimentaram o nosso plano de treino de{" "}
              <span className="font-medium">pilates na parede</span>
            </p>
          </div>

          {/* Main image */}
          <div className="mb-12 relative">
            <img
              src="https://i.postimg.cc/nz14PNCh/imgi-1-lg-if2k4-pag2-ajrdsc.png"
              alt="Grupo de mulheres praticando exercícios"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>

          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-pink-800 rounded-2xl animate-pulse opacity-75 blur-sm"></div>
            <button
              onClick={handleContinue}
              className="relative w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-pulse"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[7.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Você já experimentou treinos
              <br />
              de <span className="text-pink-500">pilates na parede</span> antes?
            </h1>
          </div>

          {/* Options */}
          <div className="w-full max-w-md mb-12 space-y-4">
            <button
              onClick={() => handlePilatesExperienceSelect("yes")}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                pilatesExperience === "yes"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>Sim, já experimentei</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  pilatesExperience === "yes" ? "bg-white" : "border-2 border-gray-300"
                }`}
              >
                {pilatesExperience === "yes" && <Check className="w-4 h-4 text-pink-500" />}
              </div>
            </button>

            <button
              onClick={() => handlePilatesExperienceSelect("no")}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                pilatesExperience === "no"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>Não, eu nunca experimentei</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  pilatesExperience === "no" ? "bg-white" : "border-2 border-gray-300"
                }`}
              >
                {pilatesExperience === "no" && <Check className="w-4 h-4 text-pink-500" />}
              </div>
            </button>
          </div>

          {/* Main image */}
          <div className="mb-8">
            <img
              src="https://i.postimg.cc/HWBKJhBm/imgi-1-lg-fuh1y-pag10-h9onle.png"
              alt="Mulher praticando pilates na parede"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[10%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Você vai arrasar!</h1>
            <p className="text-gray-600 text-lg mb-4">
              Nosso programa de pilates na parede é uma opção de condicionamento físico fácil e eficaz para todos os
              níveis.
            </p>
            <p className="text-gray-600 text-lg">
              Nós te ajudamos a <span className="font-semibold text-gray-800">emagrecer rápido</span> e de forma eficaz{" "}
              <span className="font-semibold text-gray-800">sem gastar dinheiro</span> com academia, equipamentos ou
              remédios.
            </p>
          </div>

          {/* Main image */}
          <div className="mb-12">
            <img
              src="https://i.postimg.cc/q7JZQfJj/imgi-1-md-d-Er-Wi-exercise-mtxyw9.png"
              alt="Mulher praticando pilates na parede"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>

          {/* Continue button with pulse effect */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-pink-800 rounded-2xl animate-pulse opacity-75 blur-sm"></div>
            <button
              onClick={handleContinue}
              className="relative w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-pulse"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[12.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Qual é o seu principal objetivo?</h1>
          </div>

          {/* Goal Options */}
          <div className="w-full max-w-md mb-12 space-y-4">
            {goalOptions.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedGoal === goal.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{goal.label}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selectedGoal === goal.id ? "bg-white" : "border-2 border-gray-300"
                  }`}
                >
                  {selectedGoal === goal.id && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </button>
            ))}
          </div>

          {/* Main image with target icon */}
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-pink-500" />
            </div>
            <img
              src="https://i.postimg.cc/vHP1Df1T/imgi-1-lg-90v6s-pag3-g59i3d.png"
              alt="Mulher em roupas de exercício amarelas"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 6) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[15%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Como você descreveria seu físico?</h1>
            <p className="text-gray-600 text-lg">Escolha uma opção para avançar</p>
          </div>

          {/* Body Type Options */}
          <div className="w-full max-w-lg space-y-4">
            {bodyTypeOptions.map((bodyType) => (
              <button
                key={bodyType.id}
                onClick={() => handleBodyTypeSelect(bodyType.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedBodyType === bodyType.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{bodyType.label}</span>
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={bodyType.image || "/placeholder.svg"}
                    alt={`Silhueta representando ${bodyType.label}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 7) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[17.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Qual é o seu "corpo dos sonhos"?</h1>
            <p className="text-gray-600 text-lg">Escolha uma opção para avançar</p>
          </div>

          {/* Dream Body Options */}
          <div className="w-full max-w-lg space-y-4">
            {dreamBodyOptions.map((dreamBody) => (
              <button
                key={dreamBody.id}
                onClick={() => handleDreamBodySelect(dreamBody.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedDreamBody === dreamBody.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{dreamBody.label}</span>
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={dreamBody.image || "/placeholder.svg"}
                    alt={`Silhueta representando ${dreamBody.label}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 8) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[20%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Como seu peso muda tipicamente?</h1>
            <p className="text-gray-600 text-lg">Escolha uma opção para avançar</p>
          </div>

          {/* Weight Change Options */}
          <div className="w-full max-w-lg space-y-4">
            {weightChangeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleWeightChangeSelect(option.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedWeightChange === option.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-left">{option.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selectedWeightChange === option.id ? "bg-white" : "border-2 border-gray-300"
                  }`}
                >
                  {selectedWeightChange === option.id && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 9) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[22.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Há quanto tempo você esteve
              <br />
              no melhor físico da sua vida?
            </h1>
          </div>

          {/* Best Physical Shape Options */}
          <div className="w-full max-w-lg space-y-4">
            {bestPhysicalShapeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleBestPhysicalShapeSelect(option.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedBestPhysicalShape === option.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-left">{option.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selectedBestPhysicalShape === option.id ? "bg-white" : "border-2 border-gray-300"
                  }`}
                >
                  {selectedBestPhysicalShape === option.id && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 10) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[25%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Você se considera flexível?</h1>
          </div>

          {/* Flexibility Options */}
          <div className="w-full max-w-lg space-y-4 mb-12">
            {flexibilityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleFlexibilitySelect(option.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedFlexibility === option.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{option.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="mb-8">
            <img
              src="https://i.postimg.cc/LshC1t6s/imgi-1-lg-w45lz-pag9-grxwb9.png"
              alt="Mulher praticando exercícios de flexibilidade"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 11) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[27.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quais são suas regiões de foco?</h1>
            <p className="text-gray-600 text-lg">Escolha uma ou mais opções para avançar</p>
          </div>

          {/* Focus Area Options */}
          <div className="w-full max-w-lg space-y-4 mb-12">
            {focusAreaOptions.map((area) => (
              <button
                key={area.id}
                onClick={() => handleFocusAreaToggle(area.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedFocusAreas.includes(area.id)
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{area.label}</span>
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={area.image || "/placeholder.svg"}
                    alt={`Região ${area.label}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Next Step Button with pulse effect */}
          {selectedFocusAreas.length > 0 && (
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-pink-800 rounded-2xl animate-pulse opacity-75 blur-sm"></div>
              <button
                onClick={handleNextStep}
                className="relative w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-pulse"
              >
                PRÓXIMO PASSO
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (currentStep === 12) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[30%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Você tem dificuldade com
              <br />
              algum dos itens abaixo?
            </h1>
            <p className="text-gray-600 text-lg">Escolha todas que se aplicam</p>
          </div>

          {/* Difficulty Options */}
          <div className="w-full max-w-lg space-y-4 mb-12">
            {difficultyOptions.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => handleDifficultyToggle(difficulty.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all ${
                  selectedDifficulties.includes(difficulty.id)
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={difficulty.image || "/placeholder.svg"}
                      alt={difficulty.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-left">{difficulty.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selectedDifficulties.includes(difficulty.id) ? "bg-white" : "border-2 border-gray-300"
                  }`}
                >
                  {selectedDifficulties.includes(difficulty.id) && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </button>
            ))}
          </div>

          {/* Next Step Button with pulse effect */}
          {selectedDifficulties.length > 0 && (
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-pink-800 rounded-2xl animate-pulse opacity-75 blur-sm"></div>
              <button
                onClick={handleDifficultiesNextStep}
                className="relative w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-pulse"
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (currentStep === 13) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[32.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Nós te ajudamos!</h1>
            <p className="text-gray-600 text-lg mb-6">
              Você encontrará muitos exercícios <span className="font-semibold">especializados para fortalecer</span>{" "}
              qualquer parte do seu corpo.
            </p>
            <p className="text-gray-600 text-lg">
              Além de remover a gordura localizada, você vai manter seu corpo firme e flexível.
            </p>
          </div>

          {/* Continue Button with pulse effect */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-pink-800 rounded-2xl animate-pulse opacity-75 blur-sm"></div>
            <button
              onClick={handleStep13Continue}
              className="relative w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-pulse"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 14) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[35%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Você perde o fôlego quando sobe escadas?</h1>
          </div>

          {/* Options */}
          <div className="w-full max-w-lg space-y-4">
            {[
              { text: "Fico tão sem fôlego que nem consigo falar", emoji: "😵" },
              { text: "Fico um pouco sem fôlego, mas consigo falar", emoji: "😐" },
              { text: "Me sinto OK depois de subir escadas", emoji: "😊" },
              { text: "Consigo subir alguns lances de escada tranquilamente", emoji: "🚀" },
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleStep14Selection(option.text)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${
                  selectedStep14 === option.text
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 hover:border-pink-300 text-gray-700"
                }`}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="flex-1 text-left font-medium">{option.text}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep14 === option.text ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep14 === option.text && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 15) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[37.5%] h-full bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quantas vezes você faz exercício?</h1>
          </div>

          {/* Options */}
          <div className="w-full max-w-lg space-y-4 mb-8">
            {["Quase todos os dias", "Várias vezes por semana", "Várias vezes por mês", "Nunca"].map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleStep15Selection(option)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                    selectedStep15 === option
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 hover:border-pink-300 text-gray-700"
                  }`}
                >
                  <span className="font-medium">{option}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedStep15 === option ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep15 === option && <Check className="w-4 h-4 text-pink-500" />}
                  </div>
                </button>
              ),
            )}
          </div>

          {/* Image */}
          <div className="w-full max-w-md">
            <img
              src="https://i.postimg.cc/sx6Y482G/imgi-1-lg-e7qah-pag13-xkacyp.png"
              alt="Mulher fazendo exercício na esteira"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 16) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(16 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Com que frequência você sai para caminhadas?
            </h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              { id: "quase-todos-dias", label: "Quase todos os dias", emoji: "😎" },
              { id: "3-4-vezes", label: "3-4 vezes por semana", emoji: "💪" },
              { id: "1-2-vezes", label: "1-2 vezes por semana", emoji: "😊" },
              { id: "uma-vez-mes", label: "Uma vez por mês", emoji: "👍" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleStep16Selection(option.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep16 === option.id
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:border-pink-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="font-medium">{option.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep16 === option.id ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep16 === option.id && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 17) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(17 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Como é a sua rotina de trabalho?</h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              { id: "9h-17h", label: "Das 9h às 17h", emoji: "☀️" },
              { id: "horarios-flexiveis", label: "Meus horários são flexíveis", emoji: "😎" },
              { id: "turnos-noturnos", label: "Turnos noturnos", emoji: "🌙" },
              {
                id: "aposentado-nao-trabalhando",
                label: "Estou aposentado / Não estou trabalhando no momento",
                emoji: "👤",
              },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleStep17Selection(option.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep17 === option.id
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:border-pink-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="font-medium">{option.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep17 === option.id ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep17 === option.id && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 18) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(18 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Como você descreveria seu dia típico?</h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              {
                id: "sentado",
                label: "Eu passo a maior parte do dia sentado",
                image: "https://i.postimg.cc/bvrGyY07/imgi-1-xs-4qa9u-mtgkbzfqnxi4iemhl76v-vdjzqm.png",
              },
              {
                id: "pausas-ativas",
                label: "Eu faço pausas ativas",
                image: "https://i.postimg.cc/xdZXcrtc/imgi-2-xs-jusx5-m12nnq4fjearsam0pgly-zpkazb.png",
              },
              {
                id: "pe-dia-todo",
                label: "Estou de pé o dia todo",
                image: "https://i.postimg.cc/W3JhZ9HS/imgi-3-xs-qtzhc-szkk8g3dmgtbiyyhkc1a-doefoe.png",
              },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleStep18Selection(option.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep18 === option.id
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:border-pink-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={option.image || "/placeholder.svg"}
                    alt={option.label}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="font-medium">{option.label}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep18 === option.id ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep18 === option.id && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 19) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(19 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Como são os seus níveis de energia durante o dia?
            </h1>
          </div>

          <div className="w-full max-w-md space-y-4 mb-8">
            {[
              {
                id: "baixo-cansada",
                label: "Baixo, me sinto cansada durante o dia",
              },
              {
                id: "queda-almoco",
                label: "Sinto uma queda de energia depois do almoço",
              },
              {
                id: "arrasto-refeicoes",
                label: "Me arrasto entre as refeições",
              },
              {
                id: "elevados-estaveis",
                label: "Elevados e estáveis",
              },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleStep19Selection(option.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep19 === option.id
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:border-pink-300"
                }`}
              >
                <span className="font-medium text-left">{option.label}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep19 === option.id ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep19 === option.id && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Energy woman image */}
          <div className="w-full max-w-md">
            <img
              src="https://i.postimg.cc/brBC5wTq/imgi-1-lg-ielkw-pag26-qz6ufi.png"
              alt="Mulher energética correndo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 20) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(20 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              O pilates na parede ajudar você a se sentir estável com sua energia
            </h1>
            <p className="text-gray-600 mb-4">
              Esses{" "}
              <span className="font-semibold">fortalecem seus músculos, núcleo e aumentam a consciência corporal.</span>
            </p>
            <p className="text-gray-500">Queremos que você viva sua vida ao máximo!</p>
          </div>

          {/* Wall pilates image */}
          <div className="mb-8">
            <img
              src="https://i.postimg.cc/Kj3GwR2N/imgi-1-lg-1lgkq-pag12-tgioww.png"
              alt="Mulher praticando pilates na parede"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>

          {/* Continue button with pulse effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-800 rounded-full animate-pulse blur-sm opacity-75"></div>
            <button
              onClick={handleStep20Continue}
              className="relative bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 animate-pulse"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 21) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(21 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Quantos copos de água você bebe diariamente?
            </h1>
          </div>

          <div className="w-full max-w-md space-y-4 mb-8">
            {["Tomo apenas café ou chá", "Cerca de 2 copos", "2 a 6 copos", "Mais de 6 copos"].map((option) => (
              <button
                key={option}
                onClick={() => handleStep21Selection(option)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep21 === option
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <span className="font-medium">{option}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep21 === option ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep21 === option && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Water intake image */}
          <div className="mb-8">
            <img
              src="https://i.postimg.cc/25Vmt1mK/imgi-1-lg-o4t86-pag19-j0hpyu.png"
              alt="Mulher com garrafa de água"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 22) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(22 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Com que frequência você dorme?</h1>
          </div>

          <div className="w-full max-w-md space-y-4 mb-8">
            {["Menos de 5 horas", "5-6 horas", "7-8 horas", "Mais de 8 horas"].map((option) => (
              <button
                key={option}
                onClick={() => handleStep22Selection(option)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                  selectedStep22 === option
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <span className="font-medium">{option}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedStep22 === option ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep22 === option && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Sleep image */}
          <div className="w-full max-w-sm">
            <img
              src="https://i.postimg.cc/Pq2pWpyV/imgi-1-lg-dj96l-pag18-wypvqg.png"
              alt="Mulher dormindo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 23) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(23 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Quando você normalmente toma café da manhã?
            </h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              {
                text: "Entre as 6h00 e 8h00",
                image: "https://i.postimg.cc/1t0q8CT6/imgi-1-xs-fsmq4-lesat4idbpxa4drskvch-kqkoba.png",
              },
              {
                text: "Entre as 8h00 e 10h00",
                image: "https://i.postimg.cc/mk81wcTg/imgi-2-xs-ky765-zta7jsap5zotm7fmprah-pd04jz.png",
              },
              {
                text: "Entre as 10h00 e meio dia",
                image: "https://i.postimg.cc/wxVNHrDY/imgi-3-xs-51ae9-svfnb2qgfxvxnmtfzvmh-uedk0w.png",
              },
              {
                text: "Eu normalmente pulo o café da manhã",
                image: "https://i.postimg.cc/Y0pmYNKP/imgi-4-xs-k4bgm-enu6z1tkeveklhdhiqpv-t6keqo.png",
              },
            ].map((option) => (
              <button
                key={option.text}
                onClick={() => handleStep23Selection(option.text)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                  selectedStep23 === option.text
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={option.text}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <span className="font-medium flex-1 text-left">{option.text}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedStep23 === option.text ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep23 === option.text && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 24) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(24 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">E o almoço?</h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              {
                text: "Entre as 10h00 e meio dia",
                image: "https://i.postimg.cc/YSZ5v8gp/imgi-1-xs-y0rvl-v9dluoh7ljj32xv3zpwa-qujue0.png",
              },
              {
                text: "Entre meio dia e 14h00",
                image: "https://i.postimg.cc/rm4vxWC5/imgi-2-xs-3zudt-gqhjqzipe1xkeztkpzaa-evu6vb.png",
              },
              {
                text: "Entre as 14h00 e 16h00",
                image: "https://i.postimg.cc/qqXSZTFR/imgi-3-xs-9h2x1-dmis9dhi2wa4zlfpsmwd-qmjckp.png",
              },
              {
                text: "Eu normalmente pulo o almoço",
                image: "https://i.postimg.cc/Xq0t8JQm/imgi-4-xs-tpvie-wpeqsawafforzshfqeu6-cr3cqr.png",
              },
            ].map((option) => (
              <button
                key={option.text}
                onClick={() => handleStep24Selection(option.text)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                  selectedStep24 === option.text
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={option.text}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <span className="font-medium flex-1 text-left">{option.text}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedStep24 === option.text ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep24 === option.text && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 25) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(25 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Que horas você janta?</h1>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              {
                text: "Entre as 16h00 e 18h00",
                image: "https://i.postimg.cc/ZRmLsdz8/imgi-1-xs-5j0os-uilfaijpp6kq2kdcngud-bux9as.png",
              },
              {
                text: "Entre 18h00 e 20h00",
                image: "https://i.postimg.cc/63hfkpBD/imgi-2-xs-yfdb2-akrz2nohbj7tbxkytk8e-smpopp.png",
              },
              {
                text: "Entre as 20h00 e 22h00",
                image: "https://i.postimg.cc/gjkHmbJr/imgi-3-xs-2hgbl-quxyrjuhkby6fczwg4jf-hjb3m9.png",
              },
              {
                text: "Eu normalmente pulo o jantar",
                image: "https://i.postimg.cc/Xq0t8JQm/imgi-4-xs-tpvie-wpeqsawafforzshfqeu6-cr3cqr.png",
              },
            ].map((option) => (
              <button
                key={option.text}
                onClick={() => handleStep25Selection(option.text)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                  selectedStep25 === option.text
                    ? "bg-pink-500 border-pink-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={option.text}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <span className="font-medium flex-1 text-left">{option.text}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedStep25 === option.text ? "border-white bg-white" : "border-gray-300"
                  }`}
                >
                  {selectedStep25 === option.text && (
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 26) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(26 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Que tipo de dieta você prefere?</h1>
          </div>

          <div className="w-full max-w-lg space-y-6">
            <div className="text-center">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">COM CARNE</h2>
              <div className="space-y-3">
                <button
                  onClick={() => handleStep26Selection("Tradicional")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Tradicional")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/QxqFGYKK/imgi-1-xs-0a7fk-td3z6fksiydakcrzersx-hy5fav.png"
                    alt="Tradicional"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Tradicional</div>
                    <div className="text-sm opacity-75">Eu gosto de tudo</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Tradicional") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Tradicional") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleStep26Selection("Keto")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Keto")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/2Sc33qwz/imgi-2-xs-uxnj6-f55tyccx4qc7sxr9xzel-suofup.png"
                    alt="Keto"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Keto</div>
                    <div className="text-sm opacity-75">
                      Eu prefiro refeições com alto teor de gordura e baixo teor de carboidratos
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Keto") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Keto") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">SEM CARNE</h2>
              <div className="space-y-3">
                <button
                  onClick={() => handleStep26Selection("Vegetariano")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Vegetariano")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/sgDvVP56/imgi-3-xs-2rvoz-o4o2askqvxdfydopgjzz-zxdt4y.png"
                    alt="Vegetariano"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Vegetariano</div>
                    <div className="text-sm opacity-75">Eu evito carnes e peixes</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Vegetariano") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Vegetariano") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleStep26Selection("Vegana")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Vegana")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/CKR58FPb/imgi-4-xs-ur8di-khiok96gc6x5opv6fdm4-xnitep.png"
                    alt="Vegana"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Vegana (dieta vegetal)</div>
                    <div className="text-sm opacity-75">Eu não como produtos animais</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Vegana") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Vegana") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">COM PEIXE</h2>
              <div className="space-y-3">
                <button
                  onClick={() => handleStep26Selection("Mediterrânea")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Mediterrânea")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/mrKDN0JJ/imgi-5-xs-2xgsf-yegaho4largikrjq0owp-gjvwoa.png"
                    alt="Mediterrânea"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Mediterrânea</div>
                    <div className="text-sm opacity-75">Eu como muitos vegetais, grãos e frutos do mar</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Mediterrânea") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Mediterrânea") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleStep26Selection("Pescatariana")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Pescatariana")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/KzLY90yz/imgi-6-xs-gndoa-xgxejheybnmc4tjcs5mi-byrlu6.png"
                    alt="Pescatariana"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Pescatariana</div>
                    <div className="text-sm opacity-75">Eu evito carnes, mas gosto de peixe</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Pescatariana") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Pescatariana") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">SEM ALÉRGENOS</h2>
              <div className="space-y-3">
                <button
                  onClick={() => handleStep26Selection("Sem lactose")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Sem lactose")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/j2bSBysh/imgi-7-xs-hx5i6-wlnjm8dlb1p3cubejvvn-egrmmi.png"
                    alt="Sem lactose"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Sem lactose</div>
                    <div className="text-sm opacity-75">Eu não consumo alimentos com lactose</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Sem lactose") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Sem lactose") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleStep26Selection("Sem glúten")}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                    selectedStep26.includes("Sem glúten")
                      ? "bg-pink-500 border-pink-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-pink-300"
                  }`}
                >
                  <img
                    src="https://i.postimg.cc/mkyg4hkW/imgi-8-xs-zt0ro-qygkcuiof8wpoqb351ps-vjlo8h.png"
                    alt="Sem glúten"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <div className="font-semibold">Sem glúten</div>
                    <div className="text-sm opacity-75">Eu evito grãos contendo glúten</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedStep26.includes("Sem glúten") ? "border-white bg-white" : "border-gray-300"
                    }`}
                  >
                    {selectedStep26.includes("Sem glúten") && (
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {selectedStep26.length > 0 && (
            <div className="mt-8 w-full max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-800 rounded-xl animate-pulse blur-sm opacity-75"></div>
                <button
                  onClick={() => setCurrentStep(27)}
                  className="relative w-full bg-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors animate-pulse"
                >
                  PRÓXIMO PASSO
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (currentStep === 27) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(27 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Algum dos seguintes eventos da vida levou a um ganho de peso nos últimos anos?
            </h1>
            <p className="text-gray-500">Escolha todas que se aplicam</p>
          </div>

          <div className="w-full max-w-lg space-y-3">
            <button
              onClick={() => handleLifeEventsSelection("Casamento ou relacionamento")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Casamento ou relacionamento")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">👰</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Casamento ou relacionamento</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Casamento ou relacionamento")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Casamento ou relacionamento") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Vida profissional ou familiar ocupada")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Vida profissional ou familiar ocupada")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">😔</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Vida profissional ou familiar ocupada</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Vida profissional ou familiar ocupada")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Vida profissional ou familiar ocupada") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Desafios financeiros")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${selectedLifeEvents.includes(
                "Desafios financeiros",
              )}
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">💰</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Desafios financeiros</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Desafios financeiros")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Desafios financeiros") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Lesão ou invalidez")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Lesão ou invalidez")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">🏥</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Lesão ou invalidez</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Lesão ou invalidez") ? "border-pink-500 bg-pink-500" : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Lesão ou invalidez") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Estresse ou problemas de saúde mental")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Estresse ou problemas de saúde mental")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">😰</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Estresse ou problemas de saúde mental</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Estresse ou problemas de saúde mental")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Estresse ou problemas de saúde mental") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Metabolismo mais lento devido ao envelhecimento")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Metabolismo mais lento devido ao envelhecimento")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">😔</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Metabolismo mais lento devido ao envelhecimento</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Metabolismo mais lento devido ao envelhecimento")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Metabolismo mais lento devido ao envelhecimento") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Complicações pós tratamento")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Complicações pós tratamento")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">🦴</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Complicações pós tratamento</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Complicações pós tratamento")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Complicações pós tratamento") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => handleLifeEventsSelection("Nenhum dos itens acima")}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedLifeEvents.includes("Nenhum dos itens acima")
                  ? "bg-pink-50 border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-300"
              }`}
            >
              <span className="text-2xl">❌</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">Nenhum dos itens acima</div>
              </div>
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedLifeEvents.includes("Nenhum dos itens acima")
                    ? "border-pink-500 bg-pink-500"
                    : "border-gray-300"
                }`}
              >
                {selectedLifeEvents.includes("Nenhum dos itens acima") && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {selectedLifeEvents.length > 0 && (
            <div className="mt-8 w-full max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-800 rounded-xl animate-pulse blur-sm opacity-75"></div>
                <button
                  onClick={() => setCurrentStep(28)}
                  className="relative w-full bg-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors animate-pulse"
                >
                  PRÓXIMO PASSO
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (currentStep === 28) {
    const { min, max, step } = getHeightRange()
    const marks = getSliderMarks()

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(28 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Qual sua altura?</h1>

            {/* Unit toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => handleUnitToggle("cm")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  heightUnit === "cm" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                cm
              </button>
              <button
                onClick={() => handleUnitToggle("ft")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  heightUnit === "ft" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                pol
              </button>
            </div>

            {/* Height display */}
            <div className="text-4xl font-bold text-gray-900 mb-8">{formatHeight()}</div>
          </div>

          {/* Height slider */}
          <div className="w-full max-w-md mb-8">
            <div className="relative">
              {/* Slider track */}
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div
                  className="absolute h-2 bg-pink-500 rounded-full"
                  style={{ width: `${((heightValue - min) / (max - min)) * 100}%` }}
                ></div>
              </div>

              {/* Slider thumb */}
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={heightValue}
                onChange={(e) => handleHeightChange(Number.parseInt(e.target.value))}
                className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
              />

              {/* Custom thumb */}
              <div
                className="absolute w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-lg transform -translate-y-2 -translate-x-3 cursor-pointer"
                style={{ left: `${((heightValue - min) / (max - min)) * 100}%` }}
              ></div>
            </div>

            {/* Slider marks */}
            <div className="flex justify-between mt-4 px-2">
              {marks.map((mark) => (
                <div key={mark.value} className="text-center">
                  <div className="w-px h-4 bg-gray-300 mx-auto mb-1"></div>
                  <span className="text-sm text-gray-500">{mark.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">Arraste para ajustar</p>
          </div>

          {/* BMI info box */}
          <div className="w-full max-w-md mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📊</span>
                <span className="font-semibold text-blue-800">Calculando seu índice de massa corporal</span>
              </div>
              <p className="text-blue-700 text-sm">
                O IMC é amplamente utilizado como fator de risco para o desenvolvimento ou prevalência de diversos
                problemas de saúde.
              </p>
            </div>
          </div>

          {/* Continue button */}
          <div className="w-full max-w-md">
            <button
              onClick={() => setCurrentStep(29)}
              className="w-full bg-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors"
            >
              PRÓXIMO PASSO
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 29) {
    const { min, max, step } = getWeightRange()
    const marks = getWeightSliderMarks()

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mb-8">
          <div className="bg-pink-500 h-1 transition-all duration-300" style={{ width: `${(29 / 40) * 100}%` }}></div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Qual seu peso?</h1>

            {/* Unit toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => handleWeightUnitToggle("kg")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  weightUnit === "kg" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                kg
              </button>
              <button
                onClick={() => handleWeightUnitToggle("lb")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  weightUnit === "lb" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                lb
              </button>
            </div>

            {/* Weight display */}
            <div className="text-4xl font-bold text-gray-900 mb-8">{formatWeight()}</div>
          </div>

          {/* Weight slider */}
          <div className="w-full max-w-md mb-8">
            <div className="relative">
              {/* Slider track */}
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div
                  className="absolute h-2 bg-pink-500 rounded-full"
                  style={{ width: `${((weightValue - min) / (max - min)) * 100}%` }}
                ></div>
              </div>

              {/* Slider thumb */}
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={weightValue}
                onChange={(e) => handleWeightChange(Number.parseInt(e.target.value))}
                className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
              />

              {/* Custom thumb */}
              <div
                className="absolute w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-lg transform -translate-y-2 -translate-x-3 cursor-pointer"
                style={{ left: `${((weightValue - min) / (max - min)) * 100}%` }}
              ></div>
            </div>

            {/* Slider marks */}
            <div className="flex justify-between mt-4 px-2">
              {marks.map((mark) => (
                <div key={mark.value} className="text-center">
                  <div className="w-px h-4 bg-gray-300 mx-auto mb-1"></div>
                  <span className="text-sm text-gray-500">{mark.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">Arraste para ajustar</p>
          </div>

          {/* Weight range info */}
          <div className="w-full max-w-md mb-8">
            <p className="text-center text-gray-500 text-sm">
              Por favor, introduza um valor entre {weightUnit === "kg" ? "25kg e 300kg" : "55lb e 660lb"}
            </p>
          </div>

          {/* Continue button */}
          <div className="w-full max-w-md">
            <button
              onClick={() => setCurrentStep(30)}
              className="w-full bg-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors"
            >
              PRÓXIMO PASSO
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default fallback
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Carregando...</h1>
        <p className="text-gray-600">Preparando sua experiência...</p>
      </div>
    </div>
  )
}
