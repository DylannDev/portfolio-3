export type Project = {
  id: number;
  title: string;
  slug: string;
  des: string;
  img: string;
  iconLists: string[];
  linkDemo: string;
  linkGithub: string;
  paragraphs: string[];
  features: string[];
  isClientProject: boolean;
};

export const findProjectBySlug = (
  array: Project[],
  slug: string | string[] | undefined
): Project | undefined => {
  return array.find((arrayItem) => arrayItem.slug === slug);
};
