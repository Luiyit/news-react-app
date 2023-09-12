export type ProvidersType = 'credentials'

export type Field = {
  label: string;
  type: string;
  placeholder?: string;
  rules: { [key in string]: string }
};

export type Provider = {
  [key in string]: Field
}

export type AuthProvidersType = { [key in ProvidersType]: Provider }

const providers: AuthProvidersType = {
  credentials: {
    email: { label: "Email", type: "email", placeholder: "Email", rules: { required: "Can't be blank" } },
    password: { label: "Password", type: "password", placeholder: "Password", rules: { required: "Can't be blank" } }
  }
}

export default providers;