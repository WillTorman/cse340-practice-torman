import {
  getFacultyById,
  getSortedFaculty,
  getAllFaculty,
} from "../../models/faculty/faculty.js";

const facultyListPage = (req, res) => {
  const sortBy = req.query.sort || "name";
  const faculty = getSortedFaculty(sortBy);

  res.render("faculty/list", {
    title: "Faculty Directory",
    faculty: faculty,
    currentSort: sortBy,
    stylesheets: ["/css/faculty.css"],
  });
};

const facultyDetailPage = (req, res, next) => {
  // TODO: use route paramters to look up individual faculty
  const facultyId = req.params.facultyId;
  const faculty = getFacultyById(facultyId);

  // if faculty doesn't exist, create 404 error
  if (!faculty) {
    const err = new Error(`Faculty ${facultyId} not found`);
    err.status = 404;
    return next(err);
  }

  res.render("faculty/detail", {
    title: `${faculty.name} - ${faculty.title}`,
    faculty: faculty,
    stylesheets: ["/css/faculty.css"],
  });
};

export { facultyListPage, facultyDetailPage };
