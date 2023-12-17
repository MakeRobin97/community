export interface ProfileViewModelInterface {
  getProfileTitleData: (id: number) => Promise<ProfileTitleInterface>;
  getProjectsData: (id: number) => Promise<ProfileProjectsInterface[]>;
  getProfileExperience: (id: number) => Promise<ProfileExperienceInterface[]>;
  getProfileEducation: (id: number) => Promise<ProfileEducationInterface[]>;
}

export interface ProfileTitleInterface {
  id: number;
  profileBackImage: string;
  location: string;
  address: string;
  jobDescription: string;
  about: string;
  user: {
    id: number;
    email: string;
    name: string;
    profileImage: string;
  };
}

export interface ProfileProjectsInterface {
  id: number;
  coverImage: {
    id: number;
    image: string;
  };
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ProfileExperienceInterface {
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  id: number;
  experienceCompany: {
    id: number;
    name: string;
    logo: string;
    location: string;
  };
}

export interface ProfileEducationInterface {
  id: number;
  course: string;
  description: string;
  startDate: string;
  endDate: string;
  educationInstitute: {
    id: number;
    name: string;
    logo: string;
  };
}

export interface PutTitleInterface {}

export interface MakeProjectsInterface {}

export interface RemoveProjectsInterface {}

export interface UpdateProject {}

export interface MakeExperienceInterface {}

export interface RemoveExperienceInterface {}

export interface UpdateExperience {}

export interface MakeEducationInterface {}

export interface RemoveEdcuationInterface {}

export interface UpdateEducation {}