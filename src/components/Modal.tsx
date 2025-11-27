import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalState";
import Preparation from "./Content/Preparation";

export default function Modal() {
  const modal = useRecoilValue(modalState);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        modal.onShow ? "grid" : "hidden"
      } place-content-center bg-black/50 p-4`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      {modal.type === "Preparation" && modal.preparationMode ? (
        <Preparation
          preparation={modal.preparationMode}
          revenue={modal.revenue!}
        />
      ) : null}
    </div>
  );
}
