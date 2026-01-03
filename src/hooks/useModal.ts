import { useSetRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";
import type { Modal } from "../types/Modal";
import type { PreparationMode } from "../types/PreparationMode";
import type { Recipes } from "../types/Recipes";

export function useModal() {
  const setModal = useSetRecoilState(modalState);

  function openModal(type: Modal["type"], preparationMode: PreparationMode | undefined, recipe: Recipes | undefined) {
    setModal({
      onShow: true,
      type,
      preparationMode: preparationMode,
      recipe: recipe
    } as Modal);
  }

  function closeModal() {
    setModal({
      onShow: false,
      type: null,
      preparationMode: null,
      recipe: null
    } as Modal);
  }

  return { openModal, closeModal };
}
