import React, { useState, useEffect } from "react";
import GameTurns from "../../components/Common/GameTurns";
import ExitBtn from "../../components/Buttons/ExitBtn";
import Chatbox from "../../components/Common/Chatbox";
import BalanceGameModal from "./BalanceGameModal";
// import versus from "https://sarrr.s3.ap-northeast-2.amazonaws.com/assets/versus.png";
// import versus from "./../../assets/Balance_game/versus.png"

import useRoomStore from "../../store/useRoomStore";
import useAuthStore from "../../store/useAuthStore";

const BalanceGetReady = ({ onClose, dots, setPurpose }) => {
  const versus = "https://sarrr.s3.ap-northeast-2.amazonaws.com/assets/versus.png"
  const [showModal, setShowModal] = useState(false);
  const[questions, setQuestions] = useState({1:"", 2:"",3:""})
  const [selectedAnswers, setSelectedAnswers] = useState({ 1: null, 2: null, 3: null });
  const {memberId} = useAuthStore()
  const {hostId, roomId} = useRoomStore()

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
          <img className="absolute" src={versus} alt="star 그림" />
          <div className="flex-grow flex items-center justify-center">
            <span className="text-[rgba(85,181,236)]">
              밸런스 게임 문제를 준비 중{dots}
            </span>
          </div>
          <div className="flex justify-end"></div>
          {/* 호스트만 모달 볼 수 있습니다 */}
      {memberId === hostId && showModal && (
        <BalanceGameModal setPurpose={setPurpose} btnText="저장" onClose={onClose} />
      )}
    </>
  );
};

export default BalanceGetReady;
