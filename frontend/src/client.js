import sanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dmgk8661",
  dataset: "production",
  apiVersion: "1",
  // useCdn: true,
  // token:"sk8MuB3Gq5dVKH3t3UTspHwed1ocQi9pOZCFo1cCvyxUDGLDg2gpdTsWEANhPmCQLAv5DLXt91sfbEaCDT9Do7VPyud82txnYouEhjfZhIEOHPA9yTAp4rF3LfwldIYtXcDBY7j1Cj6JQYYGGVJiYku4WZw9pdHjyUfxMeDYU5aHe2AGEOtO"
  token: "skvw0uZBcw1NL0tBMn6CNQKO1I3VJjh4H5F0qHrZHS52bDoYfzZ0FSpzR6A1pSrwTo7Ca0ivqMTjXKUfnUYAC6qLgoDjqX9p4nkTDX9kD56KFaKHhPiKukuk6dnaq51ktvAE6p4UT7nLY7MZwzPr6tib4DGu6Xbs4EXDeu1D0WLEl8QYsgAQ",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
