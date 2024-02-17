import { ReactNode, useState } from "react";
import NavBar from "../NavBar";
import MemoModal from "../MemoModal/MemoModal";
import "./index.css";

const Layout = (props: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="page-wrapper">
      {/* <h1> Get Things Done </h1> */}
      <div id="content-wrapper">
        <NavBar />
        <div id="page-right-wrapper">{props.children}</div>
      </div>
      <div className="add-new-memo">
        <button id="add-button" onClick={openModal}>
          +
        </button>
      </div>
      {isModalOpen && <MemoModal closeModal={closeModal}/>}
    </div>
  );
};

export default Layout;
