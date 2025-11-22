import { catchAsync } from "#/utils/catchAsync";
import { listSections } from "./section.service";

// GET api/sections
export const listSectionsHandler = catchAsync(async (req, res) => {
  const onlyActive = req.query.all === "true" ? false : true;
  const sections = await listSections({ onlyActive });
  return res.status().json({
    success: true,
    
  })
});
