import * as ProfileViewModelInterface from "../interface/ProfileViewModelInterface";
import { ProfileService } from "@/model/service/class/ProfileService";

export class ProfileViewModel {
  static getProfileTitleData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileTitleInterface> {
    try {
      const response = ProfileService.getTitle(id);
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getMyProfileTitleData(): Promise<ProfileViewModelInterface.ProfileTitleInterface> {
    try {
      const response = ProfileService.getMyTitle();
      return response;
    } catch (error) {
      console.error("Error getting profile title data:", error);
      throw error;
    }
  }

  static getProjectsData(
    profileId: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface[]> {
    try {
      const response = ProfileService.getProjects(profileId);
      return response;
    } catch (error) {
      console.error("Error getting profile projects data:", error);
      throw error;
    }
  }

  static getOneProjectData(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileProjectsInterface> {
    try {
      const response = ProfileService.getOneProject(id);
      return response;
    } catch (error) {
      console.error("Error getting profile projects data:", error);
      throw error;
    }
  }

  static getProfileExperience(
    profileId: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface[]> {
    try {
      const response = ProfileService.getExperience(profileId);
      return response;
    } catch (error) {
      console.error("Error getting profile experience data:", error);
      throw error;
    }
  }

  static getOneProfileExperience(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileExperienceInterface> {
    try {
      const response = ProfileService.getOneExperience(id);
      return response;
    } catch (error) {
      console.error("Error getting profile experience data:", error);
      throw error;
    }
  }

  static getProfileEducation(
    profileId: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface[]> {
    try {
      const response = ProfileService.getEducation(profileId);
      return response;
    } catch (error) {
      console.error("Error getting profile education data:", error);
      throw error;
    }
  }

  static getOneProfileEducation(
    id: number
  ): Promise<ProfileViewModelInterface.ProfileEducationInterface> {
    try {
      const response = ProfileService.getOneEducation(id);
      return response;
    } catch (error) {
      console.error("Error getting profile education data:", error);
      throw error;
    }
  }

  static putProfileTitle(userInfo: PutTitleProps): Promise<ProfileViewModelInterface.PutTitleInterface> {
    try {
      const response = ProfileService.putTitle(userInfo);
      return response;
    } catch (error) {
      console.error("Error putting profile title data:", error);
      throw error;
    }
  }

  static makeProject(userInfo: MakeProjectProps): Promise<ProfileViewModelInterface.MakeProjectsInterface> {
    try {
      const response = ProfileService.makeProject(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile project data:", error);
      throw error;
    }
  }

  static removeProject(id: number): Promise<ProfileViewModelInterface.RemoveProjectsInterface> {
    try {
      const response = ProfileService.removeProject(id);
      return response;
    } catch (error) {
      console.error("Error removing profile project data:", error);
      throw error;
    }
  }

  static updateProject(userInfo: UpdateProjectProps, id: number): Promise<ProfileViewModelInterface.UpdateProject> {
    try {
      const response = ProfileService.updateProject(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile project data:", error);
      throw error;
    }
  }

  ///////////////////

  static makeExperience(userInfo: MakeExperienceProps): Promise<ProfileViewModelInterface.MakeExperienceInterface> {
    try {
      const response = ProfileService.makeExperience(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile experience data:", error);
      throw error;
    }
  }

  static removeExperience(id: number): Promise<ProfileViewModelInterface.RemoveExperienceInterface> {
    try {
      const response = ProfileService.removeExperience(id);
      return response;
    } catch (error) {
      console.error("Error removing profile experience data:", error);
      throw error;
    }
  }

  static updateExperience(userInfo: UpdateExperienceProps, id: number): Promise<ProfileViewModelInterface.UpdateExperience> {
    try {
      const response = ProfileService.updateExperience(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile experience data:", error);
      throw error;
    }
  }

  ////////////////

  static makeEducation(userInfo: MakeEducationProps): Promise<ProfileViewModelInterface.MakeEducationInterface> {
    try {
      const response = ProfileService.makeEducation(userInfo);
      return response;
    } catch (error) {
      console.error("Error making profile education data:", error);
      throw error;
    }
  }

  static removeEducation(id: number): Promise<ProfileViewModelInterface.RemoveEdcuationInterface> {
    try {
      const response = ProfileService.removeEducation(id);
      return response;
    } catch (error) {
      console.error("Error removing profile education data:", error);
      throw error;
    }
  }

  static updateEducation(userInfo: UpdateEducationProps, id: number): Promise<ProfileViewModelInterface.UpdateEducation> {
    try {
      const response = ProfileService.updateEducation(userInfo, id);
      return response;
    } catch (error) {
      console.error("Error updating profile education data:", error);
      throw error;
    }
  }
}

export default ProfileViewModel;

interface PutTitleProps {
  jobDescription: string,
  location: string,
  address: string,
  profileBackImage: string,
  about: string,
}

interface MakeProjectProps {
  image: string,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
}

interface UpdateProjectProps {
  image: string,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
}

interface MakeExperienceProps {
  position: string,
  companyName: string,
  location: string,
  logoUrl: string,
  startDate: string,
  endDate: string,
  description: string,
}



interface UpdateExperienceProps {
  position: string,
  companyName: string,
  location: string,
  logoUrl: string,
  startDate: string,
  endDate: string,
  description: string,
}

interface MakeEducationProps {
  name: string,
  description: string,
  logoUrl: string,
  course: string,
  startDate: string,
  endDate: string,
}



interface UpdateEducationProps {
  name: string,
  description: string,
  logoUrl: string,
  course: string,
  startDate: string,
  endDate: string,
}