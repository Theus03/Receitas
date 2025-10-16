import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalState";
import Preparation from "../components/Content/Preparation";
import New from "./Content/New";

export default function ModalRoot() {
  const modal = useRecoilValue(modalState);

  if (!modal.onShow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {modal.type === "Preparation" && <Preparation />}
      {modal.type === "New" && <New/>}
    </div>
  );
}
