import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useToggle } from "react-use";
import generateLoginUrl from "./generateLoginUrl";
import generateRedirectUrl from "./generateRedirectUrl";

const useLineLogin = (): {
  isLoading: boolean;
  submit: (
    clientId: string,
    redirectUrl: {
      base: string;
      params: Record<string, string>;
    },
  ) => void;
} => {
  const [isLoginLoading, setIsLoginLoading] = useToggle(false);
  const router = useRouter();
  const createState = api.state.create.useMutation();

  const submit = (
    clientId: string,
    redirectUrl: {
      base: string;
      params: Record<string, string>;
    },
  ) => {
    setIsLoginLoading(true);
    try {
      createState.mutate(undefined, {
        onSuccess: (data: { state: { value: string } }) => {
          const redirectUri = generateRedirectUrl(redirectUrl);
          const url = generateLoginUrl(clientId, data.state.value, redirectUri);
          router.push(url);
          setIsLoginLoading(false);
        },
        onError: (error: unknown) => {
          console.log("Error creating state:", error);
        },
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  return { isLoading: isLoginLoading, submit };
};

export default useLineLogin;
