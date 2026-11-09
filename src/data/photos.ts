const base = import.meta.env.BASE_URL;

export const photos = {
  hero: `${base}photos/session-head.jpg`,
  specialist: `${base}photos/specialist-cabinet.jpg`,
  specialistAlt: `${base}photos/specialist-white.jpg`,
  specialistPlant: `${base}photos/specialist-plant.jpg`,
  sessionNeck: `${base}photos/session-neck.jpg`,
  sessionFace: `${base}photos/session-face.jpg`,
} as const;
