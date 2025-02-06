import { Component, Container } from '../../../../component'
/**
 * Данные для регистрации
 */
export interface RegisterData {
  username: string;
  email: string;
  password: string;
  sendNews: boolean;
}
/**
 * Опции для формы регистрации
 */
export interface RegisterFormOptions {
  onSwitchToAgreement?: () => void;
  onSwitchToLogin?: () => void;
  onRegister?: (registerData: RegisterData) => void;
}
/**
 * Форма регистрации
 */
export class RegisterForm implements Component {
  constructor (options?: RegisterFormOptions)
  mount (container: Container): void
  unmount (): void
}
