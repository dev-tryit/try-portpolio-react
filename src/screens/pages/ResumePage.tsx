import { css } from "@emotion/css";
import React from "react";
import BigSubjectAboveImage from "screens/widgets/BigSubjectAboveImage";
import HeaderCard from "screens/widgets/HeaderCard";
import LAndLongR from "screens/widgets/LAndLongR";

const ResumePage = React.memo(() => {
  return (
    <LAndLongR
      left={
        <>
          <img
            className={css`
              height: 100%;
              object-fit: cover;
            `}
            alt="profile"
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
          />
          <BigSubjectAboveImage>MY RESUME</BigSubjectAboveImage>
        </>
      }
      right={
        <>
          <HeaderCard title={"MY RESUME"} subtitle={"HISTORY"}></HeaderCard>
          <MyExperience></MyExperience>
          <MySkills></MySkills>
        </>
      }
    ></LAndLongR>
  );
});

const MyExperience = React.memo(() => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-12 lg:col-span-6">
        <div className="relative">
          <h2>Experience</h2>
          <ul>
            <li>
              <div className="r-name">
                <i className="ti-briefcase"></i>
                <span>Google</span>
                <label>OCT 2015 - JUNE 2016</label>
              </div>
              <div className="r-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </li>
            <li>
              <div className="r-name">
                <i className="ti-briefcase"></i>
                <span>Apple</span>
                <label>OCT 2015 - JUNE 2016</label>
              </div>
              <div className="r-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="resume-row">
          <h2>Education</h2>
          <ul>
            <li>
              <div className="r-name">
                <i className="fas fa-graduation-cap"></i>
                <span>University</span>
                <label>OCT 2015 - JUNE 2016</label>
              </div>
              <div className="r-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </li>
            <li>
              <div className="r-name">
                <i className="fas fa-graduation-cap"></i>
                <span>Design and Art</span>
                <label>OCT 2015 - JUNE 2016</label>
              </div>
              <div className="r-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

class SkillSlider {
  name: string;
  percent: number;

  constructor(name: string, percent: number) {
    this.name = name;
    this.percent = percent;
  }
}

const MySkills = React.memo(() => {
  const skillsByGroup: Record<string, SkillSlider[]> = {
    "Design Skills": [
      new SkillSlider("CORAL DRAW", 92),
      new SkillSlider("CORAL DRAW", 92),
      new SkillSlider("CORAL DRAW", 92),
    ],
    "Coding Skills": [
      new SkillSlider("CORAL DRAW", 92),
      new SkillSlider("CORAL DRAW", 92),
      new SkillSlider("CORAL DRAW", 92),
    ],
  };

  return (
    <div className="w-full mt-[30px]">
      <div className="sub-title mb-[30px]">
        <h2>My Skills</h2>
      </div>
      <div className="grid grid-cols-12 gap-7">
        {Object.entries(skillsByGroup).map((entry) => {
          return (
            <div className="col-span-12 lg:col-span-6">
              <h3>{entry[0]}</h3>
              <div className="skills">
                {entry[1].map((e) => {
                  return (
                    <>
                      <div className="progress-lt">
                        <h6>{e.name}</h6>
                        <span>{e.percent}%</span>
                        <div className="progress">
                          <div
                            className={css`
                              --tw-bg-opacity: 1;
                              background-color: rgb(
                                0 0 0 / var(--tw-bg-opacity)
                              );
                              transition-duration: 300ms;
                              transition-timing-function: cubic-bezier(
                                0.4,
                                0,
                                0.2,
                                1
                              );
                              width: ${e.percent}%;
                            `}
                          ></div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ResumePage;
