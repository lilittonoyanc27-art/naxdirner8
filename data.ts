import { TheoryPoint, TimeQuestion, NumberQuestion } from './types';

export const THEORY_POINTS: TheoryPoint[] = [
  {
    title: "Թվեր 1-10 (Números)",
    explanation: "Իսպաներեն հիմնական թվերը:",
    example: "Uno, Dos, Tres, Cuatro, Cinco...",
    translation: "Մեկ, Երկու, Երեք, Չորս, Հինգ..."
  },
  {
    title: "Ժամը (La Hora)",
    explanation: "Ժամը հարցնելու համար ասում ենք '¿Qué hora es?':",
    example: "Es la una. / Son las dos.",
    translation: "Ժամը մեկն է: / Ժամը երկուսն է:"
  },
  {
    title: "րոպեներ (Minutos)",
    explanation: "Օգտագործում ենք 'y' (և) րոպեների համար:",
    example: "Son las tres y diez.",
    translation: "Ժամը երեքն է և տասը րոպե:"
  }
];

export const TIME_QUESTIONS: TimeQuestion[] = [
  {
    id: 1,
    hours: 3,
    minutes: 0,
    options: ["Son las tres", "Es la una", "Son las cinco"],
    correctAnswer: "Son las tres"
  },
  {
    id: 2,
    hours: 1,
    minutes: 30,
    options: ["Son las una y media", "Es la una y media", "Son las dos"],
    correctAnswer: "Es la una y media"
  },
  {
    id: 3,
    hours: 5,
    minutes: 15,
    options: ["Son las cinco y cuarto", "Son las cinco y quince", "Son las seis"],
    correctAnswer: "Son las cinco y cuarto"
  },
  {
    id: 4,
    hours: 12,
    minutes: 0,
    options: ["Son las doce", "Es mediodía", "Son las once"],
    correctAnswer: "Son las doce"
  }
];

export const NUMBER_QUESTIONS: NumberQuestion[] = [
  { id: 1, number: 5, options: ["Cinco", "Cuatro", "Seis"], correctAnswer: "Cinco" },
  { id: 2, number: 12, options: ["Doce", "Diez", "Trece"], correctAnswer: "Doce" },
  { id: 3, number: 20, options: ["Veinte", "Treinta", "Diez"], correctAnswer: "Veinte" },
  { id: 4, number: 8, options: ["Ocho", "Siete", "Nueve"], correctAnswer: "Ocho" },
  { id: 5, number: 15, options: ["Quince", "Catorce", "Diez"], correctAnswer: "Quince" }
];
