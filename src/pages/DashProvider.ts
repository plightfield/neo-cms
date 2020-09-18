import { useState } from "react";
import { RowContainerProps } from "src/components/RowContainer";
import templates, { Template } from "src/templates";
import { getContext } from "src/utils";

export const DashContext = getContext(useDash);

/**
 * dash 布局 数据
 *
 * @export
 * @returns
 */
export default function useDash() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [pc, setPc] = useState<RowContainerProps[]>([]);
  const [tablet, setTablet] = useState<RowContainerProps[]>([]);
  const [mobile, setMobile] = useState<RowContainerProps[]>([]);
  const [currentPlatform, setCurrentPlatform] = useState<
    "pc" | "tablet" | "mobile"
  >("pc");
  return {
    selectedTemplate,
    setSelectedTemplate,
    pc,
    setPc,
    tablet,
    setTablet,
    mobile,
    setMobile,
    currentPlatform,
    setCurrentPlatform,
    templates,
  };
}
