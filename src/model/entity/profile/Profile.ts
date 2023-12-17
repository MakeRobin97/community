import { ExecOptionsWithStringEncoding } from "child_process";
import * as ProfileInterface from "./ProfileInterface";

export class ProfileTitleImp implements ProfileInterface.ProfileTitleInterface {
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

  constructor(
    id: number,
    profileBackImage: string,
    location: string,
    address: string,
    jobDescription: string,
    about: string,
    user: {
      id: number;
      email: string;
      name: string;
      profileImage: string;
    }
  ) {
    this.id = id;
    this.profileBackImage = profileBackImage;
    this.location = location;
    this.address = address;
    this.jobDescription = jobDescription;
    this.about = about;
    this.user = user;
  }
}

export class ProfileProjectsImp
  implements ProfileInterface.ProfileProjectsInterface
{
  id: number;
  coverImage: {
    id: number;
    image: string;
  };
  title: string;
  description: string;
  startDate: string;
  endDate: string;

  constructor(
    id: number,
    coverImage: {
      id: number;
      image: string;
    },
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    this.id = id;
    this.coverImage = coverImage;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export class ProfileExperienceImp
  implements ProfileInterface.ProfileExperienceInterface
{
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
  constructor(
    position: string,
    startDate: string,
    endDate: string,
    description: string,
    id: number,
    experienceCompany: {
      id: number;
      name: string;
      logo: string;
      location: string;
    }
  ) {
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.id = id;
    this.experienceCompany = experienceCompany;
  }
}

export class ProfileEducationImp
  implements ProfileInterface.ProfileEducationInterface
{
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
  constructor(
    id: number,
    course: string,
    description: string,
    startDate: string,
    endDate: string,
    educationInstitute: {
      id: number;
      name: string;
      logo: string;
    }
  ) {
    this.id = id;
    this.course = course;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.educationInstitute = educationInstitute;
  }
}
