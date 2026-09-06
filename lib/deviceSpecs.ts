/* Gemeinsame Suche nach den Modell-Eckdaten über alle Marken hinweg. */
import { iphoneSpecs, type DeviceSpec } from "./iphoneModels";
import { pixelSpecs } from "./pixelModels";
import { ipadSpecs } from "./ipadModels";
import { samsungSpecs } from "./samsungModels";

export type { DeviceSpec };

export const getSpec = (slug: string): DeviceSpec | undefined =>
  iphoneSpecs[slug] ?? pixelSpecs[slug] ?? ipadSpecs[slug] ?? samsungSpecs[slug];
