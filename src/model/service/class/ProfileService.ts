import axios, { Axios, AxiosResponse } from "axios";
import * as ProfileServiceInterface from "../interface/ProfileServiceInterface";
import * as Profile from "@/model/entity/profile/Profile";
import * as ProfileInterface from "@/model/entity/profile/ProfileInterface";
import BASE_API from "@/model/config";



export class ProfileService {
  static async getTitle(
    profileId: number
  ): Promise<ProfileInterface.ProfileTitleInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileTitleInterface> =
      await axios.get(`/profile/${profileId}`, {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
    const result = new Profile.ProfileTitleImp(
      response.data.id,
      response.data.profileBackImage,
      response.data.location,
      response.data.address,
      response.data.jobDescription,
      response.data.about,
      response.data.user
    );
    return result;
  }

  static async getMyTitle(): Promise<ProfileInterface.ProfileTitleInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileTitleInterface> =
      await axios.get(`/profile/${localStorage.getItem("profileId")}`, {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
    const result = new Profile.ProfileTitleImp(
      response.data.id,
      response.data.profileBackImage,
      response.data.location,
      response.data.address,
      response.data.jobDescription,
      response.data.about,
      response.data.user
    );
    return result;
  }

  static async getProjects(
    profileId: number
  ): Promise<ProfileInterface.ProfileProjectsInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileProjectsInterface[]
    > = await axios.get(
      `/profile/${profileId}/project/`,

      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    const result = response.data.map(
      (project) =>
        new Profile.ProfileProjectsImp(
          project.id,
          project.coverImage,
          project.title,
          project.description,
          project.startDate,
          project.endDate
        )
    );

    return result;
  }

  static async getOneProject(
    id: number
  ): Promise<ProfileInterface.ProfileProjectsInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileProjectsInterface> =
      await axios.get(
        `/profile/${localStorage.getItem("profileId")}/project/${id}`,
        {
          baseURL: `${BASE_API}`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

    const project = response.data;

    const result: ProfileInterface.ProfileProjectsInterface =
      new Profile.ProfileProjectsImp(
        project.id,
        project.coverImage,
        project.title,
        project.description,
        project.startDate,
        project.endDate
      );

    return result;
  }



  static async getExperience(
    profileId: number
  ): Promise<ProfileInterface.ProfileExperienceInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileExperienceInterface[]
    > = await axios.get(`/profile/${profileId}/experience`, {
      baseURL: `${BASE_API}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    const result = response.data.map(
      (experience) =>
        new Profile.ProfileExperienceImp(
          experience.position,
          experience.startDate,
          experience.endDate,
          experience.description,
          experience.id,
          experience.experienceCompany
        )
    );

    return result;
  }

  static async getOneExperience(
    id: number
  ): Promise<ProfileInterface.ProfileExperienceInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileExperienceInterface> =
      await axios.get(
        `/profile/${localStorage.getItem("profileId")}/experience/${id}`,
        {
          baseURL: `${BASE_API}`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

    const experience = response.data;

    const result: ProfileInterface.ProfileExperienceInterface =
      new Profile.ProfileExperienceImp(
        experience.position,
        experience.startDate,
        experience.endDate,
        experience.description,
        experience.id,
        experience.experienceCompany
      );

    return result;
  }

  static async getEducation(
    profileId: number
  ): Promise<ProfileInterface.ProfileEducationInterface[]> {
    const response: AxiosResponse<
      ProfileServiceInterface.ProfileEducationInterface[]
    > = await axios.get(`/profile/${profileId}/education`, {
      baseURL: `${BASE_API}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    const result = response.data.map(
      (education) =>
        new Profile.ProfileEducationImp(
          education.id,
          education.course,
          education.description,
          education.startDate,
          education.endDate,
          education.educationInstitute
        )
    );

    return result;
  }

  static async getOneEducation(
    id: number
  ): Promise<ProfileInterface.ProfileEducationInterface> {
    const response: AxiosResponse<ProfileServiceInterface.ProfileEducationInterface> =
      await axios.get(
        `/profile/${localStorage.getItem("profileId")}/education/${id}`,
        {
          baseURL: `${BASE_API}`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );


    const education = response.data;

    const result: ProfileInterface.ProfileEducationInterface =
      new Profile.ProfileEducationImp(
        education.id,
        education.course,
        education.description,
        education.startDate,
        education.endDate,
        education.educationInstitute
      );

    return result;
  }




  static async putTitle(userInfo: PutTitleProps): Promise<AxiosResponse<ProfileServiceInterface.PutTitleInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.PutTitleInterface> = await axios.put(
      `/profile/${localStorage.getItem("profileId")}`,
      {
        jobDescription: userInfo.jobDescription,
        location: userInfo.location,
        address: userInfo.address,
        profileBackImage: userInfo.profileBackImage,
        about: userInfo.about,
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async makeProject(userInfo: MakeProjectProps): Promise<AxiosResponse<ProfileServiceInterface.MakeProjectsInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.MakeProjectsInterface> = await axios.post(
      `/profile/${localStorage.getItem("profileId")}/project`,
      {
        title: userInfo.title,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        projectImages: [userInfo.image],
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeProject(id: number): Promise<AxiosResponse<ProfileServiceInterface.RemoveProjectsInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.RemoveProjectsInterface> = await axios.delete(
      `/profile/${localStorage.getItem("profileId")}/project/${id}`,

      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async updateProject(userInfo: UpdateProjectProps, id: number): Promise<AxiosResponse<ProfileServiceInterface.UpdateProject>> {
    const response: AxiosResponse<ProfileServiceInterface.UpdateProject> = await axios.put(
      `/profile/${localStorage.getItem("profileId")}/project/${id}`,
      {
        title: userInfo.title,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        projectImages: [userInfo.image],
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async makeExperience(userInfo: MakeExperienceProps): Promise<AxiosResponse<ProfileServiceInterface.MakeExperienceInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.MakeExperienceInterface> = await axios.post(
      `/profile/${localStorage.getItem("profileId")}/experience`,
      {
        position: userInfo.position,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        experienceCompany: {
          name: userInfo.companyName,
          logo: userInfo.logoUrl,
          location: userInfo.location,
        },
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeExperience(id: number): Promise<AxiosResponse<ProfileServiceInterface.RemoveExperienceInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.RemoveExperienceInterface> = await axios.delete(
      `/profile/${localStorage.getItem("profileId")}/experience/${id}`,

      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    return response;
  }

  static async updateExperience(userInfo: UpdateExperienceProps, id: number): Promise<AxiosResponse<ProfileServiceInterface.UpdateExperience>> {
    const response: AxiosResponse<ProfileServiceInterface.UpdateExperience> = await axios.put(
      `/profile/${localStorage.getItem("profileId")}/experience/${id}`,
      {
        position: userInfo.position,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        experienceCompany: {
          name: userInfo.companyName,
          logo: userInfo.logoUrl,
          location: userInfo.location,
        },
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async makeEducation(userInfo: MakeEducationProps): Promise<AxiosResponse<ProfileServiceInterface.MakeEducationInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.MakeEducationInterface> = await axios.post(
      `/profile/${localStorage.getItem("profileId")}/education`,
      {
        course: userInfo.course,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        educationInstitute: {
          name: userInfo.name,
          logo: userInfo.logoUrl,
        },
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async removeEducation(id: number): Promise<AxiosResponse<ProfileServiceInterface.RemoveEdcuationInterface>> {
    const response: AxiosResponse<ProfileServiceInterface.RemoveEdcuationInterface> = await axios.delete(
      `/profile/${localStorage.getItem("profileId")}/education/${id}`,

      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }

  static async updateEducation(userInfo: UpdateEducationProps, id: number): Promise<AxiosResponse<ProfileServiceInterface.UpdateEducation>> {
    const response: AxiosResponse<ProfileServiceInterface.UpdateEducation> = await axios.put(
      `/profile/${localStorage.getItem("profileId")}/education/${id}`,
      {
        course: userInfo.course,
        description: userInfo.description,
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        educationInstitute: {
          name: userInfo.name,
          logo: userInfo.logoUrl,
        },
      },
      {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  }
}

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