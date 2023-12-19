import { CheckboxStatus } from "@/constants/checkbox";

export const getListCheckboxStatusByItemsStatuses = (
  statuses: CheckboxStatus[]
): CheckboxStatus => {
  if (statuses.every((v) => v === CheckboxStatus.Checked))
    return CheckboxStatus.Checked;

  if (statuses.every((v) => v === CheckboxStatus.Unchecked))
    return CheckboxStatus.Unchecked;

  return CheckboxStatus.Indeterminate;
};
