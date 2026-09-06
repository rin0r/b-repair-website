/* Gemeinsame Suche nach den Modell-Eckdaten über alle Marken hinweg. */
import { iphoneSpecs, type DeviceSpec } from "./iphoneModels";
import { pixelSpecs } from "./pixelModels";

export type { DeviceSpec };

export const getSpec = (slug: string): DeviceSpec | undefined =>
  iphoneSpecs[slug] ?? pixelSpecs[slug];
