import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {

  // 1. Create the instructor (all required fields filled)
  // const instructor = await prisma.instructor.create({
  //   data: {
  //     name:    "Mahdi Moshtaghi",
  //     email:   "mahdi@example.com",
  //     zip:     "12345",
  //     country: "Iran",
  //     city:    "Tehran",
  //   }
  // });

  // console.log("Instructor created:", instructor);

  // // 2. Create the course linked to the instructor
  // const course = await prisma.course.create({
  //   data: {
  //     title:        "LEARN PRISMA",
  //     desc:         "step by step",
  //     duration:     2.5,
  //     instructorId: instructor.id,  
  //   }
  // });

  // console.log("Course created:", course);

  // 3. Create the video linked to the course
  // const video = await prisma.video.create({
  //   data: {
  //     title:    "LEARN PRISMA 000",
  //     desc:     "step by step 000",
  //     url:      "www.mahdimoshtaghi.ir",
  //     courseId: course.id,  
  //   }
  // });


  const video = await prisma.video.findMany({include:{course:{}}})

  console.log("Video created:", video);

  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });