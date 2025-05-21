
import { ModalityType, Gender, ModalityDetail } from './types';

export const APP_NAME = "JIGS - 2025";

export const PERIODS: string[] = [
  "1º Período", "3º Período", "5º Período", "7º Período", 
  "9º Período"
];

export const GENDERS_OPTIONS: { value: Gender; label: string }[] = [
  { value: Gender.MALE, label: "Masculino" },
  { value: Gender.FEMALE, label: "Feminino" },
  // { value: Gender.OTHER, label: "Outro" }, // Uncomment if needed
];

export const MODALITIES: ModalityDetail[] = [
  { id: "futsal", name: "Futsal", type: ModalityType.COLLECTIVE, minMembers: 5, maxMembers: 10 },
  { id: "volei", name: "Vôlei", type: ModalityType.COLLECTIVE, minMembers: 6, maxMembers: 12 },
  { id: "basquete", name: "Basquete", type: ModalityType.COLLECTIVE, minMembers: 5, maxMembers: 12 },
  { id: "queimada", name: "Queimada", type: ModalityType.COLLECTIVE, minMembers: 6, maxMembers: 10 },
  { id: "tenis_mesa", name: "Tênis de Mesa", type: ModalityType.INDIVIDUAL, genderSpecific: true },
  { id: "xadrez", name: "Xadrez", type: ModalityType.INDIVIDUAL, genderSpecific: false },
  { id: "corrida_100m", name: "Corrida 100m", type: ModalityType.INDIVIDUAL, genderSpecific: true },
];

export const LOCAL_STORAGE_KEY = 'championshipRegistrations';
