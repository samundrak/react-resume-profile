import sortBy from 'lodash.sortby';

export function normalizeSkillForChart(skills, sort = 'years', key = 'language') {
  return sortBy(
    skills.filter(skill => skill[sort] !== undefined).map(skill => ({
      name: skill[key],
      [sort]: skill[sort],
    })),
    sort,
  ).reverse();
}

export function limitString(string, limit = 50) {
  if (string.length < limit) return string;
  return `${string.substring(0, limit)}...`;
}
