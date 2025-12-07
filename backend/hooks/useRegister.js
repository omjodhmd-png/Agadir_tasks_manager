// frontend/hooks/useRegister.js
import { useState, useCallback } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = useCallback(async ({ name, email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/register", { name, email, password });

      const { token, user } = res.data;

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
        "error register";

      setError(message);
      return { ok: false, error: message };
    }
  }, []);

  return { register, loading, error };
}
