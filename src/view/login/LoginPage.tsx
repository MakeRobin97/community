"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import UserViewModel from "@/view-model/user/class/UserViewModel";

const LoginPage: React.FC = () => {
  const router = useRouter();

  interface acountCheck {
    email: string;
    password: string;
  }

  const [userInfo, setUserInfo] = useState<acountCheck>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [loginCheck, setLoginCheck] = useState<string>('');

  const handleGoToSignUp = () => {
    router.push("/signup");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const alertCheck = await UserViewModel.Login(
      userInfo.email,
      userInfo.password
    );

    setLoginCheck(alertCheck);
    if (alertCheck === "wrong") {
      alert("잘못된 정보 입력했습니다.");
      return;
    } else if (alertCheck === "emailEmpty") {
      alert("이메일을 입력해주세요.");
      return;
    } else if (alertCheck === "passwordEmpty") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    alert("로그인 성공");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (loginCheck.token) {
        localStorage.setItem("token", loginCheck.token);
        localStorage.setItem("userId", loginCheck.user.id);
      } else {
        return;
      }
      const profileCheck = await UserViewModel.CheckProfileId();
      localStorage.setItem("profileId", profileCheck.id);
      if (profileCheck === "notExist") {
        const createProfile = await UserViewModel.CreateProfile();

        const profileCheck = await UserViewModel.CheckProfileId();
        localStorage.setItem("profileId", profileCheck.id);
      }
      router.push("/feed");
    };

    fetchData();
  }, [loginCheck]);

  return (
    <div>
      <Wrapper>
        <Title>로그인</Title>
        <FormWrapper onSubmit={handleLogin}>
          <EmailInput
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={handleUserInfo}
            name="email"
          ></EmailInput>
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              onChange={handleUserInfo}
              name="password"
            ></PasswordInput>
            <ShowButton onClick={handleShowPassword}>
              {showPassword ? "숨기기" : "보기"}
            </ShowButton>
          </PasswordWrapper>
          <LoginButton type="submit">로그인</LoginButton>
        </FormWrapper>
        <SignUpLetter onClick={handleGoToSignUp}>
          회원이 아니신가요?
        </SignUpLetter>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 150px 0 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px 32px 32px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 2px rgba(0, 0, 0, 0.15);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;
const Logo = styled.h1`
  color: #8bc34a;
`;
const Title = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
`;
const EmailInput = styled(InputStyle)`
  margin-bottom: 25px;
`;

const PasswordInput = styled(InputStyle)``;

const LoginButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: #2d64bc;
  color: white;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  padding: 12px 24px 12px 24px;
  height: min-content;
  font-family: Gotham Pro;
`;

const SignUpLetter = styled.div`
  cursor: pointer;
  opacity: 0.6;
  font-size: 14px;
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 35px;
`;

const ShowButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  color: blue;
`;

export default LoginPage;
