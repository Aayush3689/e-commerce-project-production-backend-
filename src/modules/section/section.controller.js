import { ApiResponse } from "#utils/ApiResponse.js";
import { catchAsync } from "#utils/catchAsync.js";
import { listSections } from "./section.service.js";

// GET api/sections
export const listSectionsHandler = catchAsync(async (req, res) => {
  console.log('hit')

  const onlyActive = req.query.all === "true" ? false : true;
  const sections = await listSections({ onlyActive });
  return res
    .status(200)
    .json(new ApiResponse(200, sections, "sections fetched"));
});
