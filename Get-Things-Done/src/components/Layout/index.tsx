import { ReactNode, useState, useEffect, useRef } from "react";
import NavBar from "../NavBar";
import MemoModal from "../MemoModal/MemoModal";
import "./index.css";

const Layout = (props: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div id="page-wrapper">
      <h1> Get Things Done </h1>
      <div id="content-wrapper">
        <NavBar />
        <main>{props.children}</main>
      </div>
      <div className="add-new-memo">
        <button onClick={openModal}>+</button>
      </div>
      {isModalOpen && <MemoModal ref={modalRef} />}
    </div>
  );
};

export default Layout;
