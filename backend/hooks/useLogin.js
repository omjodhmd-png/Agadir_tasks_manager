// frontend/hooks/useLogin.js
import { useState, useCallback } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/login", { email, password });

      const { token, user } = res.data;

      // حفظ البيانات ف AsyncStorage
      if (token) {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("user", JSON.stringify(user));
      }

      setLoading(false);
      return { ok: true, user, token };

    } catch (err) {
      setLoading(false);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed";

      setError(message);

      return { ok: false, error: message };
    }
  }, []);

  return { login, loading, error };
}
