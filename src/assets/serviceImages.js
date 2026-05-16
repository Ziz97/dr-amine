import panoramicRadio from "./images/panoramic-radio.jpeg";
import scaling from "./images/scaling.jpeg";
import rootCanalTreatment from "./images/root-canal-treatment.jpeg";
import toothExtraction from "./images/tooth-extraction.jpeg";
import dentalCrown from "./images/dental-crown.jpeg";
import dentalBridge from "./images/dental-bridge.jpeg";
import teethWhitening from "./images/teeth-whitening.jpeg";
import dentalImplant from "./images/dental-implant.jpeg";
import orthodenticTreatment from "./images/orthodentic-treatment.jpeg";
import dentalTray from "./images/dental-tray.jpeg";
import removableDenture from "./images/removable-denture.jpeg";
import intraoralScan from "./images/intraoral-scan.jpeg";

const SERVICE_IMAGES = {
  "panoramic-radio.jpeg": panoramicRadio,
  "scaling.jpeg": scaling,
  "root-canal-treatment.jpeg": rootCanalTreatment,
  "tooth-extraction.jpeg": toothExtraction,
  "dental-crown.jpeg": dentalCrown,
  "dental-bridge.jpeg": dentalBridge,
  "teeth-whitening.jpeg": teethWhitening,
  "dental-implant.jpeg": dentalImplant,
  "orthodentic-treatment.jpeg": orthodenticTreatment,
  "dental-tray.jpeg": dentalTray,
  "removable-denture.jpeg": removableDenture,
  "intraoral-scan.jpeg": intraoralScan,
};

export function getServiceImage(filename) {
  return SERVICE_IMAGES[filename] ?? null;
}
