import { cache } from "react";
import db from "./drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { courses, userProgress } from "@/db/schema";

export const getCourses = cache(async () => {
  const courses = await db.query.courses.findMany();

  return courses;
});

export const getUserProgress = cache(async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const progress = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true },
  });

  return progress;
});

export const getCourseById = cache(async (id: number) => {
  const course = await db.query.courses.findFirst({
    where: eq(courses.id, id),
    // TODO: populate units & lessons
  });

  return course;
});
