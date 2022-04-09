export default interface SignUpFormModel {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  checkbox?: boolean;
}
