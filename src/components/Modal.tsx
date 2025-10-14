import type { Modal } from "../types/Modal";
import Preparation from "./Content/Preparation";

export default function Modal(modal: Modal) {
    return (
        <div className={`fixed inset-0 z-50 ${modal.onShow ? `grid` : `hidden`} hidden place-content-center bg-black/50 p-4`} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            {
                modal.type == "Preparation" ? (<Preparation />) : (<Preparation />)
            }
        </div>
    )
}
