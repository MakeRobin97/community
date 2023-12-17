"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import ProfileViewModel from "@/view-model/profile/class/ProfileViewModel";
import DetailsViewLayout from "@/view/components/DetailsViewLayout";
import { ProfileEducationInterface } from "@/model/entity/profile/ProfileInterface";
import ModalEdit from "@/view/components/ModalEdit";
import * as ProfileViewModelInterface from "../../../view-model/profile/interface/ProfileViewModelInterface"

const DetailsEducationView = ({ id }: { id: number }) => {
  const router = useRouter();
  const [titleData, setTitleData] = useState<ProfileViewModelInterface.ProfileTitleInterface | null>(null);
  const [educationData, setEducationData] = useState<ProfileViewModelInterface.ProfileEducationInterface[] | null>(null);
  const [change, setChange] = useState<boolean>(false);

  const isChange = () => {
    setChange((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const getProfileData = await ProfileViewModel.getProfileTitleData(id);

        setTitleData(getProfileData);

        const getEducationData = await ProfileViewModel.getProfileEducation(id);

        setEducationData(getEducationData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [change]);

  if (titleData === null || educationData === null) {
    return <div>Loading...</div>;
  }

  const userIdFromLocalStorage: number | null = parseInt(
    localStorage.getItem("userId") || "-1"
  );

  const myProfile: boolean = userIdFromLocalStorage === titleData.user.id;

  return (
    <DetailsProjectViewStyle>
      <DetailsViewLayout>
        <BackIcon
          alt="뒤로가기 아이콘"
          src="/images/arrow.png"
          width={20}
          height={20}
          onClick={() => {
            router.push(`/profile/${id}`);
          }}
        />

        {myProfile && (
          <ModalEdit
            deleteBtn={false}
            newBtn={true}
            title="교육 생성"
            layout="education_null"
            click={isChange}
          />
        )}

        <CareerCategory>Education</CareerCategory>
        {educationData?.map((item: ProfileEducationInterface) => (
          <CareerContentBox key={item.id}>
            <ModalPosition>
              {myProfile && (
                <ModalEdit
                  newBtn={false}
                  deleteBtn={true}
                  title="교육 수정"
                  layout="education"
                  click={isChange}
                  id={item.id}
                />
              )}
            </ModalPosition>
            <CareerPic
              src={item.educationInstitute.logo}
              alt="사진"
              width={100}
              height={100}
            />
            <CareerInfoBox>
              <CareerInstitute>{item.educationInstitute.name}</CareerInstitute>

              <CareerInstituteDescription>
                {item.description}
              </CareerInstituteDescription>

              <CareerPeriod>
                {item.startDate} - {item.endDate}
              </CareerPeriod>
              <EducationCourse>{item.course}</EducationCourse>
            </CareerInfoBox>
          </CareerContentBox>
        ))}
      </DetailsViewLayout>
    </DetailsProjectViewStyle>
  );
};

const DetailsProjectViewStyle = styled.div`
  position: relative;
`;

const BackIcon = styled(Image)`
  flex-shrink: 0;
  display: block;
  cursor: pointer;
`;


const CareerCategory = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 30px;
`;

const ModalPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 5px;
`;

const CareerContentBox = styled.div`
  display: flex;
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #f4f4f4;
  position: relative;
  &:last-child {
    border-bottom: none;
  }
`;

const CareerPic = styled(Image)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 27px;
  background-color: #ed8f03;
  display: block;
  margin-right: 16px;
  object-fit: cover;
`;

const CareerInfoBox = styled.div``;

const CareerPeriod = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 10px;
`;

const CareerInstitute = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
`;

const CareerInstituteDescription = styled.div`
  color: #181818;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-right: 10px;
`;

const EducationCourse = styled.div`
  color: #181818;
  width: 719px;
  font-family: Gotham Pro;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export default DetailsEducationView;

