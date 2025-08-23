export interface CreateLectureDto {
  title: string;
  videoUrl: string;
  duration: number;
  courseId: number;
}

export interface UpdateLectureDto {
  title?: string;
  videoUrl?: string;
  duration?: number;
  courseId?: number;
} 