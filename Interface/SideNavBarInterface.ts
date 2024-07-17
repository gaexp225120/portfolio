import { RefObject } from "react";

export interface SideNavBarProps {
  sideBarRefs: RefObject<{ [key: string]: HTMLDivElement | null }>;
}
