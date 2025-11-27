import { useSetRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";
import type { Modal } from "../types/Modal";
import type { PreparationMode } from "../types/PreparationMode";
import type { Revenues } from "../types/Revenues";

export function useModal() {
  const setModal = useSetRecoilState(modalState);

  function openModal(type: Modal["type"], preparationMode: PreparationMode | undefined, revenue: Revenues | undefined) {
    console.log(revenue)
    setModal({
      onShow: true,
      type,
      preparationMode: preparationMode,
      revenue: revenue
    } as Modal);
  }

  function closeModal() {
    setModal({
      onShow: false,
      type: null,
      preparationMode: null,
      revenue: null
    } as Modal);
  }

  return { openModal, closeModal };
}
