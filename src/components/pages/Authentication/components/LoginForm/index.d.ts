import { Component, Container } from "../../../../component";
/**
 * Опции для формы авторизации
 */
export interface LoginFormOptions {
    onForgotPasswordClick?: () => void;
    onRegButtonClick?: () => void;
    onLoginButtonClick?: (checked: boolean) => void;
}
/**
 * Форма авторизации
 */
export class LoginForm implements Component {
    constructor(options?: LoginFormOptions);
    mount(container: Container): void;
    unmount(): void;
}