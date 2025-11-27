import type { PreparationMode } from "./PreparationMode"
import type { Revenues } from "./Revenues"

export type Modal = {
    type: "Preparation" | "New" | null,
    onShow: boolean,
    revenue: Revenues | undefined | null,
    preparationMode: PreparationMode | undefined | null
}
