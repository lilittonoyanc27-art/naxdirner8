/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory' | 'time' | 'numbers';

export interface TheoryPoint {
  title: string;
  explanation: string;
  example: string;
  translation: string;
}

export interface TimeQuestion {
  id: number;
  hours: number;
  minutes: number;
  options: string[];
  correctAnswer: string;
}

export interface NumberQuestion {
  id: number;
  number: number;
  options: string[];
  correctAnswer: string;
}
