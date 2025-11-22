import { SectionModel } from "./section.model";

// list all the section
export const listSections = async ({onlyActive = true} = {}) => {
  const filter = {};
  if (onlyActive) filter.isActive = onlyActive;

  const sections = await SectionModel.find(filter);
  return sections;
};
