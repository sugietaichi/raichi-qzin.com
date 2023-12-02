export type SelectOptionType = {
  value: string;
  text: string;
};

export const prefecture = (): SelectOptionType[] => {
  return [
    { value: "", text: "エリアから探す" },
    { value: "北海道", text: "北海道" },
    { value: "東北", text: "東北" },
    { value: "関東", text: "関東" },
    { value: "中部", text: "中部" },
    { value: "近畿", text: "近畿" },
    { value: "中国", text: "中国" },
    { value: "四国", text: "四国" },
    { value: "九州", text: "九州" },
    { value: "甲信越", text: "甲信越" },
  ];
};

export const searchAttr = (): SelectOptionType[] => {
  return [
    { value: "", text: "こだわりから探す" },
    { value: "顔出し無し", text: "顔出し無し" },
    { value: "絡み無し", text: "絡み無し" },
    { value: "S着可", text: "S着可" },
    { value: "即日払い", text: "即日払い" },
  ];
};
