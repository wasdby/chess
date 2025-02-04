import { Component, Container } from "../../../../component";
/**
 * Опции для формы авторизации
 */
export interface LoginFormOptions {
    onCheckboxChanged?: (checked: boolean) => void;
    onForgotPasswordClick?: () => void;
    onAuthButtonClick?: () => Promise<void>;
    onLoginButtonClick?: () => Promise<void>;
}
/**
 * Форма авторизации
 */
export class LoginForm implements Component {
    constructor(options?: LoginFormOptions);
    mount(container: Container): void;
    unmount(): void;
}