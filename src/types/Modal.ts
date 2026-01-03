import type { PreparationMode } from "./PreparationMode"
import type { Recipes } from "./Recipes"

export type Modal = {
    type: "Preparation" | "New" | null,
    onShow: boolean,
    recipe: Recipes | undefined | null,
    preparationMode: PreparationMode | undefined | null
}
