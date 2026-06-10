import {
  getFacultyById,
  getSortedFaculty,
  getAllFaculty,
} from "../../models/faculty/faculty";

const facultyListPage = (req, res) => {
  // TODO: render faculty list page
  const faculty = getAllFaculty();

  res.render("faculty", {
    title: "Name",
    faculty: faculty,
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
  };

  // handle sorting if requested
  const sortBy = req.params.sort || "name";
  const sortedFaculty = getSortedFaculty(faculty.name, sortBy);

  res.render("faculty-detail", {
    title: `${faculty.name} - ${faculty.title}`,
    department: { ...faculty, department: sortedFaculty },
    currentSort: sortBy,
  });
};

export { facultyListPage, facultyDetailPage };
