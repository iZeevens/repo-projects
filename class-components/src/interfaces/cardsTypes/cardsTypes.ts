import { ComicsData } from '../searchTypes/searchTypes'

interface CardsProps {
  isLoading: boolean
  elements: ComicsData[]
  currentPage: number
}

interface Characters {
  name: string
  gender: 'M' | 'F'
  yearOfBirth: number
  yearOfDeath: number
}

interface CardDetailsData {
  title?: string
  numberOfPages?: number
  stardateFrom?: number
  stardateTo?: number
  yearFrom?: number
  yearTo?: number
  characters?: Characters[]
  photonovel?: boolean
  adaptation?: boolean
}

type CardDetails = {
  comics: CardDetailsData
}

export type { CardsProps, CardDetails }
