import { useSetRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";
import type { Modal } from "../types/Modal";

export function useModal() {
  const setModal = useSetRecoilState(modalState);

  function openModal(type: Modal["type"]) {
    setModal({
      onShow: true,
      type
    } as Modal);
  }

  function closeModal() {
    setModal({
      onShow: false,
      type: null
    } as Modal);
  }

  return { openModal, closeModal };
}
