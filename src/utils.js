import sortBy from 'lodash.sortby';

export function normalizeSkillForChart(skills, sort = 'years') {
  return sortBy(
    skills.filter(skill => skill.years !== undefined).map(skill => ({
      name: skill.language,
      [sort]: skill[sort],
    })),
    sort,
  ).reverse();
}
