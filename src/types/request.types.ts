// types/request.types.ts
export interface NewRequestFormData {
    // Step 1
    firstName: string;
    lastName: string;
    birthDate: string;
    birthPlace: string;
    address: string;
    residenceCommuneId: string;
    fatherName: string;
    motherFirstName: string;
    motherLastName: string;

    // Step 2
    nationalIdentificationNumber: string;
    idCardNumber: string;
    releaseDate: string;
    issuingAuthority: string;

    // Step 3
    commune: string;
    oceanNaming: string;
    area: number;

    // Step 4
    biometricIdCard: File | null;
    residenceCard: File | null;
    landContract: File | null;
}