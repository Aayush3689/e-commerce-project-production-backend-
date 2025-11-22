import { listSections } from "./section.service";

// GET api/sections
export const listSectionsHandler = async (req, res) => {
  const onlyActive = req.query.all === "true" ? false : true; 
  const sections = await listSections({onlyActive});
}