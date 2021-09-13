import React from "react";
import { useMySelector } from "../../hooks/customHook";

export default function YandexMap() {
  const YandexMaps = useMySelector((state) => state.yandexmap);

  return <div>{YandexMaps}</div>;
}
