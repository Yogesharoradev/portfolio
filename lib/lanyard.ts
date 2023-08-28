import { useLanyard } from "react-use-lanyard";

export function useStatus() {
  const userId = "756858570602971186";
  const result = useLanyard({
    userId,
    socket: true,
  });

  return {
    ...result,
  };
}