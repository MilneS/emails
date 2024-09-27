import { Template } from "./appStore/interface/interface.model";

export const firstTemplate: Template = {
  isReorderable: true,
  comps: [
    { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
    { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
    { name: "Body", el: "body1", maxChar: 30, id: "Body" },
    { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
  ],
};
