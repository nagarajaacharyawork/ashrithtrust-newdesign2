import labImg from "@/assets/lab.jpg";
import classroomImg from "@/assets/Classroom.JPG";
import careImg from "@/assets/care-hands.jpg";
import portraitImg from "@/assets/student-portrait.jpg";
import nursingImg from "@/assets/nursing-college.jpg";
import paraImg from "@/assets/paramedical-college.jpg";
import labTeachingImg from "@/assets/Lab-teaching.JPG";
import medicalTeachingImg from "@/assets/medical-teaching.JPG";
import computerLabImg from "@/assets/computerlab.JPG";
import studentsAtClassImg from "@/assets/studentsatclass.JPG";
import teachingAtClassImg from "@/assets/teachingatclass.JPG";
import mainEntranceImg from "@/assets/main-entrence.JPG";
import roomsHostelImg from "@/assets/Rooms-hostel.JPG";
import foodCourtImg from "@/assets/Foodcort-or-mess.JPG";
import collegeImg from "@/assets/College_Image.JPG";
import classImg from "@/assets/Class.JPG";
import entranceImg from "@/assets/entrence-lordphoto.JPG";
import awardsImg from "@/assets/awards.JPG";
import c9250Img from "@/assets/C9250T01.JPG";
import c9300Img from "@/assets/C9300T01.JPG";
import c9385Img from "@/assets/C9385T01.JPG";
import helpDeskImg from "@/assets/cabin or helpdesk.JPG";
import puCollegeImg from "@/assets/pu-college.jpg";

// Premium SVG profile icon used for all trustees/faculty (no photographs)
export const PROFILE_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <circle cx="100" cy="100" r="100" fill="#EEF2F7"/>
  <circle cx="100" cy="78" r="34" fill="#B0BDD0"/>
  <ellipse cx="100" cy="170" rx="58" ry="42" fill="#B0BDD0"/>
</svg>`;

export const LEADERS = [
  {
    name: "K. R. Hegde",
    role: "Chairman & Managing Trustee",
    bio: "Founder and driving force behind Ashrith Trust, committed to making quality healthcare education accessible to students across coastal Karnataka.",
    signature: "M 5 40 C 30 5, 55 65, 90 25 S 150 55, 195 20",
  },
  {
    name: "Dr. Vidyadhar Shetty K.",
    role: "Director & Trustee",
    bio: "MBBS, DA, PGDHHM. Specialist in Anaesthesia and Hospital & Health Care Management, providing clinical and administrative leadership to the institutions.",
    signature: "M 5 45 C 35 10, 60 60, 95 22 S 145 60, 190 28",
  },
  {
    name: "Dr. Vishwanath Shetty",
    role: "Trustee",
    bio: "Trustee of Ashrith Trust, contributing to the governance and strategic direction of the group of institutions.",
    signature: "M 5 38 C 28 8, 62 62, 92 24 S 152 52, 192 22",
  },
  {
    name: "Sarojini R. Hegde",
    role: "Managing Trustee",
    bio: "Managing Trustee of Ashrith Trust, overseeing institutional operations and ensuring the trust's mission of service-oriented education is upheld.",
    signature: "M 5 42 C 32 8, 58 62, 88 26 S 148 54, 193 21",
  },
  {
    name: "Ashrita Hegde",
    role: "Trustee",
    bio: "Trustee of Ashrith Trust, supporting the institution's growth and its commitment to nursing and allied health education.",
    signature: "M 5 36 C 26 6, 60 64, 90 22 S 150 56, 194 24",
  },
];

export const GALLERY_ITEMS = [
  { src: collegeImg, alt: "College building", cat: "Campus", span: "row-span-2" },
  { src: labImg, alt: "Laboratory session", cat: "Academics", span: "" },
  { src: classroomImg, alt: "Classroom", cat: "Academics", span: "" },
  { src: labTeachingImg, alt: "Lab teaching", cat: "Academics", span: "row-span-2" },
  { src: studentsAtClassImg, alt: "Students at class", cat: "Academics", span: "" },
  { src: medicalTeachingImg, alt: "Medical teaching", cat: "Academics", span: "row-span-2" },
  { src: roomsHostelImg, alt: "Hostel rooms", cat: "Campus", span: "" },
  { src: foodCourtImg, alt: "Food court", cat: "Campus", span: "" },
];

export const INSTITUTIONS = [
  {
    slug: "nursing",
    name: "Ashrith College & School of Nursing",
    since: "Est. 2009",
    image: nursingImg,
    short:
      "Degree and diploma nursing pathways — B.Sc Nursing, GNM and ANM — built on supervised clinical practice and INC-recognised curriculum.",
    programs: 3,
    seats: 150,
    tags: ["B.Sc Nursing", "GNM", "ANM"],
  },
  {
    slug: "paramedical",
    name: "K. R. Hegde College of Paramedical Sciences",
    since: "Est. 2009",
    image: paraImg,
    short:
      "Diploma programmes in Medical Laboratory Technology, Operation Theatre Technology, Ophthalmic Technology and Dialysis Technology.",
    programs: 4,
    seats: 120,
    tags: ["MLT", "OT Technology", "Ophthalmic Tech", "Dialysis Tech"],
  },
];

export const FEATURED_PROGRAMS = [
  { name: "B.Sc Nursing", duration: "4 years", level: "Degree", seats: 60 },
  { name: "GNM", duration: "3½ years", level: "Diploma", seats: 60 },
  { name: "ANM", duration: "2 years", level: "Diploma", seats: 40 },
  { name: "Medical Lab Technology", duration: "2 years", level: "Diploma", seats: 30 },
  { name: "Operation Theatre Technology", duration: "2 years", level: "Diploma", seats: 30 },
  { name: "Dialysis Technology", duration: "2 years", level: "Diploma", seats: 20 },
];

export const CAMPUS_CARDS = [
  {
    title: "Laboratories",
    copy: "Specialised laboratories for nursing skills, medical laboratory technology, ophthalmic and dialysis training.",
    image: computerLabImg,
  },
  {
    title: "Clinical Training",
    copy: "Supervised clinical rotations at partner hospitals providing hands-on patient care experience from early semesters.",
    image: medicalTeachingImg,
  },
  {
    title: "Hostel",
    copy: "Warden-supervised residential facilities for students with mess service and a safe, supportive environment.",
    image: roomsHostelImg,
  },
  {
    title: "Student Life",
    copy: "Sports, cultural events, community outreach camps and student activities that build character alongside clinical skills.",
    image: classImg,
  },
];

export const CAMPUS_LIFE_TILES = [
  { title: "Hostel", image: roomsHostelImg },
  { title: "Laboratories", image: computerLabImg },
  { title: "Teaching", image: teachingAtClassImg },
  { title: "Academics", image: classImg },
  { title: "Clinical Care", image: careImg },
  { title: "Campus", image: mainEntranceImg },
];

export const TESTIMONIALS = [
  {
    name: "Nursing Graduate",
    program: "B.Sc Nursing",
    placed: "Staff Nurse",
    quote:
      "The clinical training at Ashrith gave me the confidence and competence to serve patients with both skill and compassion. Study to Serve the Humanity is not just a tagline — it is how we were taught.",
    image: portraitImg,
  },
  {
    name: "Paramedical Graduate",
    program: "Diploma in MLT",
    placed: "Medical Laboratory Technologist",
    quote:
      "The hands-on laboratory training and dedicated faculty at K. R. Hegde College of Paramedical Sciences prepared me thoroughly for a career in diagnostic healthcare.",
    image: studentsAtClassImg,
  },
];

export const NEWS = [
  {
    date: "2025",
    tag: "Admissions",
    title: "Admissions open for the 2025–26 academic year",
    copy: "Applications are invited for B.Sc Nursing, GNM, ANM and all Diploma programmes at Ashrith College & School of Nursing and K. R. Hegde College of Paramedical Sciences.",
  },
  {
    date: "2025",
    tag: "Campus",
    title: "Ashrith Trust — Study to Serve the Humanity",
    copy: "Ashrith Group of Institutions, managed by Ashrith Trust (R), continues its mission of providing quality nursing and allied health education from its campus at NH-66, Kota, Udupi.",
  },
  {
    date: "2025",
    tag: "Community",
    title: "Community health outreach by students",
    copy: "Students of Ashrith College of Nursing conducted community health camps in Udupi Taluk under faculty supervision, providing health education and screening services.",
  },
];
