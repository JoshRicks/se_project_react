const Token_Key = "jwt";

export const setToken = (token) => localStorage.setItem(Token_Key, token);

export const getToken = () => localStorage.getItem(Token_Key);

export const removeToken = () => {
  localStorage.removeItem(Token_Key);
};
