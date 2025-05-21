
export enum ModalityType {
  COLLECTIVE = 'Coletiva',
  INDIVIDUAL = 'Individual',
}

export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
  OTHER = 'Outro', // Though not explicitly requested, good for inclusiveness
}

export interface ModalityDetail {
  id: string;
  name: string;
  type: ModalityType;
  minMembers?: number;
  maxMembers?: number;
  genderSpecific?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  period: string;
}

export interface Registration {
  id: string;
  responsibleName: string;
  responsiblePeriod: string;
  selectedModalities: string[]; // Array of modality IDs
  modalityGenders: Record<string, Gender>; // Keyed by modality ID
  hasTeam: boolean | null;
  teamMembers: TeamMember[];
  registrationDate: number; // Timestamp
}

export interface AdminFilters {
  searchTerm: string;
  filterModality: string;
  filterPeriod: string;
}
