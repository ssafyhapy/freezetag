import React, { useState } from "react";
import checkedCircle from "../../assets/Game_turns/checked.png";
import arrow from "../../assets/Game_turns/arrow.png";

const WaitingRoomGameTurns = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <>
      <div className="flex justify-around gap-5 w-[60vw] h-[50%] z-30">
        <div
          className="flex flex-col items-center justify-center h-full relative"
          onMouseEnter={() => handleMouseEnter("self-introduction")}
          onMouseLeave={handleMouseLeave}
        >
          <img src={checkedCircle} alt="" />
          <div className="text-[18px]">한 줄 자기소개</div>
          {hoveredSection === "self-introduction" && (
            <div
              className="absolute bottom-full w-[20vw] min-w-[230px] h-[35vh] mt-2 p-2 bg-white shadow-lg flex flex-col justify-center items-center gap-3 rounded-[15px] "
              style={{
                background:
                  "linear-gradient(to right, rgba(221, 229, 249, 0.7), rgba(142, 210, 255, 0.7))",
              }}
            >
              <div className="flex justify-center items-center text-[1.3rem] bg-[rgba(255,255,255,0.7)] text-[rgba(0,0,0,0.5)] w-full rounded-[15px] z-20">
                한 줄 자기소개
              </div>
              <div className="flex flex-col gap-3 justify-center items-center text-[16px] p-2 bg-[rgba(255,255,255,0.7)] text-center text-[rgba(0,0,0,0.5)] w-full rounded-[15px] min-h-[75%] z-20">
                <div>
                  <div className="text-[#96A5FE]">“나는 ________이다.”</div>
                  <div>
                    한 문장으로 자신을
                    <br />
                    소개할 수 있는 문구를
                    <br />
                    적어 보세요.
                  </div>
                </div>
                <div className="text-left w-full text-[12px]">
                  예상 소요 시간 : 10분
                </div>
              </div>
            </div>
          )}
        </div>
        <img src={arrow} alt="" />
        <div
          className="flex flex-col items-center justify-center h-full relative"
          onMouseEnter={() => handleMouseEnter("guess")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={checkedCircle}
            alt=""
          />
          <div className="text-[18px] z-20">나를 맞춰봐</div>
          {hoveredSection === "guess" && (
            <div
              className="absolute bottom-full w-[20vw] min-w-[230px] h-[35vh] mt-2 p-2 bg-white shadow-lg flex flex-col justify-center items-center gap-3 rounded-[15px] z-20"
              style={{
                background:
                  "linear-gradient(to right, rgba(221, 229, 249, 0.7), rgba(142, 210, 255, 0.7))",
              }}
            ><div>
              
            </div>
              <div className="flex justify-center items-center text-[1.3rem] bg-[rgba(255,255,255,0.7)] text-[rgba(0,0,0,0.5)] w-full rounded-[15px] z-20">
                나를 맞춰봐
              </div>
              <div className="flex flex-col gap-3 justify-center items-center text-[16px] p-2 bg-[rgba(255,255,255,0.7)] text-center text-[rgba(0,0,0,0.5)] w-full rounded-[15px] min-h-[75%] z-20">

                <div>
                  스스로에 대해알려주고 싶은 정보(MBTI, 고향, 취미 등)를
                  진실과 거짓을 섞어 3가지의 OX 문제를 내고 맞춰보며 서로에 대해 
                  알아가는 시간을 가져요
                </div>
                <div className="text-left w-full text-[12px]">
                  예상 소요 시간 : 20분
                </div>
              </div>
            </div>
          )}
        </div>
        <img src={arrow} alt="" />
        <div
          className="flex flex-col items-center justify-center h-full relative z-20"
          onMouseEnter={() => handleMouseEnter("balance")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={checkedCircle}
            alt=""
          />
          <div className="text-[18px] z-20">밸런스 게임</div>
          {hoveredSection === "balance" && (
            <div
              className="absolute bottom-full w-[20vw] min-w-[230px] h-[35vh] mt-2 p-2 bg-white shadow-lg flex flex-col justify-center items-center gap-3 rounded-[15px]"
              style={{
                background:
                  "linear-gradient(to right, rgba(221, 229, 249, 0.7), rgba(142, 210, 255, 0.7))",
              }}
            >
              <div className="flex justify-center items-center text-[1.3rem] bg-[rgba(255,255,255,0.7)] text-[rgba(0,0,0,0.5)] w-full rounded-[15px] z-20">
                밸런스 게임
              </div>
              <div className="flex flex-col justify-center items-center gap-3 text-[16px] p-2 bg-[rgba(255,255,255,0.7)] text-center text-[rgba(0,0,0,0.5)] w-full rounded-[15px] min-h-[75%] z-20">
                <div>
                  밸런스 게임 시작 전 방장에게서 입력받은 모임 주제를 기반으로
                  랜덤하게 밸런스 게임 선택지를 추천해드려요. 두 가지 선택지 중
                  하나를 선택하고 열띤 대화를 나누며 더 친밀해져보아요.
                </div>
                <div className="text-left w-full text-[12px]">
                  예상 소요 시간 : 15분
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WaitingRoomGameTurns;
