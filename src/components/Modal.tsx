import type { Modal } from "../types/Modal";
import type { PreparationMode } from "../types/PreparationMode";
import type { Revenues } from "../types/Revenues";
import Preparation from "./Content/Preparation";

type ModalProps = {
    modal: Modal;
    preparation?: PreparationMode;
    revenue?: Revenues;
};


export default function Modal({ modal, preparation, revenue }: ModalProps) {
    return (
        <div className={`fixed inset-0 z-50 ${modal.onShow ? `grid` : `hidden`} hidden place-content-center bg-black/50 p-4`} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            {
                modal.type == "Preparation" && preparation ? (<Preparation preparation={preparation} revenue={revenue} />
) : (<></>)
            }
        </div>
    )
}
