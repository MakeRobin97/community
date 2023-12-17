"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileTitleView from "./components/ProfileTitleView";
import ProfileEducationView from "./components/ProfileEducationView";
import ProfileExperienceView from "./components/ProfileExperienceView";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import ProfileProjectsView from "./components/ProfileProjectsView";
import ProfileDashBoardView from "./components/ProfileDashBoardView";
import ProfileVisitorsView from "./components/ProfileVisitorsView";
import ModalEdit from "../components/ModalEdit";
import * as ProfileViewModelInterface from "../../view-model/profile/interface/ProfileViewModelInterface"


const ProfileView = ({ id }: { id: number }) => {
  const [titleData, setTitleData] = useState<ProfileViewModelInterface.ProfileTitleInterface | null>(null);
  const [projectsData, setProjectsData] = useState<ProfileViewModelInterface.ProfileProjectsInterface | null>(null);
  const [experienceData, setExperienceData] = useState<ProfileViewModelInterface.ProfileExperienceInterface | null>(null);
  const [educationData, setEducationData] = useState<ProfileViewModelInterface.ProfileEducationInterface | null>(null);
  const [change, setChange] = useState<boolean>(false);

  const isChange = () => {
    setChange((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const getProfileData = await ProfileViewModel.getProfileTitleData(id);

        setTitleData(getProfileData);

        const getProjectsData = await ProfileViewModel.getProjectsData(id);

        setProjectsData(getProjectsData);

        const getExperienceData = await ProfileViewModel.getProfileExperience(
          id
        );

        setExperienceData(getExperienceData);

        const getEducationData = await ProfileViewModel.getProfileEducation(id);
        setEducationData(getEducationData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [change]);

  if (
    titleData === null ||
    projectsData === null ||
    experienceData == null ||
    educationData == null
  ) {
    return <div>Loading...</div>;
  }

  const userIdFromLocalStorage: number | null = parseInt(
    localStorage.getItem("userId") || "-1"
  );

  const myProfileCheck: boolean = userIdFromLocalStorage === titleData.user.id;

  return (
    <>
      <ProfileStyleBox>
        <ProfileStyle>
          <ProfileLeft>
            <ProfileOutSideBox>
              <ProfileTitleView data={titleData} />
              {myProfileCheck && (
                <ModalEdit
                  deleteBtn={false}
                  newBtn={false}
                  title="프로필 수정"
                  layout="title"
                  click={isChange}
                />
              )}
            </ProfileOutSideBox>

            <ProfileTotalBox>
              <ProfileBox>
                <ProfileBoxInside>
                  <ProfileOutSideBox>
                    <ProfileProjectsView
                      data={projectsData}
                      myProfile={myProfileCheck}
                      profileId={id}
                    />
                  </ProfileOutSideBox>
                </ProfileBoxInside>
              </ProfileBox>
              <ProfileCareerStyle>
                <ProfileCareerWrap>
                  <ProfileOutSideBox>
                    <ProfileExperienceView
                      data={experienceData}
                      myProfile={myProfileCheck}
                      profileId={id}
                    />
                  </ProfileOutSideBox>
                </ProfileCareerWrap>
              </ProfileCareerStyle>
              <ProfileCareerStyle>
                <ProfileCareerWrap>
                  <ProfileOutSideBox>
                    <ProfileEducationView
                      data={educationData}
                      myProfile={myProfileCheck}
                      profileId={id}
                    />
                  </ProfileOutSideBox>
                </ProfileCareerWrap>
              </ProfileCareerStyle>
            </ProfileTotalBox>
          </ProfileLeft>
          <ProfileRight>
            <ProfileDashBoardView />
            <ProfileVisitorsView />
          </ProfileRight>
        </ProfileStyle>
      </ProfileStyleBox>
    </>
  );
};

const ProfileStyleBox = styled.div``;

const ProfileStyle = styled.div`
  padding-top: 40px;
  padding-bottom: 280px;
  display: flex;
  gap: 40px;
`;

const ProfileLeft = styled.div``;

const ProfileRight = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const ProfileOutSideBox = styled.div`
  position: relative;
`;

const ProfileTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileBox = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileBoxInside = styled.div`
  padding: 30px;
  background-color: white;
`;

const ProfileCareerStyle = styled.div`
  width: 850px;
  flex-shrink: 0;
  background-color: white;
`;

const ProfileCareerWrap = styled.div`
  padding: 30px 30px 0px 30px;
`;

const ModalPosition = styled.div`
  position: relative;
  background-color: pink;
`;

export default ProfileView;
