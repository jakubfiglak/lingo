"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";

type ListProps = {
  courses: Array<typeof courses.$inferSelect>;
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: ListProps) => {
  return (
    <ul className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <li key={course.id}>
          <Card
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={() => {}}
            disabled={false}
            active={course.id === activeCourseId}
          />
        </li>
      ))}
    </ul>
  );
};
