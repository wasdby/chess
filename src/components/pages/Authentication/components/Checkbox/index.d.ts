import { Component, Container } from "../../../../component"

/**
 * Чекбокс
 */
export class Checkbox implements Component {
    constructor(
        options: {
            onChanged?: (checked: boolean) => void
        }
    )
    mount(container: Container): void
    unmount(): void
    get checked(): boolean
    set checked(checked: boolean)
}
