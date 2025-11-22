import { SectionModel } from "./section.model.js";

// list all the section
export const listSections = async ({ onlyActive = true } = {}) => {
  const filter = {};
  if (onlyActive) filter.isActive = onlyActive;

  const sections = await SectionModel.find(filter)
    .select(" -_id name slug sortOrder")
    .lean();
  return sections;
};
