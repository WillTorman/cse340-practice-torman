import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty";

const facultyListPage = (req, res) => {
  // TODO: render faculty list page
  const faculty = getAllFaculty();

  res.render("faculty", {
    title: "Name",
    faculty: faculty,
  });
};

const facultyDetailPage = () => {
  // TODO: use route paramters to look up individual faculty
};

export { facultyListPage, facultyDetailPage };
