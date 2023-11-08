import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

export function Provider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
