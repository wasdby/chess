import { Component, Container } from '../../../../component'
/**
 * Данные для авторизации
 */
export interface LoginData {
  username: string;
  password: string;
}
/**
 * Опции для формы авторизации
 */
export interface LoginFormOptions {
  onForgotPassword?: () => void;
  onSwitchToRegister?: () => void;
  onLogin?: (loginData: LoginData) => void;
}
/**
 * Форма авторизации
 */
export class LoginForm implements Component {
  constructor (options?: LoginFormOptions)
  mount (container: Container): void
  unmount (): void
}
